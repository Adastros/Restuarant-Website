import { createElement, addClass } from "./helper.js";
import "../stylesheets/home.css";

function createHeroMessage() {
  let heroMessageContainer = createElement("div"),
    heroMainText = createElement("h1"),
    heroSubtext = createElement("p");

  heroMainText.textContent = `THE BEST BURGERS IN SOCAL`;
  heroSubtext.textContent = `HAND CRAFTED WITH THE FRESHEST INGREDIENTS`;

  heroMessageContainer.append(heroMainText);
  heroMessageContainer.append(heroSubtext);
  addClass(heroMessageContainer, "hero-container");
  addClass(heroSubtext, 'hero-subtext');

  return heroMessageContainer;
}

function renderHomePage() {
  let htmlElement = document.querySelector("html"),
    bodyElement = document.querySelector("body"),
    homePage = document.querySelector("main"),
    homeTab = document.querySelector(`[data-tab = 'home']`);

  homePage.append(createHeroMessage());
  addClass(homePage, 'homepage-flex');

  addClass(htmlElement, "homepage-background");
  addClass(bodyElement, "homepage-overlay");
  addClass(homeTab, "selected-tab");

  return homePage;
}

export { renderHomePage };
