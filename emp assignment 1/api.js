let counter=localStorage.getItem("UID");
let employees=[];
for(let i=0;i<localStorage.length;i++){
    const key = localStorage.key(i);
    console.log(key);
    if(key !=='UID'){
        employees.push(JSON.parse(localStorage.getItem(key)));
    }
}
function Deleteemployee(id){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const emp=employees.findIndex(emp=>emp.id==id);
            employees.splice(emp,1);
            localStorage.removeItem(id);
            resolve();
            },2000);
    })
    return p;
}
function addemployee(obj){
    let p= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            counter++;
        obj.id=counter;
        employees.push(obj);
        console.log(employees);
        localStorage.setItem(counter,JSON.stringify(obj));
        localStorage.setItem("UID",JSON.stringify(counter));
        resolve();        
        },2000);      
    })  
    return p;
}

function updatefinalemp(name,job,sal,id){
    let p= new Promise((resolve,reject)=>{
    setTimeout(()=>{
    const emp=employees.findIndex(emp=>emp.id==id);
    obj={
        "name":name,
        "job":job,
        "salary":sal,
        "id":id
    }
    employees[emp]=obj;
    localStorage.setItem(id,JSON.stringify(obj));
    resolve();
    },2000);
    })  
    return p;
}

function updateget(id){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const emp=employees.find(emp=>emp.id==id);
            resolve(emp);
             },2000);
    })
    return p;
}

function listall (){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(employees);
             },2000);
    })
    return p;
}
