document.getElementById('contactForm').addEventListener('submit', function(event) {
    let isValid = true;

    const name = document.getElementById('name').value;
    if (name.trim() === '') {
      isValid = false;
      alert('Please enter your name');
    }

    const email = document.getElementById('email').value;
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      isValid = false;
      alert('Please enter a valid email address');
    }

    const subject = document.getElementById('subject').value;
    if (subject.trim() === '') {
      isValid = false;
      alert('Please enter a subject');
    }

    const message = document.getElementById('message').value;
    if (message.trim() === '') {
      isValid = false;
      alert('Please enter a message');
    }

    if (!isValid) {
      event.preventDefault();
    }
  });