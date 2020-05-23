const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

const username = process.env.USERNAME
const password = process.env.PASSWORD

mongoose.connect(
  `mongodb+srv://${username}:${password}@reading-list-cluster-srbnf.mongodb.net/test?retryWrites=true&w=majority`
);
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
