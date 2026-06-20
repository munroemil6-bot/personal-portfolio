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

    // Projects Data
    const projects = [
        {
            title: "Copyteque Cyber",
            category: "Business & Services",
            description: "A professional cyber and office supplies hub landing page for a Bungoma-based business.",
            image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
            link: "https://6a1170fd4f73ad234d44823d--sunny-figolla-b6b6ed.netlify.app/"
        },
        {
            title: "Mutermko VTC",
            category: "Education",
            description: "A modern vocational training centre website showcasing courses, facilities, and admissions.",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
            link: "https://mutermko-vtc.netlify.app/"
        },
        {
            title: "Fineday General Store",
            category: "E-Commerce",
            description: "A clean, user-friendly storefront for a general store offering household essentials.",
            image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
            link: "https://munroemil6-bot.github.io/fineday-shop/"
        },
        {
            title: "Campus Lost & Found System",
            category: "Education",
            description: "A campus lost and found platform with frontend and backend integration for reporting and recovering items.",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
            link: "https://campus-lost-found-frontend-latest.onrender.com/"
        },
        {
            title: "Royal Events Catering",
            category: "Hospitality",
            description: "An elegant hospitality website for premium catering and event management services.",
            image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
            link: "https://munroemil6-bot.github.io/Royal-Events-Catering/"
        }
    ];

    const projectsGrid = document.getElementById('projectsGrid');

    function renderProjects(filter = 'all') {
        if (!projectsGrid) return;

        projectsGrid.innerHTML = '';
        const filtered = filter === 'all' ? projects : projects.filter(project => project.category === filter);

        filtered.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <div class="project-img">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-info">
                    <span class="category">${project.category}</span>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="view-link">View Project <i class="fas fa-external-link-alt"></i></a>
                </div>
            `;
            projectsGrid.appendChild(card);
        });
    }

    function setActiveFilter(button) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    }

    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function () {
            const category = this.dataset.category || 'all';
            setActiveFilter(this);
            renderProjects(category);
        });
    });

    function animateSkillBars() {
        document.querySelectorAll('.skill-progress').forEach(bar => {
            const progress = bar.dataset.progress || bar.style.width;
            bar.style.width = progress;
        });
    }

    renderProjects();
    animateSkillBars();

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
