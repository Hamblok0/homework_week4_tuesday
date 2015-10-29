
$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});

url = "https://api.github.com/users/Hamblok0"
url2 = "https://api.github.com/users/Hamblok0/repos"



$.getJSON(url).done(function(data) {
  var avatar = data.avatar_url;
  $('.avatar').attr("src", avatar);
  $('.av2').attr("src", avatar);


  var username = data.login;
  $('.userName').append(username);

  var joindate = data.created_at;
  $('.date').append(joindate);

  var followers = data.followers;
  $('.vcardfol').append(followers);

  var starred = data.collaborators;
  $('.vcardstar').append(starred);

  var following = data.following;
  $('.vcardfoling').append(following);
});

$.getJSON(url2).done(function(data){
  console.log(data);

  var displayRepos = function(entries) {
    entries.forEach(function(repo) {
      console.log(repo);
      var repoDiv = $('.repoList');
      var article = $(
      '<article class="repo">' + '<a class="repoLink">' + repo.name + '</a>' + '<div class= "repoStats">' + repo.language +
      '<span class="star">' + '<span class="octicon octicon-star"></span>' + repo.stargazers_count + '</span>' + '<span class="fork">'
      + '<span class="octicon octicon-git-branch"></span>' + repo.forks + '</div>' + '<p>Updated ' + repo.updated_at + '</p>'

     );
      repoDiv.append(article);

    });
  }
  displayRepos(data);
});
