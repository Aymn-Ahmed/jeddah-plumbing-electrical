import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp({ message = "السلام عليكم، أرغب بحجز موعد معاينة واستفسار عن الضمان" }) {
  const intlPhone = "966555046951";
  const whatsappUrl = `https://wa.me/${intlPhone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      title="تواصل معنا عبر الواتساب"
      aria-label="تواصل معنا عبر الواتساب"
    >
      <MessageCircle size={28} />
    </a>
  );
}
