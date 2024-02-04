FROM ubuntu:latest
RUN apt-get -y update && apt-get -y install apache2

ADD . /var/www/html
CMD ["/usr/sbin/apache2ctl", "-DFOREGROUND"]
EXPOSE 80
