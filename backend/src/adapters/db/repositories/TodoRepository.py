from typing import List
from ..entities import Todo
from .BaseRepository import BaseRepository
from bson.objectid import ObjectId


class TodoRepository(BaseRepository):
    async def getAllTodos(self) -> List[Todo]:
        result = await self.database.todoCollection.find().to_list(1000)
        return [Todo(**a) for a in result]

    async def insertTodo(self, todo: Todo) -> str:
        result = await self.database.todoCollection.insert_one(
            todo.model_dump(by_alias=True, exclude=["id"])
        )
        return result.inserted_id.__str__()

    async def deleteTodo(self, id: str) -> None:
        await self.database.todoCollection.delete_one({"_id": ObjectId(id)})
