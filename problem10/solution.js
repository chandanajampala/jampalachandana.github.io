function palindrome(st){
    if(st==reverseString(st)){
        return true;
    }
    else{
        return false;
    }
}

function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
  }

function checkPal(){
     var strings=document.getElementById("data").value.split(",");
     var result="<br>";
     for(var i=0;i<strings.length;i++){
         if(palindrome(strings[i])){
             result=result+strings[i]+"<br>";
         }
     }
     document.getElementById("sum").innerHTML=result;
}