const { GraphQLString}=require('graphql')
const todoList = require('../moogose/scehma')
const todoListType = require('../type/todoListType')

const createMutation = {
    type:todoListType,
    args:{
        name:{type:GraphQLString}
    },
    async resolve(parent,args){
        const createTodo = await todoList.create({name:args.name})
        return createTodo
    }
}
module.exports = createMutation;