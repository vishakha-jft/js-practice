var counter=1;
let employees=[
    { 
        "id":1,
        "name":"sonuu",
        "job":"software Engineer",
        "salary":15000
    }
];
function Deleteemployee(id){
    const emp=employees.findIndex(emp=>emp.id==id);
    employees.splice(emp,1);
    console.log(employees)
}

function addemployee(name,job,sal){
    counter++;
    obj={
        "id":counter,
        "name":name,
        "job":job,
        "salary":sal
    }
    employees.push(obj);
    console.log(employees);
}

function updatefinalemp(name,job,sal,id){
    const emp=employees.find(emp=>emp.id==id);
    emp.name=name;
    emp.job=job;
    emp.salary=sal;
}

function updateget(id){
    const emp=employees.find(emp=>emp.id==id);
    return emp;
}

const listall = ()=>{
    return employees;
}
