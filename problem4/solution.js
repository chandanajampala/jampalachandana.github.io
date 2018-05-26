
function closePower(){
    var num=document.getElementById("num").value;
    if(num==null||num==""){
        alert("number not entered");
    }
    else{
        var n=parseInt(num);
        var count=0;
        while(Math.pow(2,count)<n){
            count++;
        }
        document.getElementById("count").innerHTML = count-1;
    }

}