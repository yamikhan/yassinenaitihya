// Sample array of project objects
const projects = [
    {
        name: "Projet 1",
        description: "Description du projet 1. Une application web qui fait XYZ.",
        demoLink: "https://example.com/demo1",
        repoLink: "https://github.com/username/project1",
        img: "images/project1.jpg"
    },
    {
        name: "Projet 2",
        description: "Description du projet 2. Une application mobile qui fait ABC.",
        demoLink: "https://example.com/demo2",
        repoLink: "https://github.com/username/project2",
        img: "images/project2.jpg"
    },
    {
        name: "Projet 3",
        description: "Description du projet 3. Un site e-commerce qui fait DEF.",
        demoLink: "https://example.com/demo3",
        repoLink: "https://github.com/username/project3",
        img: "images/project3.jpg"
    }
];
// Projects grid rendering (replace slider)
const projectsGrid = document.getElementById('projects-grid');

function createProjectCard(project) {
  const card = document.createElement('article');
  card.className = 'project-card';

  const media = document.createElement('div');
  media.className = 'project-media';
  const img = document.createElement('img');
  img.className = 'project-img';
  img.src = project.img;
  img.alt = project.name;
  img.loading = 'lazy';
  img.decoding = 'async';
  media.appendChild(img);

  const body = document.createElement('div');
  body.className = 'project-body';
  const h3 = document.createElement('h3');
  h3.textContent = project.name;
  const p = document.createElement('p');
  p.textContent = project.description;

  const tags = document.createElement('div');
  tags.className = 'project-tags';
  (project.tags || []).forEach(t => {
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = t;
    tags.appendChild(tag);
  });

  const actions = document.createElement('div');
  actions.className = 'project-actions';
  const demo = document.createElement('a');
  demo.href = project.demoLink;
  demo.target = '_blank';
  demo.rel = 'noopener noreferrer';
  demo.className = 'btn-outline';
  demo.textContent = 'Voir la démo';
  const repo = document.createElement('a');
  repo.href = project.repoLink;
  repo.target = '_blank';
  repo.rel = 'noopener noreferrer';
  repo.className = 'btn-primary';
  repo.textContent = 'Code';

  actions.appendChild(demo);
  actions.appendChild(repo);

  body.appendChild(h3);
  body.appendChild(p);
  body.appendChild(tags);
  body.appendChild(actions);

  card.appendChild(media);
  card.appendChild(body);
  return card;
}

function renderProjectsGrid() {
  if (!projectsGrid) return;
  projectsGrid.innerHTML = '';
  projects.forEach(p => projectsGrid.appendChild(createProjectCard(p)));
}

// Initialize everything on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu toggle with overlay and animated icon
  const toggleBtn = document.querySelector('.navbar-toggle');
  const navMenu = document.querySelector('nav ul');
  const overlay = document.querySelector('.navbar-overlay');

  function openMenu() {
    navMenu.classList.add('open');
    overlay.classList.add('active');
    toggleBtn.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  }
  function closeMenu() {
    navMenu.classList.remove('open');
    overlay.classList.remove('active');
    toggleBtn.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', function() {
      if (navMenu.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
    // Close menu when link clicked (mobile UX)
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.addEventListener('click', () => {
        if(navMenu.classList.contains('open')) {
          closeMenu();
        }
      });
    });
    // Close menu when overlay clicked
    if (overlay) overlay.addEventListener('click', closeMenu);
    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) closeMenu();
    });
  }

  // Render projects as a responsive grid (no arrows)
  renderProjectsGrid();

  // Avatar modal: click to view larger
  const avatar = document.querySelector('.avatar');
  const avatarModal = document.getElementById('avatar-modal');
  const avatarModalImg = document.getElementById('avatar-modal-img');
  const modalClose = document.querySelector('.modal-close');
  if (avatar && avatarModal && avatarModalImg) {
    avatar.style.cursor = 'pointer';
    avatar.addEventListener('click', () => {
      avatarModal.classList.remove('hidden');
      avatarModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      // Use same src as avatar
      avatarModalImg.src = avatar.src || avatarModalImg.src;
    });
    function closeAvatarModal() {
      avatarModal.classList.add('hidden');
      avatarModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    modalClose.addEventListener('click', closeAvatarModal);
    avatarModal.addEventListener('click', (e) => {
      if (e.target === avatarModal) closeAvatarModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !avatarModal.classList.contains('hidden')) closeAvatarModal();
    });
  }

  // Contact form handling (simple client-side feedback)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        alert('Veuillez remplir tous les champs.');
        return;
      }
      // Simple success feedback — replace with real endpoint later
      showToast('Merci ! Votre message a été envoyé.');
      contactForm.reset();
    });
  }

  function showToast(text) {
    const t = document.createElement('div');
    t.className = 'toast-notice';
    t.textContent = text;
    Object.assign(t.style, {
      position: 'fixed',
      right: '16px',
      bottom: '16px',
      background: '#23234a',
      color: '#f1c40f',
      padding: '10px 14px',
      borderRadius: '10px',
      boxShadow: '0 6px 24px rgba(0,0,0,0.3)',
      zIndex: 9999,
    });
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 300ms'; }, 2500);
    setTimeout(() => { if (t.parentNode) t.parentNode.removeChild(t); }, 3000);
  }
});