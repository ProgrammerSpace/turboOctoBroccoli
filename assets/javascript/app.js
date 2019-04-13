var searchString = "";
var limit = 5;
var start_date = "";
var end_date = "";
$(document).ready(function () {

    $(".clear").on("click", function (event) {
        event.preventDefault();
        $("#results").empty();
    });

    $(".button").on("click", function (event) {
        event.preventDefault();
        searchString = $("#formGroupExampleInput").val();
        limit = $("#formGroupExampleInput2").val();
        start_date = $("#formGroupExampleInput3").val();
        end_date = $("#formGroupExampleInput4").val();
        console.log("string: " + searchString + " limit: " + limit + " start: " + start_date + " end: " + end_date);

        if ((start_date.length == 8) && (end_date.length == 8)) {
            var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchString + "&begin_date=" + start_date + "&end_date=" + end_date + "&api-key=4f38q1yt864GaGzOXo5L4C9dXbLnAu5q";
        } else {
            var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchString + "&api-key=4f38q1yt864GaGzOXo5L4C9dXbLnAu5q";
        }

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (results) {
            console.log(results);
            $("#results").empty();
            for (let i = 0; i < limit; i++) {
                var newDiv = $("<div>");
                $(newDiv).addClass("card m-2 p-3");
                var heading = $("<h4>").text(results.response.docs[i].snippet);
                $(heading).addClass("card-titile");
                var date = $("<p>").text("Published Date: " + results.response.docs[i].pub_date);
                var url = $("<a>").attr("href", results.response.docs[i].web_url).text(results.response.docs[i].web_url);
                $(newDiv).append(heading, date, url);
                $("#results").append(newDiv);
            }
        });
    })

})



