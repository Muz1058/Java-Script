const buttons=document.querySelectorAll('.button');

const body=document.querySelector('body');

buttons.forEach(function(but)  {
but.addEventListener('click', function(e){
    if(e.target.id === 'grey'){
        body.style.backgroundColor=e.target.id
    }
     if(e.target.id === 'white'){
        body.style.backgroundColor=e.target.id
    }
    if(e.target.id === 'orange'){
        body.style.backgroundColor=e.target.id
    }
    if(e.target.id === 'yellow'){
        body.style.backgroundColor=e.target.id
    }
})
}) ;
document.getElementById('toggleDark').addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        body.style.backgroundColor = ''; 
    }
});
