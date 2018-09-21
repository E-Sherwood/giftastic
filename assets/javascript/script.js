//var inputText = 
var apiURL = 'https://api.giphy.com/v1/gifs/search';
 $("#test").on("click", function(){
    $.ajax({
        method: "GET",
        url: apiURL + '?' + $.param({
            q: "test",    
            api_key: 'kzmA9HrLpUOdpCLEXes0liGMs7ZJmPpG',
            limit: 10
        }),
        
    })
    .then(function(response){
        var imageUrl = response.data.image_original_url;
        var testImage = $("<img>");
        testImage.attr("src", imageUrl);
        testImage.attr("alt", "test image");
        $("#images").prepend(testImage)
    })

    
});
