function calculate(){
    var stationfrom = document.getElementById("fromstation").value;
    var stationto = document.getElementById("tostation").value;
    var paymethod = document.getElementById("paymentmode").value;
    var no_of_stations;
    var totalprice=0
        no_of_stations= Math.abs(stationfrom - stationto) +1
    if(no_of_stations < 4)
     totalprice=10;
    else if( no_of_stations <8)
    totalprice=20;
    else if( no_of_stations < 12)
    totalprice=30;
    else if( no_of_stations < 16 )
    totalprice = 40;
    else if (no_of_stations < 20)
    totalprice = 50;
    else
    totalprice =60;
    if(paymethod == 1){
        totalprice=totalprice - totalprice * 0.1;
    }
    document.getElementById("finalprice").innerHTML=" Rs. " + totalprice;
}