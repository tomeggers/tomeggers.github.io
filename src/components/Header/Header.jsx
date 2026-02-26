import { useEffect, useState } from 'react';
import './Header.css';

// ── To add/remove nav items, edit this array ──────────────────────────────
const NAV_ITEMS = [
  { id: 'home',     label: 'Home' },
  { id: 'about',    label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills',   label: 'Skills' },
  { id: 'contact',  label: 'Contact' },
];

export default function Header() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const updateNav = () => {
      const y = window.scrollY + window.innerHeight / 3;
      let current = NAV_ITEMS[0].id;
      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', updateNav, { passive: true });
    return () => window.removeEventListener('scroll', updateNav);
  }, []);

  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <header>
      <nav className="nav-pill">
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            className={`nav-btn${active === id ? ' active' : ''}`}
            onClick={() => scrollTo(id)}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}
