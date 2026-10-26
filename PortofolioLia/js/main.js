/**
 * Portfolio Interactivity & Glassmorphism Logic
 * Nurul Kamalia Zahra, S.Si.D. - Data Science Graduate / Data Analyst
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const isExpanded = !mobileMenu.classList.contains('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        if (isExpanded) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // 2. Typing Effect in Hero Section
  const typingElement = document.getElementById('typingRole');
  if (typingElement) {
    const roles = [
      'Data Science Graduate',
      'Data Analyst',
      'Machine Learning & ARM Practitioner',
      'Business Intelligence Analyst'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 85;

    function typeEffect() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 35;
      } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 85;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 1800; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 350; // Pause before typing new word
      }

      setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
  }

  // 3. Mouse Spotlight Effect for Glass Cards
  const cards = document.querySelectorAll('.spotlight-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // 4. Skills Filter Functionality
  const filterButtons = document.querySelectorAll('.skill-filter-btn');
  const skillCards = document.querySelectorAll('.skill-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-purple-600/40', 'border-purple-400', 'text-white');
        b.classList.add('text-slate-400', 'border-transparent');
      });

      btn.classList.add('bg-purple-600/40', 'border-purple-400', 'text-white');
      btn.classList.remove('text-slate-400', 'border-transparent');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        if (filterValue === 'all') {
          card.classList.remove('hidden');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          const category = card.getAttribute('data-category');
          if (category === filterValue) {
            card.classList.remove('hidden');
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
              card.classList.add('hidden');
            }, 250);
          }
        }
      });
    });
  });

  // 5. MEDRISK Project Screenshot Switcher Gallery (C5.0 & Association Rule Mining)
  const mainScreenshot = document.getElementById('medriskMainImg');
  const screenshotTitle = document.getElementById('medriskCaptionTitle');
  const screenshotDesc = document.getElementById('medriskCaptionDesc');
  const thumbTabs = document.querySelectorAll('.thumb-tab');

  const screenshotData = {
    '1': {
      title: '1. Beranda Sistem: Prediksi C5.0 & Modul Asosiasi',
      desc: 'Antarmuka utama sistem cerdas MEDRISK ANALYSIS yang mengintegrasikan klasifikasi algoritma C5.0 dan Association Rule Mining (ARM) untuk evaluasi risiko peresepan obat.'
    },
    '2': {
      title: '2. Form Input Resep & Auto-Complete Pintar',
      desc: 'Fitur pencarian obat cerdas secara real-time yang memetakan nama obat transaksi (analgesik, keratolitik, suplemen) sebelum menjalankan prediksi C5.0.'
    },
    '3': {
      title: '3. Profil Obat Klinis: Amoxicilin (Antibiotik / Obat Keras)',
      desc: 'Informasi komprehensif rentang dosis anak (125-250mg) dan dewasa (500mg), risiko reaksi alergi penisilin, serta rekomendasi substitusi obat (Cefadroxil, Cotrimoksazol).'
    },
    '4': {
      title: '4. Profil Obat Klinis: Asam Mefenamat (Analgesik)',
      desc: 'Evaluasi kontraindikasi dosis pada anak-anak, batas aman dosis dewasa, mitigasi risiko tukak lambung jangka panjang, serta saran obat pengganti (Ibuprofen).'
    },
    '5': {
      title: '5. Modul ARM: Unggah Dataset & Konfigurasi Parameter',
      desc: 'Form Association Rule Mining (ARM) untuk memproses dataset transaksi peresepan (Peresepan_obat.csv, 146 aturan ditemukan) dengan konfigurasi Support Min, Confidence Min, dan Lift Min.'
    },
    '6': {
      title: '6. Wawasan Aturan Asosiasi (ARM) per Kelas Risiko',
      desc: 'Visualisasi aturan asosiasi multi-obat pada kelas "Sangat Berisiko" (50 aturan) yang menghitung metrik Support, Confidence, dan Lift dari kombinasi obat kompleks.'
    }
  };

  thumbTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      thumbTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const imgId = tab.getAttribute('data-img');
      const imgSrc = tab.getAttribute('data-src');

      if (mainScreenshot && screenshotData[imgId]) {
        mainScreenshot.style.opacity = '0';
        mainScreenshot.style.transform = 'scale(0.98)';

        setTimeout(() => {
          mainScreenshot.src = imgSrc;
          if (screenshotTitle) screenshotTitle.textContent = screenshotData[imgId].title;
          if (screenshotDesc) screenshotDesc.textContent = screenshotData[imgId].desc;
          mainScreenshot.style.opacity = '1';
          mainScreenshot.style.transform = 'scale(1)';
        }, 200);
      }
    });
  });

  // 6. Universal Lightbox / Modal for High-Resolution Images
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeLightboxBtn = document.getElementById('closeLightbox');

  window.openLightbox = function(src, caption) {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = src;
    if (lightboxCaption) lightboxCaption.textContent = caption || '';
    lightboxModal.classList.remove('hidden');
    lightboxModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  window.closeLightbox = function() {
    if (!lightboxModal) return;
    lightboxModal.classList.add('hidden');
    lightboxModal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  if (closeLightboxBtn) {
    closeLightboxBtn.addEventListener('click', closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal || e.target.classList.contains('lightbox-backdrop')) {
        closeLightbox();
      }
    });
  }

  // Allow clicking on main screenshot to zoom
  if (mainScreenshot) {
    mainScreenshot.addEventListener('click', () => {
      const activeCaption = screenshotTitle ? screenshotTitle.textContent : 'MEDRISK ANALYSIS Screenshot';
      openLightbox(mainScreenshot.src, activeCaption);
    });
  }

  // 7. ScrollSpy - Active Navbar Navigation Highlight
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('text-purple-400', 'font-semibold');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-purple-400', 'font-semibold');
          }
        });
      }
    });

    // 8. Back-to-Top Button Visibility
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-6');
        backToTopBtn.classList.add('opacity-100', 'translate-y-0');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-6');
        backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
      }
    }
  });

  // 9. Toast Notification Utility
  window.showToast = function (message, type = 'success') {
    const toast = document.getElementById('toastNotification');
    const toastMessage = document.getElementById('toastMessage');
    const toastIcon = document.getElementById('toastIcon');

    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;

    if (toastIcon) {
      if (type === 'success') {
        toastIcon.className = 'fa-solid fa-circle-check text-emerald-400 text-lg';
      } else if (type === 'info') {
        toastIcon.className = 'fa-solid fa-circle-info text-cyan-400 text-lg';
      } else {
        toastIcon.className = 'fa-solid fa-circle-exclamation text-rose-400 text-lg';
      }
    }

    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3800);
  };

  // 10. Copy to Clipboard Functionality
  window.copyToClipboard = function (text, label) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`${label} berhasil disalin ke clipboard!`, 'success');
      }).catch(() => {
        fallbackCopyTextToClipboard(text, label);
      });
    } else {
      fallbackCopyTextToClipboard(text, label);
    }
  };

  function fallbackCopyTextToClipboard(text, label) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(`${label} berhasil disalin ke clipboard!`, 'success');
    } catch (err) {
      showToast('Gagal menyalin teks.', 'error');
    }
    document.body.removeChild(textArea);
  }

  // 11. Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const subject = document.getElementById('formSubject').value.trim();
      const message = document.getElementById('formMessage').value.trim();
      const submitBtn = document.getElementById('submitBtn');
      const originalBtnHtml = submitBtn.innerHTML;

      if (!name || !email || !message) {
        showToast('Mohon lengkapi formulir sebelum mengirim.', 'error');
        return;
      }

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg> Mengirim pesan...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
        contactForm.reset();
        showToast(`Terima kasih, ${name}! Pesan Anda telah berhasil terkirim.`, 'success');
      }, 1200);
    });
  }

  // 12. Download CV Modal / Action
  const downloadCvBtn = document.getElementById('downloadCvBtn');
  const cvModal = document.getElementById('cvModal');
  const closeCvModalBtn = document.getElementById('closeCvModal');

  if (downloadCvBtn && cvModal) {
    downloadCvBtn.addEventListener('click', (e) => {
      e.preventDefault();
      cvModal.classList.remove('hidden');
      cvModal.classList.add('flex');
    });

    if (closeCvModalBtn) {
      closeCvModalBtn.addEventListener('click', () => {
        cvModal.classList.add('hidden');
        cvModal.classList.remove('flex');
      });
    }

    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) {
        cvModal.classList.add('hidden');
        cvModal.classList.remove('flex');
      }
    });
  }
});
