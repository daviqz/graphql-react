import React, { useEffect, useState } from 'react'
import { useLazyQuery, useMutation } from '@apollo/client'
import UserForm from './components/UserForm/UserForm'
import CarForm from './components/CarForm/CarForm'
import { SEARCH_DATA_QUERY } from './service/queries'
import { UPDATE_USER_QUERY, UPDATE_CAR_QUERY, SAVE_USER_QUERY, SAVE_CAR_QUERY, DELETE_USER_QUERY, DELETE_CAR_QUERY } from './service/mutations'

const defaultUserForm = { id: null, name: '', age: '', likes: '' }
const defaultCarForm = { id: null, name: '', year: '', condition: '' }

const App = () => {
    const [userForm, setUserForm] = useState(defaultUserForm)
    const [carForm, setCarForm] = useState(defaultCarForm)
    const [search, setSeach] = useState('')

    const [searchAllDataLazy,  searchAllDataResponse] = useLazyQuery(SEARCH_DATA_QUERY, { variables: { search } })
    const [updateUserData] = useMutation(UPDATE_USER_QUERY)
    const [updateCarData] = useMutation(UPDATE_CAR_QUERY)
    const [saveUserData] = useMutation(SAVE_USER_QUERY, { onCompleted: searchAllDataResponse?.refetch})
    const [saveCarData] = useMutation(SAVE_CAR_QUERY, { onCompleted: searchAllDataResponse?.refetch})
    const [deleteUserData] = useMutation(DELETE_USER_QUERY, { onCompleted: searchAllDataResponse?.refetch})
    const [deleteCarData] = useMutation(DELETE_CAR_QUERY, { onCompleted: searchAllDataResponse?.refetch})


    useEffect(() => {
        searchAllDataLazy()
    }, [search, searchAllDataLazy])

    const handleUpdateUser = (updatedUserData) => {
        updateUserData({ variables: updatedUserData })
    }
    const handleUpdateCar = (updatedCarData) => {
        updateCarData({ variables: updatedCarData })
    }
    const handleSaveUser = (newUserData) => {
        saveUserData({ variables: newUserData })
        setUserForm(defaultUserForm)
    }
    const handleSaveCar = (newCarData) => {
        saveCarData({ variables: newCarData })
        setCarForm(defaultCarForm)
    }

    const handleDeleteUser = (deletedUserData) => {
        deleteUserData({ variables: { id: deletedUserData.id } })
        setUserForm(defaultUserForm)
    }
    const handleDeleteCar = (deletedCarData) => {
        deleteCarData({ variables: { id: deletedCarData.id } })
        setCarForm(defaultCarForm)
    }
        
    return (
        <div className='page'>
            <h1>Form</h1>
            <div>
                <label>Busca: </label>
                <input value={search} onChange={(e) => setSeach(e.target.value)}/>
            </div>
            <div className='content'>
                <div style={{width: '50em'}} >
                    <UserForm formData={userForm} onSave={handleSaveUser} onDelete={handleDeleteUser} onReset={()=>setUserForm(defaultUserForm)} onUpdate={handleUpdateUser}/>
                    <CarForm formData={carForm} onSave={handleSaveCar} onDelete={handleDeleteCar} onReset={()=>setCarForm(defaultCarForm)} onUpdate={handleUpdateCar}/>
                    <div className='display-flex' style={{justifyContent: 'space-between'}}>
                        <div style={{width: '15em'}}>
                            <h2>Usuários</h2>
                            {searchAllDataResponse?.data?.filterUsers?.map(user => 
                                <div className='item' key={user.id} onClick={() => setUserForm(user)}>
                                    <div>Nome: {user.name}</div>
                                    <div>Idade: {user.age}</div>
                                    <div>Gosta de: {user.likes}</div>
                                </div>
                            )}
                        </div>
                        <div style={{width: '15em'}}>
                            <h2>Carros</h2>
                            {searchAllDataResponse?.data?.filterCars?.map(car => 
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
