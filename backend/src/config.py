from os import getenv
from pydantic import BaseModel


class ConfigurationVariables(BaseModel):
    mongo_connection_string: str


configuration_variables = ConfigurationVariables(
    mongo_connection_string=getenv("MONGO_CONNECTION_STRING"),
)
