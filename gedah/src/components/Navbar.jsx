import React from 'react';
import { ShieldCheck, Phone, Wrench, Zap, Search, Building2, Home } from 'lucide-react';

export default function Navbar({ currentPath = '/', onNavigate }) {
  const phoneNumber = "0555046951";

  const handleLinkClick = (e, targetPath) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(targetPath);
    } else {
      window.history.pushState({}, '', targetPath);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const navLinks = [
    { path: '/', label: 'الرئيسية', icon: Home },
    { path: '/services/plumbing', label: 'السباكة', icon: Wrench },
    { path: '/services/electrical', label: 'الكهرباء', icon: Zap },
    { path: '/services/leak-detection', label: 'كشف التسريبات', icon: Search },
    { path: '/services/construction', label: 'المقاولات والتشطيب', icon: Building2 }
  ];

  return (
    <>
      <header className="minimal-header">
        <div className="container header-container">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="header-brand"
            title="الرئيسية - سباكة وكهرباء جدة"
          >
            <div className="brand-logo-icon">
              <ShieldCheck size={22} />
            </div>
            <div className="brand-titles">
              <span className="brand-name">سباكة وكهرباء جدة</span>
              <span className="brand-subtitle">ضمان كتابي 15 سنة • كود SBC</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="header-nav-menu" aria-label="التنقل الرئيسي">
            {navLinks.map((item) => {
              const IconComp = item.icon;
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  className={`header-nav-item ${isActive ? 'active' : ''}`}
                >
                  <IconComp size={15} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Direct Phone CTA Button */}
          <div className="header-actions">
            <a href={`tel:${phoneNumber}`} className="header-call-btn">
              <Phone size={16} />
              <span dir="ltr">{phoneNumber}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Horizontal Services Bar */}
      <div className="mobile-services-bar" aria-label="تنقل الخدمات للجوال">
        {navLinks.map((item) => {
          const IconComp = item.icon;
          const isActive = currentPath === item.path;
          return (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => handleLinkClick(e, item.path)}
              className={`mobile-nav-pill ${isActive ? 'active' : ''}`}
            >
              <IconComp size={14} />
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </>
  );
}
