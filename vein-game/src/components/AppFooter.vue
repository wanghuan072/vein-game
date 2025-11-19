<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/images/logo.webp" alt="VEIN Logo" class="logo-image">
            <span class="logo-text">VEIN Game</span>
          </div>
          <p class="footer-text">
            Unofficial VEIN survival hub. We archive gameplay notes, hardware targets, and patch beats so survivors can track Early Access progress.
          </p>
          <ul class="footer-brief">
            <li>Release · 24 Oct 2025 (EA)</li>
            <li>Developer · Ramjet Studios</li>
            <li>Genre · Survival</li>
          </ul>
        </div>
        <div class="link-column">
          <h2>Navigate</h2>
          <ul>
            <li><a href="#what-is">Overview</a></li>
            <li><a href="#guides">Guides</a></li>
            <li><a href="#info">Game Info</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div class="link-column">
          <h2>Official Links</h2>
          <ul>
            <li>
              <a href="https://vein.gg/" target="_blank" rel="noreferrer">Official Site</a>
            </li>
            <li>
              <a href="https://store.steampowered.com/app/1857950/VEIN/" target="_blank" rel="noreferrer">
                Steam Store
              </a>
            </li>
            <li>
              <a href="https://vein.wiki.gg/" target="_blank" rel="noreferrer">Official Wiki</a>
            </li>
            <li>
              <a href="https://discord.gg/MMxGTZRgHM" target="_blank" rel="noreferrer">Discord</a>
            </li>
            <li><a href="#info">System Requirements</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© {{ new Date().getFullYear() }} VEIN Fan Hub · Informational only · Not affiliated with Ramjet Studios.</p>
        <p>Descriptions reference publicly available developer materials and community feedback.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding: 60px 0 32px;
  background: rgba(2, 4, 6, 0.9);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 10px;
  text-decoration: none;
}

.logo-image {
  width: 50px;
  height: 50px;
} 

.logo-text {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--accent);
  text-transform: uppercase;
  text-shadow: 0 0 20px rgba(255, 54, 54, 0.7);
}
.footer-text {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 16px;
}

.footer-brief {
  list-style: none;
  padding: 0;
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.link-column h4 {
  color: #ffdede;
  font-size: 0.95rem;
  margin-bottom: 12px;
}

.link-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.link-column a {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: color 0.2s ease;
}

.link-column a:hover {
  color: #ffffff;
}

.footer-bottom {
  margin-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 18px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: center;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .site-footer {
    padding: 20px 0;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .footer-brand {
    grid-column: 1;
  }

  .footer-logo {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .footer-text {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .footer-brief {
    font-size: 12px;
    gap: 10px;
  }

  .link-column h4 {
    font-size: 14px;
    margin-bottom: 10px;
  }

  .link-column ul {
    gap: 10px;
  }

  .link-column a {
    font-size: 12px;
  }

  .footer-bottom {
    margin-top: 20px;
    padding-top: 20px;
    gap: 10px;
    font-size: 12px;
  }

  .footer-bottom p {
    font-size: 12px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .footer-text,
  .footer-brief li,
  .link-column a {
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
}
</style>

