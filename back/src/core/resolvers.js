let { users, cars } = require('../fakeData/fakeData')
const { getSeq } = require('../utils/utils')

const resolvers = {
    Query: {
        users: () => users.sort((a,b) => a.id + b.id),
        cars: () => cars.sort((a,b) => a.id + b.id),
        filterUsers(_, args) {
            if(!args.search) return users
            return users.filter(user => (
                user.name.toLowerCase().includes(args.search.toLowerCase())) || 
                (user.age.toLowerCase().includes(args.search.toLowerCase())) || 
                (user.likes.toLowerCase().includes(args.search.toLowerCase()))
            ).sort((a,b) => a.id + b.id)
        },
        filterCars(_, args) {
            if(!args.search) return cars
            return cars.filter(car => (
                car.name.toLowerCase().includes(args.search.toLowerCase())) || 
                (car.year.toLowerCase().includes(args.search.toLowerCase())) || 
                (car.condition.toLowerCase().includes(args.search.toLowerCase()))
            ).sort((a,b) => a.id + b.id)
        }
    },
    Mutation: {
        updateUser(_, updatedUser) {
            users = users.filter(i => i.id != updatedUser.id)
            users.push(updatedUser)
            return users.sort((a,b) => a.id + b.id)
        },
        updateCar(_, updatedCar) {
            cars = cars.filter(i => i.id != updatedCar.id)
            cars.push(updatedCar)
            return cars.sort((a,b) => a.id + b.id)
        },
        saveUser(_, newUser) {
            users.push({...newUser, id: getSeq(users)})
            return users.sort((a,b) => a.id + b.id)
        },
        saveCar(_, newCar) {
            console.log(cars)
            cars.push({...newCar, id: getSeq(cars)})
            return cars.sort((a,b) => a.id + b.id)
        },
        deleteUser(_, deletedUser) {
            users = users.filter(i => i.id != deletedUser.id)
            return users.sort((a,b) => a.id + b.id)
        },
        deleteCar(_, deletedCar) {
            cars = cars.filter(i => i.id != deletedCar.id)
            return cars.sort((a,b) => a.id + b.id)
        }
    }
}

module.exports = {
    resolvers
}