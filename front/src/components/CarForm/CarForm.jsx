import React, { useState, useEffect } from 'react'

const defaultForm = { id: null, name: '', year: '', condition: '' }

const CarForm = ({ onSave, formData, onDelete, onReset, onUpdate }) => {
    const [form, setForm] = useState(formData || defaultForm)

    useEffect(()=> {
        setForm(formData)
    }, [formData])

    const resetForm = () => {
        onReset()
        setForm({ id: null, name: '', age: '', likes: '' })
    }

    return (
        <>
            <div style={{textAlign: 'left', marginLeft: '0.5em', marginTop: '1em', fontSize: '1.5em', fontWeight: 'bold'}}>
                Carro
            </div>
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
                    <button onClick={form.id ? ()=>onUpdate(form) : ()=>onSave(form)}>{form.id? 'Atualizar' : 'Salvar'}</button>
                    {form.id && <button onClick={()=>onDelete(form)}>Deletar</button>}
                    <button onClick={resetForm}>{form.id ? 'Novo registro' : 'Resetar'}</button>
                </div>
            </div>
        </>
    )
}

export default CarForm