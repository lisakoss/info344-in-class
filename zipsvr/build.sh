#!/usr/bin/env bash
set -e
GOOS=linux go build
docker build -t lisakoss/zipsvr .
docker push lisakoss/zipsvr