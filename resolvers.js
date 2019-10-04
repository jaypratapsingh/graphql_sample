const db = require('./db')

const Query = {
    test: () => 'Test Success, GraphQL server is up & running !!',
    students:() => db.students.list(),
    studentById:(root,args,context,info)=> {
        return db.students.get(args.id);
    }
}

const Mutation = {
    createStudent:(root,args,context,info) => {
       return db.students.create({collegeId:args.collegeId,
       firstName:args.firstName,
       lastName:args.lastName})
    }
 }

const Student = {
    fullName:(root,args,context,info) => {
       return root.firstName+":"+root.lastName
    },
    college:(root) => {
       return db.colleges.get(root.collegeId);
    }
 }

module.exports = {Query, Student, Mutation}