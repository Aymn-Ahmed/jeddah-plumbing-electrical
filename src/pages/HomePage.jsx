import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Award,
  Star,
  ArrowLeft,
  ArrowDown,
  Wrench,
  Zap,
  Search,
  Building2
} from 'lucide-react';

import { imagesConfig } from '../config/images';

export default function HomePage({ onNavigate }) {
  const phoneNumber = "0555046951";
  const intlPhone = "966555046951";

  // Pre-filled WhatsApp URLs
  const getWhatsAppLink = (message) => {
    return `https://wa.me/${intlPhone}?text=${encodeURIComponent(message)}`;
  };

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  // --------------------------------------------------------------------------
  // Counter Animation for Metrics Bar
  // --------------------------------------------------------------------------
  const [metricsVisible, setMetricsVisible] = useState(false);
  const [counts, setCounts] = useState({ warranty: 0, projects: 0, pressure: 0, sbc: 0 });
  const metricsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMetricsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!metricsVisible) return;

    const duration = 1800; // ms
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      // easeOutQuad
      const factor = 1 - (1 - progress) * (1 - progress);

      setCounts({
        warranty: Math.round(15 * factor),
        projects: Math.round(480 * factor),
        pressure: Math.round(12 * factor),
        sbc: Math.round(100 * factor)
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [metricsVisible]);

  // --------------------------------------------------------------------------
  // Manometer (Pressure Gauge) Simulation State
  // --------------------------------------------------------------------------
  const [gaugeValue, setGaugeValue] = useState(0);
  const gaugeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGaugeValue(12); // animates to 12 Bar
        }
      },
      { threshold: 0.3 }
    );

    if (gaugeRef.current) {
      observer.observe(gaugeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // --------------------------------------------------------------------------
  // Before / After Slider State
  // --------------------------------------------------------------------------
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);

  const handleSliderMove = (clientX, rect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, rect);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX, rect);
    }
  };

  // --------------------------------------------------------------------------
  // Services Data
  // --------------------------------------------------------------------------
  const servicesList = [
    {
      id: 1,
      title: 'تأسيس السباكة وشبكات الصرف',
      tag: 'تأسيس من الصفر',
      desc: 'تمديد خطوط التغذية الحرارية وشبكات الصرف بميول ليزرية دقيقة مانعة للانسداد ومطابقة للكود السعودي SBC.',
      image: imagesConfig.plumbingService,
      bullets: ['اختبار ضغط 12 بار معتمد', 'عزل كامل لمواسير التغذية', 'ميول هندسية مانعة للروائح'],
      hasDedicatedPage: true,
      pageUrl: '/services/plumbing',
      pageLabel: 'صفحة السباكة المستقلة'
    },
    {
      id: 2,
      title: 'تأسيس وتمديد خطوط الكهرباء',
      tag: 'أمان وتأريض',
      desc: 'سحب وتمديد كابلات الفنار الأصلية وتأسيس طبالين التوزيع وموازنة أحمال المكيفات والأفران لتفادي أي التماس.',
      image: imagesConfig.electricalService,
      bullets: ['شبكة تأريض كاملة للحماية', 'موازنة هندسية لأحمال التكييف', 'مسارات منظمة للسمارت هوم'],
      hasDedicatedPage: true,
      pageUrl: '/services/electrical',
      pageLabel: 'صفحة الكهرباء المستقلة'
    },
    {
      id: 3,
      title: 'مقاولات العمائر والفلل السكنية',
      tag: 'مشاريع كبرى',
      desc: 'إشراف وتنفيذ كامل للمشاريع والمجمعات بجدة من مرحلة العظم وحتى تسليم المفتاح وفق المخططات الإنشائية المعتمدة.',
      image: imagesConfig.roughinService,
      bullets: ['فريق فني متكامل وسرعة إنجاز', 'دفعات مرتبطة بنسب الإنجاز', 'عقد رسمي موثق وضمان 15 سنة'],
      hasDedicatedPage: true,
      pageUrl: '/services/construction',
      pageLabel: 'صفحة المقاولات المستقلة'
    },
    {
      id: 4,
      title: 'التشطيب الفندقي والإنارة الحديثة',
      tag: 'تشطيب فاخر',
      desc: 'تركيب أنظمة الكراسي المعلقة والسيفونات المدفونة، والليد بروفايل الديكوري، والأفياش والمفاتيح الذكية.',
      image: imagesConfig.finishingService,
      bullets: ['سيفونات دفن وكراسي معلقة', 'ليد بروفايل وإنارة مخفية', 'كبائن شاور وزجاج سيكوريت'],
      hasDedicatedPage: true,
      pageUrl: '/services/construction',
      pageLabel: 'صفحة التشطيب والمقاولات'
    },
    {
      id: 5,
      title: 'كشف التسريبات وصيانة الأعطال',
      tag: 'تدخل سريع',
      desc: 'فحص إلكتروني دقيق لكشف أماكن تسريب المياه والتماسات الكهرباء دون تكسير عشوائي في الجدران أو البلاط.',
      image: imagesConfig.maintenanceService,
      bullets: ['كشف إلكتروني بدون تكسير', 'إصلاح فوري للأعطال الطارئة', 'ترميم شامل للشبكات المتهالكة'],
      hasDedicatedPage: true,
      pageUrl: '/services/leak-detection',
      pageLabel: 'صفحة كشف التسريبات المستقلة'
    }
  ];

  // --------------------------------------------------------------------------
  // Work Steps Data
  // --------------------------------------------------------------------------
  const stepsData = [
    {
      number: '01',
      title: 'المعاينة الميدانية',
      desc: 'نزور موقع عقارك في أي حي بجدة، نفحص المخطط المعماري ونرفع المقاسات بدقة.'
    },
    {
      number: '02',
      title: 'عرض السعر والمقايسة',
      desc: 'نقدم لك مقايسة تفصيلية وواضحة تحدد المواد والتكلفة الإجمالية وجدول الإنجاز بدون أي زيادات خفية.'
    },
    {
      number: '03',
      title: 'التنفيذ بالليزر والكود السعودي',
      desc: 'يبدأ فريقنا المتخصص بالتمديد واستخدام موازين الليزر والمواد الأصلية المعتمدة تحت إشراف فني.'
    },
    {
      number: '04',
      title: 'التسليم بوثيقة الضمان 15 سنة',
      desc: 'نختبر شبكات المياه بضغط 12 بار ونسلمك الموقع جاهزاً مع عقد وضمان كتابي رسمي معتمد.'
    }
  ];

  // --------------------------------------------------------------------------
  // Testimonials
  // --------------------------------------------------------------------------
  const testimonials = [
    {
      name: 'م. سلطان الغامدي',
      role: 'مالك فيلا - حي أبحر الشمالية',
      quote: 'أكثر ما أراحني هو اختبار الضغط بالمانومتر قبل صب الأرضيات وشهادة الضمان المكتوبة 15 سنة. شغل هندسي مرتب لأبعد حد.'
    },
    {
      name: 'أبو فهد الحربي',
      role: 'مطور عقاري - حي الحمدانية',
      quote: 'نفذوا لي تأسيس عمارة 12 شقة. التزام دقيق بالمواعيد وموازنة للأحمال الكهربائية وميول الصرف ممتازة جداً.'
    },
    {
      name: 'د. خالد الزهراني',
      role: 'مالك عقار - حي الروضة',
      quote: 'شغل نظيف وسرعة استجابة مذهلة. كشفوا عطل السباكة بجهاز إلكتروني دون تكسير زايد. أمانة ومهنية تستحق الثقة.'
    }
  ];

  return (
    <div className="home-page-content">
      {/* ======================================================================
          Hero Section (Full-bleed 100vh)
          ====================================================================== */}
      <section className="hero-fullscreen" style={{ backgroundImage: `url(${imagesConfig.heroBg})` }}>
        <div className="hero-gradient-overlay" />

        <div className="container hero-content-wrap">
          <div className="hero-badge">
            <Award size={16} />
            <span>مقاولات معتمدة بجدة</span>
          </div>

          <h1 className="hero-headline">شغل يبقى 15 سنة</h1>

          <p className="hero-subline">سباكة وكهرباء بضمان مكتوب في جدة</p>

          <div className="hero-cta-buttons">
            <a
              href={getWhatsAppLink("السلام عليكم، أرغب بطلب معاينة واستفسار عن خدمات السباكة والكهرباء مع الضمان")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-hero"
            >
              <MessageCircle size={20} />
              <span>محادثة واتساب</span>
            </a>

            <a href={`tel:${phoneNumber}`} className="btn-call-hero">
              <Phone size={20} />
              <span dir="ltr">اتصال: {phoneNumber}</span>
            </a>
          </div>

          {/* Quick Dedicated Service Links */}
          <div className="hero-subnav-pills" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            <a
              href="/services/plumbing"
              onClick={(e) => handleLinkClick(e, '/services/plumbing')}
              className="hero-subnav-pill"
            >
              <Wrench size={14} />
              <span>السباكة ⬅</span>
            </a>
            <a
              href="/services/electrical"
              onClick={(e) => handleLinkClick(e, '/services/electrical')}
              className="hero-subnav-pill"
            >
              <Zap size={14} />
              <span>الكهرباء ⬅</span>
            </a>
            <a
              href="/services/leak-detection"
              onClick={(e) => handleLinkClick(e, '/services/leak-detection')}
              className="hero-subnav-pill"
            >
              <Search size={14} />
              <span>كشف التسريبات ⬅</span>
            </a>
            <a
              href="/services/construction"
              onClick={(e) => handleLinkClick(e, '/services/construction')}
              className="hero-subnav-pill"
            >
              <Building2 size={14} />
              <span>المقاولات والتشطيب ⬅</span>
            </a>
          </div>

          <div className="hero-scroll-indicator">
            <span className="scroll-text">اكتشف تفاصيل الضمان وجودة العمل</span>
            <div className="scroll-arrow-box">
              <ArrowDown size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          Metrics Strip
          ====================================================================== */}
      <section ref={metricsRef} className="metrics-strip-section">
        <div className="container">
          <div className="metrics-strip-grid">
            <div className="metric-strip-item">
              <div className="metric-num">
                <span>{counts.warranty}</span>
                <span className="metric-unit">سنة</span>
              </div>
              <div className="metric-label">ضمان كتابي رسمي موثق</div>
            </div>

            <div className="metric-divider" />

            <div className="metric-strip-item">
              <div className="metric-num">
                <span>+{counts.projects}</span>
              </div>
              <div className="metric-label">مشروع وفيلا منجزة بجدة</div>
            </div>

            <div className="metric-divider" />

            <div className="metric-strip-item">
              <div className="metric-num">
                <span>{counts.pressure}</span>
                <span className="metric-unit">بار</span>
              </div>
              <div className="metric-label">اختبار ضغط معتمد للشبكات</div>
            </div>

            <div className="metric-divider" />

            <div className="metric-strip-item">
              <div className="metric-num">
                <span>%{counts.sbc}</span>
              </div>
              <div className="metric-label">مطابقة للكود السعودي SBC</div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          Services Section
          ====================================================================== */}
      <section id="services" className="services-warm-section">
        <div className="container">
          <div className="section-head-clean">
            <span className="section-pill">خدماتنا التخصصية</span>
            <h2 className="section-big-title">تنفيذ متقن من التأسيس حتى التشطيب</h2>
            <p className="section-lead-text">
              نقدم حلولاً هندسية متكاملة للفلل والمباني الجديدة بجدة بأيدي كوادر فنية متمرسة وبأعلى مواصفات الجودة.
            </p>
          </div>

          <div className="services-photo-grid">
            {servicesList.map((service) => (
              <div key={service.id} className="service-photo-card">
                <div className="service-photo-wrap">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <span className="service-photo-tag">{service.tag}</span>
                </div>
                <div className="service-info-wrap">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <ul className="service-points">
                    {service.bullets.map((b, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-card-actions">
                    {service.hasDedicatedPage ? (
                      <a
                        href={service.pageUrl}
                        onClick={(e) => handleLinkClick(e, service.pageUrl)}
                        className="service-link-btn primary-service-btn"
                        title={service.pageLabel}
                      >
                        <span>{service.pageLabel}</span>
                        <ArrowLeft size={16} />
                      </a>
                    ) : null}

                    <a
                      href={getWhatsAppLink(`السلام عليكم، أرغب بطلب ومعاينة خدمة: ${service.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="service-link-btn secondary-service-btn"
                    >
                      <span>طلب معاينة سريعة</span>
                      <ArrowLeft size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          "كيف نضمن شغلنا" (Manometer Gauge Simulation)
          ====================================================================== */}
      <section ref={gaugeRef} className="guarantee-gauge-section">
        <div className="container">
          <div className="gauge-layout-grid">
            <div className="gauge-text-side">
              <span className="section-pill">معايير الأمان</span>
              <h2 className="section-big-title">كيف نضمن شغلنا؟ اختبار الضغط بالمانومتر 12 بار</h2>
              <p className="section-lead-text">
                أكبر سبب لتسريبات المياه في المنازل هو عدم فحص اللحامات والمواسير قبل صب الأرضيات.
                نحن لا نسلم أي مشروع إلا بعد ضغط الشبكة بالماء حتى 12 بار لـ 24 ساعة متواصلة، لنضمن لك سلامة المواسير 100%.
              </p>

              <div className="gauge-checkpoints">
                <div className="checkpoint-box">
                  <div className="checkpoint-num">01</div>
                  <div>
                    <h4>ضغط المواسير حتى 12 بار</h4>
                    <p>فحص قوة اللحامات وتحمل الضغوط العالية بدون أي انخفاض في المؤشر.</p>
                  </div>
                </div>

                <div className="checkpoint-box">
                  <div className="checkpoint-num">02</div>
                  <div>
                    <h4>اختبار الميول والانسياب بالماء المكثف</h4>
                    <p>التأكد من خلو خطوط الصرف من أي ارتداد للمياه أو تجمع للرواسب.</p>
                  </div>
                </div>

                <div className="checkpoint-box">
                  <div className="checkpoint-num">03</div>
                  <div>
                    <h4>فحص عوازل وتأريض الكهرباء</h4>
                    <p>موازنة الأحمال على القواطع واختبار قاطع التسريب الأرضي لحماية الأفراد والأجهزة.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Manometer Visual */}
            <div className="gauge-visual-card">
              <div className="manometer-housing">
                <div className="manometer-dial">
                  <svg viewBox="0 0 200 200" className="manometer-svg">
                    <circle cx="100" cy="100" r="85" className="dial-bg-ring" />
                    <circle
                      cx="100"
                      cy="100"
                      r="85"
                      className="dial-safe-arc"
                      strokeDasharray="400"
                      strokeDashoffset={400 - (gaugeValue / 16) * 400}
                    />

                    <text x="50" y="145" className="gauge-tick-label">0</text>
                    <text x="45" y="90" className="gauge-tick-label">4</text>
                    <text x="100" y="45" className="gauge-tick-label">8</text>
                    <text x="155" y="90" className="gauge-tick-label">12</text>
                    <text x="145" y="145" className="gauge-tick-label">16</text>

                    <text x="100" y="115" className="dial-unit-text">BAR / بار</text>
                    <text x="100" y="135" className="dial-certified-text">ضغط معتمد</text>

                    <g
                      className="manometer-needle-group"
                      style={{
                        transform: `rotate(${-120 + (gaugeValue / 16) * 240}deg)`,
                        transformOrigin: '100px 100px',
                        transition: 'transform 2.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                    >
                      <polygon points="98,100 102,100 100,28" className="needle-pointer" />
                      <circle cx="100" cy="100" r="7" className="needle-pin" />
                    </g>
                  </svg>
                </div>

                <div className="manometer-live-badge">
                  <span className="live-pulse-dot" />
                  <span>نتيجة الفحص الحالية: <strong>{gaugeValue} BAR</strong> (ناجح ومعتمد)</span>
                </div>

                <button
                  type="button"
                  className="retest-gauge-btn"
                  onClick={() => {
                    setGaugeValue(0);
                    setTimeout(() => setGaugeValue(12), 300);
                  }}
                >
                  إعادة محاكاة فحص الضغط 🔄
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          Before / After Comparison Slider
          ====================================================================== */}
      <section className="comparison-slider-section">
        <div className="container">
          <div className="section-head-clean">
            <span className="section-pill">المقارنة الصادقة</span>
            <h2 className="section-big-title">الفرق بين الشغل العشوائي والتنفيذ المعتمد</h2>
            <p className="section-lead-text">
              اسحب المؤشر لترى الفرق الحقيقي في تنظيم المسارات، استقامة المواسير بميزان الليزر، والأمان المستدام.
            </p>
          </div>

          <div
            className="slider-interactive-frame"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            <img
              src={imagesConfig.afterWork}
              alt="تنفيذ هندسي معتمد بميزان الليزر"
              className="slider-img slider-img-after"
            />
            <span className="slider-badge badge-after">✔ تنفيذنا الهندسي المعتمد (ليزر ومطابقة SBC)</span>

            <div
              className="slider-before-wrapper"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={imagesConfig.beforeWork}
                alt="شغل عشوائي غير منظم"
                className="slider-img slider-img-before"
              />
              <span className="slider-badge badge-before">❌ الشغل التجاري العشوائي (مخاطر وتسريبات)</span>
            </div>

            <div
              className="slider-handle-line"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="slider-handle-button">
                <span>◀ ▶</span>
              </div>
            </div>
          </div>

          <div className="slider-instruction-note">
            <span>💡 اسحب المقبض يميناً ويساراً أو حرّكه بلمس الشاشة لمشاهدة الفرق</span>
          </div>
        </div>
      </section>

      {/* ======================================================================
          Warranty Certificate
          ====================================================================== */}
      <section className="certificate-section">
        <div className="container">
          <div className="section-head-clean">
            <span className="section-pill">الثقة المطلقة</span>
            <h2 className="section-big-title">شهادة الضمان: عقد رسمي مكتوب يحمي عقارك</h2>
            <p className="section-lead-text">
              لا نكتفي بالوعود الشفهية؛ نسلمك وثيقة ضمان رسمية وموثقة تتضمن شروطاً واضحة وصريحة لسلامة عقارك.
            </p>
          </div>

          <div className="certificate-document-frame">
            <div className="certificate-inner-border">
              <div className="cert-top-row">
                <div className="cert-brand">
                  <ShieldCheck size={32} color="#ea580c" />
                  <div>
                    <h3>مؤسسة سباكة وكهرباء جدة للمقاولات</h3>
                    <span>سجل تجاري وترخيص مهني معتمد</span>
                  </div>
                </div>

                <div className="cert-badge-gold">
                  <Award size={20} />
                  <span>ضمان رسمي 15 سنة</span>
                </div>
              </div>

              <div className="cert-main-title">
                <h2>وثيقة الضمان الإنشائي المعتمد</h2>
                <span className="cert-number">رقم الوثيقة: JED-WR-2026/894</span>
              </div>

              <div className="cert-body-clauses">
                <p>
                  تضمن المؤسسة بموجب هذه الوثيقة سلامة جميع أعمال تمديدات وتأسيسات السباكة والكهرباء المنفذة في العقار
                  ضد أي عيوب مصنعية أو أخطاء في التركيب لمدة <strong>15 عاماً كاملاً</strong> من تاريخ التسليم.
                </p>

                <div className="cert-pillars-grid">
                  <div className="cert-pillar">
                    <CheckCircle2 size={18} color="#16a34a" />
                    <span>مطابقة كاملة لاشتراطات الكود السعودي للبناء (SBC)</span>
                  </div>
                  <div className="cert-pillar">
                    <CheckCircle2 size={18} color="#16a34a" />
                    <span>اجتياز اختبار الضغط الهيدروليكي للمواسير حتى 12 بار</span>
                  </div>
                  <div className="cert-pillar">
                    <CheckCircle2 size={18} color="#16a34a" />
                    <span>تحمل تكلفة الإصلاح وقطع الغيار بنسبة 100% في حال ظهور أي عيب</span>
                  </div>
                  <div className="cert-pillar">
                    <CheckCircle2 size={18} color="#16a34a" />
                    <span>متابعة وصيانة دورية سريعة عبر فريق الطوارئ المعتمد بجدة</span>
                  </div>
                </div>
              </div>

              <div className="cert-footer-row">
                <div className="cert-sign-box">
                  <span>المشرف الفني العام:</span>
                  <strong>م. طارق العتيبي (معتمد)</strong>
                </div>

                <div className="cert-stamp-box">
                  <div className="official-stamp-circle">
                    <span>معتمد</span>
                    <strong>15 YEARS</strong>
                    <span>جدة - المملكة</span>
                  </div>
                </div>

                <div className="cert-sign-box">
                  <span>ختم الاعتماد:</span>
                  <div className="cert-sbc-tag">SBC COMPLIANT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          Work Steps
          ====================================================================== */}
      <section className="steps-warm-section">
        <div className="container">
          <div className="section-head-clean">
            <span className="section-pill">منهجية واضحة</span>
            <h2 className="section-big-title">خطوات العمل: من المعاينة حتى استلام الضمان</h2>
            <p className="section-lead-text">
              مسار عمل منظم ومريح يضمن لك الشفافية في التكلفة والراحة التامة في التنفيذ.
            </p>
          </div>

          <div className="steps-cards-grid">
            {stepsData.map((st, i) => (
              <div key={i} className="step-single-card">
                <div className="step-num-bubble">{st.number}</div>
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          Testimonials
          ====================================================================== */}
      <section className="testimonials-warm-section">
        <div className="container">
          <div className="section-head-clean">
            <span className="section-pill">تجارب واقعية</span>
            <h2 className="section-big-title">ماذا يقول عملاؤنا في أحياء جدة؟</h2>
            <p className="section-lead-text">
              آراء حقيقية من أصحاب الفلل والمشاريع الذين وضعوا ثقتهم في جودتنا.
            </p>
          </div>

          <div className="testimonials-three-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="test-quote-card">
                <div className="test-stars-row">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={16} fill="#ea580c" color="#ea580c" />
                  ))}
                </div>
                <p className="test-quote-text">"{t.quote}"</p>
                <div className="test-author-info">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
