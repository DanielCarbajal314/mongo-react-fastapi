include .env

install:
	npm --prefix ./frontend install ./frontend
	docker compose build

run-frontend:
	npm --prefix ./frontend run dev

run-backend:
	docker compose up

shell-to-api:
	docker compose exec server bash

shell-to-mongo:
	docker compose exec database bash -c "mongosh -u ${MONGO_USERNAME} -p ${MONGO_PASSWORD}"

format:
	npm --prefix ./frontend run lint
	docker compose exec server bash -c "black ./src"