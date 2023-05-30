let signup=()=>{
var fname=document.getElementById('fname').value
var lname=document.getElementById('lname').value
var age=document.getElementById('age').value
var email=document.getElementById('email').value
var password=document.getElementById('password').value

localStorage.setItem('fname',fname)
localStorage.setItem('lname',lname)
localStorage.setItem('age',age)
localStorage.setItem('email',email)
localStorage.setItem('password',password)


alert('you are signup')
}

let submit=document.getElementById('btn')