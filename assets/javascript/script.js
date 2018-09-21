var metalArray = ["thrash", "death", "black", "djent", "nu", "speed"]
for (var m = 0; m < metalArray.length; m++){
    var genre = $("<button>");
    genre.html(metalArray[m]);
    genre.attr("name", metalArray[m]);
    genre.attr("class", "searchButton");
    $("#buttons").append(genre);
}
$(".searchButton").on("click", function(){
    var genreName = $(this).attr("name")
    $.ajax({
        method: "GET",
        url: apiURL + '?' + $.param({
            q: genreName + " metal",  
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
            testImage.attr("alt", "test image");
            $("#images").append(testImage)    
        }
    })
})
var apiURL = 'https://api.giphy.com/v1/gifs/search';
 $("#test").on("click", function(){
    $.ajax({
        method: "GET",
        url: apiURL + '?' + $.param({
            q: "metal",    
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
            testImage.attr("alt", "test image");
            $("#images").append(testImage)    
        }
    })

    
});
