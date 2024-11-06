const { GraphQLString,GraphQLObjectType, GraphQLID }=require('graphql')

const todoListType = new GraphQLObjectType({
    name:'todoListType',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString}
    })
})
module.exports = todoListType;