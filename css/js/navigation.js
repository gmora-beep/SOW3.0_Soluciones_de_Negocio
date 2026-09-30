document.addEventListener("click", function(e){
    const enlace = e.target.closest("a[href]");
    if(!enlace) return;
    const url = enlace.getAttribute("href");
    if(
        !url ||
        url.startsWith("#") ||
        url.startsWith("http")
    ){
        return;
    }
    e.preventDefault();
    document.body.classList.add("page-exit");
    setTimeout(() => {
        window.location.href = url;
    }, 220);
});
