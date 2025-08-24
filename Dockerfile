# =============================
# Fase de construcción
# =============================
FROM node:18-alpine as build

WORKDIR /app

# Copiar archivos de dependencias primero para aprovechar caché
COPY package*.json ./

# Instalar dependencias
RUN npm install --legacy-peer-deps

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación para producción
RUN npm run build > build.log 2>&1 || (cat build.log && echo "❌ ERROR: Build falló" && exit 1)

# Depuración: mostrar estructura de archivos
RUN echo "📂 Contenido de /app después del build:" && ls -la /app
RUN echo "📂 Contenido de /app/build:" && ls -la /app/build || echo "⚠️ La carpeta build no existe"
RUN echo "📂 Contenido de /app/dist:" && ls -la /app/dist || echo "⚠️ La carpeta dist no existe"

# Normalizar salida (ya sea build o dist)
RUN if [ -d "/app/dist" ]; then mv /app/dist /app/output; \
    elif [ -d "/app/build" ]; then mv /app/build /app/output; \
    else echo "❌ No se encontró carpeta de salida (build o dist)" && exit 1; fi

# =============================
# Fase de ejecución (Nginx)
# =============================
FROM nginx:stable-alpine

# Depuración: mostrar archivos en Nginx antes de copiar
RUN echo "📂 Antes de limpiar Nginx:" && ls -la /usr/share/nginx/html

# Eliminar archivos predeterminados de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar la aplicación construida desde la fase build
COPY --from=build /app/output /usr/share/nginx/html

# Copiar configuración personalizada de Nginx (si existe en tu proyecto)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Depuración: verificar copia final
RUN echo "📂 Contenido final de /usr/share/nginx/html:" && ls -la /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
