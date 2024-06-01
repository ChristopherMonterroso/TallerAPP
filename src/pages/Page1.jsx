import React, { useState } from 'react';
import generarRevisionPDF from '../lib/PDF'; // Importa la función desde el archivo separado
import './Page1.css'; // Importa el archivo CSS para los estilos

const Page1 = () => {
    // Estado para almacenar los datos del vehículo
    const [datosVehiculo, setDatosVehiculo] = useState({
        cliente: '',
        vehiculo: '',
        modelo: '',
        linea: '',
        placa: '',
        chasis: '',
        descripcion: 'En cumplimiento con la solicitud de revisión del vehículo descrito anteriormente, se llevó a cabo una inspección exhaustiva en las instalaciones de Auto Servicios Monterroso, al evaluar el estado del vehículo se ha determinado que se encuentra en buenas condiciones.'
    });

    // Manejador para cambiar los datos del vehículo
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDatosVehiculo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Función para generar el PDF con los datos del vehículo
    const generarPDF = () => {
        generarRevisionPDF(datosVehiculo); // Llama a la función de generación de PDF
    };

    return (
        <div className="page-container">
            <h1>Revisión de Vehículo</h1>
            <form>
                <div className="form-group">
                    <label>Cliente:</label>
                    <input type="text" name="cliente" value={datosVehiculo.cliente} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Vehículo:</label>
                    <input type="text" name="vehiculo" value={datosVehiculo.vehiculo} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Modelo:</label>
                    <input type="text" name="modelo" value={datosVehiculo.modelo} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Línea:</label>
                    <input type="text" name="linea" value={datosVehiculo.linea} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Placa:</label>
                    <input type="text" name="placa" value={datosVehiculo.placa} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Chasis:</label>
                    <input type="text" name="chasis" value={datosVehiculo.chasis} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Descripción:</label>
                    <textarea name="descripcion" value={datosVehiculo.descripcion} onChange={handleInputChange} />
                </div>
                <button type="button" onClick={generarPDF}>Generar PDF</button>
            </form>
        </div>
    );
};

export default Page1;
