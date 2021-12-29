// Light Theme & Dark Theme Start....
const theme_checkbox = document.getElementById("theme-checkbox");
const theme = localStorage.getItem("theme");
if (theme) {
    document.documentElement.setAttribute("data-theme", "dark");
    if (theme === "dark") {
        theme_checkbox.checked = true;
    }
}
theme_checkbox.addEventListener("change", function () {
    if (this.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-theme");
        localStorage.removeItem("theme");
    }
});
// Light Theme & Dark Theme End....


//Typing Animation Start....
var typedIntro = new Typed('.typing-intro', {
    strings: ["Web Developer.", "Graphics Designer", "Seo Expert"],
    loop: true,
    typeSpeed: 100,
    smartBackspace: true,
    fadeOut: false,
    showCursor: true,
});
//Typing Animation End....

// Header Section Start.....++++++++++++++
function headerSection() {

    let headerSection = document.querySelector('.header__section');
    let headerHeight = headerSection.getBoundingClientRect().height;

    let windowHeight = window.pageYOffset;
    // let headerSectionTop = headerSection.offsetTop = 200;

    if (windowHeight >= headerHeight) {
        headerSection.classList.add('fixed_nav');
    } else {
        headerSection.classList.remove('fixed_nav');
    }
}
// Header Section End.....++++++++++++++


//Responsive Menu Bar Start......**
function navigationMenu() {
    const navBtn = document.querySelector(".header__navBtn");
    const navMenu = document.querySelector(".header__nav_menu");

    navBtn.addEventListener("click", () => {
        navMenu.classList.toggle('active');
        navBtn.classList.toggle('active');
    });
}
navigationMenu();
//Responsive Menu End......**


// Scrollspy for header nav bar  start......=======
function headerScrollspy() {
    let navLink = document.querySelectorAll(".header__nav_ul > li > a");
    let sections = document.querySelectorAll('.section_bg');
    sections.forEach((section) => {
        let windowTop = window.scrollY;
        let sectionOffset = section.offsetTop - 50;
        let sectionHeight = section.offsetHeight;
        let id = section.getAttribute('id');

        if (windowTop >= sectionOffset && windowTop < sectionOffset + sectionHeight) {
            navLink.forEach((links) => {
                links.classList.remove('active');
                document.querySelector('.header__nav_ul > li > a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}
// Scrollspy for header nav bar  end......=======


// Page Progress Scroll Bars Start...=========
function pageprogressScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("pageProgress").style.width = scrolled + "%";
}
// Page Progress Scroll Bars End...===========

// All Window Scrolling Function called in Here
window.onscroll = function () {
    headerSection();
    headerScrollspy();
    pageprogressScroll();
    handleScrollAnimation();
    jumpBtnAppear();
}

//Scrolling Effect Start....
// AOS.init({

// });
//Scrolling Effect End....


// scrolling effect start for section...
const fadeOpacity = document.querySelectorAll('.fadeOpacity');
const slideRight = document.querySelectorAll('.slideRight');
const slideLeft = document.querySelectorAll('.slideLeft');
const slideTop = document.querySelectorAll('.slideTop');
const slideBottom = document.querySelectorAll('.slideBottom');

function elementInView(el, divident = 1) {
    const elementTop = el.getBoundingClientRect().top;
    return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / divident);
}

function elementOutofView(el) {
    const elementTop = el.getBoundingClientRect().top;
    return (elementTop > (window.innerHeight || document.documentElement.clientHeight));
}

function displayScrollElement(element) {
    element.classList.add("scrolled");
};
function hideScrollElement(element) {
    element.classList.remove("scrolled");
}

function handleScrollAnimation() {
    fadeOpacity.forEach((el) => {
        if (elementInView(el, 1, 25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el);
        }
    });
    slideRight.forEach((el) => {
        if (elementInView(el, 1, 25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el);
        }
    });
    slideLeft.forEach((el) => {
        if (elementInView(el, 1, 25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el);
        }
    });
    slideTop.forEach((el) => {
        if (elementInView(el, 1, 25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el);
        }
    });
    slideBottom.forEach((el) => {
        if (elementInView(el, 1, 25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el);
        }
    });
}
// scrolling effect end for section


//Qualification Section Start......
function qualificationFunc() {
    const qualificationBtn = document.querySelectorAll('.qualification__head');
    const qualificationContent = document.querySelectorAll('.qualification__panel');
    qualificationBtn.forEach(btn => {
        btn.addEventListener('click', function () {
            qualificationBtn.forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            let dataIdForQualificationBtn = this.getAttribute("data-id");

            qualificationContent.forEach(content => {
                content.classList.remove('active');

                if (content.className.match(dataIdForQualificationBtn)) {
                    content.classList.add('active');
                }
            });
        });
    });
}
qualificationFunc();

// Qualification Work History
function qualificationPersonalWork(data) {
    const qulificationWorkUl = document.querySelector('.qulification_work_ul');
    const mapingWork = data.map(item => {
        const { content } = item;
        return `<li>${content}</li>`;
    });
    qulificationWorkUl.innerHTML = mapingWork.join("");
}
qualificationPersonalWork(qualificationPersonWork)

// Qualification Personal Data Analize...
function qualificPersonalInfo(data) {
    let newYear = new Date().getFullYear();
    const personAge = {
        year: 2000,
        ageFunc: function (newYear) {
            return newYear - this.year;
        }
    }

    const qualificationPersonalInfo = document.querySelector('.qualification_personal_info');
    let qualificMap = data.map(items => {
        return `
            <ul class="qualification_personal_info_ul">
                <li>
                    <span class="p_label">Name :</span>
                    <span class="p_info">${items.name}</span>
                </li>
                <li>
                    <span class="p_label">Age :</span>
                    <span class="p_info">${personAge.ageFunc(newYear)}</span>
                </li>
                <li>
                    <span class="p_label">DOB :</span>
                    <span class="p_info">${items.dob}</span>
                </li>
                <li>
                    <span class="p_label">Address :</span>
                    <span class="p_info">
                        <span class="p_vill">Vill-${items.address.vill}</span>
                        <span class="p_dist">Dist-${items.address.dist}</span>
                        <span class="p_state">State-${items.address.state}</span>
                        <span class="p_country">Country-${items.address.country}</span>
                        <span class="p_pin">Pin-${items.address.pin}</span>
                    </span>
                </li>
                <li>
                <span class="p_label">Nationality :</span>
                <span class="p_info">${items.nationality}</span>
                </li>
                <li>
                <span class="p_label">Phone :</span>
                <span class="p_info">
                    ${items.phone}
                </span>
                </li>
                <li>
                <span class="p_label">Email :</span>
                <span class="p_info">
                    ${items.email}
                </span>
                </li>
            </ul>
        `;
    });
    qualificationPersonalInfo.innerHTML = qualificMap.join(" ");
}
qualificPersonalInfo(qualificationInfo);

//Qualification Section End......


//Skills Section Start...-=-=-=-=-=-=-=-=-=-=-=-=-=-
function skilllsContent() {
    const skillContent = document.querySelectorAll('.skills__content');

    skillContent.forEach(content => {
        let skillHeader = content.querySelectorAll('.skills__header');

        skillHeader.forEach(header => {
            header.addEventListener('click', () => {
                skillContent.forEach(contents => {
                    if (contents !== content) {
                        contents.classList.remove('active');
                    }
                });
                content.classList.add('active');
            });
        });
    });
}
skilllsContent();
//Skills Section End...==-=-=-=-=-=-=---=-=-=-=--=-=


//Service Section Start...=====================
function serviceSection() {
    const srvCardBody = document.querySelectorAll('.service_card_body');
    srvCardBody.forEach(items => {
        const srvBtn = items.querySelectorAll('.service_content_readmore');
        srvBtn.forEach(btn => {
            btn.addEventListener('click', function () {
                srvCardBody.forEach(item => {
                    if (item !== items) {
                        item.classList.remove('active');
                    }
                });
                items.classList.toggle('active');
            });
        });
    });
}
serviceSection();
// pricing Modal ...
function priceModal() {
    const priceModal = document.querySelector('.pricing__modal');
    const openPriceModal = document.querySelector('.open_price_modal');
    const closeModal = document.querySelector('.close_price_modal');

    openPriceModal.addEventListener('click', (event) => {
        let dataIdForPriceBtn = event.currentTarget.dataset.id;
        if (dataIdForPriceBtn === priceModal.dataset.id) {
            priceModal.classList.add('active');
        }
    });

    closeModal.addEventListener('click', () => {
        priceModal.classList.remove('active');
    });

    window.onclick = function (e) {
        if (e.target == priceModal) {
            priceModal.classList.remove('active');
        }
    }
}
priceModal();

// Pricing Section Start====
function pricingSection() {
    const pricingBtn = document.querySelectorAll('.pricing_tab_item');
    const pricingContent = document.querySelectorAll('.pricing__content');

    pricingBtn.forEach(btn => {
        btn.addEventListener('click', function () {
            pricingBtn.forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');

            let dataIdForPricingBtn = this.getAttribute("data-id");

            pricingContent.forEach(content => {
                content.classList.remove('active');

                if (content.className.match(dataIdForPricingBtn)) {
                    content.classList.add('active');
                }
            });
        });
    });
}
pricingSection();
// Pricing Section End====
//Service Section End...=====================================


// My Portfolio Section Start...====================

function portfolioFunc() {
    let prevPortfolio = document.querySelector('.prev_portfolio');
    let nextPortfolio = document.querySelector('.next_portfolio');
    let portfolioItems = document.getElementsByClassName('portfolio__items')
    let portfolioPage = Math.ceil(portfolioItems.length);
    let startX = 0;
    let movePer = 33.33;
    let maxMove = 33.33;

    const checkMobile = window.matchMedia('screen and (max-width: 576px)');
    if (checkMobile.matches) {
        movePer = 100;
        maxMove = 300;
    }

    const checkTablet = window.matchMedia('screen and (min-width: 577px) and (max-width: 991px)');
    if (checkTablet.matches) {
        movePer = 50;
        maxMove = 100;
    }

    function right_mover() {
        startX = startX + movePer;
        if (portfolioItems == 1) { startX = 0; }
        for (const i of portfolioItems) {
            if (startX > maxMove) { startX = startX - movePer; }
            i.style.left = '-' + startX + '%';
        }
    }

    function left_mover() {
        startX = startX - movePer;
        if (startX <= 0) { startX = 0; }
        for (const i of portfolioItems) {
            if (portfolioPage > 0) {
                i.style.left = '-' + startX + '%';
            }
        }
    }

    nextPortfolio.addEventListener('click', right_mover);
    prevPortfolio.addEventListener('click', left_mover);
}
portfolioFunc();



// Portfolio Modal Box Start================
function portfModalTrigger(portfData) {
    const portfOpenModal = document.querySelectorAll('.open_portfolio_modal');
    portfOpenModal.forEach(btn => {
        btn.addEventListener('click', (event) => {
            let dataIdForPortf = event.currentTarget.dataset.id;
            let filterPortfData = portfData.filter(filterItems => {
                if (filterItems.category === dataIdForPortf) {
                    return filterItems;
                }
            });
            if (dataIdForPortf) {
                displayPortfModal(filterPortfData);
            }
        });
    });
}
portfModalTrigger(portfolioData);

function displayPortfModal(portfItems) {
    const portfModalBox = document.querySelector('.portf_modal_box');
    const closePortfolioModal = document.querySelector('.close_portfolio_modal');
    const portfWrapper = document.querySelector('.portf_wrapper');

    let portfItm = portfItems.map(item => {
        return `
        <section class="portf_modal_section">
            <div class="container">
                <div class="portf_content row">
                    <div class="portf_modal_img col-md-7 col-sm-12">
                        <img src=${item.img} alt="" srcset="">
                    </div>
                    <div class="portf_info col-md-5 col-sm-12">
                        <h3>${item.title}</h3>
                        <p class="portf_desc">
                            ${item.desc1}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        `;
    });
    portfWrapper.innerHTML = portfItm.join(" ");
    portfModalBox.classList.add('active');
    closePortfolioModal.addEventListener('click', () => {
        portfModalBox.classList.remove('active');
    });
    window.onclick = function (e) {
        if (e.target == portfModalBox) {
            portfModalBox.classList.remove('active');
        }
    }
}
// Portfolio Modal Box End============

// My Portfolio Section End...------------------



//testimonials Section Start...
let testimonialsSlideIndex = 1;
let testimonialsTimer;
testimonialsInit(testimonialsSlideIndex);

function pulseSlidetestimonials(e) {
    testimonialsInit(testimonialsSlideIndex += e);
}

function testimonialsSlider(event) {
    testimonialsInit(testimonialsSlideIndex = event);
}
// slide pause when mouse over slider.
window.addEventListener('load', () => {
    testimonialsTimer = setInterval(() => {
        testimonialsSlider(testimonialsSlideIndex += 1);
    }, 10000);

    // let testimonialsIndicator = document.querySelectorAll('.slideIndicator');
    let tsslide = document.querySelectorAll('.testimonials__slide');

    tsslide.forEach((event) => {
        event.addEventListener('mouseenter', testimonialsPause);
        event.addEventListener('mouseleave', testimonialsResume);
        // event.addEventListener('touchstart', testimonialsPause);
        // event.addEventListener('touchend', testimonialsResume);
    });
});

function testimonialsInit(e) {
    let tsslide = document.querySelectorAll('.testimonials__slide');
    let tsIndicator = document.querySelectorAll('.slideIndicator');
    if (e > tsslide.length) {
        testimonialsSlideIndex = 1;
    }
    if (e < 1) {
        testimonialsSlideIndex = tsslide.length;
    }
    for (let i = 0; i < tsslide.length; i++) {
        tsslide[i].classList.remove('active');
    }
    for (let i = 0; i < tsIndicator.length; i++) {
        tsIndicator[i].className = tsIndicator[i].className.replace(' active', '');
    }
    tsslide[testimonialsSlideIndex - 1].classList.add('active');
    tsIndicator[testimonialsSlideIndex - 1].className += ' active';
}
function testimonialsPause() {
    clearInterval(testimonialsTimer);
}
function testimonialsResume() {
    testimonialsTimer = setInterval(() => {
        testimonialsSlider(testimonialsSlideIndex += 1);
    }, 10000);
}
// testimonials Section End...


// Faq Accordion section start...
function faqDataItem(data) {
    const faqAccordion = document.querySelector('.faq__accordion');
    const mapingFaq = data.map(item => {
        const { question, answer } = item;

        return `
        <div class="faq__items">
             <p class="faq__tabs">${question}<span></span></p>
             <div class="faq__data">
                 <article>
                    ${answer}
                 </article>
             </div>
        </div>
        `;
    });
    faqAccordion.innerHTML = mapingFaq.join("");
}
faqDataItem(faqData);

function faqSection() {
    const faqItems = document.querySelectorAll('.faq__items');
    faqItems.forEach(items => {
        const faqTab = items.querySelectorAll('.faq__tabs');
        faqTab.forEach(btn => {
            btn.addEventListener('click', function () {
                faqItems.forEach(item => {
                    if (item !== items) {
                        item.classList.remove('active');
                    }
                });
                items.classList.toggle("active");
            });
        });
    });
}
faqSection();
//Faq Accordion section end...


// Contact Section...
//Form Validation Start.....
function contactValidation() {
    const mainForm = document.querySelector('.contact-form');
    const fName = document.getElementById('fname');
    const email = document.getElementById('email');
    const textArea = document.getElementById('textArea');

    mainForm.addEventListener('submit', (e) => {
        e.preventDefault();
        checkInputs();
    });

    const checkInputs = () => {
        const firstNameValue = fName.value.trim();
        const emailValue = email.value.trim();
        const textArea_value = textArea.value.trim();

        if (firstNameValue === '') {
            setErrorFor(fName, 'Please Enter Your Name...');
        } else if ((firstNameValue.length < 3) || (firstNameValue.length > 10)) {
            setErrorFor(fName, 'Name Should Be 3 To 10 Characters...');
        } else {
            setSuccessFor(fName);
        }

        if (emailValue === '') {
            setErrorFor(email, 'Enter Email Address...');
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Email Address Not Valid...');
        } else {
            setSuccessFor(email);
        }

        if (textArea_value === "") {
            setErrorFor(textArea, 'Write Something Here')
        } else {
            setSuccessFor(textArea);
        }
    }

    const setErrorFor = (input, message) => {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'f-ctl error';
        small.innerText = message;
    }

    const setSuccessFor = (input) => {
        const formControl = input.parentElement;
        formControl.className = 'f-ctl success';
    }

    const isEmail = (email) => {
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }
    //Form Validation End.....
}
contactValidation();
// Contact Section End.....

//Jump Button Start...
const jumpBtnAppear = () => {
    let jumpBtn = document.querySelector(".jump-btn");
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        jumpBtn.style.bottom = "0px";
    } else {
        jumpBtn.style.bottom = "-500px";
    };
}

function jumpTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
//Jump Button End...

