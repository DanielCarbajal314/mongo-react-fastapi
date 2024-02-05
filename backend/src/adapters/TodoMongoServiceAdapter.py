from typing import Annotated, List
from fastapi import Depends
from ..scheme import CreateTodo, TodoItem
from ..ports import TodoServiceInterface
from .db import TodoRepository, Todo


class TodoMongoServiceAdapter(TodoServiceInterface):
    def __init__(
        self, todoRepository: Annotated[TodoRepository, Depends(TodoRepository)]
    ) -> None:
        self.repository = todoRepository

    async def register(self, data: CreateTodo) -> TodoItem:
        model_dict = data.model_dump()
        inserted_id = await self.repository.insertTodo(Todo.model_validate(model_dict))
        return TodoItem(id=inserted_id, **model_dict)

    async def delete(self, id: str) -> None:
        return await self.repository.deleteTodo(id)

    async def listAll(self) -> List[TodoItem]:
        result = await self.repository.getAllTodos()
        return [TodoItem(**a.model_dump()) for a in result]
