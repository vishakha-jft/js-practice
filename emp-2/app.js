let objid;
function display(){
   let p= listall();
   p.then(details,showerror);  
}  
function details(emp){
    var html = "<table border='1|1'><tr><th>Name</th><th>Job</th><th>Salary</th><th> Action </th></tr>";
    for (var i = 0; i < emp.length; i++) {
    html+="<tr>";
    html+="<td>"+emp[i].name+"</td>";
    html+="<td>"+emp[i].job+"</td>";
    html+="<td>"+emp[i].salary+"</td>";
    html+="<td><button id="+emp[i].id+" onclick='update(this.id)'>Edit</button><button id="+emp[i].id+" onclick='Delete(this.id)'>Delete</button>";    
    html+="</tr>";}
    html+="</table>";
    document.getElementById("box").innerHTML = html;
}
function Delete(id){
    let p=Deleteemployee(id);
    p.then(display)
    .catch(showerror);
}  
function add(){
    var name=document.getElementById("name").value;
    var job=document.getElementById("job").value
    var sal=document.getElementById("sal").value 
    obj={
        "name":name,
        "job":job,
        "salary":sal
    }
    let p= addemployee(obj);
    //then-> accept
    // p.then((data)=> {
    //     console.log(data);
    // }) 
    //catch-> reject
    //.catch((error)=>{
    //     console.log(error);
    // })
    p.then(display)  
    .catch(showerror);
    clear();
}
function update(id){
    document.getElementById('add').disabled=true;
    document.getElementById('updatebtn').disabled=false;
    let p=updateget(id);
    p.then(showdata,showerror);
}
function updatefinal(){
    var name=document.getElementById("name").value;
    var job=document.getElementById("job").value;
    var sal=document.getElementById("sal").value;
    let p=updatefinalemp(name,job,sal,objid);
    p.then(display,showerror);
    document.getElementById('add').disabled=false;
    document.getElementById('updatebtn').disabled=true;
    clear();    
}
function clear(){
    document.getElementById("name").value="";
    document.getElementById("job").value="";
    document.getElementById("sal").value="";
}
function showdata(obj){
    document.getElementById("name").value=obj.name;
    document.getElementById("job").value=obj.job;
    document.getElementById("sal").value=obj.salary;
    objid=obj.id;
}
function showerror(){
    alert("Something is wrong with the server please try again!!");
}