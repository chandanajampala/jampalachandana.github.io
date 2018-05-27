function repeating(){
    var num=document.getElementById("num").value;
    if(num==null||num==""){
        alert("enter numbers seperated with comma");

    }
    else {
        var result="<br><br>";
         var numArr=num.split(",");
         var numbers= new Array();
         for(var i=0;i<numArr.length;i++){
             numbers[i]=parseInt(numArr[i]);
         }
         for(var i=0;i<numbers.length;i++){
             if(numbers[Math.abs(numbers[i])]>0){
                numbers[Math.abs(numbers[i])]= -numbers[Math.abs(numbers[i])];
             }
             else {
                 result = result+Math.abs(numbers[i]).toString()+"<br>";
             }
         }
         document.getElementById("sum").innerHTML = result;
    }
}