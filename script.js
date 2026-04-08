const questions = document.querySelectorAll(".q");
questions.forEach(function(q){
    q.addEventListener('click',function(){
        const answer=  q.nextElementSibling;
        const icon = q.querySelector('i');
        const isAlreadyOpen = answer.classList.contains('open');
        
        questions.forEach(function(otherQ){
            otherQ.nextElementSibling.classList.remove('open');
            otherQ.querySelector('i').classList.remove('rotate');
        })

        if(!isAlreadyOpen){
            answer.classList.toggle('open');
            icon.classList.toggle('rotate');
        }
    })
})