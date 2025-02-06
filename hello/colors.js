/* jshint esversion: 6 */
document.addEventListener('DOMContentLoaded', ()=> {
    //Change font colors.
    document.querySelectorAll('button').forEach(button =>{
        button.onclick = ()=> {
            document.querySelector('#hello').style.color =button.dataset.color;
        };

    });

});