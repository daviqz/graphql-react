import React, { useEffect, useState } from 'react'
import { gql, useQuery, useLazyQuery } from '@apollo/client'
import UserForm from './components/UserForm/UserForm'
import CarForm from './components/CarForm/CarForm'

const SEARCH_DATA = gql`
    query getData($search:String) {
        filterUsers(search: $search) {
            id,
            name,
            age,
            likes
        },
        filterCars(search: $search) {
            id,
            name,
            year,
            condition
        }
    }
`

const defaultUserForm = { id: null, name: '', age: '', likes: '' }
const defaultCarForm = { id: null, name: '', year: '', condition: '' }

const App = () => {
    const [userForm, setUserForm] = useState(defaultUserForm)
    const [carForm, setCarForm] = useState(defaultCarForm)
    const [search, setSeach] = useState('')

    const [ getAllDataLazy,  searchAllData ] = useLazyQuery(SEARCH_DATA, { variables: { search } })

    useEffect(() => {
        getAllDataLazy()
    }, [search])

    const handleSaveUser = () => {

    }
    const handleSaveCar = () => {

    }

    const handleDeleteUser = () => {

    }
    const handleDeleteCar = () => {

    }
        
    return (
        <div className='page'>
            <h1>Form</h1>
            <div>
                <label>Busca: </label>
                <input value={search} onChange={(e) => setSeach(e.target.value)} style={{marginBottom: '2em'}}/>
            </div>
            <div className='content'>
                <div style={{width: '50em'}} >
                    <UserForm formData={userForm} onSave={handleSaveUser} onDelete={handleDeleteUser} onReset={()=>setUserForm(defaultUserForm)}/>
                    <CarForm formData={carForm} onSave={handleSaveCar} onDelete={handleDeleteCar} onReset={()=>setCarForm(defaultCarForm)}/>
                    <div className='display-flex' style={{justifyContent: 'space-between'}}>
                        <div style={{width: '15em'}}>
                            <h2>Usuários</h2>
                            {searchAllData?.data?.filterUsers?.map(user => 
                                <div className='item' key={user.id} onClick={() => setUserForm(user)}>
                                    <div>Nome: {user.name}</div>
                                    <div>Idade: {user.age}</div>
                                    <div>Gosta de: {user.likes}</div>
                                </div>
                            )}
                        </div>
                        <div style={{width: '15em'}}>
                            <h2>Carros</h2>
                            {searchAllData?.data?.filterCars?.map(car => 
                                <div className='item' key={car.id} onClick={() => setCarForm(car)}>
                                    <div>Nome: {car.name}</div>
                                    <div>Ano: {car.year}</div>
                                    <div>Condição: {car.condition}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default App
