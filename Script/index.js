const productEl = document.getElementById("product");
const productDropdown = document.querySelector(".product-active");
const earnEl = document.getElementById("earn");
const earnDropdown = document.querySelector(".earn-active");
const easyEl = document.getElementById("easy");
const easyDropdown =document.querySelector(".easy-active");
const academyEl = document.getElementById("academy");
const academyDropdown =document.querySelector(".academy-active");
const companyEl = document.getElementById("company");
const companyDropdown =document.querySelector(".company-active");
const downloadEl = document.getElementById("download");
const downloadDropdown = document.querySelector(".download-active");

const topContentDex = document.querySelector(".top-container-dex");

const inputEl = document.getElementById("switch");
const cexDEx = document.querySelector(".cex-dex");


productEl.addEventListener("mouseover", ()=>{
    productDropdown.classList.remove("active");
});
earnEl.addEventListener("mouseover", ()=>{
    earnDropdown.classList.remove("active");
});
easyEl.addEventListener("mouseover", ()=>{
    easyDropdown.classList.remove("active");
});
academyEl.addEventListener("mouseover", ()=>{
    academyDropdown.classList.remove("active");
});
companyEl.addEventListener("mouseover", ()=>{
    companyDropdown.classList.remove("active");
});
downloadEl.addEventListener("mouseover", ()=>{
    downloadDropdown.classList.remove("active");
});


productEl.addEventListener("mouseleave", ()=>{
    productDropdown.classList.add("active");
});
earnEl.addEventListener("mouseleave", ()=>{
    earnDropdown.classList.add("active");
});
easyEl.addEventListener("mouseleave", ()=>{
    easyDropdown.classList.add("active");
});
academyEl.addEventListener("mouseleave", ()=>{
    academyDropdown.classList.add("active");
});
companyEl.addEventListener("mouseleave", ()=>{
    companyDropdown.classList.add("active");
});
downloadEl.addEventListener("mouseleave", ()=>{
    downloadDropdown.classList.add("active");
});

inputEl.checked = JSON.parse(localStorage.getItem("cex-dex"))
updateBody();

function updateBody() {
    if (inputEl.checked) {
        cexDEx.innerHTML = "DEX";
        topContentDex.classList.remove("active");
    }else {
        cexDEx.innerHTML = "CEX";
        topContentDex.classList.add("active");
    }
}

inputEl.addEventListener("input", () =>{
    updateBody();
    updateLocalStorage();
});

function updateLocalStorage() {
    localStorage.setItem("cex-dex", JSON.stringify(inputEl.checked));
}
