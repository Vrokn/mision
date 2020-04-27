    $(document).ready(function() {
      $('.container2').hide();
        console.log('hola');      
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();
        console.log(name);
        console.log(email);
        console.log(password);             
        $.ajax({
          method: "POST",
          url: "http://localhost:3000/register",
          data: JSON.stringify({ name:name, email:email, password:password }),
          contentType: "application/json"
        }).done(function(data) {
            alert(data); // imprimimos la respuesta
          }).fail(function() {
            alert("Algo salió mal");
          }).always(function() {
            alert("Siempre se ejecuta")
          });
          $('.container1').hide();
          $('.container2').show();
        $.getJSON("http://localhost:3000/", function (data){
          $.each(data, function(i, item) {        
        $("<tr>").append(            
            $("<td>").html(item.name),
            $("<td>").html(item.email),
          )
          .appendTo("table");
            });
          });
           
        });