
// $("#register").submit(function (e) {
//   e.preventDefault();
//   sendEmail();
// });

// function sendEmail() {
//   var email = document.getElementById("email");
//   var msg = document.getElementById("message");
//   var phoneNumber = document.getElementById("phone");
//   var finalMessage;
//   console.log(
//     "email is " +
//       email.value +
//       "<br>phone is " +
//       phoneNumber.value +
//       "<br>message is " +
//       msg.value
//   );

//   if (phoneNumber.value == "") {
//     finalMessage =
//       "Email From : " + email.value + "\n" + "Message : " + msg.value + "\n";
//   } else {
//     finalMessage =
//       "Email From : " +
//       email.value +
//       "\n" +
//       "<br>Phone Number : " +
//       phoneNumber.value +
//       "\n" +
//       "<br>Message : " +
//       msg.value;
//   }

//   {
//     if (email.value == "" || msg.value == "") {
//       alert("Enter the email and the Message!");
//     } else {
//       Email.send({
//         Host: "smtp.gmail.com",
//         Username: "projectsdl33@gmail.com",
//         Password: "blablabla@0000",
//         To: "ganeshparandkar.gp91@gmail.com",
//         From: email.value,
//         Subject: "From Thermofab",
//         Body: finalMessage,
//       }).then((message) => alert("mail sent successfully"));
//     }
//   }

//   console.log(finalMessage);
// }
