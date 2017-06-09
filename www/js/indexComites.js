$(document).ready(function(){
  $("[data-role = 'header'], [data-role = 'footer']").toolbar();
  //$("[data-role = 'panel']").enhanceWithin().panel();
});
$(document).ready(function() {
          $("#txtEditor").Editor({'print':false, 'rm_format':false, 'select_all':false, 'block_quote':false, 'insert_table':false});
        });
$(document).on("pagebeforeshow","#main, #newPublic, #profile",function(){
    // MENU IZQUIERDO
    var menuTemplate ='<li style="text-align:center;" data-role="list-divider" data-theme="d" role="heading" class="ui-li-divider ui-bar-d ui-first-child">var.comite</li>'+
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
      '<div style="background-color: var.color" class="public-encabezado">'+
        '<div class="public-titulo">var.title </div>'+
        '<div class="public-iconos">'+
          '<a href="#">'+
            '<img src="iconos/lapiz.png" width="27" height="27" border="0">'+
          '</a>'+
          '<a style="margin-left: 5px" href="#">'+
            '<img src="iconos/trash.png" width="27" height="27" border="0">'+
          '</a>'+
        '</div></div>'+
      '<div class="public-contenido">'+
        '<div class="public-resumen">var.content</div>'+
        '<div class="public-imagen"></div>'+
        '<div style="color: var.color2" class="public-comite">var.name</div>'+
      '</div></div>';

    var dataPublicacionesTemplate = [{field: "title"},{field: "color"}, {field: "color2"}, {field: "name"},{field: "content"}]
    data = [ 
      {title:"Título de la publicación", name:"Comunicaciones", color:"#AECC60", color2:"#AECC60", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
      {title:"Título de la publicación", name:"Comunicaciones", color:"#AECC60", color2:"#AECC60", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
      {title:"Título de la publicación", name:"Comunicaciones", color:"#AECC60", color2:"#AECC60", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
      {title:"Título de la publicación", name:"Comunicaciones", color:"#AECC60", color2:"#AECC60", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
      {title:"Título de la publicación", name:"Comunicaciones", color:"#AECC60", color2:"#AECC60", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
      {title:"Título de la publicación", name:"Comunicaciones", color:"#AECC60", color2:"#AECC60", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
      {title:"Título de la publicación", name:"Comunicaciones", color:"#AECC60", color2:"#AECC60", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
      {title:"Título de la publicación", name:"Comunicaciones", color:"#AECC60", color2:"#AECC60", content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies diam arcu, eu aliquam enim semper eu."},
    ];
    ux_service.createHTMLComponents(publicacionesTemplate, dataPublicacionesTemplate, $("#divPublicaciones"), data);

    // NEW POST
    var newPostTemplate = 
              '<center>'+
              '<div class="ui-grid-solo ui-responsive" style="width: 80%;">'+
                      '<p class="formText">T&iacute;tulo</p>'+
              '</div>'+
              '<div class="ui-grid-solo ui-responsive" style="width: 60%;">'+
                  '<div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">'+
                      '<input name="title" placeholder="Ingresa el t&iacute;tulo de la publicaci&oacute;n" type="text">'+
                  '</div>'+
              '</div>'+
              '<div class="ui-grid-solo ui-responsive" style="width: 80%;">'+
                      '<p class="formText">Contenido</p>'+
              '</div>'+
              '<div class="ui-grid-solo ui-responsive" style="width: 80%;">'+
                '<!-- acá va el rich editor -->'+
                '<textarea id="txtEditor" class="ui-input-text ui-shadow-inset ui-body-inherit ui-corner-all ui-textinput-autogrow" style="display:none;"></textarea>'+
                '<div class="row-fluid Editor-container">'+
                  '<div id="menuBarDiv" class="row-fluid">'+
                    '<div class="btn-group"><div class="btn-group" title="Fonts" style="cursor: pointer;"><a class="btn btn-default dropdown-toggle ui-link" data-toggle="dropdown" href="javascript:void(0)" title="Fonts">Font<span class="caret"></span></a><ul class="dropdown-menu"><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Sans serif</a></li><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Serif</a></li><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Wide</a></li><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Narrow</a></li><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Comic Sans MS</a></li><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Courier New</a></li><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Garamond</a></li><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Georgia</a></li><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Tahoma</a></li><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Trebuchet MS</a></li><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Verdana</a></li></ul></div><div class="btn-group" title="Paragraph Format" style="cursor: pointer;"><a class="btn btn-default dropdown-toggle ui-link" data-toggle="dropdown" href="javascript:void(0)" title="Paragraph Format">Formatting<span class="caret"></span></a><ul class="dropdown-menu"><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Heading 1</a></li><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Heading 2</a></li><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Heading 3</a></li><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Heading 4</a></li><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Heading 5</a></li><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Heading 6</a></li><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Paragraph</a></li></ul></div><div class="btn-group" title="Font Size" style="cursor: pointer;"><a class="btn btn-default dropdown-toggle ui-link" data-toggle="dropdown" href="javascript:void(0)" title="Font Size">Font size<span class="caret"></span></a><ul class="dropdown-menu"><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Small</a></li><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Normal</a></li><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Medium</a></li><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Large</a></li><li><a tabindex="-1" href="javascript:void(0)" class="ui-link">Huge</a></li></ul></div></div><div class="btn-group"><a href="javascript:void(0)" class="btn btn-default ui-link" title="Bold" style="cursor: pointer;"><i class="fa fa-bold"></i></a><a href="javascript:void(0)" class="btn btn-default ui-link" title="Italics" style="cursor: pointer;"><i class="fa fa-italic"></i></a><a href="javascript:void(0)" class="btn btn-default ui-link" title="Underline" style="cursor: pointer;"><i class="fa fa-underline"></i></a><a href="javascript:void(0)" class="btn btn-default ui-link" title="Text/Background Color" style="cursor: pointer;"><i class="fa fa-font"></i></a></div><div class="btn-group"><a href="javascript:void(0)" class="btn btn-default ui-link" title="Align Left" style="cursor: pointer;"><i class="fa fa-align-left"></i></a><a href="javascript:void(0)" class="btn btn-default ui-link" title="Align Center" style="cursor: pointer;"><i class="fa fa-align-center"></i></a><a href="javascript:void(0)" class="btn btn-default ui-link" title="Align Right" style="cursor: pointer;"><i class="fa fa-align-right"></i></a><a href="javascript:void(0)" class="btn btn-default ui-link" title="Justify" style="cursor: pointer;"><i class="fa fa-align-justify"></i></a></div><div class="btn-group"><a href="javascript:void(0)" class="btn btn-default ui-link" title="Increase Indent" style="cursor: pointer;"><i class="fa fa-indent"></i></a><a href="javascript:void(0)" class="btn btn-default ui-link" title="Decrease Indent" style="cursor: pointer;"><i class="fa fa-outdent"></i></a><a href="javascript:void(0)" class="btn btn-default ui-link" title="Insert/Remove Numbered List" style="cursor: pointer;"><i class="fa fa-list-ol"></i></a><a href="javascript:void(0)" class="btn btn-default ui-link" title="Insert/Remove Bulleted List" style="cursor: pointer;"><i class="fa fa-list-ul"></i></a></div><div class="btn-group"><a href="javascript:void(0)" class="btn btn-default ui-link" title="Undo" style="cursor: pointer;"><i class="fa fa-undo"></i></a><a href="javascript:void(0)" class="btn btn-default ui-link" title="Redo" style="cursor: pointer;"><i class="fa fa-repeat"></i></a></div><div class="btn-group"><a href="#InsertLink" role="button" class="btn btn-default ui-link" data-toggle="modal" title="Insert Link"><i class="fa fa-link"></i></a><a href="javascript:void(0)" class="btn btn-default ui-link" title="Unlink" style="cursor: pointer;"><i class="fa fa-unlink"></i></a><a href="#InsertImage" role="button" class="btn btn-default ui-link" data-toggle="modal" title="Insert Image"><i class="fa fa-picture-o"></i></a></div><div class="btn-group"><a href="javascript:void(0)" class="btn btn-default ui-link" title="Strike Through" style="cursor: pointer;"><i class="fa fa-strikethrough"></i></a><a href="javascript:void(0)" class="btn btn-default ui-link" title="Horizontal Rule" style="cursor: pointer;"><i class="fa fa-minus"></i></a><a href="javascript:void(0)" class="btn btn-default ui-link" title="Insert Special Character" style="cursor: pointer;"><i class="fa fa-asterisk"></i></a></div><div class="btn-group"><a href="javascript:void(0)" class="btn btn-default ui-link" title="Source" style="cursor: pointer;"><i class="fa fa-code"></i></a></div><div class="btn-group"><a href="javascript:void(0)" class="btn btn-default ui-link" title="Toggle Screen" style="cursor: pointer;"><i class="fa fa-arrows-alt"></i></a></div>'+
                  '</div>'+
                  '<div class="Editor-editor" style="overflow:auto;" contenteditable="true"></div>'+
                  '<div id="statusbar" class="row-fluid" unselectable="on"></div>'+
                '</div>'+
              '</div>'+
              '</center>'+

              '<table align="center">'+
                  '<tbody>'+
                      '<tr>'+
                        '<td><a class="ui-btn ui-btn-inline ui-btn-up-c ui-mini" href="#main">Cancelar</a></td>'+
                        '<td><a class="ui-btn ui-btn-inline ui-btn-up-c ui-mini" href="#">Guardar</a></td>'+
                      '</tr>'+
              '</table>';
    var dataNewPostTemplate = [{}]
    data = [
      {}
    ]
    ux_service.createHTMLComponents(newPostTemplate, dataNewPostTemplate, $(".newPost"), data);

    // PROFILE
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
                '<td>var.nameMember</td>'+
                '<td>var.emailMember</td>'+
                '<td>var.functionMember</td>'+
                '<td>'+
                  '<a class="ui-link" href="#">'+
                      '<img src="iconos/lapiz.png" border="0" width="27" height="27">'+
                  '</a>&nbsp;&nbsp;'+
                  '<a class="ui-link" href="#">'+
                      '<img src="iconos/trash.png" border="0" width="27" height="27">'+
                  '</a>'+
                '</td>'+
              '</tr>';
    var dataProfileMemberTableTemplate = [{field: "nameMember"},{field: "emailMember"},{field: "functionMember"}];
    data = [
      {nameMember:"Pedro Guillermo Feijoo Garcia", emailMember:"pfeijoo@unbosque.edu.co", functionMember:"Docente"},
      {nameMember:"Pedro Guillermo Feijoo Garcia", emailMember:"pfeijoo@unbosque.edu.co", functionMember:"Docente"},
    ];
    ux_service.createHTMLComponents(profileMemberTableTemplate, dataProfileMemberTableTemplate, $("#memberTableRows"), data);


});

function savePublication(){
  var content=$(".Editor-editor").html();
  var title=$("#publication-title").val();
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  console.log(title);
  var publication={committee: 1, title: title, content: content, publication_date: year+"-"+month+"-"+day}
  db_service.post("/publication",publication,function(data){alert("Se ha agregado la publicación exitosamente!"); location.replace("./indexComites.html");});
}


