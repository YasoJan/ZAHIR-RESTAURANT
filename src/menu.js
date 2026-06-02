/******************************************************
* Author: Yasin Zahir

* ZAHIR RESTAURANT

* Copyright 2026
******************************************************/

import menuImage from "../assets/menu-img.png";

export class Menu {
  contentDiv = document.getElementById("content");

  constructor() {
    this.createMenu();
  }
  createMenu() {
    //TODO: CREATE AN INNER DIV TO CENTER THE MENU IMG
    const menuImg = document.createElement("img");
    menuImg.className = "menu-img";
    menuImg.src = menuImage;

    this.contentDiv.appendChild(menuImg);
  }
}
