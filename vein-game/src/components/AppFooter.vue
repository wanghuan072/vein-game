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
            Comprehensive VEIN game resources including guides, wiki, items database, and interactive maps to help you survive and thrive.
          </p>
        </div>
        <div class="link-column">
          <h2>Navigate</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/vein-guides">Guides</a></li>
            <li><a href="/vein-wiki">Wiki</a></li>
            <li><a href="/vein-items">Items</a></li>
            <li><a href="/vein-maps">Maps</a></li>
          </ul>
        </div>
        <div class="link-column">
          <h2>Legal</h2>
          <ul>
            <li>
              <a href="/privacy-policy" rel="noreferrer">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service" rel="noreferrer">Terms of Service</a>
            </li>
            <li>
              <a href="/copyright" rel="noreferrer">Copyright</a>
            </li>
            <li>
              <a href="/about-us" rel="noreferrer">About Us</a>
            </li>
            <li>
              <a href="/contact-us" rel="noreferrer">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© {{ new Date().getFullYear() }}© 2025 veingame.net. All rights reserved.</p>
        <p>veingame.net is not affiliated with, endorsed by, or connected to the original or its publishers. This is an independent fan site created for informational purposes only. All trademarks and copyrights belong to their respective owners.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding: 30px 0 20px 0;
  background: rgba(2, 4, 6, 0.9);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.footer-brand{
  width: 30%;
}

.link-column h2 {
  color: #ffdede;
  font-size: 1.3rem;
  margin-bottom: 16px;
  font-weight: 600;
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
  margin-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 20px;
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
    gap: 40px;
  }

  .link-column h2 {
    font-size: 1.2rem;
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

  .footer-logo {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .footer-text {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .link-column h2 {
    font-size: 16px;
    margin-bottom: 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
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
  .link-column a {
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
}
</style>

