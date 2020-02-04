

function validation(event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var male = document.getElementById("male").value;
    var female = document.getElementById("female").value;
    var message = document.getElementById("message").value;
    
    
    
    if (firstName.length < 3) {
       document.querySelector('#firstName').classList.add("invalid");
       alert("Please insert your first name.");
        
    } else if (lastName.length < 3) {
        document.querySelector('#lastName').classList.add("invalid");
        alert("Please insert your last name.");
      
    } else if (male.checked == false && female.checked == false) {
        alert ("Please select your gender");
      
    } else if (message < 10) {
        document.querySelector('#message').classList.add("invalid")
        alert ("Please insert a message for us.")
    }    
}
	function updateName(elem, event){
        var valoare = elem.value;
        var nameSpan = document.querySelector("#nameSpan");
        nameSpan.innerText = valoare;

        document.querySelector(".hidden").classList.remove("hidden");
        document.querySelector(".hidden").classList.add("active");
    }

