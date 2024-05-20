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

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card-hover');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});