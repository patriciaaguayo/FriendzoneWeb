"Use strict";

document.addEventListener('DOMContentLoaded', () => {
    const botonesRedesSociales = document.querySelectorAll('.botonRedSocial');

    // Agregar evento de mouseover a cada botón
    botonesRedesSociales.forEach(boton => {
        boton.addEventListener('mouseover', () => {
            boton.style.transform = 'scale(1.2)';
        });
    });

    // Agregar evento de mouseout a cada botón
    botonesRedesSociales.forEach(boton => {
        boton.addEventListener('mouseout', () => {
            boton.style.transform = 'scale(1)';
        });
    });
});