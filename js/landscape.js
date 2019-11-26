var index=0;
function change(){
    index++;
    var a=document.getElementsByClassName("img");
    if(index>=3)index=0;
    for(var i=0;i<a.length;i++){
           a[i].style.display="none";
    }
    a[index].style.display="block";
}
setInterval(change,2000);