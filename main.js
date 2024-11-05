const body = document.getElementsByTagName("body")[0];
const btn = document.getElementsByClassName("btn")[0];

btn.addEventListener("click", () => {
  let container = document.querySelector(".container");

  if (container) {
    container.remove();
  } else {
    container = document.createElement("div");
    container.className = "container";
    body.appendChild(container);

    const classes = ["block1", "block2", "block3", "block4"];

    classes.forEach((className) => {
      const block = document.createElement("div");
      block.className = `block ${className}`;
      container.appendChild(block);
    });
  }
});
