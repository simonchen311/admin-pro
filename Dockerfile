FROM nginx
LABEL name="admin-pro"
LABEL version="1.0"
COPY  ./dist/ /usr/share/nginx/html/
COPY ./admin-pro.conf /etc/nginx/conf.d/
EXPOSE 80
