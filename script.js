// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Load theme from localStorage or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
body.classList.add(currentTheme + '-theme');
updateThemeIcon();

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    updateThemeIcon();
});

function updateThemeIcon() {
    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Skill bars animation
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillItem = entry.target;
            const skillFill = skillItem.querySelector('.skill-fill');
            const skillLevel = skillItem.getAttribute('data-skill');
            skillFill.style.width = skillLevel + '%';
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-item').forEach(item => {
    skillObserver.observe(item);
});

// Particles.js initialization
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
                push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Modal functionality
function openModal(projectType) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');

    let content = '';

    if (projectType === 'banking') {
        content = `
            <h2>Banking Customer Segmentation</h2>
            <p><strong>Description:</strong> A project aiming to segment banking customers through analysis.</p>
            <p><strong>Technologies Used:</strong> Python (Pandas, SQL), Tableau, Power BI</p>
            <p><strong>Key Features:</strong></p>
            <ul>
                <li>Built data pipeline with Python (Pandas, SQL) to integrate and preprocess customer data</li>
                <li>Applied K-Means, DBSCAN, and Hierarchical Clustering algorithms</li>
                <li>Visualized results with PCA/t-SNE in Tableau and Power BI</li>
                <li>Identified distinct customer segments for targeted marketing strategies</li>
            </ul>
            <p><strong>Outcome:</strong> Successfully segmented customers, enabling personalized banking services and improved customer satisfaction.</p>
        `;
    } else if (projectType === 'sales') {
        content = `
            <h2>Sales Data Cleaning and Analysis</h2>
            <p><strong>Description:</strong> Project focused on enhancing sales data quality and analysis for actionable insights.</p>
            <p><strong>Technologies Used:</strong> Python (Pandas, NumPy), Excel</p>
            <p><strong>Key Features:</strong></p>
            <ul>
                <li>Cleaned and standardized 1,000+ sales records</li>
                <li>Removed duplicates and fixed inconsistencies</li>
                <li>Improved sales trend analysis by reducing reporting errors by 25%</li>
                <li>Generated comprehensive reports for business decision-making</li>
            </ul>
            <p><strong>Outcome:</strong> Enhanced data accuracy and provided reliable insights for sales forecasting and strategy development.</p>
        `;
    }

    modalBody.innerHTML = content;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Typing effect for hero text
const heroText = document.querySelector('#hero p');
const originalText = heroText.textContent;
heroText.textContent = '';

let i = 0;
function typeWriter() {
    if (i < originalText.length) {
        heroText.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing effect after a delay
setTimeout(typeWriter, 1000);

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .nav-links.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        padding: 1rem 0;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }

    body.dark-theme .nav-links.active {
        background: rgba(26, 26, 46, 0.95);
    }

    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    header.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
    }

    body.dark-theme header.scrolled {
        background: rgba(26, 26, 46, 0.98);
    }

    section.animate {
        animation: fadeInUp 0.8s ease-out;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
