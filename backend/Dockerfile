FROM maven:3.9.10-amazoncorretto-24 AS build
WORKDIR /backend
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:24-jdk-slim
WORKDIR /backend
COPY --from=build /backend/target/backend-0.0.1-SNAPSHOT.jar .
CMD ["java", "-jar", "backend-0.0.1-SNAPSHOT.jar"]
