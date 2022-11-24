arr=[1,2,0,10,9,8,7,6,4,5]
var sum=0
var num=10
var number;
for (let i=0;i<10;i++){
    sum=sum+arr[i];
}
number=(num*(num+1)/2)-sum;
console.log(number)