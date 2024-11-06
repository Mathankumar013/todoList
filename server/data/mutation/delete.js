const { GraphQLID}=require('graphql')
const todoList = require('../moogose/scehma')
const todoListType = require('../type/todoListType')

const deleteMutation = {
    type:todoListType,
    args:{
        id:{type:GraphQLID},
    },
    async resolve(parent,args){
        const deleteItem = await todoList.findById(args.id)
        if(deleteItem){
            return await todoList.findByIdAndDelete(args.id)
        }
    }
}
module.exports = deleteMutation;