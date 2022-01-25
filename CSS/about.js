const arr=document.getElementsByClassName("about_content");
window.addEventListener("scroll",fun);
function fun(){
    for(let x=0;x<arr.length;x++)
    {
        if(arr[x].getBoundingClientRect().top<window.innerHeight/1.5)
        {
            arr[x].classList.add("visible");
        }
    }
}