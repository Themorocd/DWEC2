var x = 1;

        var identificador;

        function empezar(){

            identificador= setInterval(() => {

                var cambio = document.getElementById("color");

            if (x < 5) {

                if (x % 2 == 0) {
                    cambio.style.backgroundColor = "black";
                    x++;
                } else {
                    cambio.style.backgroundColor = "yellow";
                    x++;
                }
            } else {
                alert("YA SE HAN PRODUCIDO 5 CAMBIOS")
                clearInterval(identificador);

            }

                
            }, 1000);

        }