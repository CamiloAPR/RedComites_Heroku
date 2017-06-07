$(document).ready(function(){
  $("[data-role = 'header'], [data-role = 'footer']").toolbar();
  //$("[data-role = 'panel']").enhanceWithin().panel();
});
$(document).on("pagebeforeshow","#main, #newPublic",function(){
    // MENU IZQUIERDO
    var menuTemplate ='<li style="text-align:center;" data-role="list-divider" data-theme="d" role="heading" class="ui-li-divider ui-bar-d ui-first-child">$comite</li>'+
                      '<li><a href="#newPublic" data-panel="main" class="ui-btn ui-btn-icon-right ui-icon-carat-r">Publicaciones</a></li>'+
                      '<li><a href="#editarPerfil" data-panel="main" class="ui-btn ui-btn-icon-right ui-icon-carat-r">Perfil</a></li>'+
                      '<li><a href="#editarContrasena" data-panel="main" class="ui-btn ui-btn-icon-right ui-icon-carat-r">Cambiar contrase&ntilde;a</a></li>'+
                      '<hr>'+
                      '<li data-icon="power" class="ui-last-child"><a href="#cerrarSesion" data-panel="main" class="ui-btn ui-btn-icon-right ui-icon-power">Cerrar Sesión</a></li>'
    var data = [ 
      {comite:"COMUNICACIONES"},
    ];
    var dataMenuTemplate = [{field: "comite"}]
    ux_service.createHTMLComponents(menuTemplate, dataMenuTemplate, $("#listaMenu"), data);
    ux_service.createHTMLComponents(menuTemplate, dataMenuTemplate, $("#listaMenu2"), data);
    
    // PUBLICACIONES
    var publicacionesTemplate = '<div class="public-destacado">'+
      '<div style="background-color: $color" class="public-encabezado">'+
        '<div class="public-titulo">$title </div>'+
        '<div class="public-iconos">'+
          '<a href="#">'+
            '<img src="iconos/lapiz.png" width="27" height="27" border="0">'+
          '</a>'+
          '<a style="margin-left: 5px" href="#">'+
            '<img src="iconos/trash.png" width="27" height="27" border="0">'+
          '</a>'+
        '</div></div>'+
      '<div class="public-contenido">'+
        '<div class="public-resumen">$content</div>'+
        '<div class="public-imagen"></div>'+
        '<div style="color: $color2;" class="public-comite">$name</div>'+
      '</div></div>';

    var dataPublicacionesTemplate = [{field: "color"}, {field: "color2"}, {field: "name"},{field: "content"}]
    data = [ 
      {name:"Comunicaciones", color:"#AECC60", color2:"#AECC60", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
      {name:"Comunicaciones", color:"#AECC60", color2:"#AECC60", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
      {name:"Comunicaciones", color:"#AECC60", color2:"#AECC60", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
      {name:"Comunicaciones", color:"#AECC60", color2:"#AECC60", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
      {name:"Comunicaciones", color:"#AECC60", color2:"#AECC60", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
      {name:"Comunicaciones", color:"#AECC60", color2:"#AECC60", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
      {name:"Comunicaciones", color:"#AECC60", color2:"#AECC60", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
      {name:"Comunicaciones", color:"#AECC60", color2:"#AECC60", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
    ];
    ux_service.createHTMLComponents(publicacionesTemplate, dataPublicacionesTemplate, $("#divPublicaciones"), data);

});


