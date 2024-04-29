# OBIE TAKE-HOME - API

## GETTING STARTED

- Run `npm i` to install dependencies
- Run the command `npm run dev` to start the environment
  
## DATA MODEL

Given the time constraint, I decided to not build out a new database, seed it, etc. I formatted the data as an array of insurance_policy objects (based on the below model that I quickly put together) and accessed the data directly from db/sampleData.ts.
<img width="1195" alt="Screenshot 2024-04-29 at 6 43 23 PM" src="https://github.com/annahippee/obie-api/assets/95527199/e091816d-c67d-47d8-98f9-0dfcb11abd4b">

## STRETCH GOALS

If I had more time, I would address the following issues:
- Query Params: I'd add the functionality (as described in the client repo as well) to filter by only state or insurance_type. It would be a pretty quick lift to accomplish given the current set-up.
- Create DB & Tables: Jury's still out on if it would have been faster to set up and seed DB tables in Postgres vs. manually set up the data as mentioned above. To make it as easy as possible to share the repo and run it locally, I decided to manually manipulate the data to align with the schema design.
