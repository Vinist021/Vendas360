# Usa Java 17 oficial
FROM openjdk:17-jdk-slim

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do Maven wrapper e pom.xml
COPY mvnw pom.xml ./
COPY .mvn .mvn

# Baixa dependências sem compilar ainda
RUN ./mvnw dependency:go-offline -B

# Copia o código fonte
COPY src ./src

# Build do JAR
RUN ./mvnw clean package -DskipTests

# Expõe a porta do Spring Boot
EXPOSE 8080

# Comando para rodar a aplicação
CMD ["java", "-jar", "target/vendas-backend-0.0.1-SNAPSHOT.jar"]
