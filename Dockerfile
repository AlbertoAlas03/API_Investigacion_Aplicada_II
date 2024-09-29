#Imagen a base de nodejs
FROM node:16

#Establecer el directorio de trabajo
WORKDIR /app

# Copia el package.json y el package-lock.json al directorio de trabajo
COPY package*.json ./

#instalamos dependencias
RUN npm install

#copiamos el resto del codigo
COPY . .

#establecemos el puerto
EXPOSE 3001

# Definimos el comando para ejecutar tu aplicación
CMD ["node", "src/index.js"]

