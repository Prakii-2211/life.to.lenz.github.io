function handleSubmit(event) {
    event.preventDefault();
    
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('successMessage');
    const errorMsg = document.getElementById('errorMessage');
    
    // Reset messages
    successMsg.style.display = 'none';
    errorMsg.style.display = 'none';
    
    // Basic validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !service || !subject || !message) {
        errorMsg.style.display = 'block';
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMsg.style.display = 'block';
        return;
    }
    
    // Show success message
    successMsg.style.display = 'block';
    
    // Reset form
    form.reset();
    
    // In a real implementation, you would send this data to a backend service
    console.log({
        name,
        email,
        phone: document.getElementById('phone').value,
        service,
        subject,
        message
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        successMsg.style.display = 'none';
    }, 5000);
}