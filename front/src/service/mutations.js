import { gql } from '@apollo/client'

const UPDATE_USER_QUERY = gql`
    mutation updateUser($id:String, $name:String, $age:String, $likes:String) {
        updateUser(id:$id, name:$name, age:$age, likes:$likes) {
            id
            name
            age
            likes
        }
    }
`

const UPDATE_CAR_QUERY = gql`
    mutation updateCar($id:String, $name:String, $year:String, $condition:String) {
        updateCar(id:$id, name:$name, year:$year, condition:$condition) {
            id
            name
            year
            condition
        }
    }
`

const DELETE_USER_QUERY = gql`
    mutation deleteUser($id:String) {
        deleteUser(id:$id) {
            id
        }
    }
`

const DELETE_CAR_QUERY = gql`
    mutation deleteCar($id:String) {
        deleteCar(id:$id) {
            id
        }
    }
`

const SAVE_USER_QUERY = gql`
    mutation saveUser($name:String, $age:String, $likes:String) {
        saveUser(name:$name, age:$age, likes:$likes) {
            name
            age
            likes
        }
    }
`

const SAVE_CAR_QUERY = gql`
    mutation saveCar($name:String, $year:String, $condition:String) {
        saveCar(name:$name, year:$year, condition:$condition) {
            name
            year
            condition
        }
    }
`

export { UPDATE_USER_QUERY, UPDATE_CAR_QUERY, SAVE_USER_QUERY, SAVE_CAR_QUERY, DELETE_USER_QUERY, DELETE_CAR_QUERY }