/******************************************************
* Author: Yasin Zahir

* ZAHIR RESTAURANT

* Copyright 2026
******************************************************/

import menuImage from "../assets/menu-img.png";
import menuBackground from "../assets/menu-background.jpg";
export class Menu {
  contentDiv = document.getElementById("content");

  constructor() {
    this.createMenu();
  }
  createMenu() {
    const backgroundImg = document.createElement("img");
    backgroundImg.className = "menu-background";
    backgroundImg.src = menuBackground;

    this.contentDiv.style.backgroundImage = `url(${menuBackground})`;
    this.contentDiv.style.backgroundSize = "cover";

    const menuFrame = document.createElement("div");
    menuFrame.className = "menu-frame";
    this.contentDiv.appendChild(menuFrame);

    const menuImg = document.createElement("img");
    menuImg.className = "menu-img";
    menuImg.src = menuImage;

    menuFrame.appendChild(menuImg);
  }
}
