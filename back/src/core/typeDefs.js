const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        id: String
        name: String
        age: String
        likes: String
    }
    type Car {
        id: String
        name: String
        year: String
        condition: String
    }
    type Query {
        users: [User]
        cars: [Car]
        filterUsers(search:String): [User]
        filterCars(search:String): [Car]
    }
    type Mutation {
        saveUser(name:String, age:String, likes:String): [User]
        saveCar(name:String, year:String, condition:String): [Car]
        updateUser(id:String, name:String, age:String, likes:String): [User]
        updateCar(id:String, name:String, year:String, condition:String): [Car]
        deleteCar(id:String): [User]
        deleteUser(id:String): [Car]
    }
`

module.exports = {
    typeDefs
}