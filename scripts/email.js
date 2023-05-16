// const formBtn = document.querySelector("#form-btn");

// formBtn.addEventListener('click', (e)=>{
//     e.preventDefault();
//     let name = document.querySelector("#name").value;
//     let email = document.querySelector("#email").value;
//     let message = document.querySelector("#message").value;
    
//     // alert("I am sorry, this feature is currently unavailable due to error.");
    
//     let nameRequired = isEmpty(name)
//     let emailRequired = isEmpty(email)
//     console.log(nameRequired);
//     console.log(emailRequired);
//     if (nameRequired == true){
//         alert("Name field is required for sending message");
//         return ;
//     } else if(emailRequired == true) {
//         alert("Email field is required for sending message");
//         return ;
//     } else {
//         ValidateEmail(email,name,message);
//     }
    
// })


function ValidateEmail(email,name,message) {

    var emailValidRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (email.match(emailValidRegex)) {
  
        Email.send({
            SecureToken : "c89337a2-bb01-45d7-add1-1630fdf5098c",
            To : 'jaewoo.lee90@gmail.com',
            From : email,
            Subject : "From Jay Lee portfolio website email",
            Body : "Name: " + name + '<br/>' + "Email: " + email + '<br/>' + "Message: " + message
        
        }).then(
        
            message => alert("Thank you for reaching out to me, I will get back to you as soon as I can.")
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

function isEmpty(value){
    return (value == null || value.length === 0);
  }