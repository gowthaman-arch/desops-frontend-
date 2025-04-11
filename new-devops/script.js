document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const heroLoginBtn = document.getElementById('hero-login-btn');
    const heroSignupBtn = document.getElementById('hero-signup-btn');
    const loginModal = document.getElementById('login-modal');
    const closeBtn = document.querySelector('.close-btn');
    const loginTab = document.querySelector('[data-tab="login"]');
    const signupTab = document.querySelector('[data-tab="signup"]');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const switchToSignup = document.getElementById('switch-to-signup');
    
    // Open modal with login form
    function openLoginModal() {
        loginModal.style.display = 'block';
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    }
    
    // Open modal with signup form
    function openSignupModal() {
        loginModal.style.display = 'block';
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    }
    
    // Close modal
    function closeModal() {
        loginModal.style.display = 'none';
    }
    
    // Switch between login and signup forms
    function switchForm(event) {
        event.preventDefault();
        const tab = event.target.dataset.tab;
        
        if (tab === 'login') {
            loginTab.classList.add('active');
            signupTab.classList.remove('active');
            loginForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
        } else {
            signupTab.classList.add('active');
            loginTab.classList.remove('active');
            signupForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
        }
    }
    
    // Event listeners
    loginBtn.addEventListener('click', openLoginModal);
    signupBtn.addEventListener('click', openSignupModal);
    heroLoginBtn.addEventListener('click', openLoginModal);
    heroSignupBtn.addEventListener('click', openSignupModal);
    closeBtn.addEventListener('click', closeModal);
    loginTab.addEventListener('click', switchForm);
    signupTab.addEventListener('click', switchForm);
    switchToSignup.addEventListener('click', function(e) {
        e.preventDefault();
        openSignupModal();
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            closeModal();
        }
    });
    
    // Form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        // Here you would typically send this data to your backend
        console.log('Login attempt with:', { email, password });
        
        // For demo purposes, just close the modal
        closeModal();
        alert('Login functionality would be implemented here');
    });
    
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // Here you would typically send this data to your backend
        console.log('Signup attempt with:', { email, password });
        
        // For demo purposes, just close the modal
        closeModal();
        alert('Account created successfully (demo)');
    });
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const cards = document.querySelectorAll('.animate-card');
        
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.animationPlayState = 'running';
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    // Trigger once on load in case elements are already in view
    animateOnScroll();
});