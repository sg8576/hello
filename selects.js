/* jshint esversion: 6 */
document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('select').onchange =function() {
        document.querySelector('#hello').style.color=this.value;
    };
});