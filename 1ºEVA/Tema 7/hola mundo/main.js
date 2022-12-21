// Cuando se haga clic en el botón
$('#btn-hola-mundo').click(function() {
    // Envía una solicitud GET a la URL '/hola-mundo.php'
    $.ajax({
      url: 'http://localhost/ajax/hola-mundo.php',
      type: 'GET',
      // Si la solicitud es exitosa
      success: function(response) {
        // Muestra la respuesta del servidor en la div '#respuesta'
        $('#respuesta').html(response);
      }
    });
  });
  