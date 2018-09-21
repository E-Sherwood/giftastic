var metalArray = ["thrash", "death", "black", "djent", "nu", "speed"]
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
        console.log(response);
        for (var x = 0; x < response.data.length; x++){
            var imageUrl = response.data[x].images.original.url;
            var testImage = $("<img>");
            testImage.attr("src", imageUrl);
            testImage.attr("data-state", "still");
            testImage.attr("alt", "test image");
            $("#images").append(testImage)    
        }
    })

    
});
