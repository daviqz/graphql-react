const { users, cars } = require('../fakeData/fakeData')

const resolvers = {
    Query: {
        users: () => users,
        cars: () => cars,
        filterUsers(parent, args, context, info) {
            if(!args.search) return users
            return users.filter(user => (user.name.toLowerCase().includes(args.search.toLowerCase())) || (user.age.toLowerCase().includes(args.search.toLowerCase())) || (user.likes.toLowerCase().includes(args.search.toLowerCase())))
        },
        filterCars(parent, args, context, info) {
            if(!args.search) return cars
            return cars.filter(car => (car.name.toLowerCase().includes(args.search.toLowerCase())) || (car.year.toLowerCase().includes(args.search.toLowerCase())) || (car.condition.toLowerCase().includes(args.search.toLowerCase())))
        }
    }
}

module.exports = {
    resolvers
}