from pydantic import Field
from datetime import datetime
from .BaseEntity import BaseEntity


class Todo(BaseEntity):
    description: str = Field(max_length=256)
    date: datetime
