const rightside=document.querySelector('.right');

let count=1;

const leftside=document.querySelector('.left');
const imagecont=document.querySelector(".image-container");

const imglength=document.querySelectorAll('img')

leftside.addEventListener('click',()=>{
    count--;
    clearTimeout(timeout)
    updateimage();
})

updateimage();

rightside.addEventListener("click",()=>{
    count++;
    clearTimeout(timeout)
    updateimage();
});

function updateimage()
{
    if(count>imglength.length-2)
    {
        count=1
    }
    else if(count<1)
    {
        count=imglength.length-2
    }
   imagecont.style.transform=`translateX(-${(count-1)*700}px)`;
   timeout=setTimeout(()=>{
    count++;
    updateimage();
   },5000)
}

