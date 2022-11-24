let objid;
function display(){
    setTimeout(() => {
    var emp=listall();
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
    }, 2000);
}  
function Delete(id){
    setTimeout(Deleteemployee(id),2000);
    display();
}  
function add(){
    var name=document.getElementById("name").value;
    var job=document.getElementById("job").value
    var sal=document.getElementById("sal").value 
    setTimeout(addemployee(name,job,sal),2000);
    display();
    document.getElementById("name").value="";
    document.getElementById("job").value="";
    document.getElementById("sal").value="";
}
function update(id){
    document.getElementById('add').disabled=true;
    document.getElementById('updatebtn').disabled=false;
    obj=updateget(id);
    document.getElementById("name").value=obj.name;
    document.getElementById("job").value=obj.job;
    document.getElementById("sal").value=obj.salary;
    objid=obj.id;
}
function updatefinal(){
    console.log(objid);
    var name=document.getElementById("name").value;
    var job=document.getElementById("job").value;
    var sal=document.getElementById("sal").value;
    setTimeout(updatefinalemp(name,job,sal,objid),2000);
    display();
    document.getElementById('add').disabled=false;
    document.getElementById('updatebtn').disabled=true;
    document.getElementById("name").value="";
    document.getElementById("job").value="";
    document.getElementById("sal").value="";
}