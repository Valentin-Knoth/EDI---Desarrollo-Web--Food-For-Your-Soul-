/**
 * Interactividad para menú responsive (Guía 3)
 * Mejora la accesibilidad y funcionalidad del menú desplegable
 */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const dropLinks = document.querySelectorAll('.drop-link');
        
        if (!navbarToggler || !navbarCollapse) {
            return;
        }

        // Toggle del menú móvil
        navbarToggler.addEventListener('click', function() {
            const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
            navbarToggler.setAttribute('aria-expanded', !isExpanded);
            navbarCollapse.classList.toggle('show');
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!navbarCollapse.contains(e.target) && 
                !navbarToggler.contains(e.target) &&
                window.innerWidth <= 991) {
                navbarCollapse.classList.remove('show');
                navbarToggler.setAttribute('aria-expanded', 'false');
            }
        });

        // Manejo de dropdowns con teclado (accesibilidad)
        dropLinks.forEach(function(dropLink) {
            const link = dropLink.querySelector('a');
            const dropdown = dropLink.querySelector('.dropdown');
            
            if (!link || !dropdown) {
                return;
            }

            // Toggle con Enter/Space
            link.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const isExpanded = dropLink.getAttribute('aria-expanded') === 'true';
                    dropLink.setAttribute('aria-expanded', !isExpanded);
                    dropdown.classList.toggle('show');
                }
                
                // Cerrar con Escape
                if (e.key === 'Escape') {
                    dropLink.setAttribute('aria-expanded', 'false');
                    dropdown.classList.remove('show');
                    link.focus();
                }
            });

            // Inicializar aria-expanded
            dropLink.setAttribute('aria-expanded', 'false');
            
            // Cerrar dropdown al hacer clic fuera
            document.addEventListener('click', function(e) {
                if (!dropLink.contains(e.target)) {
                    dropLink.setAttribute('aria-expanded', 'false');
                    dropdown.classList.remove('show');
                }
            });
        });

        // Cerrar menú móvil al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.navbar-nav a');
        navLinks.forEach(function(navLink) {
            navLink.addEventListener('click', function() {
                if (window.innerWidth <= 991) {
                    navbarCollapse.classList.remove('show');
                    navbarToggler.setAttribute('aria-expanded', 'false');
                }
            });
        });
    });
})();

