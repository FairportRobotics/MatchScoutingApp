## Summary

I wrote a prototype of an application that was able to authenticate, collect data, upload data and operate as either a website or PWA.

- Code is stored in [Github](https://github.com/FairportRobotics/MatchScoutingApp)
- Written in [Nuxt3.js](https://nuxt.com/) (Vue.js framework)
- Styles by [Tailwind.css](https://tailwindcss.com/)


The bulk of the code in the prototype was scrapped as its usefullness was served in addressing specific development points. Now that I know we can DO those things, I wanted to start with a cleaner slate. 

Additionally, we still have not decided to use this stack. We might still go with Flutter/Dart. 

## Authentication

In a previous iteration of a Scouting App prototype, I'd used Supabase to to act as an OAth provider with social logins provided by Azure, Google and Github. The Azure connection operated against our Azure Encarta ID resource.

Ideally, we want to skip using a third-party like Firebase or Supabase and operate directly against our Azure resources. I'll look into this.

I'll record useful links to assist in this investigation here:

[Single-page application: App registration](https://learn.microsoft.com/en-us/entra/identity-platform/scenario-spa-app-registration)

[Tutorial: Sign in users and call the Microsoft Graph API from a JavaScript single-page app (SPA) using auth code flow](https://learn.microsoft.com/en-us/entra/identity-platform/tutorial-v2-javascript-auth-code)

## Authorization

We likely want to restrict access to certain functions. I don't expect any bad actors, but we should prevent accidental mutation of data that we've cultivated.

Scouter:

- Can call into Web API endpoints that retrieve data to be cached locally.
- Can perform scouting operations.
- Can call into Web API endppint(s) that save scouted data.

Games Management:

- Can call into Web API endpoints that retrieve data to be cached locally.
- Can view metrics collected by Scouters.

Admin:

- Can trigger Web API endpoint(s) that refresh our caches from The Blue Alliance.
- Can edit caches of data in CosmosDB
- Can assign members to other Roles.
- Can read QR Codes from Scouters and can call into Web API endpoint(s) that save the data.

## Retrieve and Cache Data from The Blue Alliance into CosmosDB

 We should author one or more Web API endpoints to:

- Call into The Blue Aplliance
- Persist results into our own CosmosDB
- Persist ETAG and provide to future calls to TBA so we comply with their requirements

What data do we want to cache?

- Events
- Teams

## Retrieve and Cache Data from CosmosDB for use in App

Again, we should author Web API endpoints to interface with the cached and transformed data in CosmosDB. We can use data directly saved from TBA but there are likely additional mutations or edits we'd like to apply to provide more context for our team.

We need to cache this data locally on whatever device the scouter us using. We cannot expect or guarantee that a scouter will be able to use their personal device to connect to our endpoints. They might have time or data limits on their devices.

We need to cache locally but also allow them to manually enter values for feautures like events, matches and teams.

Actions includes, but might not be limited to:

- Retrieve and cache one or more upcoming events.
- Retrieve and cache teams associated with upcoming events.
- Retrieve and cache the Activity Tree through which scouters will navigate to collect cycle times and other data.

## Collect Scouting Data

We need to collect and store this data locally until we are able to persist the data into our CosmosDB instance.

- LocalStorage is a simple solution for this. Can can store simple JSON documents into a key/value pair then deserialize/serialize from the Scouting App.
- IndexedDB would be better but there is a greater barrier to entry with this as there is schema management and migrations to consider.

## Upload Data

Once a scouter has completed collecting data for a match, we want to persist the data into CosmosDB as quickly as possible so Game Management has the metrics it needs to make alliance decisions.

- Call into the Web API directly from the Scouting App if a network connection or cellular connection are available.
- Encode the collected data into a QR Code which can be read from a connected device which will then call our Web API to persist into CosmosDB.

## Scouting Data

We need to decide the properties of the scouting data we intened to to collect. From convesations we've had, I know this includes:

- Cycle Times: What was the timespan between a team's interaction with a game piece or feature and a score or other end-condition? For example, how long did it take for a team to score in the top row after picking up a cone?
- Score Types: For example, in 2023 Charged Up, how many scores did a team account for in the top, middle and bottom locations? 
- Break Downs: Did a robot complete the match? Did it stop responding or was otherwise incapacitated? Does it maktter to us whether it broke or was, for example, tipped over and unable to be righted?

