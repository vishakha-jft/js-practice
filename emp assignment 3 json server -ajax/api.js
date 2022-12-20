let jsonurl="http://localhost:3000/employee";
function Deleteemployee(id){
    $.ajax({
        type:"DELETE",
        dataType:'json',
        contentType:"application/json",
        url:jsonurl+"/"+id
    });
}
function addemployee(obj){
    $.ajax({
        type:"POST",
        dataType:'json',
        contentType:"application/json",
        url:jsonurl,
        data: JSON.stringify(obj)
    });
}
function updatefinalemp(obj){
    $.ajax({
        type:"PUT",
        dataType:'json',
        contentType:"application/json",
        url:jsonurl+"/"+obj.id,
        data: JSON.stringify(obj)
    });
}
async function updateget(id){
    const emp=$.ajax({
        type:"GET",
        dataType:'json',
        contentType:"application/json",
        url:jsonurl+"/"+id
    });
    return emp;
}
async function listall (){
    const emp=$.ajax({
        type:"GET",
        dataType:'json',
        contentType:"application/json",
        url:jsonurl
    });
    return emp;
}
