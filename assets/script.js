document.addEventListener("click", (event) => {
    if (!event.target.href) return;

    const target = event.target.href.split("#")[1];
    const element = document.querySelector(`.scroll-${target}`);

    if (!element) return;

    element.scrollIntoView({ behavior: "smooth" });
});