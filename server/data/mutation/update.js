const { GraphQLString, GraphQLID}=require('graphql')
const todoList = require('../moogose/scehma')
const todoListType = require('../type/todoListType')

const updateMutation = {
    type:todoListType,
    args:{
        id:{type:GraphQLID},
        name:{type:GraphQLString}
    },
    async resolve(parent,args){
        const update = await todoList.findById(args.id)
        if(update){
            return await todoList.findByIdAndUpdate(
                args.id,
            {
                name:args.name
            }
            )
        }
    }
}
module.exports = updateMutation;