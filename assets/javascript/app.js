var searchString = "dog";
var limit = 5;
var start_date = "20120101";
var end_date = "20120103";

if ((start_date.length == 8) && (end_date.length == 8)) {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchString + "&begin_date=" + start_date + "&end_date=" + end_date + "&api-key=4f38q1yt864GaGzOXo5L4C9dXbLnAu5q";
} else if ((start_date == "") || (end_date == "")) {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchString + "&api-key=4f38q1yt864GaGzOXo5L4C9dXbLnAu5q";
}

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (results) {
    console.log(results);
    for (let i = 0; i < limit; i++) {
        var heading = $("<h4>").text(results.response.docs[i].snippet);
        var date = $("<p>").text(results.response.docs[i].pub_date);
        var url = $("<a>").attr("href", results.response.docs[i].web_url).text(results.response.docs[i].web_url);
        $("#results").append(heading, date, url);
    }
});