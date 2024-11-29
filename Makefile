#!/bin/bash
DOCKER_BE = cnb
help: ## Show this help message
	@echo 'usage: make [target]'
	@echo
	@echo 'targets:'
	@egrep '^(.+)\:\ ##\ (.+)' ${MAKEFILE_LIST} | column -t -c 2 -s ':#'

start: ## Start the containers
	docker-compose up -d
down: ## down the containers
	docker-compose down
stop: ## Stop the containers
	docker-compose stop

restart: ## Restart the containers
	$(MAKE) stop && $(MAKE) start

# Backend commands
composer-install: ## Installs composer dependencies
	docker exec ${DOCKER_BE} composer install --no-interaction

ng-serve: ## up server angular puerto 4200
	docker exec ${DOCKER_BE} ng serve --host 0.0.0.0

npm-i: ## up server angular puerto 4200
	docker exec ${DOCKER_BE} npm i 
# End backend commands

ssh-be: ## bash into the be container
	docker exec -it ${DOCKER_BE} bash

code-style: ## Runs php-cs to fix code styling following Symfony rules
	docker exec ${DOCKER_BE} php-cs-fixer fix src --rules=@Symfony

bd: ## make the build for dev
	@docker exec ${DOCKER_BE} ng build --output-hashing=all --configuration development

bp: ## make the build for prod
	@docker exec ${DOCKER_BE} ng build --output-hashing=all 

c: ## generate a component in angular
	docker exec ${DOCKER_BE} ng g c $(filter-out $@,$(MAKECMDGOALS)) --skip-tests
	@docker exec ${DOCKER_BE} chmod 777 ./ -R

cst: ## generate a component standalone in angular
	@docker exec ${DOCKER_BE} ng g c $(filter-out $@,$(MAKECMDGOALS)) --skip-tests --standalone
	@docker exec ${DOCKER_BE} chmod 777 ./ -R

s: ## generate a service in angular
	@docker exec ${DOCKER_BE} ng g s $(filter-out $@,$(MAKECMDGOALS)) --skip-tests
	@docker exec ${DOCKER_BE} chmod 777 ./ -R

m: ## generate a module in angular
	@docker exec ${DOCKER_BE} ng g m $(filter-out $@,$(MAKECMDGOALS)) --routing
	@docker exec ${DOCKER_BE} chmod 777 ./ -R

