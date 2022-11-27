var counter=1;
let employees=[
    { 
        "name":"sonuu",
        "job":"software Engineer",
        "salary":15000,
        "id":1
    }
];
function Deleteemployee(id,cb){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const emp=employees.findIndex(emp=>emp.id==id);
            employees.splice(emp,1);
            console.log(employees);
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
        resolve();        
        },2000);      
    })  
    return p;
}

function updatefinalemp(name,job,sal,id,cb){
    let p= new Promise((resolve,reject)=>{
    setTimeout(()=>{
    const emp=employees.find(emp=>emp.id==id);
    emp.name=name;
    emp.job=job;
    emp.salary=sal;
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

function listall (cb){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(employees);
             },2000);
    })
    return p;
}
