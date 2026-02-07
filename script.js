const ya=document.querySelector('body');
let c=0;
ya.addEventListener('click',(e)=>{
    const element=document.createElement('div');
    element.classList.add('circle');
    element.textContent=`${c}`;
    c++;
    if(c>100){
        c=0;
    }
    const colo=['red','blue','violet','yellow','orange','green','white','purple','brown'];
    element.style.backgroundColor=colo[Math.floor(Math.random()*9)];
    element.style.top=`${e.clientY-25}px`;
    element.style.left=`${e.clientX-25}px`;
    ya.append(element);
    setTimeout(()=>{
        element.remove();
    },5000);
})
