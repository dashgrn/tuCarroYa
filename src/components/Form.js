import React, { useState } from 'react';
import '../styles/Form.css';
import axios from 'axios';
import { url } from '../helpers/url';
import { fileUpload } from '../helpers/fileUpload';

export const Form = () => {

    const [car, setCar] = useState({
        marca: '',
        referencia: '',
        modelo: '',
        km: '',
        img: ''
    })

    const handleInputChange = ({ target }) => {
        setCar({
            ...car,
            [target.name]: target.value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert('Auto agregado a la lista')
    }

    const handleFileChange = (evt) => {
        const file = evt.target.files[0]
        fileUpload(file)
            .then(res => car.img = res)
            .catch(err => console.log(err))
    }

    const posData = () => {
        axios.post(url, car)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form id="formulario" onSubmit={handleSubmit}>
                <h2>Registro de Autos</h2>
                <hr />
                <div>
                    <label htmlFor="inputNombre">Marca</label>
                    <input id="inputNombre" name="marca" onChange={handleInputChange} type="text" />
                </div>
                <div>
                    <label htmlFor="inputReferencia">Referencia</label>
                    <input id="inputReferencia" name="referencia" onChange={handleInputChange} type="text" />
                </div>
                <div>
                    <label htmlFor="inputModelo">Modelo</label>
                    <input id="inputModelo" type="number" name="modelo" min="2000" max="2022" onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="inputKm">Kilometraje</label>
                    <input id="inputKm" type="number" name="km" onChange={handleInputChange} />
                </div>
                <div>
                    <label>Foto</label>
                    <input id="botonImagen" type="file" name="img" onChange={handleFileChange} />

                </div>
                <div>
                    <button className="btn btn-warning"onClick={posData} id="btnRegistro">Enviar</button>
                </div>
            </form>
        </div>
    )
}
