document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // For a static site, we can't send actual emails without a backend.
            // We'll simulate a success message or use a mailto link.
            
            const subject = encodeURIComponent(`Contact from Portfolio: ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            
            // Redirect to mailto
            window.location.href = `mailto:munroemil6@gmail.com?subject=${subject}&body=${body}`;
            
            alert('Thank you for your message! Your email client will now open to send the message.');
            contactForm.reset();
        });
    }

    // Navbar Scroll Effect

    //footer year
    const year = new Date().getFullYear();
    document.getElementById(
    "copyright"
    ).innerHTML = `© ${year} Myles. All rights reserved.`;

    //links
    /* =========================
   COPY EMAIL
========================= */

function copyEmail() {

    navigator.clipboard.writeText(
        "munroemil6@gmail.com"
    );

    const msg =
        document.getElementById(
            "email-copy-msg"
        );

    msg.classList.add("show-copy");

    setTimeout(() => {
        msg.classList.remove("show-copy");
    }, 2000);
}


/* =========================
   COPY PHONE
========================= */

function copyPhone() {

    navigator.clipboard.writeText(
        "0723274962"
    );

    const msg =
        document.getElementById(
            "phone-copy-msg"
        );

    msg.classList.add("show-copy");

    setTimeout(() => {
        msg.classList.remove("show-copy");
    }, 2000);
}

});
