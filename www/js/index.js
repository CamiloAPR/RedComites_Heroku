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

        loggedUser = (data["role"] === undefined)?undefined:data;
        
        if(data["role"] === 1){
          // $('#formLogin').attr('action', 'indexAdmin.html');
          location.replace("./indexAdmin.html");
        }else if( data["role"] === 2){
          // $('#formLogin').attr('action', 'indexCommittee.html');
          location.replace("./indexComites.html");
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

          $("#errorMessage").animate({
          opacity: 0
          }, 1000 )
        }
      }
      db_service.p_get("login/", {email: email, password: password}, callback);


      return false;
      //   console.log("true")
      //   return true;
      // }else{
      //   console.log("false")
      //   return false;
      // }
      
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
    var email = "\'"+data["email"]+"\'";
    var contact = '<a href="#" onclick="sendMail('+email+')" target="_blank">'+
                      '<img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Enviar un correo" style="width: 2em;height: 2em;"></a>';
    $("#emailCommittee").empty().append("<p>"+data["email"]+"</p>").append(contact);

    var publicationsTemplate = '<div class="public-destacado">'+
      '<a href="#" onclick="showPublication(var.id)" style="text-decoration: none;"><div style="background-color: '+data["color"]+'" class="public-encabezado">'+
        '<div class="public-titulo">var.title </div>'+
        '<div class="public-fecha">var.publication_date</div></div></a>'+
      '<div class="public-contenido">'+
        '<div class="public-resumen">var.content</div>'+
        // '<div class="public-imagen"></div>'+
      '</div></div>';


  var dataPublicationsTemplate = [{field: "id"},{field: "title"},{field: "color"}, {field: "content"},{field: "publication_date"}]
  ux_service.createHTMLComponents(publicationsTemplate, dataPublicationsTemplate, $("#committeePublications"), data["publications"]);
  console.log(data["publications"]);
  }
  if(urlParam("committee") !== undefined){
    db_service.get("committee/committee_id/"+urlParam("committee"), callback);
  }

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
    var header = '<p style="text-align:right"> <b>'+selectedPublication["name"]+'</b> > <i>'+selectedPublication["publication_date"]+' </i> </p>'; 
    $("#contentPublication").empty().append(header).append(selectedPublication["content"]);
  }else{
    alert("La publicación no existe");
  }
}

function shareLink(url){
  // url = url + encodeURIComponent(window.location);
  var link="http://redcomites.herokuapp.com/index.html"+window.location.hash;
  window.open(url+encodeURIComponent(link), '_blank');
}

function sendMail(to){
  // if(isMobile()){
  //   window.open("googlegmail://co?to="+to,"_blank");
  // }else{
    window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to="+to, "_blank");
  // }
}

function isMobile(){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    return true;
  }else{
    return false;
  }
}
var urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
}


