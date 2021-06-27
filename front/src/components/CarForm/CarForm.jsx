import React, { useState, useEffect } from 'react'

const defaultForm = { id: null, name: '', year: '', condition: '' }

const CarForm = ({ onSave, formData, onDelete, onReset }) => {
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
                <div>Ano</div>
                <input value={form.year} onChange={(e) => setForm({...form, year: e.target.value})}/>
            </div>
            <div className='form-item'>
                <div>Condição</div>
                <input value={form.condition} onChange={(e) => setForm({...form, condition: e.target.value})}/>
                <button onClick={onSave}>{form.id? 'Atualizar' : 'Salvar'}</button>
                {form.id && <button onClick={onDelete}>Deletar</button>}
                <button onClick={onReset}>{form.id ? 'Novo registro' : 'Resetar'}</button>
            </div>
        </div>
    )
}

export default CarForm