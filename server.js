const express = require('express');
const {dbUser, dbPassword, db} = require('./config')
const mongoose = require('mongoose')
const {graphqlHTTP} = require('express-graphql')
const graphqlSchema = require('./GraphQL/Schema/index')
const graphqlResolver = require('./GraphQL/Resolver/index')

const app = express();
const options = { useNewUrlParser: true, useUnifiedTopology: true }
const uri = `mongodb+srv://${dbUser}:${dbPassword}@graphdatacluster.3paiu.mongodb.net/${db}?retryWrites=true&w=majority`

app.use('/graphql', graphqlHTTP({
    schema : graphqlSchema,
    rootValue : graphqlResolver,
    graphiql: true
}))

console.log(`URI======================> ${uri}`)

mongoose
.connect(uri,options)
.then(() => 
app.listen(5000, () =>{
    console.log('server running')
}))
.catch((error) =>{
    console.log(error)
})
      
