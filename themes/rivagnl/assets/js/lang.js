let path = window.location.pathname;
const langLink = document.getElementById('langLink');

function lang_picker() {
    console.log(path);
    console.log(langLink)
    console.log(langImg)
    console.log(this)
    if (path == "/") {
        console.log("Nederlands");
        langLink.href = window.location.origin + '/en';
        langLink.innerHTML = `
            <img alt="English Flag" src="/themes/rivagnl/assets/img/en-flag-circle.svg" height="64" width="64" />
        `
    }
    else if (path == "/en") {
        console.log("English")
        langLink.href = window.location.origin;
        langLink.innerHTML = `
            <img alt="Nederlandse vlaf" src="/themes/rivagnl/assets/img/nl-flag-circle.svg" height="64" width="64" />
        `
    }
}