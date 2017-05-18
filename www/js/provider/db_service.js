// var host = "http://localhost:8000/"
var host = "http://172.20.10.2:8000/"

var db_service = {

    /*
    * This function is used to retrieve data from a REST Service.
    * @params url:      The URL needed to make the request to the REST Service in order the retrieve the data.
    * @params callback: The callback function.
    */
    get: function (url, callback){
        $.ajax({
            url: host+url,
            type: 'GET',
            success: function(data, textStatus, jqXHR){
                callback(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('error, ubicación: '+ host+"/"+url);
                console.log(errorThrown);
                console.log(textStatus);
            }
        });
    }

    /*
    * This function is used to insert data in a REST Service.
    *
    * @params url:  The URL needed to make the post request to the REST Service.
    * @params data: A JSONObject with the data thats meant to be inserted.
    */
    , create: function(url, data){
        $.ajax({
            url: host+url,
            type: 'POST',
            data:  data,
            contentType:"application/json",                         
            success: function(data, textStatus, jqXHR){
                console.log(data);
                return data;
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('error, ubicación: '+ host+"url");
                console.log(errorThrown);
                console.log(textStatus);
                return null;
            }          
        });
    }

    /*
    * This function is used to update a data registry that already exists in a REST Service.
    * @params url:  The URL needed to make the put request to the REST Service. Usually the url ends with "/{someId}"
    * @params data: A JSONObject with the data thats meant to be updated.
    */
    , update: function(url, data){
        $.ajax({
            url: host+url,
            type: 'PUT',
            data:  data,
            contentType:"application/json",                         
            success: function(data, textStatus, jqXHR){
                console.log(data);
                return data;
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('error, ubicación: '+ host+"url");
                console.log(errorThrown);
                console.log(textStatus);
                return null;
            }          
        });
    }

    /*
    * This function is used to delete data in a REST Service.
    * @params url:  The URL needed to make the delete request to the REST Service. Usually the url ends with "/{someId}"
    */
    , remove: function(url){
        $.ajax({
            url: host+url,
            type: 'DELETE',
            success: function(data, textStatus, jqXHR){
                console.log(data);
                return data;
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('error, ubicación: '+ host+"url");
                console.log(errorThrown);
                console.log(textStatus);
                return null;
            }          
        });

    }



}
