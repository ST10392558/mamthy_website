
function booking(event){
    event.preventDefault();
    var name = document.getElementById("name");
    var surname = document.getElementById("surname");
    var email0001 = document.getElementById("email0001");
    var contact = document.getElementById("contact");
    var date = document.getElementById("date");
    var time = document.getElementById("time");
    var file = document.getElementById("file");
    const unsuccess002 = document.getElementById("unsucess002");

    if(name.value.trim() === '' || 
       surname.value.trim() === '' || 
       email0001.value.trim() === '' || 
      //  contact.value.trim() === '' || 
       date.value === '' || 
       time.value === '' || 
       file.files.length === 0){
         unsuccess002.style.display = 'block';
         setTimeout(() => {
        unsuccess002.style.display ='none';
      }, 4000);

    }else{
        alert('Thank you for booking with us, your appointment details are still getting processed and feedback will be sent via email');

    }
   

}

let popup = document.getElementById('appoint02');

function openPopup(){
    popup.classList.add("open-appoint02", "overlay");
}
function closePopup(){
    popup.classList.remove("open-appoint02");
}


function subscribe(event){
    event.preventDefault();
    var email02 = document.getElementById("email");
    const unsuccessful = document.getElementById("unsuccessful");

    if(email02.value.trim() === ''){
        unsuccessful.style.display = 'block';
         setTimeout(() => {
        unsuccessful.style.display ='none';
      }, 4000);
    }else{
        alert('You have successfully subscribed to our Newsletter');

    }

}
 function getintouch(event){
    event.preventDefault();
   var firstname = document.getElementById("FirstName");
   var lastname = document.getElementById("Lastname");
   var email = document.getElementById("email1");
   var phone = document.getElementById("Phone");
   var comments = document.getElementById("Comments");
   const success = document.getElementById("success");
   const danger = document.getElementById("danger");

    if(firstname.value.trim() === '' || lastname.value.trim() === ''|| 
      email.value.trim() ==='' || phone.value.trim() ==='' || comments.value.trim() === ''){
      
      danger.style.display = 'block';
      success.style.display = 'none'; // hide success if it was showing
      
      setTimeout(() => {
        danger.style.display ='none';
      }, 4000);
      
   } else { 
      success.style.display = 'block';
      danger.style.display = 'none'; // hide danger if it was showing
      
      setTimeout(() => {
        firstname.value = '';
        lastname.value = '';
        email.value = '';
        phone.value ='';
        comments.value = '';
      }, 2000);
      
      setTimeout(() => {
        success.style.display = 'none';
      }, 4000);
   }
}
//    if(firstname.value === '' || lastname.value === ''|| email.value ==='' || phone.value ==='' || comments.value === ''){
//     danger.style.display = 'block';
//    }else{ 
//    setTimeout(() => {
//         firstname.value = '';
//         lastname.value = '';
//         email.value = '';
//         phone.value ='';
//         comments.value = '';

//     }, 2000);
//     success.style.display = 'block';

    
//    }
//    setTimeout(() => {
//     danger.style.display ='none';
//     success.style.display = 'none';
//    }, 4000);



