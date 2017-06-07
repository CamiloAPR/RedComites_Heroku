$(document).ready(function(){
  $("[data-role = 'header'], [data-role = 'footer']").toolbar();
  //$("[data-role = 'panel']").enhanceWithin().panel();
});
$(document).on("pagebeforeshow","#main, #newPublic, #profile",function(){
    // MENU IZQUIERDO
    var menuTemplate ='<li style="text-align:center;" data-role="list-divider" data-theme="d" role="heading" class="ui-li-divider ui-bar-d ui-first-child">$comite</li>'+
                      '<li><a href="#main" data-panel="main" class="ui-btn ui-btn-icon-right ui-icon-carat-r">Publicaciones</a></li>'+
                      '<li><a href="#profile" data-panel="main" class="ui-btn ui-btn-icon-right ui-icon-carat-r">Perfil</a></li>'+
                      '<li><a href="#editarContrasena" data-panel="main" class="ui-btn ui-btn-icon-right ui-icon-carat-r">Cambiar contrase&ntilde;a</a></li>'+
                      '<hr>'+
                      '<li data-icon="power" class="ui-last-child"><a href="#cerrarSesion" data-panel="main" class="ui-btn ui-btn-icon-right ui-icon-power">Cerrar Sesión</a></li>'
    var data = [ 
      {comite:"COMUNICACIONES"},
    ];
    var dataMenuTemplate = [{field: "comite"}]
    ux_service.createHTMLComponents(menuTemplate, dataMenuTemplate, $(".listaMenu"), data);
    
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

    var profileTemplate = '<center>'+
               '<div class="ui-grid-b ui-responsive width-form">'+
                  '<div class="ui-block-a itemGrid ui-responsive">'+
                    '<div>'+
                            '<p class="formText">Nombre del comit&eacute;</p>'+
                    '</div>'+
                    '<div>'+
                        '<div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">'+
                            '<input name="nameCommittee" type="text">'+
                        '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="ui-block-b itemGrid ui-responsive">'+
                    '<div>'+
                            '<p class="formText">Correo de contacto</p>'+
                    '</div>'+
                    '<div>'+
                        '<div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">'+
                            '<input type="text" name="email">'+
                        '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="ui-block-c itemGrid ui-responsive">'+
                    '<div>'+
                            '<p class="formText">Color identificador</p>'+
                    '</div>'+
                    '<div>'+
                        '<div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">'+
                            '<input type="color" name="color">'+
                        '</div>'+
                    '</div>'+
                  '</div>'+
               '</div>'+
              '<div class="ui-grid-solo ui-responsive width-form">'+
                      '<p class="formText">Informaci&oacute;n general</p>'+
              '</div>'+
              '<div class="ui-grid-solo ui-responsive width-form">'+
                '<textarea class="ui-input-text ui-shadow-inset ui-body-inherit ui-corner-all ui-textinput-autogrow" name="generalInfo" style="height:53px;"></textarea>'+
              '</div>'+
              '<div class="ui-grid-solo ui-responsive width-form">'+
                      '<p class="formText">Funciones</p>'+
              '</div>'+
              '<div class="ui-grid-solo ui-responsive width-form">'+
                '<textarea class="ui-input-text ui-shadow-inset ui-body-inherit ui-corner-all ui-textinput-autogrow" name="functions" style="height:53px;"></textarea>'+
              '</div>'+
              '<div class="ui-grid-a ui-responsive width-form">'+
                  '<div class="ui-block-b itemGrid ui-responsive">'+
                    '<div>'+
                            '<p class="formText">Logo</p>'+
                    '</div>'+
                    '<div class="ui-grid-a">'+
                      '<div class="ui-block-b itemGrid">'+
                        '<div>'+
                                '<p class="formText" style="font-weight: normal; font-variant: normal;">Logo_Comite.png</p>'+
                        '</div>'+
                      '</div>'+
                      '<div class="ui-block-b itemGrid">'+
                        '<div>'+
                                '<button class="ui-btn ui-shadow ui-corner-all" type="submit" onclick="">Subir archivo</button>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="ui-block-b itemGrid ui-responsive">'+
                    '<div>'+
                            '<p class="formText">Banner</p>'+
                    '</div>'+
                    '<div class="ui-grid-a">'+
                      '<div class="ui-block-b itemGrid">'+
                        '<div>'+
                                '<p class="formText" style="font-weight: normal; font-variant: normal;">Banner_Comite.png</p>'+
                        '</div>'+
                      '</div>'+
                      '<div class="ui-block-b itemGrid">'+
                        '<div>'+
                                '<button class="ui-btn ui-shadow ui-corner-all" type="submit" onclick="">Subir archivo</button>'+
                        '</div>'+
                      '</div>'+
                  '</div>'+
               '</div>'+
               '<div class="ui-grid-solo ui-responsive width-form">'+
                      '<p class="formText">Integrantes</p>'+
               '</div>'+
              '</center>'+
              '<table id="memberTable" class="ui-responsive ui-shadow width-form ui-table ui-table-reflow" data-role="table" align="center">'+
                '<thead>'+
                  '<tr class="registers">'+
                    '<th data-colstart="1">Nombre</th>'+
                    '<th data-colstart="2">Correo</th>'+
                    '<th data-colstart="3">Funci&oacute;n</th>'+
                    '<th data-colstart="4">'+
                        '<a class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-icon-plus ui-btn-icon-left ui-btn-a" href="#popupMember" data-rel="popup" data-position-to="window" data-transition="pop" aria-haspopup="true" aria-owns="popupMember" aria-expanded="false"></a>'+
                    '</th>'+
                  '</tr>'+
                '</thead>'+
                '<tbody id="memberTableRows">'+

                '</tbody>'+
              '</table>'+
              '<table align="center">'+
                  '<tbody>'+
                      '<tr>'+
                        '<td>'+
                          '<a class="ui-btn ui-btn-inline ui-btn-up-c ui-mini" href="#main">Cancelar</a>'+
                        '</td>'+
                        '<td>'+
                          '<a href="#" class="ui-btn ui-btn-inline ui-btn-up-c ui-mini">Guardar</a>'+
                        '</td>'+
                      '</tr>'+
                  '</tbody>'+
              '</table>'+
              '</div>';
    var dataProfileTemplate = [{field: "nameMember"}];
    data = [
      {nameMember:"Pedro Guillermo Feijoo Garcia"},
    ];
    ux_service.createHTMLComponents(profileTemplate, dataProfileTemplate, $(".profileForm"), data);

    var profileMemberTableTemplate = 
              '<tr class="registers">'+
                '<td>$nameMember</td>'+
                '<td>pfeijoo@unbosque.edu.co</td>'+
                '<td>Docente</td>'+
                '<td>'+
                  '<a class="ui-link" href="#">'+
                      '<img src="iconos/lapiz.png" border="0" width="27" height="27">'+
                  '</a>&nbsp;&nbsp;'+
                  '<a class="ui-link" href="#">'+
                      '<img src="iconos/trash.png" border="0" width="27" height="27">'+
                  '</a>'+
                '</td>'+
              '</tr>';
    var dataProfileMemberTableTemplate = [{field: "nameMember"}];
    data = [
      {nameMember:"Pedro Guillermo Feijoo Garcia"},
      {nameMember:"Pedro Guillermo Feijoo Garcia"},
    ];
    ux_service.createHTMLComponents(profileMemberTableTemplate, dataProfileMemberTableTemplate, $("#memberTableRows"), data);
});


