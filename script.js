//SELECCIONES
// Elements DIV que poseen .module
var sel1 = $("div.module");
console.log(sel1);
// # Elements ocultos
var sel2 = $("body:hidden").length;
console.log(sel2);
// Filas impares de la tabla
var sel3 = $('#tech tr:even');
console.log(sel3);

//RECORRER DOM
// Select "input" then ir al formulario and add a class.
var dom1 = $("input").closest("form");
dom1.addClass('formClass');
console.log(dom1);

//Select item ".current" inside #myList y remover class; then add ".current" to next item.
$("#myList").find("li").eq(4).removeClass("current");
$("#myList").find("li").eq(5).addClass("current");
console.log('yes');



//Select 1st item of #slideshow; add .current al mismo then add .disabled a los elementos hermanos. **
var dom4 = $('#slideshow.current').siblings();
dom4.addClass('disabled;')
var dom3 = $('#slideshow').first();
dom3.addClass('current');
console.log(dom4, dom3);
//MANIPULACION
// Add 5 new ítems al final de ul #myList.
var myItems = [],
    $myList = $("#myList");

for (var i = 8; i < 14; i++) {
    myItems.push("<li>List item " + i + "</li>");
}

$myList.append(myItems.join(""));

// Remover los ítems impares de la lista.
var itemOdd = $('#myList li:even');
itemOdd.remove('li');

// Añadir otro elemento h2 y otro párrafo al último div.module.
var newTitle = $('<h2>Title 2</h2>');
newTitle.appendTo('#myList');

newTitle.insertAfter('p:last');

var newParagraph = $('<p>Second paragraph</p>');
newParagraph.appendTo('#myList');

newParagraph.insertAfter('h2:last');

//Añadir otra opción al elemento select; darle a la opción añadida el valor "Wednesday". **
var newOption = $('<option value="wednesday">Wednesday</option>');
newOption.appendTo('select');

newOption.insertAfter('option:last');

//Añadir un nuevo div.module a la página después del último; luego añadir una copia de una de las imágenes existentes dentro del nuevo div.
var newDiv = $('<div class="module"> <img src="images/mm.jpg" alt="Marce" /></div>')
    newDiv.appendTo('#main');

    newDiv.insertAfter('div.module:last');
