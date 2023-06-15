/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// /*==================== PROFILE FORM ====================*/
// function updatedata(e) {
//   e.preventDefault();
//   var password = document.querySelector('.password').value;
//   var confirmPassword = document.querySelector('.confirm-password').value;
//   if (password !== confirmPassword) {
//     alert('Password and confirm password must be same');
//     return;
//   }
//   var email = document.getElementById("email").value;
//   const usersdata = JSON.parse(localStorage.getItem('users')) || [];
//   if (usersdata.find((user) => user.email === email)) {
//     var updatedData = {
//       name: document.getElementById("name").value,
//       email: email,
//       gender: document.getElementById("gender").value,
//       password: password
//     };
//     localStorage.setItem("users", JSON.stringify([updatedData]));
//     alert('Data updated successfully!');
//   }
// }

// // Load user data
// const usersdata = JSON.parse(localStorage.getItem('users')) || [];
// document.getElementById("user-name").innerHTML = localStorage.getItem('name');
// document.getElementById("name").value = localStorage.getItem('name');
// document.getElementById("email").value = localStorage.getItem('email');
// document.getElementById("gender").value = localStorage.getItem('gender');




// var parsedData = JSON.parse(data);
// var name = parsedData[0].name;
// var email = parsedData[0].email;
// var gender = parsedData[0]["gender"];

// document.getElementById("name").value = name;
// document.getElementById("email").value = email;
// if (gender === "male") {
//     document.getElementById("gender").value = "male";
// } else {
//     document.getElementById("gender").value = "female";
// }

// // Tambahkan event listener pada button sign out
// function signOut() {
//   // Hapus token autentikasi atau informasi login lainnya yang disimpan pada cookie atau sesi
//   // Hapus token dari local storage
//     localStorage.removeItem('token');
//     localStorage.removeItem('isLoggedIn');

//   // Redirect ke halaman login
//   window.location.href = 'index.html';
// }