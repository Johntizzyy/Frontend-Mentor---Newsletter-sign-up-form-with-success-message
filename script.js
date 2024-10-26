const button = document.getElementById('submit')
console.log(button)
const wrongEmail = document.getElementById('wrong')


button.onclick = () =>{
  const email = document.getElementById("email")
  const emailInput = document.getElementById("email").value
    if (emailInput.includes('@') && emailInput.includes('.')){
        console.log('valid')
        submission()
    }else{
        console.log('invalid')
        wrongEmail.style.display = "block"
        email.style.color = "hsl(4, 100%, 67%)"
        email.style.border = "1px solid  #ff62573d"
        email.style.outlineColor = "#ff62573d"
        email.style.backgroundColor = "#ff62573d"
    }
}







  


function submission () {


    const sucessHTML = `
      <div class="success">

        <img src="assets/images/icon-success.svg" alt="" />
        <h1>Thanks for subscribing</h1>
        <span class="confirmation-message">A confirmation email has been sent to <span id="emaill">${email.value}</span>. 
          Please open it and click the button inside to confirm your subscription.</span>
        <button>Dismiss message</button>
      </div>   
      
`;
  document.body.innerHTML = sucessHTML;
}

