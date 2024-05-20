"Use strict";

// Para hacer los botos de las redes sociales en mitad del texto

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

// Para aumentar tamaño de las tarjetas

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

// Para hacer los botones de las redes en el footer

document.addEventListener('DOMContentLoaded', function () {
    const socialIcons = document.querySelectorAll('.redes, .redes2');

    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2)';
        });

        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1)';
        });

        icon.addEventListener('click', () => {
            const url = icon.parentElement.href;
            window.open(url, '_blank');
        });
    });
});

// Para cambiar el color del texto y quitar el subrayado

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.list-inline-item a');

    links.forEach(link => {
        // Remove underline initially
        link.style.textDecoration = 'none';
        link.style.color = 'inherit';
        link.style.transition = 'color 0.3s, text-decoration 0.3s';

        // Add underline and change color on hover
        link.addEventListener('mouseenter', function() {
            link.style.color = 'white';
            link.style.textDecoration = 'underline';
        });

        // Remove underline and reset color when not hovering
        link.addEventListener('mouseleave', function() {
            link.style.color = 'inherit';
            link.style.textDecoration = 'none';
        });
    });
});