import React from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_ALL_DATA = gql`
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
//Exemplo get all
const Example = () => {
    const { loading, error, data } = useQuery(GET_ALL_DATA)
    console.log(data)
    return (
        <div>
            Example
        </div>
    )
}

export default Example