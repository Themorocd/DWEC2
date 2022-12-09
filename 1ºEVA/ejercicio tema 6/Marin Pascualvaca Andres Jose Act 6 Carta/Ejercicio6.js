window.onload = () => {
    const motivo = document.forms[0].motivo; //array
    const medalla = document.forms[0].medalla;
    const objetivo = document.forms[0].objetivo;
    const despedida = document.forms[0].despedida;
    const carta = document.getElementById("carta");

    const cambiocart = () => {
        //esto lo que hace es imprimir cada opcion seleccionada en un div que tengo en el html
        carta.innerHTML = motivotext + medallatext + objetivotext + despedidatext;
    };

    let motivotext = motivo.value; //digo que motivotext es la opcion que he elegido
    let medallatext = medalla.value;
    let objetivotext = objetivo.value;
    let despedidatext = despedida.value;

    cambiocart();
    motivo.forEach((x) =>
        x.addEventListener("change", function () {
            //recorro cada opcion hasta que encuentre la seleccionada y la meto en cambiocart()
            motivotext = this.value;
            cambiocart();
        })
    );
    medalla.forEach((x) =>
        x.addEventListener("change", function () {
            medallatext = this.value;
            cambiocart();
        })
    );
    objetivo.forEach((x) =>
        x.addEventListener("change", function () {
            objetivotext = this.value;
            cambiocart();
        })
    );
    despedida.forEach((x) =>
        x.addEventListener("change", function () {
            despedidatext = this.value;
            cambiocart();
        })
    );
};
