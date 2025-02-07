document.addEventListener('DOMContentLoaded', function(){
      
    fetch('https://api.exchangeratesapi.io/v1/latest?access_key = 3105297baf039376886f6914065faef1')
    
    .then(response => response.json())
    
    .then(data => {
        console.log(data);});
});