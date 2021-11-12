import React from 'react'

export const Home = () => {
    return (
        <div>
            <div id="hero" className="bg-dark text-secondary px-4 py-5 text-center">
                <div className="py-5">
                    <h1 className="display-5 fw-bold text-white">Tu Carro Ya!</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-5 mb-4">
                            Encuentra autos a los mejores precios!
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <a href="/Registro"><button type="button" className="btn btn-warning">Vende el tuyo</button></a>
                        <a href="/Todos"> <button type="button" className="btn btn-warning">Listar todos</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}