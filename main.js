////////////////////////
//// SLIDER

const allSlides = document.querySelectorAll('.slide');
const btnsChangeSlide = document.querySelectorAll('.btns-slide');
const allDots = document.querySelectorAll('.dot');
const dotsContainer = document.querySelector('.dots');

let curSlide = 1;
manageSlides();
addBtnHandlers();
addDotsHandler();

function manageSlides(x = 1) {
  allSlides.forEach((el, i) => {
    const transVal = (i + 1 - x) * 110;
    el.style.transform = `translateX(${transVal}%)`;
  });
  curSlide = x;
}

function manageDots(x = 1) {
  allDots.forEach((el) => el.classList.remove('marked'));
  allDots[x - 1].classList.add('marked');
}

function addBtnHandlers() {
  btnsChangeSlide.forEach((el) =>
    el.addEventListener('click', function (e) {
      const btn = e.target.closest('.btns-slide');

      if (btn.classList.contains('btn-prev')) curSlide--;
      if (btn.classList.contains('btn-next')) curSlide++;

      if (curSlide > allSlides.length) curSlide = 1;
      if (curSlide < 1) curSlide = allSlides.length;

      manageDots(curSlide);
      manageSlides(curSlide);
    })
  );
}

function addDotsHandler() {
  dotsContainer.addEventListener('click', function (e) {
    const dot = e.target.closest('.dot');
    if (!dot) return;

    manageDots(+dot.dataset.val);
    manageSlides(+dot.dataset.val);
  });
}

////////////////////////
//// TECHNOLOGIES

const technoCont = document.querySelector('#techno-cont');
const txtEl = document.querySelector('.techno-desc');

technoCont.addEventListener('mouseover', toggleInfo);
technoCont.addEventListener('mouseout', toggleInfo);

function toggleInfo(e) {
  e.preventDefault();
  const icon = e.target.closest('i, img');
  if (!icon) return;

  if (e.type === 'mouseover') {
    txtEl.textContent = icon.getAttribute('name');
    txtEl.classList.add('active');
  } else if (e.type === 'mouseout') {
    txtEl.classList.remove('active');
  }
}

////////////////////////
//// OPEN PROJECT

const projects = document.querySelectorAll('.project');
const overlay = document.querySelector('.overlay');
let curProj = '';

projects.forEach((el) => {
  el.addEventListener('click', function (e) {
    const project = e.target.closest('.project');
    if (!project) return;

    curProj = project;
    project.classList.add('opened');
    overlay.classList.add('opened');
  });
});

overlay.addEventListener('click', function (e) {
  e.stopPropagation();
  curProj.classList.remove('opened');
  overlay.classList.remove('opened');
});

////////////////////////
//// ON RESIZE

const title = document.querySelector('.header-cont .title .content');

window.addEventListener('resize', function (e) {
  if (e.target.innerWidth < 1200) {
    title.textContent = 'Arkadiusz Nowak';
  } else {
    title.textContent = 'Arkadiusz Nowak href="front-end"';
  }
});

////////////////////////
//// MOBILE MENU (BELOW 850px)

const naviBars = document.querySelector('.fa-bars');
const menu = document.querySelector('#nav-list');
const navItems = document.querySelectorAll('.nav-item');

naviBars.addEventListener('click', function () {
  menu.classList.toggle('active');
});

navItems.forEach((el) =>
  el.addEventListener('click', function () {
    menu.classList.remove('active');
  })
);

window.addEventListener('resize', function (e) {
  if (e.target.innerWidth >= 850) {
    menu.classList.remove('active');
  }
});

///////////////////////////
//// RESIZING TECHNOLOGIES

const technoContainer = document.querySelector('#techno-cont');
const technoIcons = document.querySelectorAll('#techno-cont i');
const technoAjaxIcon = document.querySelector('.ajax-icon');
const technoJQueryIcon = document.querySelector('.jquery-icon');
const technoTSIcon = document.querySelector('.ts-icon');

const resizeTechnoElements = function () {
  if (window.innerWidth <= 650) {
    const width = technoContainer.clientWidth;
    technoContainer.style.height = `${width}px`;
    technoIcons.forEach((icon) => {
      icon.style.fontSize = `${Math.floor(width / 10) * (width * 0.0025)}px`;
    });
    technoAjaxIcon.style.height = `${
      Math.floor(width / 10) * (width * 0.0022)
    }px`;
    technoJQueryIcon.style.height = `${
      Math.floor(width / 10) * (width * 0.0035)
    }px`;
    technoTSIcon.style.height = `${
      Math.floor(width / 10) * (width * 0.0021)
    }px`;
  } else {
    technoContainer.style.height = '600px';
    technoIcons.forEach((icon) => {
      icon.style.fontSize = '100px';
    });
    technoAjaxIcon.style.height = '95px';
    technoJQueryIcon.style.height = '110px';
    technoTSIcon.style.height = '90px';
  }
};

window.addEventListener('resize', resizeTechnoElements);

////////////////////////
//// PAGE REFRESH

function init() {
  window.scrollTo(0, 0);
  if (window.innerWidth < 1200) title.textContent = 'Arkadiusz Nowak';
  resizeTechnoElements();
  document.body.style.zoom = '80%';
}
init();
