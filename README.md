## Step to run ?

### Generate the prisma client

```
$npx prisma generate --schema src/prisma/schema.prisma
```

### Generate table from Prisma migrate

```
$npx prisma migrate save --experimental --schema src/prisma/schema.prisma
$npx prisma migrate up --experimental --schema src/prisma/schema.prisma
```
