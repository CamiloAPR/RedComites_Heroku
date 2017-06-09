// var host = "http://localhost:8000/"
var host = "https://redcomitesbackend.herokuapp.com/"
// var host = "http://192.168.0.26:8080/"

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
                console.log('error, ubicación: '+url);
                console.log(jqXHR.responseText);
                console.log(errorThrown);
                console.log(textStatus);
                // alert(jqXHR.responseText);
            }
        });
    }
    , p_get: function (url, data, callback){
        $.ajax({
            url: host+url,
            type: 'GET',
            headers: {
                    'Access-Control-Allow-Origin': '*'
                },
            crossDomain: true,
            data: data,

            success: function(data, textStatus, jqXHR){
                callback(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('error, ubicación: '+url);
                console.log(jqXHR.responseText);
                console.log(errorThrown);
                console.log(textStatus);
                // alert(jqXHR.responseText);
            }
        });
    }

    /*
    * This function is used to insert data in a REST Service.
    *
    * @params url:  The URL needed to make the post request to the REST Service.
    * @params _data: A JSONObject with the data thats meant to be inserted.
    * @params callback: The callback function.
    */
    , post: function(url, _data, callback){
        $.ajax({
            url: host+url,
            type: 'POST',
            data:  _data,
            // contentType:"application/json",                         
            success: function(data, textStatus, jqXHR){
                callback(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('error, ubicación: '+ host+url);
                console.log(jqXHR.responseText);
                console.log(errorThrown);
                console.log(textStatus);
                // alert(jqXHR.responseText);
            }          
        });
    }
    
    /*
    * This function is used to insert data in a REST Service . being syncronical
    *
    * @params url:  The URL needed to make the post request to the REST Service.
    * @params _data: A JSONObject with the data thats meant to be inserted.
    * @params callback: The callback function.
    */
    , s_post: function(url, _data, callback){
                console.log(url)
        console.log(_data)
        $.ajax({
            url: host+url,
            type: 'POST',
            async: false,
            data:  _data,
            // contentType:"application/json",                         
            success: function(data, textStatus, jqXHR){
                callback(data);
                return true;
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('error, ubicación: '+ host+url);
                console.log(jqXHR);
                console.log(jqXHR.responseText);
                console.log(errorThrown);
                console.log(textStatus);
                callback(JSON.parse(jqXHR.responseText));
                return false;
            }          
        });
    }

    /*
    * This function is used to update a data registry that already exists in a REST Service.
    * @params url:  The URL needed to make the put request to the REST Service. Usually the url ends with "/{someId}"
    * @params data: A JSONObject with the data thats meant to be updated.
    * @params callback: The callback function.
    */
    , put: function(url, data, callback){
        $.ajax({
            url: host+url,
            type: 'PUT',
            data:  data,
            // contentType:"application/json",                         
            success: function(data, textStatus, jqXHR){
                callback(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('error, ubicación: '+ host+url);
                console.log(jqXHR.responseText);
                console.log(errorThrown);
                console.log(textStatus);
                // alert(jqXHR.responseText);
            }          
        });
    }

    /*
    * This function is used to delete data in a REST Service.
    * @params url:  The URL needed to make the delete request to the REST Service. Usually the url ends with "/{someId}"
    */
    , delete: function(url, callback){
        $.ajax({
            url: host+url,
            type: 'DELETE',
            success: function(data, textStatus, jqXHR){
                callback(data);
                return true;
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('error, ubicación: '+ host+url);
                console.log(jqXHR.responseText);
                console.log(errorThrown);
                console.log(textStatus);
                // alert(jqXHR.responseText);
                return false;
                
            }          
        });

    }



}
