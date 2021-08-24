# this-is-server

> Building infrastructure using docker stack, swarm, compose

## build required image

- `docker build -t testapp_image ./testapp`

- `docker build -t nginx_image ./nginx`

## init docker swarm

- `docker swarm init`

## deploy services in stack

- `docker stack deploy -c compose.yml core_stack`
- `docker stack ls`
- `docker service ls`
- `docker service ps core_stack_nginx`
- `docker service logs <서비스에_해당하는_컨테이너_id>`
- `docker stack rm core_stack`

## dependency

- [docker](https://docs.docker.com/engine/reference/commandline/docker/)
- [docker-compose](https://docs.docker.com/compose/reference/)
- docker-swarm
- [portainer](https://documentation.portainer.io/)
- [nginx](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/)
