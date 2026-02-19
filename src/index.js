import "./styles.css";
import homePageLoad from "./homepage.js";
import menuPageLoad from "./menu.js";
const container = document.getElementById("content");
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");

let currentState = "home";
homePageLoad();

homeButton.addEventListener("click", () => {
    if (currentState == "home") {
        return "Already Home";
    } else {
        container.replaceChildren();
        homePageLoad();
        currentState = "home";
    };
});

menuButton.addEventListener("click", () => {
    if (currentState == "menu") {
        return "Already in menu";
    } else {
        container.replaceChildren();
        menuPageLoad();
        currentState = "menu";
    };
});