'use strict';

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
  link.innerHTML = `<i class="fas fa-arrow-up"></i>`;
  div.appendChild(link);
  doc.body.appendChild(div);
};

(function (document, window) {
  getDate(document);
  createFloatButton(document);
})(document, window);
