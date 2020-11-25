'use strict';

function app(window, document) {
  const getDate = function (doc) {
    const spanDate = doc.querySelector('span#date');
    const year = new Date().getFullYear();
    spanDate.innerHTML = year;
  };

  const createFloatButton = function (doc) {
    const div = doc.createElement('div');
    const link = doc.createElement('a');
    div.setAttribute('class', 'float-button');
    link.setAttribute('href', '#');
    link.innerHTML = "<i class='fas fa-2x fa-arrow-up'></i>";
    div.appendChild(link);
    doc.body.appendChild(div);
  };

  const changeNaveColor = function (element, cb) {
    setInterval(function () {
      window.onscroll = cb(element);
    }, 100);
  };

  const hasClass = function (element, className) {
    return element.classList.contains(className) ? true : false;
  };

  const toggle = function (elementToggle, displayType = 'block') {
    if (hasClass(elementToggle, 'active-toggle')) {
      elementToggle.classList.remove('active-toggle');
    } else {
      elementToggle.classList.add('active-toggle');
    }
  };

  getDate(document);
  createFloatButton(document);

  const startInitBehavior = function (document) {
    const floatButton = document.querySelector('.float-button');
    floatButton.style.display = 'none';
  };

  startInitBehavior(document);

  const navigationBar = document.querySelector('header.header');
  changeNaveColor(navigationBar, function (ele) {
    ele.style.backgroundColor = 'transparent';
    const top = window.pageYOffset || document.documentElement.scrollTop;

    if (top > 0) {
      ele.style.backgroundColor = '#1d1d1d';
    } else {
      ele.style.backgroundColor = 'transparent';
    }
  });

  const hambButton = document.querySelector('button.hamb-button');
  hambButton.onclick = function (e) {
    toggle(document.querySelector('nav.menu ul'));
  };

  const hiddenOrShowFlaotButton = function (element, cb) {
    setInterval(function () {
      cb(element);
    }, 1000);
  };

  hiddenOrShowFlaotButton(
    document.querySelector('.float-button'),
    function (ele) {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      if (top > 0) {
        ele.style.display = 'flex';
      } else {
        ele.style.display = 'none';
      }
    }
  );
}

(function (document, window) {
  app(window, document);
})(document, window);
