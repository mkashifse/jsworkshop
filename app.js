class Node {
  constructor(selector) {
    this.el = document.querySelector(selector);
  }
  addTag(tag, text, classes) {
    const child = document.createElement(tag);
    child.setAttribute("class", classes);
    child.innerText = text;
    this.el.appendChild(child);
  }
}

const n = new Node("#menu");
n.addTag("li", "Menu", "text-white text-2xl text-center py-6");
n.addTag("li", "Menu", "text-white text-2xl text-center py-6");
n.addTag("li", "Menu", "text-white text-2xl text-center py-6");
n.addTag("li", "Menu", "text-white text-2xl text-center py-6");
n.addTag("li", "Menu", "text-white text-2xl text-center py-6");
n.addTag("li", "Menu", "text-white text-2xl text-center py-6");
console.log(n.el);

// MENU
const menu = {
  el: document.querySelector("#menu"),
  li: document.querySelector("#menu > li"),
  selected: 5,
  step: 89,
  list: new Array(20).fill("Menu ").map((item, i) => item + i),
  init() {},
  scrollUp() {
    this.selected++;
    this.el.scrollTo({
      top: this.el.scrollTop + this.step
    });
  },
  scrollDown() {
    this.selected++;
    this.el.scrollTo({
      top: this.el.scrollTop - this.step
    });
  }
};

// SIDE BAR
const sideBar = {
  el: document.querySelector("#sidebar"),
  show() {
    this.el.setAttribute("style", "display:block");
  },
  hide() {
    this.el.setAttribute("style", "display:none");
  }
};

// EVENTS
document.onkeyup = event => {
  if (event.key === "ArrowLeft") {
    event.stopImmediatePropagation();
    event.preventDefault();
    sideBar.hide();
  } else if (event.key === "ArrowRight") {
    event.stopImmediatePropagation();
    event.preventDefault();
    sideBar.show();
  }
  if (event.key === "ArrowUp") {
    menu.scrollUp();
  } else if (event.key === "ArrowDown") {
    menu.scrollDown();
  }
};
