// acc={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:10,K:11,L:12,M:13,N:14,O:15,P:16,Q:17,R:18,S:19,T:20,U:21,V:22,W:23,X:24,Y:25,Z:26 }
//                 const keys = Object.keys(acc)
//                 const values=Object.values(acc);            
function calculate(){
    var stationfrom = document.getElementById("fromstation").value;
    var stationto = document.getElementById("tostation").value;
    var paymethod = document.getElementById("paymentmode").value;
    var no_of_stations;
    var totalprice=10
    no_of_stations= Math.abs(stationfrom - stationto) +1
    if (no_of_stations >24)
        totalprice=60;
    else if(no_of_stations > 0)
        totalprice=Math.ceil(no_of_stations/4)*10;  
    if(paymethod == 1 && totalprice>10){
        totalprice=totalprice - totalprice * 0.1;
    }
    document.getElementById("finalprice").innerHTML=" Rs. " + totalprice;
}