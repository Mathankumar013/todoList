const { GraphQLID, GraphQLList}=require('graphql')
const todoList = require('../moogose/scehma')
const todoListType = require('../type/todoListType')

const createMutation = {
    type:new GraphQLList(todoListType),
    args:{
        id:{type:GraphQLID}
    },
    async resolve(parent,args){
        if(args.id){
            return await todoList.findById(args.id)
        }else{
            return await todoList.find()
        }
    }
}
module.exports = createMutation;