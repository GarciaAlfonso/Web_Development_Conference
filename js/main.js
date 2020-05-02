

(function () {
  document.addEventListener("DOMContentLoaded", function () {
      
    var L = window.L;

    if (L) {
      var map = L.map('mapa').setView([-34.610222, -58.41973], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-34.610222, -58.41973]).addTo(map)
        .bindPopup('GDL WEB CAMP.<br> Buenos Aires 2020.')
        .openPopup();
    }
    

    
    
    
  
    
    //Campos Datos de Usuarios

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");

    //Campos Pases

    const pasePorDia = document.getElementById("pasePorDia");
    const paseDosDias = document.getElementById("paseDosDias");
    const paseCompleto = document.getElementById("paseCompleto");

    //Botones y Divs

    const calcular = document.getElementById("calcular");
    const errorDiv = document.getElementById("error");
    const botonRegistro = document.getElementById("btnRegistro"); //Boton PAGAR
    const listaProductos = document.getElementById("listaProductos");
    const total = document.getElementById("sumaTotal");

    //Extras

    const camisas = document.getElementById("camisa_evento");
    const etiquetas = document.getElementById("etiquetas");

    if(document.getElementById('calcular')){

    
    calcular.addEventListener("click", calcularMontos);
  
    pasePorDia.addEventListener("blur", mostrarDias);

    paseDosDias.addEventListener("blur", mostrarDias);
  
    paseCompleto.addEventListener("blur", mostrarDias);

    


    //Validar Campos 

    nombre.addEventListener("blur", validarCampos);
    apellido.addEventListener("blur", validarCampos);
    email.addEventListener("blur", validarCampos);
    email.addEventListener("blur", validarEmail);

    function validarEmail(){
        if (this.value.indexOf("@") > -1) {
            errorDiv.style.display = 'none';
            this.style.border = '1px solid #cccccc'
        }else {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = 'Ingresa un Email Valido';
            this.style.border = '1px solid red';
            errorDiv.style.border = '1px solid red';
        }
    }

    function validarCampos(){
        if (this.value === '') {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = 'Éste Campo es Obligatorio!!';
            this.style.border = '1px solid red';
            errorDiv.style.border = '1px solid red';
        }else {
            errorDiv.style.display = 'none';
            this.style.border = '1px solid #cccccc'
        }
    }

    
    //calcular total

    function calcularMontos() {
      const regalo = document.getElementById("regalo");

      if (regalo.value === "") {
        alert("Debes Elegir un Regalo");
        regalo.focus();
      } else {
        const boletoDia = pasePorDia.value,
          boletoDosDias = paseDosDias.value,
          boletoCompleto = paseCompleto.value,
          cantidadCamisas = camisas.value,
          cantidadEtiquetas = etiquetas.value;

        const totalPagar =
          (boletoDia * 30) +
          (boletoDosDias * 45) +
          (boletoCompleto * 50) +
          ((cantidadCamisas * 10) * 0.90) +
          (cantidadEtiquetas * 2);


          const listadoProductos = [];

          if (boletoDia >= 1) {
            listadoProductos.push(`${boletoDia} Pases por día`);
          }
          if (boletoDosDias >= 1) {
            listadoProductos.push(`${boletoDosDias} Pases por 2 días`);
          }
          if (boletoCompleto >= 1) {
            listadoProductos.push(`${boletoCompleto} Pases Completos`);   
          }
          if(cantidadCamisas >= 1) {
            listadoProductos.push(`${cantidadCamisas} Camisas`);
          }
          if (cantidadEtiquetas >= 1) {
            listadoProductos.push(`${cantidadEtiquetas} Etiquetas`);
          }
        
          listaProductos.style.display = 'block';

          listaProductos.innerHTML = '';

          for(let i = 0; i < listadoProductos.length; i++) {
              listaProductos.innerHTML += listadoProductos[i] + '<br/>';
          }

          
          total.innerHTML = (`$ ${(totalPagar.toFixed(2))}`);
          
      }


    }
    
    //Mostrar Días


    function mostrarDias(){
        
        var boleto;
        
        const boletoDia = pasePorDia.value,
          boletoDosDias = paseDosDias.value,
          boletoCompleto = paseCompleto.value;

          const diasElegidos = [];

          if (boletoDia > 0) {
              diasElegidos.push('viernes');
          }
          if (boletoDosDias > 0) {
              diasElegidos.push('viernes', 'sabado');
          }
          if (boletoCompleto > 0) {
              diasElegidos.push('viernes', 'sabado', 'domingo')
          }

          for (let i = 0; i < diasElegidos.length; i++) {
              document.getElementById(diasElegidos[i]).style.display = 'block';
          }
          
        
    }

    }

    

  }); // DOM CONTENT LOADED

  

})();

$(function() {


  //Menu Responsive

  $('.menu-movil').on('click', function() {

    // $('.navegacion-principal').slideToggle();

    $('nav.navegacion-principal').slideToggle();
    
  });




  //Programa de Conferencias

  $('.programa-evento .info-curso:first').show(); //Muestra siempre el primero sin dar click

  $('.menu-programa a:first').addClass('activo');//Añade clase activo para mostrar el triangulo

  $('.menu-programa a').on('click', function() {

    $('.menu-programa a').removeClass('activo');

    $(this).addClass('activo');

    $('.ocultar').hide();

    let enlace = $(this).attr('href');

    $(enlace).fadeIn(1000);
    
    return false;
  });

  //Animacion de Numero 

  $('.resumen-evento li:nth-child(1) p').animateNumber({number:6}, 1500);
  $('.resumen-evento li:nth-child(2) p').animateNumber({number:15}, 1500);
  $('.resumen-evento li:nth-child(3) p').animateNumber({number:3}, 1500);
  $('.resumen-evento li:nth-child(4) p').animateNumber({number:9}, 1500);

  //Contador Cuenta Regresiva

  $('.cuenta-regresiva').countdown('2020/12/31 23:59:59', function(event){
    $('#dias').html(event.strftime('%D'));
    $('#horas').html(event.strftime('%H'));
    $('#minutos').html(event.strftime('%M'));
    $('#segundos').html(event.strftime('%S'));

  });


  //Texto principal modificado

  $('.nombre-sitio').lettering();

  //Barra Fija con Scroll

  let windowHeight = $(window).height();

  let barraAltura = $('.barra').innerHeight();

  
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();

    if (scroll > windowHeight) {
      $('.barra').addClass('fixed');
      $('body ').css({'margin-top': barraAltura + 'px'});
      
    }else {
      $('.barra').removeClass('fixed');
      $('body').css({'margin-top':'0px'});
    }

  });


});












