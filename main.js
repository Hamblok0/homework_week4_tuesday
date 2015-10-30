
$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});

url = "https://api.github.com/users/Hamblok0";
url2 = "https://api.github.com/users/Hamblok0/repos";
urlOrg = "https://api.github.com/users/Hamblok0/orgs";



$.getJSON(url).done(function(data) {
  var avatar = data.avatar_url;
  $('.avatar').attr("src", avatar);
  $('.av2').attr("src", avatar);


  var username = data.login;
  $('.userName').append(username);

  var joindate = moment(data.created_at).format('ll');
  $('.date').append(joindate);

  var followers = data.followers;
  $('.vcardfol').append(followers);

  var starred = data.collaborators;
  $('.vcardstar').append(starred);

  var following = data.following;
  $('.vcardfoling').append(following);
});

$.getJSON(url2).done(function(data){

  var displayRepos = function(entries) {
    entries.forEach(function(repo) {
      var theTimeDude = moment(repo.updated_at).format('ll');
      var repoDiv = $('.repoList');
      var article = $(
      '<article class="repo">' + '<a class="repoLink">' + repo.name + '</a>' + '<div class= "repoStats">' + '<span class="language">' + repo.language +
      '</span>' + '<span class="star">' + '<span class="octicon octicon-star"></span>' + repo.stargazers_count + '</span>' + '<span class="fork">'
      + '<span class="octicon octicon-git-branch"></span>' + repo.forks + '</div>' + '<p class="updateText">Updated ' + theTimeDude + '</p>'
     );
      var repoURL = repo.url;
      $('.repoLink').attr("href", repoURL);
      repoDiv.append(article);



    });
  }
  displayRepos(data);
});

$.getJSON(urlOrg).done(function(data){
  console.log(data);

})
