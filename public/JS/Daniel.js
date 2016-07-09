
$('.btn').on('click', function() {

	
	var nameDish = document.getElementById('dish').value;
	var email = document.getElementById('email').value; 
          

	if (nameDish=== "" || email=== ""){
		alert("Add dish name and e-mail");

		return false;
	}
	else {
		return true;
	}

    });


var accessToken = '22152698.1677ed0.64e04d6c82944e93a7bd0eda2c720a0c';

$.ajax({
    url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=22152698.1677ed0.64e04d6c82944e93a7bd0eda2c720a0c',
    dataType: 'jsonp',
    type: 'GET',
    data: {client_id: accessToken},
    limit: 15,
    success: function(data){
        console.log(data);
        for(var x in data.data){
          $('h4').append('<span><img src="'+data.data[x].images.low_resolution.url+'"></span>');  
        }
    },
    error: function(data){
        console.log(data);
    }
});

$(document).ready(function() {
    $('h2').hover(function() {
        $('h2').fadeTo('fast', 100);
    });
    $('h2').hover(function(){
        $('h2').fadeTo('fast', 0.5);
});
});
   
