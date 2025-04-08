const GITHUB_ACCESS_TOKEN = '';

function loadNavigation() {
    fetch('nav.html')
        .then(res => res.text())
        .then(navHtml => {
            const body = document.querySelector('body');
            body.insertAdjacentHTML('afterbegin', navHtml);
        })
        .catch(err => console.error(err));
}

async function loadUserData() {
    const res = await fetch('https://api.github.com/user', {
        headers: {
            Authorization: `token ${GITHUB_ACCESS_TOKEN}`
        }
    });

    //TODO: hibakezelés

    const user = await res.json();
    sessionStorage.setItem('username', user.login);
}

loadNavigation();

const username = sessionStorage.getItem('username');
if (!username) {
    loadUserData();
}