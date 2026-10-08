document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    function setMenuOpen(isOpen) {
        if (!menuToggle || !navLinks) return;

        navLinks.classList.toggle('active', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-xmark', isOpen);
            icon.classList.toggle('fa-bars', !isOpen);
        }
    }

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
        });

        document.addEventListener('click', event => {
            if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
                setMenuOpen(false);
            }
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                setMenuOpen(false);
                menuToggle.focus();
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', event => {
            const target = document.getElementById(anchor.hash.slice(1));
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setMenuOpen(false);
            }
        });
    });

    const typedRole = document.querySelector('.typed-role');
    const roles = ['Full-Stack Developer', 'React & Python Developer', 'Web Application Builder'];

    if (typedRole && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        let roleIndex = 0;
        let characterIndex = roles[0].length;
        let deleting = true;

        function animateRole() {
            const role = roles[roleIndex];
            typedRole.textContent = role.slice(0, characterIndex);

            if (deleting) {
                characterIndex -= 1;
                if (characterIndex < 0) {
                    deleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    characterIndex = 0;
                }
                window.setTimeout(animateRole, deleting ? 55 : 350);
            } else {
                characterIndex += 1;
                if (characterIndex > roles[roleIndex].length) {
                    deleting = true;
                    window.setTimeout(animateRole, 1800);
                } else {
                    window.setTimeout(animateRole, 80);
                }
            }
        }

        window.setTimeout(animateRole, 1800);
    }

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
        },
        {
            title: "PesaFlow Money Transfer",
            category: "Full-Stack",
            description: "A React and Vite wallet platform with transfers, beneficiaries, transaction history, user accounts, and admin analytics.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
            link: "https://pesaflow-frontend-2.vercel.app/",
            source: "https://github.com/munroemil6-bot/pesaflow-frontend"
        },
        {
            title: "BookBarn Library System",
            category: "Full-Stack",
            description: "A responsive React library frontend connected to a Flask REST API for books, borrowing, returns, users, and administration.",
            image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
            link: "https://library-management-system-frontend-jade.vercel.app/login",
            source: "https://github.com/munroemil6-bot/library-management-system-frontend"
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
                    <div class="project-links">
                        <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="view-link">Live Demo <i class="fas fa-external-link-alt"></i></a>
                        ${project.source ? `<a href="${project.source}" target="_blank" rel="noopener noreferrer" class="source-link"><i class="fab fa-github"></i> Source</a>` : ''}
                    </div>
                </div>
            `;
            projectsGrid.appendChild(card);
        });
    }

    function setActiveFilter(button) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.setAttribute('aria-pressed', String(btn === button));
        });
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

    const year = new Date().getFullYear();
    const copyright = document.getElementById('copyright');
    if (copyright) {
        copyright.textContent = `© ${year} Myles. All rights reserved.`;
    }
});
