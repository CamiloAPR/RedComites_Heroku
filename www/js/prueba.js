


$(document).on("pageshow","#inicio",function(){
    var htmlTemplate="<li>"+
    			"<div class='ui-block-a itemGrid' style='background-color: $color'>"+
                      "<a href=''><img  src='$icon' alt=''></a>"+
                      "<h6>$name</h6>"+
                    "</div>";
              "</li>";

    var lista = $("#lista");
    var dataTemplate = [{field: "color"}, {field: "icon"},{field: "name"}]
    lista.empty();

    var callback = function(data){
      return ux_service.createHTMLComponents(htmlTemplate, dataTemplate, lista, data);
    }

    db_service.get("/committee", callback);
});