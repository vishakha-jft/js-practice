function imgcomp(source){
    this.src=source;
    this.render=()=>{
    var div=document.createElement("div");
    var img=document.createElement("img");
    img.src=this.src;
    img.width="200";
    img.height="200";
    var button=document.createElement("button");
    button.innerText="Like";
    var label=document.createElement("label");
    label.innerText=0;
    document.body.appendChild(div);
    div.append(img,label,button);
    
    button.onclick = function(){
        label.innerHTML=+label.innerHTML+1;
    }
}
}
