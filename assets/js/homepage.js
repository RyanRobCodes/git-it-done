var getUserRepos = function() {
    fetch("https://api.github.com/users/octocat/repos");
};

getUserRepos();

//start on 6.1.4 trying to commit