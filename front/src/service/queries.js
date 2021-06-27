import { gql } from '@apollo/client'

const SEARCH_DATA_QUERY = gql`
    query filterData($search:String) {
        filterUsers(search: $search) {
            id
            name
            age
            likes
        },
        filterCars(search:$search) {
            id
            name
            year
            condition
        }
    }
`

const GET_ALL_DATA_QUERY = gql`
    query getData {
        users {
            id,
            name,
            age,
            likes
        },
        cars {
            id,
            name,
            year,
            condition
        }
    }
`

export { SEARCH_DATA_QUERY, GET_ALL_DATA_QUERY }