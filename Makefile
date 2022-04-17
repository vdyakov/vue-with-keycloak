include .env

install: docker-down-clear docker-build up
up: docker-up
down: docker-down
restart: docker-force-recreate
clear: docker-down-clear

docker-build:
	@docker-compose pull
	@docker-compose build

docker-up:
	@docker-compose up -d

docker-force-recreate:
	@docker-compose up -d --force-recreate

docker-down:
	@docker-compose down --remove-orphans

docker-down-clear:
	@docker-compose down -v --remove-orphans

shell:
	@docker-compose exec client /bin/bash
