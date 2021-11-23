build-dev:
	docker build -t react-app .

build-production:
	docker build -t react-app-production:production \
		--build-arg CADDYFILE=Caddyfile.prod \
		--build-arg BASE_URL=https://quickurl.live \
		-f Dockerfile.prod .