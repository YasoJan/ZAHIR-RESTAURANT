/******************************************************
* Author: Yasin Zahir

* ZAHIR RESTAURANT

* Copyright 2026
******************************************************/

export class About {
  contentDiv = document.getElementById("content");

  constructor() {
    this.createAbout();
  }
  createAbout() {
    const aboutCardFlourish = [
      document.createElement("p"),
      document.createElement("p"),
      document.createElement("p"),
    ];
    for (let i = 0; i < 3; i++) {
      aboutCardFlourish[i].textContent = "──── ◆ ────";
      aboutCardFlourish[i].className = "about-flourish";
    }

    const mainPage = document.createElement("div");
    mainPage.className = "main-page";
    this.contentDiv.appendChild(mainPage);

    const introCard = document.createElement("div");
    introCard.className = "intro-card";
    mainPage.appendChild(introCard);

    const aboutText = document.createElement("h1");
    aboutText.textContent = "ZAHIR RESTAURANT";
    aboutText.className = "about-text";
    introCard.appendChild(aboutText);
    introCard.appendChild(aboutCardFlourish[0]);

    const aboutSubText = document.createElement("p");
    aboutSubText.setAttribute("style", "white-space: pre;");
    aboutSubText.textContent =
      "Serving authentic Afghan cuisine\r\n since 1998.";
    aboutSubText.className = "about-subtext";
    introCard.appendChild(aboutSubText);

    const ourStoryCard = document.createElement("div");
    ourStoryCard.className = "our-story-card";
    mainPage.appendChild(ourStoryCard);

    const ourStoryText = document.createElement("h1");
    ourStoryText.textContent = "OUR STORY";
    ourStoryText.className = "our-story-text";
    ourStoryCard.appendChild(ourStoryText);
    ourStoryCard.appendChild(aboutCardFlourish[1]);

    const ourStorySubText = document.createElement("p");
    ourStorySubText.setAttribute("style", "white-space: pre;");
    ourStorySubText.textContent =
      "At Zahir Restaurant, we believe great food brings people together.\r\n\r\n Inspired by Afghan traditions, our chefs prepare\r\n every dish using fresh ingredients and time-honored recipes.\r\n\r\n Whether you're joining us for a family celebration,\r\n a casual dinner, or a special occasion, our goal is to create\r\n an experience you'll never forget.";
    ourStorySubText.className = "about-subtext";
    ourStoryCard.appendChild(ourStorySubText);
  }
}
