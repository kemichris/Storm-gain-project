// Nav bar variables 
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

// cex and dex variable
const topContentDex = document.querySelector(".top-container-dex");
const inputEl = document.getElementById("switch");
const cexDEx = document.querySelector(".cex-dex");

// FAQ section variables 
const faqContainer = document.querySelector(".faq-container");

const  faqContent1 = document.querySelector(".faq-content1");
const  faqContent2 = document.querySelector(".faq-content2");
const  faqContent3 = document.querySelector(".faq-content3");
const  faqContent4 = document.querySelector(".faq-content4");
const  faqContent5 = document.querySelector(".faq-content5");
const  faqContent6 = document.querySelector(".faq-content6");
const faqcontent6Trading = document.getElementById("faq-cont6");

const  icon1 = document.querySelector(".icon-dropdown1");
const  icon2 = document.querySelector(".icon-dropdown2");
const  icon3 = document.querySelector(".icon-dropdown3");
const  icon4 = document.querySelector(".icon-dropdown4");
const  icon5 = document.querySelector(".icon-dropdown5");
const  icon6 = document.querySelector(".icon-dropdown6");

const paragraph1 = document.querySelector(".paragraph1");
const paragraph2 = document.querySelector(".paragraph2");
const paragraph3 = document.querySelector(".paragraph3");
const paragraph4 = document.querySelector(".paragraph4");
const paragraph5 = document.querySelector(".paragraph5");
const paragraph6 = document.querySelector(".paragraph6");


const faContentFlex1 = document.querySelector(".fa-content-flex1");
const faContentFlex2 = document.querySelector(".fa-content-flex2");
const faContentFlex3 = document.querySelector(".fa-content-flex3");
const faContentFlex4 = document.querySelector(".fa-content-flex4");
const faContentFlex5 = document.querySelector(".fa-content-flex5");
const faContentFlex6 = document.querySelector(".fa-content-flex6");

const viewMoreBtn = document.getElementById("view-more-btn");

const xIcon1 = document.createElement("i");
xIcon1.setAttribute("class", "fa-solid fa-xmark x-mark");
const xIcon2 = document.createElement("i");
xIcon2.setAttribute("class", "fa-solid fa-xmark x-mark");
const xIcon3 = document.createElement("i");
xIcon3.setAttribute("class", "fa-solid fa-xmark x-mark");
const xIcon4 = document.createElement("i");
xIcon4.setAttribute("class", "fa-solid fa-xmark x-mark");
const xIcon5 = document.createElement("i");
xIcon5.setAttribute("class", "fa-solid fa-xmark x-mark");
const xIcon6 = document.createElement("i");
xIcon6.setAttribute("class", "fa-solid fa-xmark x-mark");


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
    setTimeout(() => {
        productDropdown.classList.add("active");
    }, 5000);
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






icon1.addEventListener("click", ()=>{
    faqContent1.classList.add("active");
    paragraph1.classList.remove("active");
    icon1.remove();
    faContentFlex1.appendChild(xIcon1);

});
icon2.addEventListener("click", ()=>{
    faqContent2.classList.add("active");
    paragraph2.classList.remove("active");
    icon2.remove();
    faContentFlex2.appendChild(xIcon2);

});
icon3.addEventListener("click", ()=>{
    faqContent3.classList.add("active");
    paragraph3.classList.remove("active");
    icon3.remove();
    faContentFlex3.appendChild(xIcon3);

});
icon4.addEventListener("click", ()=>{
    faqContent4.classList.add("active");
    paragraph4.classList.remove("active");
    icon4.remove();
    faContentFlex4.appendChild(xIcon4);

});
icon5.addEventListener("click", ()=>{
    faqContent5.classList.add("active");
    paragraph5.classList.remove("active");
    icon5.remove();
    faContentFlex5.appendChild(xIcon5);

});
icon6.addEventListener("click", ()=>{
    faqContent6.classList.add("active");
    paragraph6.classList.remove("active");
    icon6.remove();
    faContentFlex6.appendChild(xIcon6);

});

xIcon1.addEventListener("click", ()=> {
    faqContent1.classList.remove("active");
    paragraph1.classList.add("active");
    xIcon1.remove();
    faContentFlex1.appendChild(icon1);
});
xIcon2.addEventListener("click", ()=> {
    faqContent2.classList.remove("active");
    paragraph2.classList.add("active");
    xIcon2.remove();
    faContentFlex2.appendChild(icon2);
});
xIcon3.addEventListener("click", ()=> {
    faqContent3.classList.remove("active");
    paragraph3.classList.add("active");
    xIcon3.remove();
    faContentFlex3.appendChild(icon3);
});
xIcon4.addEventListener("click", ()=> {
    faqContent4.classList.remove("active");
    paragraph4.classList.add("active");
    xIcon4.remove();
    faContentFlex4.appendChild(icon4);
});
xIcon5.addEventListener("click", ()=> {
    faqContent5.classList.remove("active");
    paragraph5.classList.add("active");
    xIcon5.remove();
    faContentFlex5.appendChild(icon5);
});
xIcon6.addEventListener("click", ()=> {
    faqContent6.classList.remove("active");
    paragraph6.classList.add("active");
    xIcon6.remove();
    faContentFlex6.appendChild(icon6);
});

faqcontent6Trading.remove();

let toggle =  true;

viewMoreBtn.addEventListener("click", ()=>{
    toggle? viewMore() : hideMore();
    toggle = !toggle;
});

function viewMore() {
    faqContainer.insertBefore(faqcontent6Trading, faqContainer.children[6]);
    viewMoreBtn.innerHTML = "Hide More";
}

function hideMore() {
    faqcontent6Trading.remove();
    viewMoreBtn.innerHTML = "View More";
}

inputEl.checked = JSON.parse(localStorage.getItem("cex-dex"));
updateBody();

inputEl.addEventListener("input", () =>{
    updateBody();
    updateLocalStorage();
});

function updateBody() {
    if (inputEl.checked) {
        cexDEx.innerHTML = "DEX";
        topContentDex.classList.remove("active");
    }else {
        cexDEx.innerHTML = "CEX";
        topContentDex.classList.add("active");
    }
}

function updateLocalStorage() {
    localStorage.setItem("cex-dex", JSON.stringify(inputEl.checked));
}


