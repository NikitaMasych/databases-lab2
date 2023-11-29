## Lab2 

SQL vs NoSQL represented by [PostgresSQL](https://www.postgresql.org/) and [MongoDB](https://www.mongodb.com/) correspondingly.

## Connect through docker:

1. Execute into the database container: 

```bash
docker exec -it [container_name] bash
```

2. Connect to database for executing queries:

* Postgres

```bash
psql -U postgres -d lab2 -W
```

* Mongo

```bash
mongosh -u mongo -p mongo
use lab2
```
