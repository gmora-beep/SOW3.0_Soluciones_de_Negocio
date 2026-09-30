function cargarVista(vista){
    fetch(`views/${vista}.html`)
        .then(response => response.text())
        .then(html => {
            document
                .getElementById("view-container")
                .innerHTML = html;
        });

}
