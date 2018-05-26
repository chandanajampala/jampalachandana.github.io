function factorial(){ 
    var num=document.getElementById("num").value;
    if(num==null||num==""){
        alert("number not entered");
    }
    else{
       var n=parseInt(num);
        if(n<0){
           alert( "Not a valid number.");
        }
        else if(n==0||n==1){
            document.getElementById("fact").innerHTML=1;
        }
        else{
            var fact=1;
            for(var i=2;i<=n;i++){
               fact=fact*i;
        }
        document.getElementById("fact").innerHTML=fact;
    }
}
}