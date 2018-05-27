function palindrome(){
    var st=document.getElementById("data").value;
    if(st==reverseString(st)){
        document.getElementById("sum").innerHTML="the given string is palindrome";
    }
    else{
        document.getElementById("sum").innerHTML="the given string is not palindrome";
    }
}

function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
  }