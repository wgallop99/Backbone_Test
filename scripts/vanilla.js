function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}


fetchJSONFile('api/posts.json', function(data){
    console.log(data.posts[1])
  for (var i = 0; i < data.posts.length; i++) {
    var onePost;
    fetchJSONFile('api/posts/' + data.posts[i].id + '.json', function(singlePost){
      console.log(singlePost.post);

    });

    $("body").append(
      "<h1><a target='_blank' href='" + data.posts[i].link + "'>" + data.posts[i].title + "</a></h1>"
      + "<p>" + data.posts[i].source + "</p>"
    );

  }
});
