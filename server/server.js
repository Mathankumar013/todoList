const express = require('express')
const mongoose = require('mongoose')
const app = express()
const {graphqlHTTP} =require('express-graphql')
const useMutation = require('./data/mutation/mutation')
const useQuery = require('./data/query/query')
const cors = require('cors')
const { GraphQLObjectType, GraphQLSchema } = require('graphql')
const updateMutation = require('./data/mutation/update')
const deleteMutation = require('./data/mutation/delete')
const port = 5678;
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/todoList',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const mutation = new GraphQLObjectType({
    name:'createTodoList',
    fields:()=>({
        create:useMutation,
        update:updateMutation,
        delete:deleteMutation
    })
})

const query = new GraphQLObjectType({
    name:'gettodoList',
    fields:()=>({
        get:useQuery
    })
})

app.use('/graphql',graphqlHTTP({
    graphiql:true,
    schema: new GraphQLSchema({
        mutation:mutation,
        query:query
    })
}))


app.listen(port,()=>{
    console.log(`https://localhost:${port}`)
})
