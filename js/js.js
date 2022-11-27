function total(){
   var totalFinal = 0;
   var descuento = 0;
   var precio = 200;


   var cantidad = document.getElementById('cantidad').value;

   var selec = document.getElementById('categoria');
   var categoria = selec.options[selec.selectedIndex].value;

   //descuentos
   switch(categoria){
    case 'Estudiante':
        descuento = 0.8;
        break
    case 'Trainee':
        descuento = 0.5;
        break;
    case 'Junior':
        descuento = 0.15;
        break;
   }


   totalFinal = (precio - precio * descuento) * cantidad;

   document.getElementById('totalPagar').value = 'Total a Pagar: $' + totalFinal;
}

