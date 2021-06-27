import React, { useState, useEffect } from 'react'

const defaultForm = { id: null, name: '', age: '', likes: '' }

const UserForm = ({ onSave, formData, onDelete, onReset }) => {
    const [form, setForm] = useState(formData || defaultForm)

    useEffect(()=> {
        setForm(formData)
    }, [formData])

    return (
        <div className='display-flex form-style'>
            <div className='form-item'>
                <div>Nome</div>
                <input value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}/> 
            </div>
            <div className='form-item'>
                <div>Idade</div>
                <input value={form.age} onChange={(e) => setForm({...form, age: e.target.value})}/>
            </div>
            <div className='form-item'>
                <div>Gosta de</div>
                <input value={form.likes} onChange={(e) => setForm({...form, likes: e.target.value})}/>
                <button onClick={onSave}>{form.id? 'Atualizar' : 'Salvar'}</button>
                {form.id && <button onClick={onDelete}>Deletar</button>}
                <button onClick={onReset}>{form.id ? 'Novo registro' : 'Resetar'}</button>
            </div>
        </div>
    )
}

export default UserForm