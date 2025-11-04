(function ($, document) {
    'use strict';
    
    const scope = {
        document: null,
        wrapper: null,
        slider: null,
        items: [],
        width: 0,
        height: 0,
        currentIndex: 0
    };

    function getUnit() {
        return scope.height === 100 ? 'vh' : 'px';
    }

    function init() {
        // Esperar a que jQuery esté disponible (con defer)
        if (typeof $ === 'undefined' || typeof jQuery === 'undefined') {
            console.warn('Slider: jQuery no está disponible aún');
            return;
        }
        $(document).ready(onDocumentReady);
    }

    function onDocumentReady() {
        scope.document = $(document);
        scope.wrapper = scope.document.find("#slider_wrapper");
        scope.slider = scope.wrapper.find("#slider");
        
        // Verificar que existan los elementos
        if (scope.wrapper.length === 0 || scope.slider.length === 0) {
            console.warn('Slider: No se encontró slider_wrapper o slider');
            return;
        }
        
        scope.height = scope.wrapper.data('height');
        scope.width = scope.wrapper.data('width');
        
        // Valores por defecto: usar 100vh para altura completa
        if (!scope.height) scope.height = 100;
        if (!scope.width) scope.width = 100;
        
        // El height está definido en CSS como 100vh, no necesitamos cambiarlo
        // Solo asegurarnos de que el slider tenga las dimensiones correctas
        scope.slider.css({ 
            position: 'relative', 
            width: '100%', 
            height: '100%',
            overflow: 'hidden'
        });
        
        // Obtener los items del slider
        scope.items = getItems(scope.slider);

        // Verificar que hay items
        if (scope.items.length === 0) {
            console.warn('Slider: No se encontraron slides');
            return;
        }

        // Iniciar slider automático
        if (scope.items.length > 1) {
            setInterval(nextSlider, 5000);
        }
    }

    function getItems(parent) {
        const items = [];
        parent.find('li').each((index, item) => {
            const itemNode = $(item);
            const imgNode = itemNode.find('img');

            // Verificar que exista la imagen
            if (imgNode.length === 0) {
                console.warn('Slider: No se encontró imagen en el slide', index);
                return;
            }

            // Obtener datos de la imagen primero
            const imageData = {
                src: imgNode.attr('src'),
                bgPosition: imgNode.data('bg-position') || 'center center',
                bgFit: imgNode.data('bg-fit') || 'cover',
                bgRepeat: imgNode.data('bg-repeat') || 'no-repeat',
                bgParallax: imgNode.data('bg-parallax'),
            };

            // Establecer posición inicial del slide
            if (index === 0) {
                itemNode.css({
                    top: 0,
                    left: 0,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(' + imageData.src + ')',
                    backgroundSize: imageData.bgFit,
                    backgroundPosition: imageData.bgPosition,
                    backgroundRepeat: imageData.bgRepeat,
                    backgroundAttachment: 'fixed'
                });
                // Agregar clase de zoom al primer slide
                itemNode.addClass('zoom-in');
            } else {
                itemNode.css({
                    top: '100%',
                    left: 0,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(' + imageData.src + ')',
                    backgroundSize: imageData.bgFit,
                    backgroundPosition: imageData.bgPosition,
                    backgroundRepeat: imageData.bgRepeat,
                    backgroundAttachment: 'fixed'
                });
            }

            // Ocultar la imagen original ya que usamos background-image
            imgNode.css({
                display: 'none'
            });

            items.push({ node: itemNode, imageData });
        });
        return items;
    }

    function nextSlider() {
        if (scope.items.length <= 1) {
            return; // No hay suficientes slides para animar
        }

        const currentItem = scope.items[scope.currentIndex].node;
        const nextIndex = (scope.currentIndex + 1) % scope.items.length;
        const nextItem = scope.items[nextIndex].node;

        // Preparar el siguiente slide
        nextItem.css({ top: '100%' });

        // Agregar clase para zoom al siguiente slide
        nextItem.addClass('zoom-in');

        // Animar el slide actual hacia arriba y el siguiente hacia arriba también
        currentItem.animate({ top: '-100%' }, 1000, 'swing');
        nextItem.animate({ top: '0' }, 1000, 'swing', function() {
            // Cuando termine la animación, reposicionar el slide actual al final
            currentItem.css({ top: '100%' });
            // Remover clase de zoom después de un breve momento
            setTimeout(function() {
                nextItem.removeClass('zoom-in');
            }, 100);
            scope.currentIndex = nextIndex;
        });
    }

    init();

})(jQuery, document);
