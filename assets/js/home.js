var elements = document.getElementsByClassName("cancel-order");
 

var myFunction = function( ) {
   
   
   var response=confirm("Do you really want to CANCEL your order");
if (response==true)
{ window.alert("ORDER CANCELLED");}
else
{ window.alert("ohh! cancelled by mistake ,order not cancelled");}







};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
};