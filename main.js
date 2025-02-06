const form = document.getElementById("form");
const inputElement = document.getElementById("myInput");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const signPage = document.getElementById("signPage");
const successPage = document.getElementById("successPage");
const error = document.getElementById('error');
const dismissButton = document.getElementById("dismissBtn");
const userEmail = document.getElementById("user-email");


const handleSubmit = (e) => {
  e.preventDefault(e);
  
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  const email = data.email;

  if(emailRegex.test(email)){
    signPage.style.display = 'none';
    successPage.style.display = 'block'
    error.classList.add('inactive');
    userEmail.innerHTML = email;
    
  } else{
    error.classList.add('active');
    error.classList.remove("inactive");
    inputElement.style.borderColor = "hsl(4, 100%, 67%)";
    inputElement.style.backgroundColor ="hsla(4, 100%, 67%, 0.5)";
  }
  
};

form.addEventListener("submit", handleSubmit);

dismissButton.addEventListener('click', function (){
  location.reload()
});

