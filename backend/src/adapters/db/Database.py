from motor.motor_asyncio import AsyncIOMotorClient
from os import environ
from pymongo.collection import Collection
from .entities.Todo import Todo


class Database:
    todoCollection: Collection[Todo]

    def __init__(self, connection_url: str, database_name):
        self.__client = AsyncIOMotorClient(connection_url)
        self.__db = self.__client.get_database(database_name)
        self.todoCollection = self.__get_collection("student")

    def __get_collection(self, collection_name: str):
        return self.__db.get_collection(collection_name)


connected_database = Database(
    connection_url=environ["MONGO_CONNECTION_STRING"],
    database_name=environ["MONGO_INITDB_DATABASE"],
)


def get_database() -> Database:
    return connected_database
