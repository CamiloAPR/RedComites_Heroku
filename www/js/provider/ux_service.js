
var ux_service = {
	/*
	* This function is used to create html components dynamically using the data returned from a REST service. Its
	* Useful to fill a table or a list dynamically.
	*
	* @params htmlElement: The html template of the items to be created, keep in mind that the dynamic fields
	* 							must have the same name of the field created to replace it with an '$' symbol at the
	*							beginning.  i.e. <div> <h2> $nombre </h2> <p> $descripcion </p> </div>
	*
	* @params fields: 		A JSONArray fillied with all the name of the fields that are supposed to be replaced.
	* 							i.e. [{field: "nombre"},{field: "descripcion"}]
	*
	* @params contaniner: 	The HTML element that's supposed to contain the elements.
	*
	* @params data: 		The URL needed to make the request to the backend in order the retrieve the data.
	*/
	createHTMLComponents: function (htmlElement, fields, container, data){
		var result = "";
		var htmlTemp = "";
		var currentField = "";
		if(htmlElement != null && htmlElement !== undefined 
			&& fields != null && fields !== undefined 
					&& fields.constructor == [].constructor){
			if (data != null){
				for(var i=0;i<data.length;i++){
					htmlTemp = htmlElement;
					for(var j=0;j<fields.length;j++){
						currentField = fields[j]["field"];
						// if((htmlTemp.match("/"+currentField+"/g") || []).length == 1){
							htmlTemp = htmlTemp.replace("$"+currentField, data[i][currentField]);
						// }else{
							// console.log("matches: "+(htmlTemp.match("/"+currentField+"/g") || []).length);
						// }
					}
					result += htmlTemp;
				}
			}else{
				console.log("No se obtuvo nada del servicio REST")
			}
		}else{
			console.log(htmlElement+" "+fields+" "+url);
		}

		container.empty();
		container.append(result);

	}

}