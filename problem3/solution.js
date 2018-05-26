
function sumMultOf3n4()
{
    var num=document.getElementById("num").value;
    if(num==null||num==""){
        alert("number not entered");
    }
    else{
        var sum=0;
        var n=parseInt(num);
        for(var i=1;i<n;i++){
            if(i%3==0||i%5==0){
                sum=sum+i;
            }
        }
        document.getElementById("sum").innerHTML=sum;
    }
}