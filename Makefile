.PHONY: run build-ui build

run:
	go run cmd/server/main.go

build-ui:
	docker run --rm -v `pwd`:/app node:20-slim bash -c "cd /app/webui && npm install && npm run build"

build:
	docker build . -t kubefilebrowser
