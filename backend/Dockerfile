FROM python:3.11

WORKDIR /code

COPY ./pyproject.toml /code/pyproject.toml

RUN pip3 install -e .
RUN pip3 install .[dev]

EXPOSE 3030

CMD ["sh", "-c", "uvicorn src.main:app --reload --port ${API_SERVER_PORT} --host 0.0.0.0"]
