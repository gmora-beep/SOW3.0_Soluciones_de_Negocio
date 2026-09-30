function cargarHeader(menuActivo){
    fetch("components/header.html")
        .then(response => response.text())
        .then(data => {
            document
                .getElementById("header-container")
                .innerHTML = data;
            document
                .getElementById(menuActivo)
                ?.classList.add("activo");
            const btnMenu =
                document.getElementById("btnMenu");
            if(btnMenu){
                btnMenu.addEventListener(
                    "click",
                    function(e){
                        e.preventDefault();
                        document
                            .getElementById("menuContenido")
                            ?.classList.toggle("hidden");
                        document
                            .querySelector(".menu-principal")
                            ?.classList.toggle("menu-colapsado");
                    }
                );
            }
        });
}
