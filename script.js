// Theme Toggle Functionality
const themeSwitcher = document.getElementById('theme-switcher');
const body = document.body;

function toggleTheme() {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    themeSwitcher.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

themeSwitcher.addEventListener('click', toggleTheme);

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeSwitcher.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeSwitcher.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animate sections on scroll
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

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Particles.js configuration
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

// Skill bars animation
function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        const skillFill = item.querySelector('.skill-fill');
        const skillLevel = item.getAttribute('data-skill');
        skillFill.style.width = skillLevel + '%';
    });
}

// Trigger skill bars animation when skills section is in view
const skillsSection = document.querySelector('#skills');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
        }
    });
}, { threshold: 0.5 });

skillsObserver.observe(skillsSection);

// Modal functionality
function openModal(projectType) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');

    let content = '';

    if (projectType === 'banking') {
        content = `
            <h2>Banking Customer Segmentation</h2>
            <p><strong>Description:</strong> A comprehensive project focused on segmenting banking customers to improve targeted marketing and customer service strategies.</p>
            <p><strong>Technologies Used:</strong> Python, Pandas, NumPy, Scikit-learn, Tableau, Power BI</p>
            <p><strong>Key Features:</strong></p>
            <ul>
                <li>Data pipeline integration using Python libraries</li>
                <li>Preprocessing and cleaning of customer data</li>
                <li>Implementation of multiple clustering algorithms (K-Means, DBSCAN, Hierarchical)</li>
                <li>Visualization of clusters using PCA and t-SNE</li>
                <li>Interactive dashboards in Tableau and Power BI</li>
            </ul>
            <p><strong>Impact:</strong> Enabled the bank to identify distinct customer segments, leading to more personalized services and improved customer satisfaction.</p>
        `;
    } else if (projectType === 'sales') {
        content = `
            <h2>Sales Data Cleaning and Analysis</h2>
            <p><strong>Description:</strong> A data cleaning and analysis project aimed at improving the quality and reliability of sales data for better business insights.</p>
            <p><strong>Technologies Used:</strong> Python, Pandas, Excel, SQL</p>
            <p><strong>Key Features:</strong></p>
            <ul>
                <li>Identification and removal of duplicate records</li>
                <li>Standardization of inconsistent data formats</li>
                <li>Handling of missing values and outliers</li>
                <li>Validation of data integrity</li>
                <li>Trend analysis and reporting</li>
            </ul>
            <p><strong>Impact:</strong> Reduced reporting errors by 25%, ensuring more accurate sales forecasting and improved decision-making processes.</p>
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
        closeModal();
    }
});

// Typing effect for hero text (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Uncomment to add typing effect to hero title
// const heroTitle = document.querySelector('.hero-content h1');
// typeWriter(heroTitle, 'Hello, I\'m Kowshik Gali');
