const collapsible = document.querySelectorAll(".collapsible");
collapsible.forEach((component) => {
  component.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  });
});
