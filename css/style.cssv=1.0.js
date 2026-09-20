.contenedor de marquesina {
    ancho: 100%;
    desbordamiento: oculto;
    espacio en blanco: nowrap;
    posición: relativa;
}

#título_sónico {
    pantalla: bloque en línea;
    color: blanco;
    peso de fuente: negrita;
    tamaño de fuente: 20px;
    sombra de texto: 2px 2px 4px rgba(0, 0, 0, 0.7);
    animación: marquesina 10s lineal infinita;
}

Marquesina @keyframes {
    0% { transformar: translateX(100%); }
    100% { transformar: translateX(-100%); }
}

a {
    decoración de texto: ninguna;
    color: rgba(255, 255, 255, 1);
}

a:hover {
    color: rgba(255, 255, 255, 1);
    decoración de texto: ninguna;
}

h1 {
    posición: absoluta;
    superior: -12px;
    izquierda: 50%;
    margen derecho: -50%;
    transformar: traducir(-50%, -50%);
    familia de fuentes: 'Open Sans Condensed', sans-serif;
}

#encabezado {
    posición: fija;
    arriba: 0;
    izquierda: 0;
    índice z: 100;
    transición: todos .5s;
    desbordamiento-y: automático;
  
    relleno: 20px 20px 0px;
    margen: 20px;
    radio del borde: 20px;
}

.nav-menu {
    pantalla: flex;
    flexión-dirección: columna;
    alinear-elementos: centro;
    alinear texto: centro;
    relleno: 0;
    ancho: 100%;
}

.nav-menu ul {
    estilo de lista: ninguno;
    relleno: 0;
    margen: 0;
    ancho: 100%;
}

.nav-menu p {
    color: #ffffff;
}

.nav-menu li {
    estilo de lista: ninguno;
    pantalla: flex;
    justificar-contenido: centro;
    ancho: 100%;
    margen: 10px 0;
}

.nav-menu a {
    pantalla: bloque en línea;
}

.nav-menu img {
    margen: 10px 0;
}

.móvil-nav-toggle {
    posición: fija;
    derecha: 15px;
    superior: 15px;
    índice z: 99;
    borde: 0;
    fondo: ninguno;
    tamaño de fuente: 24px;
    transición: todos .4s;
    esquema: ninguno !importante;
    altura de línea: 1;
    cursor: puntero;
    alinear texto: derecha;
}

.mobile-nav-toggle i {
    color: #fff;
}

.mobile-nav-active {
    desbordamiento: oculto;
}

.mobile-nav-active #encabezado {
    izquierda: 0;
}

.mobile-nav-active .mobile-nav-toggle i {
    color: #fff;
}

#jugador {
    margen: 0px automático;
    ancho: 100%;
    altura: 100%;
}

.background_hora {
    ancho: 196px;
    altura: 46px;
    color de fondo: #fff;
    posición: absoluta;
    derecha: 20px;
    abajo: 100px;
    radio del borde: 50px;
}

#reloj {
    margen: 0;
    posición: absoluta;
    parte superior: 50%;
    izquierda: 50%;
    margen derecho: -50%;
    transformar: traducir(-50%, -50%);
    tamaño de fuente: 30px;
    familia de fuentes: "Poppins", sans-serif;
    color: rojo;
}

.volver arriba {
    posición: fija;
    pantalla: ninguna;
    ancho: 40px;
    altura: 40px;
    radio del borde: 50px;
    derecha: 15px;
    abajo: 15px;
    fondo: #3a0d5c;
    color: #fff;
    transición: pantalla de 0,5 s de entrada y salida gradual;
    índice z: 99999;
}

.volver arriba i {
    tamaño de fuente: 24px;
    posición: absoluta;
    superior: 7px;
    izquierda: 8px;
}

.volver arriba:hover {
    color: #fff;
    fondo: #0678e3;
    transición: fondo .2s entrada-salida suave;
}

.ios-popup {
    color: #1C2529;
    pantalla: ninguna;
    posición: fija;
    parte superior: 50%;
    izquierda: 50%;
    transformar: traducir(-50%, -50%);
    color de fondo: rgba(0, 0, 0, 0.8);
    borde: 3px sólido rgba(255, 44, 13, 0.749);
    radio del borde: 15px;
    relleno: 20px;
    caja-sombra: 0 2px 10px rgba(0, 0, 0, 0.1);
    índice z: 1000;
}

.ios-popup p {
    margen: 0 0 10px;
}

.ios-popup img {
    ancho: 24px;
    alineación vertical: medio;
}

.superposición {
    pantalla: ninguna;
    posición: fija;
    arriba: 0;
    izquierda: 0;
    ancho: 100%;
    altura: 100%;
    fondo: rgba(0, 0, 0, 0.5);
    índice z: 999;
}

@media (ancho mínimo: 992px) {
    .nav-menu {
        ancho: 400px; /* Ancho para pantallas grandes */
    }
    .móvil-nav-toggle {
        pantalla: ninguna;
    }
}

@media (ancho máximo: 991px) {
    #encabezado {
        ancho:auto;
        fondo: #000000;
        borde derecho: 3px sólido #000000;
        izquierda: -300px;
        relleno: 20px 30px 100vh 10px;
        margen: 0px;
    }
}

@media (ancho máximo: 768px) {
    .nav-menu {
        ancho: 240px; /* Ancho para pantallas pequeñas */
    }
    #jugador {
        ancho: 100%;
        altura: 100%;
    }
    .background_hora {
        pantalla: ninguna;
    }
    #reloj {
        pantalla: ninguna;
    }
}