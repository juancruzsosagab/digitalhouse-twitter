# Define la imagen base
FROM postgis/postgis:13-3.1-alpine AS db

# Configura las variables de entorno para la base de datos
ENV POSTGRES_USER=social_user
ENV POSTGRES_PASSWORD=SocialLocal123
ENV POSTGRES_DB=social_db

# Expone el puerto utilizado por la base de datos
EXPOSE 5592

# Copia los scripts de inicialización de la base de datos
COPY ./data/init.sql /docker-entrypoint-initdb.d/init.sql
COPY ./data/users.sql /docker-entrypoint-initdb.d/users.sql
COPY ./data/messages.sql /docker-entrypoint-initdb.d/messages.sql
COPY ./data/messages_hashes.sql /docker-entrypoint-initdb.d/messages_hashes.sql
COPY ./data/user_follows.sql /docker-entrypoint-initdb.d/user_follows.sql

# Define la imagen base para la aplicación Java
FROM tomiito/digitalhouse_social_network_api AS javaapp

# Expone el puerto utilizado por la aplicación
EXPOSE 8080

# Define el directorio de trabajo
WORKDIR /app

# Copia los archivos de la aplicación
COPY . .

# Define los servicios y su dependencia
# Define el servicio db y espera a que se inicie antes de iniciar javaapp
CMD ["docker-compose", "up"]