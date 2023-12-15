# Usa la imagen de Node como base
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos del proyecto al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install \
    && npm install axios 

# Copia el resto de los archivos al directorio de trabajo
COPY . .

# Expón el puerto 3000 (o el puerto que estés utilizando)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]


