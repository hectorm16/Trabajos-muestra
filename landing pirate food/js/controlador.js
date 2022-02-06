var listaProductos=[ //informacion
    {
        id:1,
        nombreProducto:'Cacerola de langostinos a la mantequilla',
        imagen:'1.png',
        descripción:'Langostinos hervidos en agua condimentada sasonas y bañados en mantequilla con esparragos al vapor con arroma a oregano.',
        precio:123.00
    },
    {
        id:2,
        nombreProducto:'Lasaña relleno de camarón',
        imagen:'2.png',
        descripción:' Lasaña rellena de camarones preparados y azados en orno con verduras acompaña de una salsa verde y aguacate con huevo.',
        precio:160.00
    },
    {
        id:3,
        nombreProducto:'Berengena y lancilla',
        imagen:'3.png',
        descripción:'Berengenas defloradas al vapor pasas por aceite vegetal y envueltas en lancillas tiernas fermentadas con hiervas.',
        precio:173.00
    },
    {
        id:4,
        nombreProducto:' Ceviche a la plancha',
        imagen:'4.png',
        descripción:'Plato de verduras para preparar a la plancha junto con ceviche cortados finamente.',
        precio:120.00
    },
    {
        id:5,
        nombreProducto:'Sushi de tres pescados',
        imagen:'5.png',
        descripción:'Sushi elaborado de tres pescados y bañados en tres salsas diferentes.',
        precio:173.00
    },
    {
        id:6,
        nombreProducto:' Combo sushi y kimpap',
        imagen:'6.png',
        descripción:'Sushi y kimpap de pesacado elavorado con diferentes verduras acompañado con de salsa tradicionar.',
        precio:120.00
    },
    {
        id:7,
        nombreProducto:' Filete de tres peces',
        imagen:'7.png',
        descripción:'Filetes preparados y bañados en tres salsas diferentes que incluye frutos secos',
        precio:173.00
    },
    {
        id:8,
        nombreProducto:'Sopa de fideos y mariscos',
        imagen:'8.png',
        descripción:'Sopa de fideos y mariscos frescos con caldo preparado para su baño realizado por el cliente.',
        precio:120.00
    },
    {
        id:9,
        nombreProducto:'Sushi de filete fino',
        imagen:'9.png',
        descripción:'Sushi elavorado con base de arroz y filete delgado con aguacate y slasa de huevo.',
        precio:120.00
    }
];

var listaCombos=[ // informacion
    {
        id:1.1,
        nombreProducto:'Camarones asados y marinados en hierbas',
        imagen:'21.png',
        descripción:'Camarones asados, con una base de hierbas y sasonados con las misma  con arros de cebolla.',
        precio:360.00
    },
    {
        id:2.2,
        nombreProducto:'Sushi de filete delgado con shipotle',
        imagen:'10.png',
        descripción:'Sushi de filetes marinados y condimentados con shipotle embueltos en una capa de arros y otra de filete.',
        precio:230.00
    },
    {
        id:3.3,
        nombreProducto:'Sopa de fideos con camaron y huevo',
        imagen:'11.png',
        descripción:'Sopa de fideos con camaron y huevo con verduras y caldo.',
        precio:430.00
    },
    {
        id:4.4,
        nombreProducto:'Espageti con Ostras',
        imagen:'12.png',
        descripción:'Espaquetis con ostras salteado con aceite de pescado.',
        precio:360.00
    },
    {
        id:5.5,
        nombreProducto:'Ostras',
        imagen:'13.png',
        descripción:'Ostras asadas con salsa roja.',
        precio:280.00
    },
    {
        id:6.6,
        nombreProducto:'Langostas tiernas',
        imagen:'14.png',
        descripción:'Langostas al vapor y pasadas por mantequlla para salteralas',
        precio:360.00
    },
    {
        id:7.7,
        nombreProducto:'Pescado',
        imagen:'17.png',
        descripción:'Pescado con salsa verde y verduras al vapor.',
        precio:460.00
    },
];

// revisar ortografia de lo que esta arriba de este elemento.

var Carrito=[];

 function MostrarProducto(){ // esta funcion muestra las targetas de la lista de productos

    listaProductos.forEach(function (element, i){
        document.getElementById('listaProducto').innerHTML +=
        `<div class="col-12 col-sm-6 col-md-4 col-lg-4 jus d-flex justify-content-center ">
          <div  id=${element.id}  class="card fondoCard mb-3" onclick="mostrarModal(${element.id})" style="width: 30rem;">
            <img src="./images/${element.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.nombreProducto}</h>
            </div>
            </div>
          </div>
        </div>`
       
    });   
}
MostrarProducto();  

function MostrarCombos(){ // muestra los combos
    listaCombos.forEach(function (element, i){ // eswta funcion muestra las tragetas de la lista de combos.
        document.getElementById('listaCombo').innerHTML +=
        `<div class="col-12 col-sm-6 col-md-4 col-lg-4 jus d-flex justify-content-center ">
          <div  id=${element.id}  class="card fondoCard mb-3" onclick="mostrarModal(${element.id})" style="width: 30rem;">
            <img src="./images/${element.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.nombreProducto}</h>
            </div>
            </div>
          </div>
        </div>`
       
    }); 

}
MostrarCombos();

function mostrarModal(id){ // esta funcion abre la ventana modal de pedidos
    $('#idModalPedido').modal('show');
    console.log('Esta es la seccion de pedidos');

    listaProductos.forEach(function(element, i){
        console.log(id)
        if(element.id==id){
            document.getElementById('cuerpoModal').innerHTML =
            `
            <div class="row">
                  <div class="col-4">
                  <img src="./images/${element.imagen}" class="card-img-top" alt="...">
                  </div>
                  <div class="col-8">
                      <h6><b>${element.nombreProducto}</b></h6>
                      <p>${element.descripción}</p>
                      <h6> Precio:Lps${element.precio}</h6>
                </div>

              </div>
              <div class="row bt-2 fs-6">
                  <div class="col-4  rounded-3 mt-3">
                  Ingrese cantidad: 
                     <input id="cantidad" type="number" class="form-control">
                  </div>
    
              </div>
        
           </div>
           <div id="carrito" class="modal-footer">
           <button  type="button" class="btn barraModal" onclick="cerrarModal()" onclick="verCarrito(${element.id})"><i class="fas fa-shopping-cart"></i></button>
           </div>
          
            `
        }
    });

    listaCombos.forEach(function(element, i){
        console.log(id)
        if(element.id==id){
            document.getElementById('cuerpoModal').innerHTML =
            `
            <div class="row">
                  <div class="col-4">
                  <img src="./images/${element.imagen}" class="card-img-top" alt="...">
                  </div>
                  <div class="col-8">
                      <h6>${element.nombreProducto}</h6>
                      <p>${element.descripción}</p>
                      <h6 class="precio"> Precio:Lps${element.precio}</h6>
                </div>

              </div>
  
              <div class="row bt-2 fs-6">
                  <div class="col-4 rounded-3 mt-3">
                  Ingrese cantidad: 
                     <input type="number" class="form-control">
                  </div>
    
              </div>
              <div id="carrito" class="modal-footer">
                 <button  type="button" class="btn barraModal" onclick="cerrarModal()" onclick="verCarrito(${element.id})"><i class="fas fa-shopping-cart"></i></button>
              </div>
            `
        }
    });
}

function cerrarModal(){ // funcion encargada de cerrar modal de pedidos
    $('#idModalPedido').modal('hide'); 
}
function abrirModal(){
    $('#modalCompra').modal('show');
    console.log('Esta es la seccion de card');
}

function abrirModalExito(){
    $('#modalExito').modal('show');
    console.log('Esta es la seccion de exito');
}
function cerrarModalG(){
    $('#modalExito').modal('hide'); 
    $('#modalCompra').modal('hide'); 
    regionVisibleLandy();
}

 function regionVisiblePreguntas(){ //muestra las preguntas
   document.getElementById('preguntas').style.display='inline';
   document.getElementById('landy').style.display='none';
   document.getElementById('listaProductos').style.display='none';
   document.getElementById('contactos').style.display='none';
   document.getElementById('listaCombos').style.display='none';
   document.getElementById('cuerpoCarrito').style.display='none';
}

function regionVisibleLandy(){ // muestra la landy
    document.getElementById('landy').style.display='inline';
    document.getElementById('preguntas').style.display='none';
    document.getElementById('listaProductos').style.display='none';
    document.getElementById('contactos').style.display='none';
    document.getElementById('listaCombos').style.display='none';
    document.getElementById('cuerpoCarrito').style.display='none';
 }

 function regionVisibleListCombos(){ // muestra los combos
    document.getElementById('preguntas').style.display='none';
    document.getElementById('listaCombos').style.display='inline';
    document.getElementById('landy').style.display='none';
    document.getElementById('listaProductos').style.display='none';
    document.getElementById('contactos').style.display='none';
    document.getElementById('cuerpoCarrito').style.display='none';
 }

 function regionVisibleListProductos(){ // muestra los productos
    document.getElementById('preguntas').style.display='none';
    document.getElementById('landy').style.display='none';
    document.getElementById('listaProductos').style.display='inline';
    document.getElementById('contactos').style.display='none';
    document.getElementById('listaCombos').style.display='none';
    document.getElementById('cuerpoCarrito').style.display='none';
 }

function regionVisibleContactos(){ // muestra los contactos
    document.getElementById('contactos').style.display='inline';
    document.getElementById('preguntas').style.display='none';
    document.getElementById('landy').style.display='none';
    document.getElementById('listaProductos').style.display='none';
    document.getElementById('listaCombos').style.display='none';
    document.getElementById('cuerpoCarrito').style.display='none';
 }

 function regionVisibleCarrito(){ // muestra los contactos
    document.getElementById('cuerpoCarrito').style.display='inline';
    document.getElementById('contactos').style.display='none';
    document.getElementById('preguntas').style.display='none';
    document.getElementById('landy').style.display='none';
    document.getElementById('listaProductos').style.display='none';
    document.getElementById('listaCombos').style.display='none';
 }

function verCarrito(id){

    listaProductos.forEach(function(element, i){
    if(element.id==id){
        Carrito.push(
        {
            id:element.id,
            nombreProducto:element.nombreProducto,
            imagen:element.imagen,
            descripción:element.descripción,
            precio:element.precio,
    
        });
    };
});
console.log('estos son los elementos comprados:',Carrito);
}

function listaCarrito(){
document.getElementById('descripcioncarrito').innerHTML =
`
        <div class="row barr">
        <div class="col-3 mr-2 mb-2 ">
       <p>  ${listaProductos[0].nombreProducto} <br></p>
        <img src="./images/${listaProductos[0].imagen}" class="rounded img-fluid" alt="" width="80px" height="80px" >
       
        </div>
        <div class="col-2 barraModa  text-right">
        ${listaProductos[0].precio}
        </div>
        <div class="col-2 barraModa  text-right">
            2
        </div>
        <div class="col-3 barraModa  text-right">
            246   <i class="fas fa-times" style="color: red;"></i>
        </div>
        
    </div>

    <div class="row barr">
    <div class="col-3 mr-2 mb-2 ">
   <p>  ${listaProductos[1].nombreProducto} <br></p>
    <img src="./images/${listaProductos[1].imagen}" class="rounded img-fluid" alt="" width="80px" height="80px" >
   
    </div>
    <div class="col-2 barraModa  text-right">
    ${listaProductos[1].precio}
    </div>
    <div class="col-2 barraModa  text-right">
        1
    </div>
    <div class="col-3 barraModa  text-right">
        160  <i class="fas fa-times" style="color: red;"></i>
    </div>
   
  </div>
  <div class="row barr">
  <div class="col-3 mr-2 mb-2 ">
 <p>  ${listaProductos[2].nombreProducto} <br></p>
  <img src="./images/${listaProductos[2].imagen}" class="rounded img-fluid" alt="" width="80px" height="80px" >
 
  </div>
  <div class="col-2 barraModa  text-right">
  ${listaProductos[2].precio}
  </div>
  <div class="col-2 barraModa  text-right">
      2
  </div>
  <div class="col-3 barraModa  text-right">
      346   <i class="fas fa-times" style="color: red;"></i>
  </div>

</div>
<div class="row pieBarr">
  <div class="col-9">
  </div>
  <div class="col-3 barraModa">
    subTotal: 752.00
  </div>
</div>
<div class="row pieBarr">
  <div class="col-9">
  </div>
  <div class="col-3 barraModa">
  ISV: 90,24
  </div>
</div>
<div class="row pieBarr">
  <div class="col-9">
  </div>
  <div class="col-3 barraModa">
  Total: 842,24
  </div>
</div>

<div class="row mt-5">
  <div class="col-12 d-flex justify-content-end">
    <button class="barraModal p5 rounded" onclick="abrirModal()">Efectuar Compra</button>
    </div>
  </div>
`
}

listaCarrito();