import React, { useEffect, useState } from 'react';
import '../styles/List.css';
import axios from 'axios';
import { url } from '../helpers/url.js'

export const List = () => {


    const [registro, setRegistro] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get(url)
            .then(res => setRegistro(res.data)) //sending data to registro and updating its state.
            .catch(err => console.error(err))
    }

    const deleteData = (id) => {
        axios.delete(url + id)
            .then(res => {
                getData()
                alert('Auto eliminado')
            })
            .catch(err => console.log(err))
    }

    console.log(registro)

    return (
        <div>
            <table className="tabla">
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Referencia</th>
                        <th>Modelo</th>
                        <th>Kilometros</th>
                        <th>Imagen</th>
                        <th>Acción</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        registro.map(car => (
                            <tr key={car.id}>
                                <td>{car.marca}</td>
                                <td>{car.referencia}</td>
                                <td>{car.modelo}</td>
                                <td>{car.km}</td>
                                <td><img src={car.img} width="40" height="50" alt={car.referencia}/></td>
                                <td><button className="btn btn-danger" onClick={() => deleteData(car.id)}>Eliminar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}