# Fase de construcción
FROM node:18-alpine as build

WORKDIR /app

# Copiar archivos de dependencias primero para aprovechar la caché de Docker
COPY package*.json ./

# Instalar dependencias
RUN npm install --legacy-peer-deps

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación para producción
RUN npm run build > build.log 2>&1 || (cat build.log && echo "❌ ERROR: Build falló" && exit 1)

# Depuración: Mostrar estructura de archivos después del build
RUN echo "📂 Contenido de /app después de build:" && ls -la /app
RUN echo "📂 Contenido de /app/build después de build:" && ls -la /app/build || echo "⚠️ La carpeta build no existe"

# Fase de ejecución (Servidor web)
FROM nginx:stable-alpine

# Depuración: Mostrar archivos en Nginx antes de copiar
RUN echo "📂 Antes de eliminar archivos de Nginx:" && ls -la /usr/share/nginx/html

# Eliminar archivos predeterminados de nginx
RUN rm -rf /usr/share/nginx/html/*

# Depuración: Confirmar eliminación
RUN echo "📂 Después de eliminar archivos de Nginx:" && ls -la /usr/share/nginx/html

# Copiar la aplicación construida desde la fase de build
COPY --from=build /app/build /usr/share/nginx/html

# Copiar configuración personalizada de Nginx (si es necesaria)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Depuración: Verificar que la copia se realizó correctamente
RUN echo "📂 Contenido final de /usr/share/nginx/html:" && ls -la /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]