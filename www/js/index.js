var mainPublications;

$(document).ready(function(){
  $("[data-role = 'footer']").toolbar();

});

$(document).on("pagecreate","#main",function(){

 

    /*
    * Login function
    */
    $("#formLogin").submit(function( event ) {

      var email = $('#email').val();
      var password = $('#password').val();
      var callback = function(data){
        if(data["role"] === 1){
          $('#formLogin').attr('action', 'indexAdmin.html');
        }else if( data["role"] === 2){
          $('#formLogin').attr('action', 'indexCommittee.html');
        }else{
          $("#errorMessage").text(unescape(decodeURIComponent(data["error"])));
          var content = $("#dialogContent");
          var originalColor = content.css("background-color");
          $("#errorMessage").animate({
          opacity: 0
          }, 1000 )
          $("#errorMessage").animate({
          opacity: 1
          }, 200 )
         
        }
      }
      if(db_service.s_post("login/", {email: email, password: password}, callback)){
        return true;
      }else{
        return false;
      }
      
    });

    /*
    * Insert Committees
    */
    loadCommittees();
    loadPublications();


  $('div[data-role="dialog"]').on('pagebeforeshow', function(e, ui) {
    ui.prevPage.addClass("ui-dialog-background ");
  });
  
  $('div[data-role="dialog"]').on('pagehide', function(e, ui) {
    $(".ui-dialog-background ").removeClass("ui-dialog-background ");
  });
});

$(document).on("pagebeforeshow","#committee",function(){
  var callback = function(data){
    data = data[0];
    $("#logoCommittee").attr('src', data["icon"]);
    $("#bannerCommittee").attr('src', data["banner"]);
    $("#nameCommittee").text(data["name"]);
    // $("#avatar-bg").css('background',data["color"]);

    var miembros = "<p class='text'>";
    for(var i = 0; i < data["members"].length; i++){
        miembros += "<b>"+data["members"][i].name+"</b></br>" +"<i>"+data["members"][i].email+"</i></br></br>"; 
    }
    miembros += "</p>";

    $("#infoCommittee").text(data["general_info"]);
    $("#functionsCommittee").text(data["function"]);
    $("#membersCommittee").empty().append(miembros);
    $("#emailCommittee").text(data["email"]);
    
  }
  if(urlParam("committee") !== undefined){
    db_service.get("committee/committee_id/"+urlParam("committee"), callback);
  }
  // loadCommittees();
  // loadPublications();
});
$(document).on("pagebeforeshow","#viewPublication",function(){
  if(mainPublications === undefined){
    var callback = function(data){
      var selectedPublication = data[0];
      showPublicationInfo(selectedPublication);
    }
    if(urlParam("publication") !== undefined){
      db_service.get("publication/publication_id/"+urlParam("publication"), callback);
    }
  }else{
     if(urlParam("publication") !== undefined){
      showPublication(urlParam("publication"));
    }
  }
  
  // loadCommittees();
  // loadPublications();
});


function loadCommittees(){
    var templateCommittees = '<li>'+
        '<a style="background-color:var.color;" href="#" onclick="showCommittee(var.id)" class="ui-btn ui-btn-icon-right ui-icon-carat-r committee" style="padding-top:0.2em !important; padding-bottom:0.2em !important"> '+
          '<div class="botonMenu" >'+
            '<div class="punto"><img src="var.icon" width="26" height="26" border="0"></div>'+
            '<div class="nombre">var.name</div>'+
          '</div>'+
       ' </a>'+
      '</li>'
    // var data = [ 
    //   {name:"Responsabilidad Social", color:"#FF7D1F", page:"#", icon:"iconos/icon_rsu_circle.png"},
    //   {name:"Egresados", color:"#4C6BA2", page:"#", icon:"iconos/icon_egresados_circle.png"},
    //   {name:"Calidad", color:"#E52B33", page:"#", icon:"iconos/icon_calidad_circle.png"},
    //   {name:"Educación Continuada", color:"#20B07F", page:"#", icon:"iconos/icon_continuada_circle.png"},
    //   {name:"Curricular", color:"#F15A4B", page:"#", icon:"iconos/icon_curricular_circle.png"},
    //   {name:"Comunicaciones", color:"#AECC60", page:"#", icon:"iconos/icon_comunicaciones_circle.png"},
    //   {name:"Investigaciones", color:"#C12E86", page:"#", icon:"iconos/icon_investigacion_circle.png"},
    //   {name:"Externo", color:"#619543", page:"#", icon:"iconos/icon_externo_circle.png"},
    //   {name:"Éxito Estudiantil", color:"#662D91", page:"#", icon:"iconos/icon_exito_circle.png"},
    //   {name:"Internacionalización", color:"#42BDED", page:"#", icon:"iconos/icon_internacionalizacion_circle.png"},
    //   {name:"TIC", color:"#F9B924", page:"#", icon:"iconos/icon_tic_circle.png"}
    // ];
    var dataTemplateCommittees = [{field: "id"}, {field: "color"}, {field: "name"},{field: "page"},{field: "icon"}]
    callback = function(data){
      return ux_service.createHTMLComponents(templateCommittees, dataTemplateCommittees, $("#listCommittees"), data);
    }
    db_service.get("committee", callback);
}

function loadPublications(){
   var publicationsTemplate = '<div class="public-destacado">'+
      '<a href="#" onclick="showPublication(var.id)" style="text-decoration: none;"><div style="background-color: var.color" class="public-encabezado">'+
        '<div class="public-titulo">var.title </div>'+
        '<div class="public-fecha">var.publication_date</div></div></a>'+
      '<div class="public-contenido">'+
        '<div class="public-resumen">var.content</div>'+
        // '<div class="public-imagen"></div>'+
        '<div style="color: var.color;" class="public-comite">var.name</div>'+
      '</div></div>';
  
  var dataPublicationsTemplate = [{field: "id"},{field: "title"},{field: "color"}, {field: "name"},{field: "content"},{field: "publication_date"}]
  callback = function(data){
    mainPublications = data;
    return ux_service.createHTMLComponents(publicationsTemplate, dataPublicationsTemplate, $("#divPublications"), data);
  }
  db_service.get("publication", callback);
 
}
function showCommittee(id_committee){
    $.mobile.changePage('#committee', {
        dataUrl: "index.html#committee?committee="+id_committee,
        transition : "slideup"
    });
}
function showPublication(id_publication){
  var selectedPublication = null;
  for(var i = 0; i < mainPublications.length; i++){
    if(mainPublications[i]["id"] == id_publication){
      selectedPublication = mainPublications[i];
      break;
    }
  }

  showPublicationInfo(selectedPublication);
  
}
function showPublicationInfo(selectedPublication){
  if(selectedPublication != null){
    $.mobile.changePage('#viewPublication', {
        dataUrl: "index.html#viewPublication?publication="+selectedPublication["id"],
        transition : "slideup"
    });
    $("#titlePublication").text(selectedPublication["title"]);
    $("#bodyPublication").css("background-color",selectedPublication["color"]);
    var header = '<p style="text-align:left"><i>Fecha de publicación: '+selectedPublication["publication_date"]+'</i></p><p style="text-align:left"><b>'+selectedPublication["name"]+'</b></p>'; 
    $("#contentPublication").empty().append(header).append(selectedPublication["content"]);
  }else{
    alert("La publicación no existe");
  }
}

function shareLink(url){
  url = url + window.location.href;
  window.open(url, '_blank');
}

var urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
}


