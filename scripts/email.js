const formBtn = document.querySelector("#form-btn");

formBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;
    
    Email.send({
    SecureToken : "e7d48be5-c004-450d-821e-003ec205e6e1",
    To : 'lee00460@algonquinlive.com',
    From : email,
    Subject : "From Jay Lee portfolio website email",
    Body : "Name: " + name + '<br/>' + "Email: " + email + '<br/>' + "Message: " + message

}).then(

    message => alert("I received your message, I will get back to you as soon as I can.")

    );
})