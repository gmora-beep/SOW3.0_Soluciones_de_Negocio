function agregarBeneficioCuantitativo(){
    const tabla =
        document.getElementById(
            "beneficios-cuantitativos"
        );
    tabla.insertAdjacentHTML(
        "beforeend",
        `
        <tr>
            <td><input type="text"></td>
            <td><input type="text"></td>
        </tr>
        `
    );
}
function agregarBeneficioCualitativo(){
    const tabla =
        document.getElementById(
            "beneficios-cualitativos"
        );
    tabla.insertAdjacentHTML(
        "beforeend",
        `
        <tr>
            <td><input type="text"></td>
        </tr>
        `
    );
}
function agregarKPI(){
    const tabla =
        document.getElementById(
            "kpis"
        );
    tabla.insertAdjacentHTML(
        "beforeend",
        `
        <tr>
            <td><input type="text"></td>
            <td><input type="text"></td>
            <td><input type="text"></td>
        </tr>
        `
    );
}
function agregarNecesidadFuncional(){
    const tabla =
        document.getElementById(
            "necesidades-funcionales"
        );
    const total =
        tabla.rows.length + 1;
    const id =
        "NF-" +
        total.toString().padStart(
            2,
            "0"
        );
    tabla.insertAdjacentHTML(
        "beforeend",
        `
        <tr>
            <td>${id}</td>
            <td>
                <input type="text">
            </td>
        </tr>
        `
    );
}
function agregarHU(){
    const tabla =
        document.getElementById(
            "historias-usuario"
        );
    const total =
        tabla.rows.length + 1;
    const id =
        "HU-" +
        total.toString().padStart(
            2,
            "0"
        );
    tabla.insertAdjacentHTML(
        "beforeend",
        `
        <tr>
            <td class="hu-id">
                ${id}
            </td>
            <td>
                <textarea
                    placeholder="Como..., quiero..., para..."
                    class="hu-texto">
                </textarea>
            </td>
            <td>
                <textarea
                    placeholder="Ingrese los criterios de aceptación"
                    class="hu-criterios">
                </textarea>
            </td>
        </tr>
        `
    );
}
function inicializarFecha(){
    const hoy = new Date();
    const fechaFormateada =
        hoy.toLocaleDateString(
            "es-MX",
            {
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        );
    const fecha =
        document.getElementById(
            "fecha-actual"
        );
    if(fecha){
        fecha.textContent =
            fechaFormateada;
    }
}


function exportarPDF(){
    const acciones =
        document.querySelectorAll(
            ".acciones-finales, .acciones-tabla"
        );
    const encabezados =
        document.querySelectorAll(
            ".pdf-header"
        );
        encabezados.forEach(
        e => e.classList.add(
            "pdf-hidden"
        )
    );
    acciones.forEach(
        a => a.classList.add(
            "pdf-hidden"
        )
    );
    const elemento =
        document.getElementById(
            "sow-documento"
        );
    const opciones = {
        margin: 3,
        filename: 'SOW.pdf',
        image: {
            type: 'jpeg',
            quality: 1
        },
        html2canvas: {
            scale: 2,
            scrollY: 0
        },
        jsPDF: {
            unit: 'mm',
            format: 'a2',
            orientation: 'landscape'
        }
    };
    html2pdf()
        .set(opciones)
        .from(elemento)
        .save()
        .then(() => {
                acciones.forEach(
                a => a.classList.remove(
                    "pdf-hidden"
                )
            );
                encabezados.forEach(
                e => e.classList.remove(
                    "pdf-hidden"
                )
            );    
        });
    }
function agregarProceso(){
    console.log("agregarProceso ejecutada");
    const tabla =
        document.getElementById(
            "procesos-impactados"
        );
    tabla.insertAdjacentHTML(
        "beforeend",
        `
        <tr>
            <td>
                <select>
                    <option>Seleccionar</option>
                    <option>ORIGINACIÓN DxN</option>
                    <option>ORIGINACIÓN CAPTACIÓN</option>
                    <option>VENTA ASISTIDA</option>
                    <option>CSB PROMOTOR</option>
                    <option>PUC</option>
                    <option>APP DE INVERSIONES</option>
                    <option>SPEI</option>
                    <option>PROCESOS CORE</option>
                    <option>BANCA POR INTERNET</option>
                    <option>ATENCIÓN AL CLIENTE</option>
                </select>
            </td>
            <td>
                <input type="text">
            </td>
            <td>
                <input type="text">
            </td>
        </tr>
        `
    );
}
