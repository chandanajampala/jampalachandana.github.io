function findSum(){
    var num=document.getElementById("num").value;
    var sum=parseInt(document.getElementById("sum").value);
    if(num==null||num==""){
        alert("enter some numbers");
    }
    else{
        var numArr=num.split(",");
        var n= new Array();
        var result ="<br>";
        for(var i=0;i<numArr.length;i++){
            n[i]=parseInt(numArr[i]); 
        }
        for(var i=0;i<n.length-1;i++){
            for(var j=i+1;j<n.length;j++){
                if(n[i]+n[j]==sum){
                    result = result+n[i].toString()+","+n[j].toString()+"<br>"
                } 
            }
        }
        document.getElementById("result").innerHTML=result;
    }
}