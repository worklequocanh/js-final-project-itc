console.log(getContacts())

$('#send-message').on('click', function (e) {
  e.preventDefault();

  const name = $('#customerName').val().trim();
  const email = $('#customerEmail').val().trim();
  const message = $('#customerMessage').val().trim();

  if (!name || !email || !message) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  addToContact(name, email, message);

  // Gửi thông tin liên hệ
  console.log("Contacts list:", getContacts());
  alert(`Cảm ơn ${name} đã gửi thông tin liên hệ!`);

  // Reset form
  $('#contact-form').reset();
});