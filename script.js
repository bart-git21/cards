

function open_close_button() {
    let profile = document.querySelector(".content-box");
    profile.classList.toggle("visible");

    let view_button = document.querySelector(".view-button");
    view_button.classList.toggle("hidden");
}