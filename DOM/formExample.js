let form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data = new FormData(form);
    let errors = '';
    let password = data.get('password');
    let passRegex = /[_@\[\]]/g
    if(data.get('username').length === 0){
       errors= '<p>Please Enter a Username</p>'
    }
    if(password.length === 0){
        errors += '<p>Please Enter a Password</p>'
    }else if(passRegex.test(password)){
        errors += 'Password contains invalid characters'
    }

    
    document.getElementById('errorContainer').innerHTML= errors
   if(!errors){
       form.submit();
   }
})