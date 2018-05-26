
function printNumbers(){
    var num=document.getElementById("num").value;
    if(num==null||num==""){
        alert("number not entered");

    }
    else{
        var result="";
        var n=parseInt(num);
        for(var i=1;i<=n;i++){
            if(i%3==0&&i%5==0){
                result=result+","+"FizzBuzz";
            }
            else if(i%3==0){
                result=result+","+"Fizz";
            }
            else if(i%5==0){
                result=result+","+"Buzz";
            }
            else{
                result=result+","+i.toString();
            }
        }
        document.getElementById("result").innerHTML= result.substring(1,result.length);
    }
}