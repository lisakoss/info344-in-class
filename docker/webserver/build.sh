#!/usr/bin/env bash
set -e
GOOS=linux go build
docker build -t lisakoss/testserver .
docker push lisakoss/testserver