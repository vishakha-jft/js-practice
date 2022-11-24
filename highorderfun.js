let arr=[1,2,3,4,5,6,7,8,9,10];
// function double(arr){
//     let outputd=[];
//     for(let i=0;i<arr.length;i++){
//         outputd[i]=arr[i]*2
//     }
//     return outputd;
// }
// function square(arr){
//     let outputs=[];
//     for(let i=0;i<arr.length;i++){
//         outputs[i]=arr[i]*arr[i]
//     }
//     return outputs;
// }
function transform(arr,logic){
    let op=[];
    for(let i=0;i<arr.length;i++){
        op[i]=logic(arr[i]);
    }
    return op;
}
console.log(arr);
console.log(transform(arr,e=>e*e));
console.log(transform(arr,(e)=>e*2));