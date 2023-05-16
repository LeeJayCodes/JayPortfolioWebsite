const formBtn = document.querySelector("#form-btn");

formBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

    ValidateEmail(email,name,message);
})


function ValidateEmail(email,name,message) {

    var emailValidRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (email.match(emailValidRegex)) {
  
        Email.send({
            SecureToken : "7008c1ce-9ce3-4136-ab65-8d3b3f1f0472",
            To : 'jaewoo.lee90@gmail.com',
            From : email,
            Subject : "From Jay Lee portfolio website email",
            Body : "Name: " + name + '<br/>' + "Email: " + email + '<br/>' + "Message: " + message
        
        }).then(
        
            message => alert("I received your message, I will get back to you as soon as I can.")
        );
    
        name = "";
        email = "";
        message = "";
        return true;
  
    } else {
  
        alert("Invalid Email Address!");
    
        return false;
  
    }
}