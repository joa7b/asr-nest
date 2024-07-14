FROM mysql:8.0

WORKDIR /app

COPY . .

RUN chmod +x setup.sh
RUN ./setup.sh