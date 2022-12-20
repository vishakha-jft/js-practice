let objid;
async function display(){
   let abc=await listall();
   details(abc);  
} 
$("#add").click(async function(){
    obj={
        "name":$("#name").val(),
        "job":$("#job").val(),
        "salary":$("#sal").val()
    }
    await addemployee(obj);
    display();
    clear();    
  });
function details(emp){
    var html = "<table border='1|1'><tr><th>Name</th><th>Job</th><th>Salary</th><th> Action </th></tr>";
    for (var i = 0; i < emp.length; i++) {
    html+="<tr>";
    html+="<td>"+emp[i].name+"</td>";
    html+="<td>"+emp[i].job+"</td>";
    html+="<td>"+emp[i].salary+"</td>";
    html+=`<td><button id="${emp[i].id}" onclick=update(this.id)>Edit</button><button id="${emp[i].id}" onclick='Delete(this.id)' >Delete</button>`;    
    html+="</tr>";}
    html+="</table>";
    document.getElementById("box").innerHTML = html;
}
async function Delete(id){
    await Deleteemployee(id);
    display();
}  
async function update(id){        
    document.getElementById('add').disabled=true;
    document.getElementById('upbtn').disabled=false;
    let obj=await updateget(id);
    showdata(obj);
}    
async function updatefinal(){
    obj={
        "name":$("#name").val(),
        "job":$("#job").val(),
        "salary":$("#sal").val(),
        "id":objid
    }
    await updatefinalemp(obj);
    display();
    document.getElementById('add').disabled=false;
    document.getElementById('upbtn').disabled=true;
    clear();    
}
function clear(){
    $("#name")[0].value="";
    $("#job")[0].value="";
    $("#sal")[0].value="";
}
function showdata(obj){
    $("#name")[0].value=obj.name;
    $("#job")[0].value=obj.job;
    $("#sal")[0].value=obj.salary;
    objid=obj.id;
}
