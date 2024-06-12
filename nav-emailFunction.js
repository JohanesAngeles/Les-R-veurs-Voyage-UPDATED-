(function() {
    emailjs.init("HHydkSrBtPUgIDo4e"); // Replace with your EmailJS user ID
})();

document.getElementById('guestbook-form').addEventListener('submit', function(event) {
    event.preventDefault();
    sendEmail();
});

function sendEmail() {
    const name = document.getElementById('name_guestbook').value;
    const email = document.getElementById('email_guestbook').value;
    const recipient = document.getElementById('recipient_guestbook').value;
    const title = document.getElementById('title_guestbook').value;
    const message = document.getElementById('message_guestbook').value;

    const templateParams = {
        from_name: name,
        from_email: email,
        to_email: recipient,
        subject: title,
        message: message
    };

    emailjs.send('service_8o54seb', 'template_auzossg', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send your message. Please try again.');
        });
}