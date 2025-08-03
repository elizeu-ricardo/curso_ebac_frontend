document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.getElementById('profile-name');
    const userNameElement = document.getElementById('profile-username');
    const avatarElement = document.getElementById('profile-avatar');
    const reposElement = document.getElementById('repos');
    const followersElement = document.getElementById('followers');
    const followingElement = document.getElementById('following');
    const linkElement = document.getElementById('profile-link');

    const xhttp = new XMLHttpRequest();
    const endpoint = 'https://api.github.com/users/elizeu-ricardo';
    xhttp.open('GET', endpoint);
    xhttp.onload = function() {
        const data = JSON.parse(xhttp.responseText);

        nameElement.innerText = data.name;
        userNameElement.innerText = data.login
        avatarElement.src = data.avatar_url;
        reposElement.innerText = data.public_repos;
        followersElement.innerText = data.followers;
        followingElement.innerText = data.following;
        linkElement.href = data.html_url;
    }
    xhttp.send();

    

})