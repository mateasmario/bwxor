FROM maven:3.8.4-openjdk-11-slim AS build
WORKDIR /backend
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:11-jre-slim
WORKDIR /backend
COPY - from=build /backend/target/backend-0.0.1-SNAPSHOT.jar .
CMD ["java", "-jar", "backend-0.0.1-SNAPSHOT.jar"]
