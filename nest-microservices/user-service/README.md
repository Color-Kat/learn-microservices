# User Service
This microservice is responsible for managing users in the database and must be reusable in other projects.
The User Service will be connected to Auth Service 
that will manage the authentication and authorization of users and be reusable as well.
User Service must emit Kafka events to be able to replicate db to other microservices.
So, I want to achieve independence of microservices.

## UserService responsibilities:
1. Database tables: users, roles, profiles.
Table users storage only 