var metalArray = ["Thrash", "Death", "Black", "Viking", "Folk", "Speed"]
for (var m = 0; m < metalArray.length; m++) {
    var genre = $("<button>");
    genre.html(metalArray[m]);
    genre.attr("name", metalArray[m]);
    genre.attr("class", "searchButton");
    $("#buttons").append(genre);
}
// add input form for new buttons based on userInput
$(".searchButton").on("click", function () {
    var genreName = $(this).attr("name")
    $.ajax({
        method: "GET",
        url: apiURL + '?' + $.param({
            q: genreName + " metal",
            api_key: 'kzmA9HrLpUOdpCLEXes0liGMs7ZJmPpG',
            limit: 10
        }),

    })
        .then(function (response) {
            //console.log(response);
            $("#images").empty();
            for (var x = 0; x < response.data.length; x++) {
                var imageUrl = response.data[x].images.original_still.url;
                var animatedUrl = response.data[x].images.original.url;
                var testImage = $("<img>");
                testImage.attr("src", imageUrl);
                //testImage.attr("alt", "test image");
                testImage.attr("data-state", "still");
                testImage.attr("data-still", imageUrl);
                testImage.attr("data-animate", animatedUrl);
                testImage.addClass("gif");
                var rate = $("<p>");
                rate.text("rating: " + response.data[x].rating);
                $("#images").append(testImage, rate);
            }

        })
})
//test button
var apiURL = 'https://api.giphy.com/v1/gifs/search';
$("#test").on("click", function () {
    $.ajax({
        method: "GET",
        url: apiURL + '?' + $.param({
            q: "metal",
            api_key: 'kzmA9HrLpUOdpCLEXes0liGMs7ZJmPpG',
            limit: 10
        }),

    })
        .then(function (response) {
            console.log(response);
            for (var x = 0; x < response.data.length; x++) {
                var imageUrl = response.data[x].images.original_still.url;

                var testImage = $("<img>");
                testImage.attr("src", imageUrl);
                testImage.attr("alt", "test image");
                var rate = $("<p>");
                rate.text("rating: " + response.data[x].rating);
                $("#images").append(testImage, rate);
            }

        })


});
$(document).on("click", ".gif", function() {
    
    var state = $(this).attr("data-state");
   
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });