## Summary

- Postgres DB in Supabase
- Deployed and hosted by Netlify
- Navigate to https://benevolent-rolypoly-ae1a7c.netlify.app/ to execute the app.
- App can be download as a PWA and run on any device offline (after refreshing the caches locally)
- All lookup data and captured data is stored as JSON in localStorage. This is less-than ideal but good enough and fast enough to have allowed a reduced development cycle.


## Setup he Development Environment
- Download the source.
- Open the source folder in VS Code
- From a terminal (either external or the terminal integrated into VS Code) execute the following command

    npm run dev

## Setup the database connection

- Ceate the file **/.env** and add the key value pairs (the Supabase keys can be ignored until we want to integrate OAuth):
    - SUPABASE_URL=""
    - SUPABASE_KEY=""
    - DATABASE_URL=""
- Open /prisma/schema.prisma and change the **datasource db** object to reflect the desired database. I have posted the connection string to the Postgres instance in Teams.

As an example, when the schema was going through churn, I had **/prisma/schema.prisma** configured as: 

    datasource db {
        provider = "sqlite"
        url      = env("DATABASE_URL")
    }

and the **.env** reflected the secret as:

    DATABASE_URL_LOCAL="file:./scouting-app.db"

This allowed me to very easily delete the db and execute

    npx prisma generate
    npx prisma db push
    npx prisma db seed

and have a clean instance of the db. 


## Deploying the Database

The app uses [Prisma](https://www.prisma.io/docs) as an ORM. Prisma supports many different types of databases. The application is currently configured to operate against a Postgres instance hosted in Supabase.

By changing **/prisma/schema.prisma**, you can change the schema and relationships. Note that Mongo has different requirements as documented at the [Prisma schema reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference).

To initialize a new database instance, run the following commands within a termina in the root directory of the source:

    npx prisma generate
    npx prisma db push

To seed data into the database, run the following command within a termina in the root directory of the source

    npx prisma db seed

Note that once a database is seeded, executing the **db seed* command again will all the data in the script unless it is removed or commented out. This means that if you seed the data and later want to add new data, you will need to comment out some parts of the script and add new sections.

## Todo

- Auth. I already have Supabase authenticating against the Azure AD. I removed it from the app as I had a brief issue where the app kept redirecting to /login. 
    - Revisit auth against out AD instance If we do not want to bother...
    - Provide a means of allowing the user to enter their name and cache it for later upload.
- Add some instructions to index to explain the steps needed to:
    -  Download the app as a PWA
    - Update caches so user can operate offline
    - Briefily summarize how to drill into the data collection
- Embiggen the buttons and text so it looks better on mobile.

