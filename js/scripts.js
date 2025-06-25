// script (con jQuery)
$(document).ready(function() {

    // Array de fotos
    const fotos = [
    {
        numero: 1,
        link: "https://i.postimg.cc/63Lj7DRz/img1.jpg",
    },
    {
        numero: 2,
        link: "https://i.postimg.cc/nztShHsC/img2.jpg",
    },
    {
        numero: 3,
        link: "https://i.postimg.cc/sgq0bPsP/img3.jpg",
    },
    {
        numero: 4,
        link: "https://i.postimg.cc/25WXYqSs/img4.jpg",
    },
    {
        numero: 5,
        link: "https://i.postimg.cc/ZKfQxtQM/img5.jpg",
    },
    {
        numero: 6,
        link: "https://i.postimg.cc/qvz5mDVM/img6.jpg",
    },
    {
        numero: 7,
        link: "https://i.postimg.cc/LXZ6k3vJ/img7.jpg",
    },
    {
        numero: 8,
        link: "https://i.postimg.cc/MKZ4BK9B/img8.jpg",
    },
    {
        numero: 9,
        link: "https://i.postimg.cc/sgNtsd9h/img9.jpg",
    },
    {
        numero: 10,
        link: "https://i.postimg.cc/YSLTSnby/img10.jpg",
    },
    {
        numero: 11,
        link: "https://i.postimg.cc/yYnMpSDn/img11.jpg",
    },
    {
        numero: 12,
        link: "https://i.postimg.cc/kXnryygB/img12.jpg",
    },
    {
        numero: 13,
        link: "https://i.postimg.cc/jS5GpdNT/img13.jpg",
    },
    {
        numero: 14,
        link: "https://i.postimg.cc/mDn7djQC/img14.jpg",
    },
    {
        numero: 15,
        link: "https://i.postimg.cc/85M8ZKvr/img15.jpg",
    },
    {
        numero: 16,
        link: "https://i.postimg.cc/1XrkQ8Jm/img16.jpg",
    },
    {
        numero: 17,
        link: "https://i.postimg.cc/PJjg9WbV/img17.jpg",
    },
    {
        numero: 18,
        link: "https://i.postimg.cc/hGHWbWXB/img18.jpg",
    },
    {
        numero: 19,
        link: "https://i.postimg.cc/SKXbMNNd/img19.jpg",
    },
    {
        numero: 20,
        link: "https://i.postimg.cc/Vkk8zWx3/img20.jpg",
    },
    {
        numero: 21,
        link: "https://i.postimg.cc/8zXVcrDs/img21.jpg",
    },
    {
        numero: 22,
        link: "https://i.postimg.cc/B66LDFPy/img22.jpg",
    },
    {
        numero: 23,
        link: "https://i.postimg.cc/fWYZCL7g/img23.jpg",
    },
    {
        numero: 24,
        link: "https://i.postimg.cc/76WCNLgL/img24.jpg",
    },
    {
        numero: 25,
        link: "https://i.postimg.cc/Nf4thzz6/img25.jpg",
    },
    {
        numero: 26,
        link: "https://i.postimg.cc/tCybMj2R/img26.jpg",
    },
    {
        numero: 27,
        link: "https://i.postimg.cc/sxGMHRc4/img27.jpg",
    },
    {
        numero: 28,
        link: "https://i.postimg.cc/8cgGDQGH/img28.jpg",
    },
    {
        numero: 29,
        link: "https://i.postimg.cc/Bt9H3v7v/img29.jpg",
    },
    {
        numero: 30,
        link: "https://i.postimg.cc/7h1kZsYy/img30.jpg",
    },
    {
        numero: 31,
        link: "https://i.postimg.cc/CKdSssJj/img31.jpg",
    },
    {
        numero: 32,
        link: "https://i.postimg.cc/hv7TNmrw/img32.jpg",
    },
    {
        numero: 33,
        link: "https://i.postimg.cc/wBW5SghC/img33.jpg",
    },
    {
        numero: 34,
        link: "https://i.postimg.cc/FKqmWknw/img34.jpg",
    },
    {
        numero: 35,
        link: "https://i.postimg.cc/brnQDnKP/img35.jpg",
    },
    {
        numero: 36,
        link: "https://i.postimg.cc/1RV0jx4d/img36.jpg",
    },
    {
        numero: 37,
        link: "https://i.postimg.cc/jSMRfF6x/img37.jpg",
    },
    {
        numero: 38,
        link: "https://i.postimg.cc/cLGByFPc/img38.jpg",
    },
    {
        numero: 39,
        link: "https://i.postimg.cc/YCM10h8c/img39.jpg",
    },
    {
        numero: 40,
        link: "https://i.postimg.cc/J4W7CJ4L/img40.jpg",
    },
    {
        numero: 41,
        link: "https://i.postimg.cc/9QYYYGzF/img41.jpg", 
    },
    {
        numero: 42,
        link: "https://i.postimg.cc/ZKVMTtFL/img42.jpg",
    }
];
    
    const swiperWrapper = $('.swiper-wrapper');
    
    // 1. Generar dinámicamente los slides para el carrusel del modal
    fotos.forEach((foto) => {
        const slide = $(`<div class="swiper-slide"><img src="${foto.link}" alt="Foto ${foto.numero}"></div>`);
        swiperWrapper.append(slide);
    });
    
    // 2. Inicializar Swiper para el modal
    const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    // 3. Asignar evento de clic a cada botón en la galería del carrusel de Bootstrap
    fotos.forEach((foto, index) => {
        // Seleccionamos el botón por su ID único
        $('#foto' + foto.numero).on('click', function() {
            // Mostramos el modal con un efecto de aparición
            $('#modal-carrusel').css('display', 'flex').hide().fadeIn(); 
            // Sincronizamos el carrusel del modal para que muestre la imagen correcta
            swiper.slideToLoop(index, 0); // El '0' es para que el cambio sea instantáneo
        });
    });

    // 4. Asignar evento para cerrar el modal
    $('.cerrar-modal').on('click', function() {
        $('#modal-carrusel').fadeOut(); // Ocultamos el modal con un efecto de desaparición
    });

    // 5. Asignar evento para cerrar el modal con la tecla "Esc"
    $(document).on('keydown', function(event) {
        // Verificamos si la tecla presionada es "Escape" y si el modal está visible
        if (event.key === "Escape" && $('#modal-carrusel').is(':visible')) {
            $('#modal-carrusel').fadeOut();
        }
    });
});
