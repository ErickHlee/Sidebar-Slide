const body = document.querySelector("body"),
    sidebar = document.querySelector(".sidebar"),
    toggle = document.querySelector(".toggle"),
    searchBtn = document.querySelector(".search-box"),
    modeSwitch = document.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

// fechando a barra de navegador da esquerda
toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

// pegando o classe 'toggle-switch', altere a classe dele para 'dark'
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode"
    } else {
        modeText.innerText = "Dark Mode"
    }
});

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
});
