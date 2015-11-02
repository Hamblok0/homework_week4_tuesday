
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

  var followersLink = "https://github.com/" + username + "/followers";
  $('.followers').attr("href", followersLink);

  var starsLink = "https://github.com/stars";
  $('.starred').attr("href", starsLink);

  var followingLink = "https://github.com/" + username + "/following";
  $('.following').attr("href", followingLink);
});

$.getJSON(url2).done(function(data){

  var displayRepos = function(entries) {
    entries.forEach(function(repo) {

      var repoDiv = $('.repoList');

      var repositoryList = $('#repositoryList');
      var repoTemplate = repositoryList.html();
      var compiledRepoTemplate = _.template(repoTemplate);

      var repoURL = "http://github.com/" + repo.full_name;
      $('.repoLink').attr("href", repoURL);

      repoDiv.append(compiledRepoTemplate(repo));

    });
  }
  displayRepos(data);
});
