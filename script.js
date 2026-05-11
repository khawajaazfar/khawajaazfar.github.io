/* ═══════════════════════════════════════════════════════════════
   KHAWAJA AZFAR ASIF - PORTFOLIO JAVASCRIPT
   Interactive features: filtering, animations, and enhancements
   ═══════════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────
// 1. ACTIVITY FILTERING
// ─────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  
  // Get all filter buttons and activity cards
  const filterButtons = document.querySelectorAll('.filter-btn');
  const activityCards = document.querySelectorAll('.activity-card');
  const expandAllBtn = document.getElementById('expandAllBtn');

  // Add click event listeners to filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');
      
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Filter activity cards
      activityCards.forEach(card => {
        const cardYear = card.getAttribute('data-year');
        
        if (filterValue === 'all') {
          // Show all cards with animation
          card.style.display = 'block';
          card.style.opacity = '0';
          card.style.animation = 'none';
          
          // Trigger reflow to restart animation
          void card.offsetWidth;
          
          card.style.animation = 'slideInLeft 0.4s ease-out forwards';
        } else if (cardYear === filterValue) {
          // Show matching cards
          card.style.display = 'block';
          card.style.opacity = '0';
          card.style.animation = 'none';
          
          // Trigger reflow
          void card.offsetWidth;
          
          card.style.animation = 'slideInLeft 0.4s ease-out forwards';
        } else {
          // Hide non-matching cards
          card.style.display = 'none';
        }
      });
      
      // Smooth scroll to news section
      document.getElementById('news').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ─────────────────────────────────────────────────────────────
  // 2. EXPAND/COLLAPSE ALL ACTIVITIES
  // ─────────────────────────────────────────────────────────────

  if (expandAllBtn) {
    expandAllBtn.addEventListener('click', function() {
      const isExpanded = this.classList.contains('expanded');
      
      if (!isExpanded) {
        // Show all activities
        activityCards.forEach(card => {
          card.style.display = 'block';
        });
        
        this.classList.add('expanded');
        this.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Show Less Activities';
      } else {
        // Hide extra activities (keep only 3 most recent per year)
        activityCards.forEach((card, index) => {
          if (index > 8) {
            card.style.display = 'none';
          }
        });
        
        this.classList.remove('expanded');
        this.innerHTML = '<i class="fa-solid fa-chevron-down"></i> Show All Activities';
      }
    });
  }

  // ─────────────────────────────────────────────────────────────
  // 3. SMOOTH SCROLL FOR ANCHOR LINKS
  // ─────────────────────────────────────────────────────────────

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only prevent default for valid section links
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        
        const target = document.querySelector(href);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ─────────────────────────────────────────────────────────────
  // 4. ACTIVE SECTION HIGHLIGHTING (Optional)
  // ─────────────────────────────────────────────────────────────

  function highlightActiveSection() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 200;
      const sectionHeight = section.offsetHeight;
      
      if (window.scrollY >= sectionTop && 
          window.scrollY < sectionTop + sectionHeight) {
        // Section is in view
        section.style.opacity = '1';
      }
    });
  }

  window.addEventListener('scroll', highlightActiveSection);

  // ─────────────────────────────────────────────────────────────
  // 5. SCROLL-TO-TOP BUTTON
  // ─────────────────────────────────────────────────────────────

  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.id = 'scrollToTopBtn';
  scrollToTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  scrollToTopBtn.className = 'scroll-to-top-btn';
  document.body.appendChild(scrollToTopBtn);

  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });

  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ─────────────────────────────────────────────────────────────
  // 6. LAZY LOAD IMAGES
  // ─────────────────────────────────────────────────────────────

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px'
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // ─────────────────────────────────────────────────────────────
  // 7. NOTIFICATION SYSTEM
  // ─────────────────────────────────────────────────────────────

  function showNotification(message, type = 'success', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fa-solid fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);
    
    // Remove after duration
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, duration);
  }

  // ─────────────────────────────────────────────────────────────
  // 8. TRACK LINK CLICKS
  // ─────────────────────────────────────────────────────────────

  function trackLinkClicks() {
    const links = document.querySelectorAll('a[target="_blank"]');
    
    links.forEach(link => {
      link.addEventListener('click', function() {
        const linkText = this.textContent;
        const linkHref = this.href;
        
        console.log('External link clicked:', linkText, linkHref);
      });
    });
  }

  trackLinkClicks();

  // ─────────────────────────────────────────────────────────────
  // 9. DARK MODE TOGGLE (Optional - for future implementation)
  // ─────────────────────────────────────────────────────────────

  const darkModeToggle = document.getElementById('darkModeToggle');
  
  if (darkModeToggle) {
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    darkModeToggle.addEventListener('click', function() {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // ─────────────────────────────────────────────────────────────
  // 10. PERFORMANCE OPTIMIZATION
  // ─────────────────────────────────────────────────────────────

  // Debounce function for scroll events
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Use debounce for scroll events
  const debouncedScroll = debounce(highlightActiveSection, 100);
  window.addEventListener('scroll', debouncedScroll);

});

// ─────────────────────────────────────────────────────────────
// 11. UTILITY FUNCTIONS
// ─────────────────────────────────────────────────────────────

/**
 * Get URL parameters
 */
function getURLParameter(name) {
  return new URLSearchParams(window.location.search).get(name);
}

/**
 * Format date
 */
function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Add event listener with event delegation
 */
function delegateEvent(parentSelector, eventType, childSelector, callback) {
  const parent = document.querySelector(parentSelector);
  
  if (!parent) return;
  
  parent.addEventListener(eventType, function(event) {
    const target = event.target.closest(childSelector);
    if (target) {
      callback.call(target, event);
    }
  });
}

// ═══════════════════════════════════════════════════════════════
// End of Script
// ═══════════════════════════════════════════════════════════════
