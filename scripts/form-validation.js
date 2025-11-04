(function() {
    'use strict';

    // Esperar a que el DOM esté listo
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('formContacto');
        
        if (!form) {
            return;
        }

        // Campos del formulario
        const campos = {
            nombre: {
                elemento: document.getElementById('nombre'),
                error: document.getElementById('nombre-error'),
                validar: function(valor) {
                    valor = valor.trim();
                    if (!valor) {
                        return 'El nombre es obligatorio';
                    }
                    if (valor.length < 3) {
                        return 'El nombre debe tener al menos 3 caracteres';
                    }
                    if (valor.length > 50) {
                        return 'El nombre no puede tener más de 50 caracteres';
                    }
                    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(valor)) {
                        return 'El nombre solo puede contener letras y espacios';
                    }
                    return '';
                }
            },
            email: {
                elemento: document.getElementById('email'),
                error: document.getElementById('email-error'),
                validar: function(valor) {
                    valor = valor.trim();
                    if (!valor) {
                        return 'El correo electrónico es obligatorio';
                    }
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(valor)) {
                        return 'Ingrese un correo electrónico válido';
                    }
                    return '';
                }
            },
            telefono: {
                elemento: document.getElementById('telefono'),
                error: document.getElementById('telefono-error'),
                validar: function(valor) {
                    valor = valor.trim();
                    if (valor && !/^[0-9+\-\s()]+$/.test(valor)) {
                        return 'Ingrese un teléfono válido';
                    }
                    return '';
                }
            },
            mensaje: {
                elemento: document.getElementById('mensaje'),
                error: document.getElementById('mensaje-error'),
                validar: function(valor) {
                    valor = valor.trim();
                    if (!valor) {
                        return 'El mensaje es obligatorio';
                    }
                    if (valor.length < 10) {
                        return 'El mensaje debe tener al menos 10 caracteres';
                    }
                    if (valor.length > 500) {
                        return 'El mensaje no puede tener más de 500 caracteres';
                    }
                    return '';
                }
            }
        };

        const estado = document.getElementById('estado');

        /**
         * Valida un campo individual
         */
        function validarCampo(campo) {
            const valor = campo.elemento.value;
            const mensajeError = campo.validar(valor);
            
            // Limpiar clases anteriores
            campo.elemento.classList.remove('invalido', 'valido');
            campo.error.textContent = '';
            
            if (mensajeError) {
                campo.elemento.classList.add('invalido');
                campo.error.textContent = mensajeError;
                return false;
            } else if (valor) {
                campo.elemento.classList.add('valido');
            }
            
            return true;
        }

        /**
         * Valida todos los campos
         */
        function validarFormulario() {
            let esValido = true;
            
            Object.keys(campos).forEach(function(key) {
                if (!validarCampo(campos[key])) {
                    esValido = false;
                }
            });
            
            return esValido;
        }

        /**
         * Limpia el formulario
         */
        function limpiarFormulario() {
            Object.keys(campos).forEach(function(key) {
                campos[key].elemento.value = '';
                campos[key].elemento.classList.remove('invalido', 'valido');
                campos[key].error.textContent = '';
            });
            estado.textContent = '';
            estado.className = 'form-status';
        }

        /**
         * Muestra mensaje de estado
         */
        function mostrarEstado(mensaje, tipo) {
            estado.textContent = mensaje;
            estado.className = 'form-status ' + tipo;
        }

        // Validación en tiempo real (Guía 4)
        Object.keys(campos).forEach(function(key) {
            const campo = campos[key];
            
            // Validar al perder el foco
            campo.elemento.addEventListener('blur', function() {
                validarCampo(campo);
            });
            
            // Validar mientras escribe (debounce)
            let timeout;
            campo.elemento.addEventListener('input', function() {
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    if (campo.elemento.value.trim()) {
                        validarCampo(campo);
                    } else {
                        campo.elemento.classList.remove('invalido', 'valido');
                        campo.error.textContent = '';
                    }
                }, 300);
            });
        });

        // Manejo del envío del formulario
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Limpiar estado anterior
            estado.textContent = '';
            estado.className = 'form-status';
            
            // Validar todos los campos
            if (validarFormulario()) {
                // Simular envío (en producción, aquí iría la petición AJAX)
                mostrarEstado('Formulario válido. Enviando mensaje...', 'success');
                
                // Simular éxito después de 1 segundo
                setTimeout(function() {
                    mostrarEstado('¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.', 'success');
                    limpiarFormulario();
                    
                    // Enfoque en el primer campo
                    campos.nombre.elemento.focus();
                }, 1000);
            } else {
                // Mostrar mensaje de error general
                mostrarEstado('Por favor, corrige los errores antes de continuar.', 'error');
                
                // Enfoque en el primer campo con error
                const primerError = Object.keys(campos).find(function(key) {
                    return campos[key].elemento.classList.contains('invalido');
                });
                
                if (primerError) {
                    campos[primerError].elemento.focus();
                }
            }
        });
    });
})();

