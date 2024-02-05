from pydantic import BaseModel
from datetime import datetime


class TodoItem(BaseModel):
    id: str
    description: str
    date: datetime
