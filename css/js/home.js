function mostrarSeccion(seccion){
    const contenedor =
        document.getElementById(
            "home-content"
        );
    if(seccion === "equipo"){
        contenedor.innerHTML = `
        <div class="info-card">
            <h2>Equipo de trabajo</h2>
            <p>Líder de Soluciones de Negocio</p>
            <p>Responsables por dominio</p>
            <ul>
                <li>Clientes</li>
                <li>Plataforma de ventas</li>
                <li>Originación</li>
                <li>Core Captación y Crédito</li>
                <li>Plataformas de Clientes</li>
                <li>Regulatorios</li>
            </ul>
        </div>
        `;
    }
    if(seccion === "ventanilla"){
        contenedor.innerHTML = `
        <div class="info-card">
            <h2>Ventanilla Única de Soluciones</h2>
            <p>
                Punto de entrada para requerimientos,
                iniciativas, mejoras e incidencias.
            </p>
            <button class="btn-guardar">
                Ir a ClickUp
            </button>
        </div>
        `;
    }
    if(seccion === "que-hacemos"){
        location.reload();
    }
}
