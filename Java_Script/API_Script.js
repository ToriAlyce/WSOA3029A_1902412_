fetch("https://api.covid19api.com/summary")
.then((r) => r.json())
.then((data) => {
    console.log(data);
    handelData(Global)
});

const handelData = (Object) => {
    document.querySelector("blockquote").innerText = Object.Global;
};