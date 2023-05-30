let login=()=>{
    
    
    var email=document.getElementById('Email').value
    var password=document.getElementById('Password').value
    

   var email1= localStorage.getItem('email')
   var password1= localStorage.getItem('password')
    
    if (email==email1 && password==password1) {
        alert('login failed')
        
    } else {
        alert('you are loggedin')
        
    }
    
    // alert('you are signup',signup)
    }
    
    // let submit=document.getElementById('btn')
    