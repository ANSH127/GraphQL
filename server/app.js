const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true


}));
app.listen(4000, () => {
    console.log('Server started on port 4000');
}
);

