const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Users {
        id: String,
        name: String
        age: String
        likes: String
    }
    type Cars {
        id: String,
        name: String,
        year: String
        condition: String
    }
    type Query {
        users: [Users],
        filterUsers(search:String): [Users],
        cars: [Cars]
        filterCars(search:String): [Cars]
    }
`

module.exports = {
    typeDefs
}