# Booking
## by Louis Otter

Booking Component Referencing AirBnB 

React, Node.js, MySQL

## FangNYC fork by Ben Mangold

System Design

[Trello Task Board](https://trello.com/b/nO5AU22g/sb-staybnb-bookings)

[Engineering Journal](https://www.dropbox.com/s/f52rd1rmw4gf97a/SDC_Engineering_Journal.md?dl=0)

## DB is configured for Ben's local dev env
### Adjust for your local MySQL installation in `/database/dbConnection.js`

## Install

`npm run install`

## Test

`npm run test` exit with ctrl-c

## Seed local DB

`mysql -u root < schema.sql` no local mysql pw
`mysql -u root -p < schema.sql` with local mysql pw

`npm run seed` - creates, or appends data to apartment.csv and dates.csv

## Start Dev

`npm run react-dev`
`npm run server-dev`

# Start Cockroach
Initial Node
$ cockroach start --insecure --listen-addr=localhost