function generate() { 
    let dictionary = ""; 
    if (document.getElementById("checkbox-1").checked) { 
        dictionary += "qwertyuiopasdfghjklzxcvbnm"; 
    } 
    if (document.getElementById("checkbox-2").checked) { 
        dictionary += "QWERTYUIOPASDFGHJKLZXCVBNM"; 
    } 
    if (document.getElementById("checkbox-3").checked) { 
        dictionary += "1234567890"; 
    } 
    if (document.getElementById("checkbox-4").checked) { 
        dictionary += "!@#$%^&*()_+-={}[];<>:"; 
    } 
    const length = 8; 
  
    if (length < 1 || dictionary.length === 0) { 
        return; 
    } 
  
    let password = ""; 
    for (let i = 0; i < length; i++) { 
        const pos = Math.floor(Math.random() * dictionary.length); 
        password += dictionary[pos]; 
    } 
  
   document.getElementById("password-generator").value=password;
} 

  
function base64Encode(){
    var msg=document.getElementById('texts').value;
    var hash=document.getElementById('password-generator').value;
    var plaintext=msg+hash;
    var hashes=btoa(plaintext);
    document.getElementById('textareas').value=hashes;
}
function base64Decode(){
    var msgs=document.getElementById('textareas').value;
    msgs=atob(msgs)
    document.getElementById('textareas').value=msgs;
}