import "./styles.css";
import { Homepage } from "./homepage.js";
import { Menu } from "./menu.js";
import { About } from "./about.js";

class Main {
  hp = new Homepage();
  contentDiv = document.querySelector("#content");

  constructor() {
    this.globalListeners();
  }
  removeContent() {
    while (this.contentDiv.firstChild) {
      this.contentDiv.removeChild(this.contentDiv.firstChild);
    }
    if (this.contentDiv.style.backgroundImage) {
      this.contentDiv.style.backgroundImage = "";
    }
  }

  globalListeners() {
    //HOME PAGE
    const homeButton = document.querySelector(".home-button");
    homeButton.addEventListener("click", () => {
      //if (this.contentDiv.hasChildNodes()) {
      this.removeContent();
      //}
      const hp = new Homepage();
    });
    // MENU PAGE
    const menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", () => {
      //if (this.contentDiv.hasChildNodes()) {
      this.removeContent();
      //}
      const menu = new Menu();
    });
    // TODO: ADD ABOUT PAGE
    const aboutButton = document.querySelector(".about-button");
    aboutButton.addEventListener("click", () => {
      this.removeContent();
      const about = new About();
    });
  }
}

const entryPoint = new Main();
