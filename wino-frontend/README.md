Po przeniesieniu do visuala musimy wpisać npm install, żeby odpaliło fronta


na uczelni zmienić w application.properties na taki:

spring.application.name=wino-backend
spring.datasource.driver-class-name=org.postgresql.Driver
spring.datasource.url=jdbc:postgresql://localhost:5432/wino
spring.datasource.username=postgres
spring.datasource.password=student
server.port= 8081

spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=update



W samym froncie zmienić port api z 8080 na 8081 
