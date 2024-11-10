FROM golang:latest AS builder
WORKDIR /go/src/kubefilebrowser
COPY . /go/src/kubefilebrowser

ENV PATH=$GOPATH/bin:$PATH

# build code
RUN CGO_ENABLED=0 GOOS=linux go build -o main ./cmd/server/main.go

#1 ----------------------------
FROM alpine:latest
COPY --from=builder --chmod=0777 /go/src/kubefilebrowser/main /usr/local/bin/kubefilebrowser
EXPOSE 9999
ENTRYPOINT ["/usr/local/bin/kubefilebrowser"]
