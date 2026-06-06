/******************************************************
* Author: Yasin Zahir

* ZAHIR RESTAURANT

* Copyright 2026
******************************************************/

import heroImage from "../assets/homepage-hero.png";
import kpImage from "../assets/kabuli-palow-img.png";
import sImage from "../assets/shakshuka-img.png";
import aImage from "../assets/ashak-img.png";

export class Homepage {
  contentDiv = document.getElementById("content");
  constructor() {
    this.createHomePage();
  }
  createHomePage() {
    const foodImage = document.createElement("img");
    foodImage.src = heroImage;
    foodImage.className = "hero-img";

    this.contentDiv.appendChild(foodImage);

    const heroText = document.createElement("h1");
    heroText.textContent = "THE BEST CUISINE";
    heroText.className = "hero-text";
    this.contentDiv.appendChild(heroText);

    const heroSubText = document.createElement("p");
    heroSubText.textContent =
      "The ZAHIR RESTAURANT Site is here! Let's celebrate! It is now easier than ever to book reservations, order online, and keep track of your rewards - all in \r\n one convenient place.";
    heroSubText.className = "hero-subtext";
    this.contentDiv.appendChild(heroSubText);

    const downloadButtonDiv = document.createElement("div");
    downloadButtonDiv.className = "download-button-container";
    this.contentDiv.appendChild(downloadButtonDiv);

    const downloadButton = document.createElement("button");
    downloadButton.className = "download-button";
    downloadButton.textContent = "DOWNLOAD NOW";

    downloadButtonDiv.appendChild(downloadButton);

    const sectionTwoText = document.createElement("h1");
    sectionTwoText.className = "section-2-text";
    sectionTwoText.textContent = "OUR SIGNATURE DISHES";
    this.contentDiv.appendChild(sectionTwoText);

    const sectionTwoSubtext = document.createElement("p");
    sectionTwoSubtext.className = "section-2-subtext";
    sectionTwoSubtext.textContent = "A taste of tradition, made with passion.";
    this.contentDiv.appendChild(sectionTwoSubtext);

    // Food Card I - Kabuli Palow

    const sectionTwoDiv = document.createElement("div");
    sectionTwoDiv.className = "section-2";
    this.contentDiv.appendChild(sectionTwoDiv);

    const foodFrame = document.createElement("div");
    foodFrame.className = "food-frame";
    sectionTwoDiv.appendChild(foodFrame);

    const kabuliPalowImage = document.createElement("img");
    kabuliPalowImage.src = kpImage;
    kabuliPalowImage.className = "kp-img";
    foodFrame.appendChild(kabuliPalowImage);

    const kabuliPalowHeader = document.createElement("h2");
    kabuliPalowHeader.textContent = "Kabuli Palow";
    kabuliPalowHeader.className = "kp-header";
    foodFrame.appendChild(kabuliPalowHeader);

    const foodCardFlourish = [
      document.createElement("p"),
      document.createElement("p"),
      document.createElement("p"),
    ];
    for (let i = 0; i < 3; i++) {
      foodCardFlourish[i].textContent = "──── ◆ ────";
      foodCardFlourish[i].className = "flourish";
    }

    foodFrame.appendChild(foodCardFlourish[0]);

    const kabuliPalowDesc = document.createElement("p");
    kabuliPalowDesc.textContent =
      "Afghanistan's national dish made with\r\n fragrant rice, tender lamb,\r\n carrots, raisins and nuts.";
    kabuliPalowDesc.className = "kp-desc";
    foodFrame.appendChild(kabuliPalowDesc);

    // Food Card II - Shakshuka

    const sectionThreeDiv = document.createElement("div");
    sectionThreeDiv.className = "section-3";
    this.contentDiv.appendChild(sectionThreeDiv);

    const foodFrame2 = document.createElement("div");
    foodFrame2.className = "food-frame-2";
    sectionThreeDiv.appendChild(foodFrame2);

    const shakshukaImage = document.createElement("img");
    shakshukaImage.src = sImage;
    shakshukaImage.className = "s-img";
    foodFrame2.appendChild(shakshukaImage);

    const shakshukaHeader = document.createElement("h2");
    shakshukaHeader.textContent = "Shakshuka";
    shakshukaHeader.className = "s-header";
    foodFrame2.appendChild(shakshukaHeader);
    foodFrame2.appendChild(foodCardFlourish[1]);

    const shakshukaDesc = document.createElement("p");
    shakshukaDesc.textContent =
      "Poached eggs in a rich, spiced tomato\r\n sauce with peppers, onions and herbs.\r\n A hearty and flavorful classic.";
    shakshukaDesc.className = "s-desc";
    foodFrame2.appendChild(shakshukaDesc);

    // Food Card III - Ashak

    const sectionFourDiv = document.createElement("div");
    sectionFourDiv.className = "section-4";
    this.contentDiv.appendChild(sectionFourDiv);

    const foodFrame3 = document.createElement("div");
    foodFrame3.className = "food-frame-3";
    sectionFourDiv.appendChild(foodFrame3);

    const ashakImage = document.createElement("img");
    ashakImage.src = aImage;
    ashakImage.className = "a-img";
    foodFrame3.appendChild(ashakImage);

    const ashakHeader = document.createElement("h2");
    ashakHeader.textContent = "Ashak";
    ashakHeader.className = "a-header";
    foodFrame3.appendChild(ashakHeader);
    foodFrame3.appendChild(foodCardFlourish[2]);

    const ashakDesc = document.createElement("p");
    ashakDesc.textContent =
      "Delicate leek-filled dumplings topped\r\n with garlic yogurt sauce, lentils,\r\n and a touch of mint.";
    ashakDesc.className = "a-desc";
    foodFrame3.appendChild(ashakDesc);
  }
}
