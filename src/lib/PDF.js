// pdfGenerator.js
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function escribirTextoCentrado(doc, texto, y) {
    var textoAncho = doc.getStringUnitWidth(texto) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    var x = (doc.internal.pageSize.width - textoAncho) / 2;
    doc.text(texto, x, y);
}

function escribirTextoJustificado(doc, texto, x, y, anchoMaximo, lineaAltura) {
    var palabras = texto.split(" ");
    var linea = "";
    var lineas = [];

    palabras.forEach(palabra => {
        var lineaDePrueba = linea + palabra + " ";
        var anchoDeLinea = doc.getTextWidth(lineaDePrueba);
        if (anchoDeLinea > anchoMaximo && linea !== "") {
            lineas.push(linea.trim());
            linea = palabra + " ";
        } else {
            linea = lineaDePrueba;
        }
    });

    lineas.push(linea.trim());

    lineas.forEach(linea => {
        var palabrasDeLinea = linea.split(" ");
        if (palabrasDeLinea.length === 1) {
            doc.text(linea, x, y);
        } else {
            var espacioExtra = (anchoMaximo - doc.getTextWidth(linea)) / (palabrasDeLinea.length - 1);
            var xPalabra = x;
            palabrasDeLinea.forEach((palabra, index) => {
                if (index === palabrasDeLinea.length - 1) {
                    doc.text(palabra, xPalabra, y);
                } else {
                    doc.text(palabra, xPalabra, y);
                    xPalabra += doc.getTextWidth(palabra + " ") + espacioExtra;
                }
            });
        }
        y += lineaAltura;
    });
}

const generarRevisionPDF = (datosVehiculo) => {
    // Crear un nuevo documento PDF
    const doc = new jsPDF();

    // Establecer la información de la empresa y los datos del vehículo
    const nombre = "Auto Servicios Monterroso";
    const ocupacion = "Taller de mecánica general, enderezado y pintura";
    const direccion = "10 avenida 7-65, Nueva Montserrat, Zona 3 de Mixco";
    const telefono = "Teléfono: (502) 5648-6979";
    const razonSocial = "Razón social: Mayra Alegría";
    const { cliente, vehiculo, modelo, linea, placa, chasis, descripcion } = datosVehiculo;

    // Datos del vehículo en formato de tabla
    const datosVehiculoTabla = [
        ["Cliente", "Vehículo", "Modelo", "Linea", "Placa", "Chasis"],
        [cliente, vehiculo, modelo, linea, placa, chasis]
    ];

    // Ajustar la posición vertical de cada elemento de la información de la empresa
    doc.setFont("helvetica", "bold");

    let yPosition = 20;
    doc.setFontSize(24);
    escribirTextoCentrado(doc, nombre, yPosition);
    doc.setFontSize(12);

    yPosition += 5;
    escribirTextoCentrado(doc, ocupacion, yPosition);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    yPosition += 5;
    escribirTextoCentrado(doc, direccion, yPosition);
    yPosition += 5;
    escribirTextoCentrado(doc, telefono, yPosition);
    yPosition += 5;
    escribirTextoCentrado(doc, razonSocial, yPosition);
    yPosition += 10;
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("Revisión de Vehículo", 105, yPosition, { align: 'center' });

    // Ajustar la posición vertical de la tabla y reducir el espacio entre elementos
    const tablaY = yPosition + 10; // Posición vertical de inicio de la tabla
    doc.autoTable({
        startY: tablaY,
        head: [datosVehiculoTabla[0]],
        body: datosVehiculoTabla.slice(1),
        theme: 'striped',
        styles: { valign: 'middle' },
        margin: { top: 5 }
    });

    // Fecha actual
    const finalY = doc.autoTable.previous.finalY; // Obtener la posición final de la tabla
    const fechaActual = new Date().toLocaleString();
    doc.setFontSize(10);
    yPosition = finalY + 10;
    doc.text(`Fecha: ${fechaActual}`, 105, yPosition, { align: 'center' });
    yPosition += 10;
    doc.setFontSize(12);
    doc.text("Resumen de la revisión:", 20, yPosition);
    yPosition += 5;

    // Resumen de la revisión
    doc.setFont("helvetica", "normal");
    escribirTextoJustificado(doc, descripcion, 20, yPosition, 170, 5);
    doc.setFont("helvetica", "bold");
    // Área para firma con líneas de guiones bajos
    yPosition += 50; // Espacio para la firma
    escribirTextoCentrado(doc,"____________________________", yPosition);
    doc.setFontSize(12);
    yPosition += 7;
    
    escribirTextoCentrado(doc, "Autoservicios Monterroso", yPosition);

    doc.save(`revision_${placa}.pdf`);
};

export default generarRevisionPDF;
