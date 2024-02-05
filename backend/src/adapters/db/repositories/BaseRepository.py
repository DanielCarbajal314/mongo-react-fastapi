from ..Database import get_database, Database
from fastapi import Depends


class BaseRepository:
    def __init__(self, database: Database = Depends(get_database)) -> None:
        self.database = database
