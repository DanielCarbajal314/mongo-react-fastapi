from pydantic import BaseModel, Field
from datetime import datetime


class CreateTodo(BaseModel):
    description: str = Field(max_length=256)
    date: datetime
