// grab as a json
$.getJSON('/articles', function(data){
	//for each one
	for (var i = 0; i < data.length; i++) {
     $('#articles').append('<p data-id="' + data[i]._id + '">' + data[i].title  + '<br />'+ data[i].link + '</p>');

  }
});

//ajax call for article and append the data to page
$.ajax({
    method: "GET",
    url: "/articles/" + thisId,
  })
 	.done(function( data ) {
 		$('#notes').append('<h4>' + data.title + '</h4>');
    });
};

//on click functions