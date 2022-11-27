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
    setTimeout(()=>{
    const emp=employees.findIndex(emp=>emp.id==id);
    employees.splice(emp,1);
    console.log(employees);
    cb();
    },2000);
}

function addemployee(obj,cb){
    setTimeout(()=>{
        counter++;
    obj.id=counter;
    employees.push(obj);
    console.log(employees);
    cb();
},2000);
}

function updatefinalemp(name,job,sal,id,cb){
    setTimeout(()=>{
    const emp=employees.find(emp=>emp.id==id);
    emp.name=name;
    emp.job=job;
    emp.salary=sal;
    cb();
    },2000);
}

function updateget(id,cb){
    setTimeout(()=>{
    const emp=employees.find(emp=>emp.id==id);
    cb(emp);
     },2000);
}

function listall (cb){
    setTimeout(()=>{
    cb(employees);
     },2000);
}
