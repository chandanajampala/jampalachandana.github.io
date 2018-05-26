function repeating(){
    var num=document.getElementById("num").value;
    if(num==null||num==""){
        alert("enter numbers seperated with comma");

    }
    else {
         var numArr=num.split(",");
         var numbers= new Array();
         for(var i=0;i<numArr.length;i++){
             numbers[i]=parseInt(numArr[i]);
         }
         for(var i=0;i<numbers.length;i++){
             
         }
    }
}