import React from 'react';
import { ShieldCheck, Wrench, Zap, Search, Building2 } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const phoneNumber = "0555046951";
  const intlPhone = "966555046951";

  const getWhatsAppLink = (message) => {
    return `https://wa.me/${intlPhone}?text=${encodeURIComponent(message)}`;
  };

  const handleLinkClick = (e, targetPath) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(targetPath);
    } else {
      window.history.pushState({}, '', targetPath);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <footer className="simple-warm-footer">
      <div className="container footer-content-grid">
        <div className="footer-col-main">
          <div className="footer-brand-lockup">
            <ShieldCheck size={26} color="#ea580c" />
            <div>
              <h4>سباكة وكهرباء جدة</h4>
              <span>مقاولات معتمدة • ضمان كتابي 15 سنة</span>
            </div>
          </div>
          <p className="footer-about-text">
            نقدم خدمات التأسيس والتشطيب والصيانة للعمائر والفلل والمشاريع السكنية والتجارية في كافة أحياء جدة وفق أعلى المعايير الهندسية واشتراطات الكود السعودي SBC.
          </p>
          <div className="footer-quick-services" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
            <a
              href="/services/plumbing"
              onClick={(e) => handleLinkClick(e, '/services/plumbing')}
              className="footer-service-pill"
            >
              <Wrench size={13} />
              <span>السباكة المعتمدة</span>
            </a>
            <a
              href="/services/electrical"
              onClick={(e) => handleLinkClick(e, '/services/electrical')}
              className="footer-service-pill"
            >
              <Zap size={13} />
              <span>تمديدات الكهرباء</span>
            </a>
            <a
              href="/services/leak-detection"
              onClick={(e) => handleLinkClick(e, '/services/leak-detection')}
              className="footer-service-pill"
            >
              <Search size={13} />
              <span>كشف التسريبات</span>
            </a>
            <a
              href="/services/construction"
              onClick={(e) => handleLinkClick(e, '/services/construction')}
              className="footer-service-pill"
            >
              <Building2 size={13} />
              <span>المقاولات والتشطيب</span>
            </a>
          </div>
        </div>

        <div className="footer-col-info">
          <h5>بيانات التواصل المباشر</h5>
          <ul className="footer-contact-list">
            <li>
              <span>📞 الهاتف:</span>
              <a href={`tel:${phoneNumber}`} dir="ltr">{phoneNumber}</a>
            </li>
            <li>
              <span>💬 الواتساب:</span>
              <a
                href={getWhatsAppLink("السلام عليكم، أرغب بطلب معاينة لخدمات التأسيس والصيانة")}
                target="_blank"
                rel="noopener noreferrer"
              >
                محادثة فورية (متاح 24/7)
              </a>
            </li>
            <li>
              <span>📍 الموقع:</span>
              <span>جدة، المملكة العربية السعودية (تغطية لكافة الأحياء)</span>
            </li>
            <li>
              <span>🕒 ساعات العمل:</span>
              <span>يومياً من 7:00 ص حتى 10:00 م (خدمات الطوارئ 24 ساعة)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom-line">
        <p>© 2026 مؤسسة سباكة وكهرباء جدة للمقاولات. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
