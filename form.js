/* jshint esversion: 6 */
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('form').onsubmit = function(){
        const name = document.querySelector('#name').value;
        alert(`Hello ${name}!`);
    };
});