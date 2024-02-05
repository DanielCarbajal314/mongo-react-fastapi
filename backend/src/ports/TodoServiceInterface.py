from ..scheme import CreateTodo, TodoItem
from abc import ABC, abstractmethod
from typing import List


class TodoServiceInterface(ABC):
    @abstractmethod
    async def register(self, data: CreateTodo) -> TodoItem:
        raise NotImplementedError

    @abstractmethod
    async def listAll(self) -> List[TodoItem]:
        raise NotImplementedError

    @abstractmethod
    async def delete(self, id: str) -> None:
        raise NotImplementedError
