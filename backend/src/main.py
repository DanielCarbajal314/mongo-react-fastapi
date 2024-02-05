from typing import Annotated
from fastapi import Body, Depends
from .ports import TodoServiceInterface
from .adapters import TodoMongoServiceAdapter
from .scheme import CreateTodo
from .bootstrap import app


@app.post("/todo/")
async def create_todo(
    todoService: Annotated[TodoServiceInterface, Depends(TodoMongoServiceAdapter)],
    todo: CreateTodo = Body(...),
):
    return await todoService.register(todo)


@app.get("/todo/")
async def list_todo(
    todoService: Annotated[TodoServiceInterface, Depends(TodoMongoServiceAdapter)]
):
    return await todoService.listAll()


@app.delete("/todo/{id}")
async def delete_todo(
    todoService: Annotated[TodoServiceInterface, Depends(TodoMongoServiceAdapter)],
    id: str,
):
    return await todoService.delete(id)
