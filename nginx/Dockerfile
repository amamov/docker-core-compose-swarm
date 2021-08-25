FROM nginx:latest

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY ./nginx-jupyter.conf /etc/nginx/sites-available/
COPY ./nginx-portainer.conf /etc/nginx/sites-available/
COPY ./nginx-testapp.conf /etc/nginx/sites-available/

RUN mkdir -p /etc/nginx/sites-enabled/
RUN ln -s /etc/nginx/sites-available/*.conf /etc/nginx/sites-enabled/

CMD ["nginx", "-g", "daemon off;"]
