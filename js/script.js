/* Random Change Color */

setInterval( function() {

    var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    var randomColor1 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    var randomColor2 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    var randomColor3 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    var randomColor4 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

    document.getElementById("icon_1").style.color = randomColor1;
    document.getElementById("icon_2").style.color = randomColor2;
    document.getElementById("icon_3").style.color = randomColor3;
    document.getElementById("icon_4").style.color = randomColor4;
    document.getElementById("h3_color1").style.color = randomColor;
    document.getElementById("h3_color2").style.color = randomColor;
    document.getElementById("h3_color3").style.color = randomColor;
    document.getElementById("h3_color4").style.color = randomColor;

}, 1000);



/* Button scrolling */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("go_btn").style.display = "block";
  } else {
    document.getElementById("go_btn").style.display = "none";
  }
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
$(document).ready(function() {
    $("#checkout").click(function() {
        event.preventDefault();




    var pizzaInput = $("#type").val();

        pizzaSelect = new pizza(pizzaInput);
        pizzaSelect.nameSize();
        // alert(pizzaSelect.nameSize());

    var sizeInput = $("#size").val();

    var pizzaSize = new size(sizeInput);
        pizzaSize.priceSize();
        // alert(pizzaSize.priceSize());

    var crustInput = $("#crust").val();
    
    var crustSize = new crust(crustInput);
        crustSize.crustPrice();
        // alert(crustSize.crustPrice());


    var toppingInput = $("#toppings").val();

    var toppingSize = new topping(toppingInput);
        toppingSize.toppingPrice();
        // alert(toppingSize.toppingPrice());


    var quantityInput = $("quantity").val();

    var  quantitySize = new quantity (quantityInput);
         quantitySize.quantityPrice();
        //  alert(quantitySize.quantityPrice());

   // calcTotal to calculate the total pizza summation

    var pizzaPrice = (parseInt(parseInt(pizzaSize.priceSize()) + parseInt(crustSize.crustPrice()) + parseInt(toppingSize.toppingPrice())));
    $("#summation").append(pizzaPrice);

    // S-size, C-crust, T-toppings N-name

    var pizzaS = (pizzaSize.priceSize());
    $("#psize").append(pizzaS);

    var pizzaC = (crustSize.crustPrice());
    $("#cprice").append(pizzaC);

    var pizzaT = (toppingSize.toppingPrice());
    $("#tprice").append(pizzaT);

    var pizzaN = (pizzaSelect.nameSize());
    $("#ptype").append(pizzaN);
    event.preventDefault();
    
    });
})