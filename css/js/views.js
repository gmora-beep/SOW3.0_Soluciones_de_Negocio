function cargarVista(vista){
    fetch(`views/${vista}.html`)
        .then(r => r.text())
        .then(html => {
            document
                .getElementById(
                    "view-container"
                )
                .innerHTML = html;
            document
                .querySelectorAll(
                    ".nav-icon"
                )
                .forEach(el =>
                    el.classList.remove(
                        "activo"
                    )
                );
            if(vista === "home"){
                document
                    .getElementById("menu-home")
                    ?.classList.add("activo");
                }
            if(vista === "nuevo-sow"){
                document
                    .getElementById("menu-sow")
                    ?.classList.add("activo");
                    if(typeof inicializarFecha === "function"){
                        inicializarFecha();
                    }
                }
            if(vista === "historial"){
                document
                    .getElementById("menu-historial")
                    ?.classList.add("activo");
                }
            if(vista === "admin"){
                document
                    .getElementById("menu-admin")
                    ?.classList.add("activo");
                }
        });
}
