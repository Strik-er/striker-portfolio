// Alpine.js Portfolio App
document.addEventListener('alpine:init', () => {
  
  // ===== Main Portfolio Component =====
  Alpine.data('portfolio', () => ({
    // State
    currentLang: 'ru',
    currentTheme: 'light',
    translations: {},
    
    // Initialize
    async init() {
      // Load saved preferences
      this.currentLang = localStorage.getItem('lang') || 'ru';
      this.currentTheme = localStorage.getItem('theme') || 'light';
      
      // Load translations
      await this.loadTranslations();
      
      // Apply theme
      this.applyTheme();
      
      // Update Schema.org
      this.updateSchema();
    },
    
    // Load translation files
    async loadTranslations() {
      try {
        const [ru, en] = await Promise.all([
          fetch('/locales/ru.json').then(r => r.json()),
          fetch('/locales/en.json').then(r => r.json())
        ]);
        
        this.translations = { ru, en };
        
        // Update meta tags after translations loaded
        this.$nextTick(() => this.updateMetaTags());
      } catch (error) {
        console.error('Failed to load translations:', error);
        // Fallback to empty object
        this.translations = { ru: {}, en: {} };
      }
    },
    
    // Get translation
    t(key) {
      return this.translations[this.currentLang]?.[key] || key;
    },
    
    // Change language
    setLanguage(lang) {
      this.currentLang = lang;
      localStorage.setItem('lang', lang);
      document.documentElement.lang = lang;
      this.updateMetaTags();
      this.updateSchema();
    },
    
    // Toggle theme
    toggleTheme() {
      this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', this.currentTheme);
      this.applyTheme();
    },
    
    // Apply theme to body
    applyTheme() {
      document.body.className = this.currentTheme + '-theme';
    },
    
    // Get theme icon
    getThemeIcon() {
      return this.currentTheme === 'dark' ? 'bi-sun' : 'bi-moon-stars';
    },
    
    // Check if language is active
    isLangActive(lang) {
      return this.currentLang === lang;
    },
    
    // Update meta tags
    updateMetaTags() {
      // Update title
      document.title = this.t('meta_title');
      
      // Update meta tags
      const metaMap = {
        'meta-description': 'meta_description',
        'og-title': 'og_title',
        'og-description': 'og_description',
        'twitter-title': 'twitter_title',
        'twitter-description': 'twitter_description'
      };
      
      Object.entries(metaMap).forEach(([id, key]) => {
        const element = document.getElementById(id);
        if (element) {
          const attr = element.hasAttribute('content') ? 'content' : 'textContent';
          element[attr] = this.t(key);
        }
      });
    },
    
    // Update Schema.org JSON-LD
    updateSchema() {
      const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": this.t('name'),
        "jobTitle": this.currentLang === 'ru' 
          ? "Системный администратор, Технический директор" 
          : "System Administrator, Technical Director",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": this.t('city'),
          "addressCountry": "RU"
        },
        "email": "mailto:striker@striker.su",
        "telephone": "+79997984567",
        "url": "https://striker.su",
        "sameAs": [
          "https://t.me/striker_pub",
          "https://www.linkedin.com/in/gusev-de"
        ]
      };
      
      const scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (scriptTag) {
        scriptTag.textContent = JSON.stringify(schema, null, 2);
      }
    },
    
    // Download CV
    downloadCV() {
      window.open('/files/DGusev_CV.pdf', '_blank');
    }
  }));
  
  // ===== Smooth Scroll Component =====
  Alpine.directive('smooth-scroll', (el) => {
    el.addEventListener('click', (e) => {
      const href = el.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});