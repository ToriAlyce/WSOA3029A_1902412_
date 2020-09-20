const sections = document.querySelectorAll('section');
const blimp = document.querySelector('.blimp');
const gradients = [
    "linear-gradient(to right top, #3e5e77, #573039", 
    "linear-gradient(to left top,  #2e151b, #da7b93)",
    "linear-gradient(to right top, #da7b93, #376e6f)",
    "linear-gradient(to right top, #376e6f, #1c3334)", 
    "linear-gradient(to left top,  #1c3334, #2f4454)"
];

const options = {
    threshold: 0.5
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck (entries){
    entries.forEach(entry => {
        console.log(entry);
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if (entry.isIntersecting){
            blimp.style.setProperty("left", `${directions.left}px`);
            blimp.style.setProperty("top", `${directions.top}px`);
            blimp.style.setProperty("width", `${directions.width}px`);
            blimp.style.setProperty("height", `${directions.height}px`);
            blimp.style.background = gradients[gradientIndex];
        }
    });
}

sections.forEach(section => {
    observer.observe(section);
});
