from fastapi import FastAPI, Request, logger
from fastapi.responses import JSONResponse
from pydantic import ValidationError
from fastapi.middleware.cors import CORSMiddleware
from logging import getLogger

logger = getLogger(__name__)
app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/healthcheck/")
def healthcheck():
    return "Health - OK s"


@app.exception_handler(ValidationError)
async def unicorn_exception_handler(request: Request, exc: ValidationError):
    errors = [{"field": a["loc"][0], "message": a["msg"]} for a in exc.errors()]
    return JSONResponse(
        status_code=400,
        content={"errors": errors},
    )


@app.exception_handler(Exception)
async def json_exception_handler(request: Request, exc: Exception):
    logger.error(exc)
    return JSONResponse(
        status_code=400,
        content={"errors": "Unknow Exception"},
    )
