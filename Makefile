### Running
run-dev:
	docker-compose -f docker-compose-dev.yml up

run-production:
	docker-compose -f docker-compose-prod.yml up

### Building
build-dev:
	cd client && $(MAKE) build-dev
	cd server && $(MAKE) build 

build-production:
	cd client && $(MAKE) build-production
	cd server && $(MAKE) build

SSH_STRING=root@164.92.242.2

ssh:
	ssh $(SSH_STRING)

copy-files:
	scp -r ./* $(SSH_STRING):/root/