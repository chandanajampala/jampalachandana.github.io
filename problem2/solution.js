function sumNumbers(){
    var num=document.getElementById("num").value;
    if(num==null||num==""){
        alert("number not entered");
    }
    else{
        var n=parseInt(num);
        var sum=(n*(n+1))/2;
        document.getElementById("sum").innerHTML=sum;
    }

}
