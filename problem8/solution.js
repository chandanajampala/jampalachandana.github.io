function totalSum(){
    var data=document.getElementById("data").value.split(",");
    var sepData = new Array();
    var sum=0;
    for(var i=0;i<data.length;i++){
        sepData[i]=data[i].split(":");
        sum=sum+parseInt(sepData[i][1]);
    }
    document.getElementById("sum").innerHTML=sum;

}