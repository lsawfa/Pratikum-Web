document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var alamat = document.getElementById("alamat").value;

  if (lname === "" || email === "" || alamat === "") {
    alert("Anda harus mengisi data dengan lengkap!");
  } else {
    alert("Pesan telah dikirim");
  }
});
