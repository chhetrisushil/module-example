/*
 * main.js
 * Copyright (C) 2017 Sushil Chhetri <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
/*jshint esnext: true*/
import {
  quizView
}
from './views.js';
import {
  getQuestions
}
from './datasource.js';

// remove the checkDiv
let checkDiv = document.getElementById('checkSupport');

checkDiv.parentNode.removeChild(checkDiv);

async function init() {
  let questions = await getQuestions();

  quizView(questions);
}

init();
