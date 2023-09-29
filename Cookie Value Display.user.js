// ==UserScript==
// @name         Cookie Value Display
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Display cookie value on page
// @author       You
// @match        https://www.bing.com/images/create*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to create a new element on the page to display output
    function createOutputElement(value) {
        let outputElement = document.createElement('div');
        outputElement.id = 'outputElement';
        outputElement.style.position = 'fixed';
        outputElement.style.bottom = '10px';
        outputElement.style.right = '10px';
        outputElement.style.padding = '10px';
        outputElement.style.backgroundColor = '#f8f9fa';
        outputElement.style.border = '1px solid #ced4da';
        outputElement.style.borderRadius = '5px';
        outputElement.innerText = `Cookie Value: ${value}`;
        document.body.appendChild(outputElement);
    }

    // Function to get cookie value and display it on the page
    function getAndDisplayCookieValue() {
        cookieStore.get('_U').then(result => {
            createOutputElement(result.value);
            console.log(result.value);
        });
    }

    // Run the function when the page loads
    window.addEventListener('load', getAndDisplayCookieValue);
})();
