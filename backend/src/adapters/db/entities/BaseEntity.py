from typing import Annotated, Optional
from pydantic import BeforeValidator, BaseModel, Field
from abc import ABC

PyObjectId = Annotated[str, BeforeValidator(str)]


class BaseEntity(BaseModel, ABC):
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
