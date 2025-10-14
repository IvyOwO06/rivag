let path = window.location.pathname;
const langLink = document.getElementById('langLink');

function lang_picker() {
    if (path == "/") {
        langLink.href = window.location.origin + '/en';
        langLink.innerHTML = `
            <img alt="English Flag" src="/themes/rivagnl/assets/img/en-flag-circle.svg" height="48" width="48" />
        `
    }
    else if (path == "/en") {
        langLink.href = window.location.origin;
        langLink.innerHTML = `
            <img alt="Nederlandse vlag" src="/themes/rivagnl/assets/img/nl-flag-circle.svg" height="48" width="48" />
        `
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const flashContainer = document.getElementById('genericForm_forms_flash');
    if (!flashContainer) return;

    const observer = new MutationObserver(() => {
        const closeBtn = flashContainer.querySelector('button');
        if (closeBtn && !closeBtn.dataset.bound) {
            closeBtn.dataset.bound = 'true'; // prevent double binding
            closeBtn.addEventListener('click', () => {
                flashContainer.innerHTML = ''; // clear content (instead of display:none)
            });
        }
    });

    observer.observe(flashContainer, { childList: true, subtree: true });
});