const sections = document.querySelectorAll('section');
const blimp = document.querySelector('.blimp');
const gradients = [
    "linear-gradient(to right top, #FFA17F, #00223E)", 
    "linear-gradient(to left top, #948E99, #2E1437)",
    "linear-gradient(to right top, #556270, #ff6b6b)",
    "linear-gradient(to left top, #948E99, #2E1437)"
];

const options = {
    threshold: 0.7
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
