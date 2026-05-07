
window.addEventListener('scroll', () => {
            var backToTopBtn = document.getElementById('backToTop');
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                var targetId = this.getAttribute('href');
                var targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        
        window.addEventListener('scroll', () => {
            var sections = document.querySelectorAll('section, div[id]');
            let current = '';
            sections.forEach(section => {
                var sectionTop = section.offsetTop;
                var sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
            document.querySelectorAll('.nav-right a').forEach(link => {
                link.style.color = 'white';
                if (link.getAttribute('href') === '#' + current) {
                    link.style.color = '#FDD835';
                    link.style.fontWeight = '700';
                }
            });
        });

        
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.3s ease';
            });
        });

        
        var form = document.querySelector('form');
        if (form) {
            form.addEventListener('submit', function(e) {
                var name = document.getElementById('name').value.trim();
                var email = document.getElementById('email').value.trim();
                var message = document.getElementById('message').value.trim();
                
                if (!name || !email || !message) {
                    e.preventDefault();
                    alert('Please fill in all fields');
                    return false;
                }
            });
        }