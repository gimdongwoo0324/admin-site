const close_button = document.querySelector("#close_button")
const login_form = document.querySelector(".login_form")

const login_button = document.querySelector(".login_button")

close_button.addEventListener("click", () => {
    login_form.style.display = "none"
})


login_button.addEventListener("click", () => {
    login_form.style.display = "flex"
})


