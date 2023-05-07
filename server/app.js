const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');

require('dotenv').config();

const mongoose = require('mongoose');

const dburl = `mongodb+srv://${process.env.MONOGODB_USERNAME}:${process.env.MONOGODB_PASSWORD}@cluster0.46ihpbt.mongodb.net/?retryWrites=true&w=majority`
const app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true


}));
app.listen(4000, () => {
    console.log('Server started on port 4000');
}
);
mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connected to database");
}).catch((err) => {

    console.log(err);
}
);


