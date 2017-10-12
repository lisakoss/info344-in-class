#!/usr/bin/env bash
docker rm -f zipsvr

docker run -d \
-p 443:443 \
--name zipsvr \
-v /Users/Lisa/go/src/github.com/lisakoss/info344-in-class/zipsvr/tls:/tls:ro \
-e TLSCERT=/tls/fullchain.pem \
-e TLSKEY=/tls/privkey.pem \
lisakoss/zipsvr