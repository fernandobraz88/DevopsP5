# Etapa 1: Construção
FROM golang:1.17 AS builder

WORKDIR /app

COPY main.go .

RUN go build -o app

FROM alpine:latest

COPY --from=builder /app/app /app/app

WORKDIR /app

CMD ["./app"]
