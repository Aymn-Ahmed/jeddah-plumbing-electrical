import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Building2,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  ChevronDown,
  HelpCircle,
  MapPin,
  Check,
  CalendarCheck
} from 'lucide-react';
import { imagesConfig } from '../config/images';

export default function ConstructionPage({ onNavigate }) {
  const phoneNumber = "0555046951";
  const intlPhone = "966555046951";

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
  // 1. Interactive Project Roadmap Stepper
  // --------------------------------------------------------------------------
  const [activeStage, setActiveStage] = useState(0);

  const projectStages = [
    {
      id: '01',
      title: 'دراسة المخططات الهندسية والمقايسة',
      phaseTag: 'مرحلة الاعتماد والتخطيط',
      desc: 'فحص المخططات الإنشائية والمعمارية، حصر كميات المواد الأصلية (مواسير PPR، كابلات الفنار، الطبالين)، وصياغة عقد مقاولة رسمي يربط الدفعات بنسب الإنجاز.',
      deliverables: [
        'جدول كميات تفصيلي واضح بدون أي تكاليف مخفية',
        'عقد رسمي موثق بسجل المؤسسة وضمان 15 سنة',
        'خطة زمنية متفق عليها للتنفيذ الميداني'
      ]
    },
    {
      id: '02',
      title: 'تأسيس شبكات الصبات والعظم الإنشائي',
      phaseTag: 'مرحلة العظم والصبات',
      desc: 'زرع جلبات الصرف في الجسور الساقطة والكمرات قبل الصب، وتمديد خراطيم الكهرباء في أسقف الهوردي بالتنسيق التام مع مهندس الموقع والمشرف الإنشائي.',
      deliverables: [
        'حماية خرسانة المبنى من أي تكسير لاحق',
        'تثبيت مناسيب النوازل والصفايات الرئيسية',
        'مراعاة اشتراطات الكود السعودي للبناء SBC'
      ]
    },
    {
      id: '03',
      title: 'تمديدات الجدران والشبكات المعلقة',
      phaseTag: 'مرحلة التمديد والتثبيت',
      desc: 'شق الجدران وتثبيت علب الكهرباء بموازين الليزر، وتمديد شبكات السباكة المعلقة في أسقف الأدوار السفلية وتثبيتها بقفزات حديدية معزولة كل 80 سم.',
      deliverables: [
        'استقامة ليزرية لجميع خطوط التغذية والصرف',
        'سحب أسلاك القوى والإنارة بأقطار مطابقة للأحمال',
        'عزل تام لخطوط التيار الخفيف عن خطوط الكهرباء'
      ]
    },
    {
      id: '04',
      title: 'شاسيهات السيفونات واختبارات الضغط',
      phaseTag: 'مرحلة الفحص قبل اللياسة',
      desc: 'تركيب شاسيهات السيفونات المدفونة (جروهي/جبريت) وضبط ارتفاعاتها بدقة، وضغط شبكات المياه بـ 12 بار لـ 24 ساعة، وفحص عزل الكهرباء بالميجر.',
      deliverables: [
        'اجتياز اختبار الضغط الهيدروليكي 12 بار',
        'توثيق سلامة اللحامات قبل صب أرضيات الحمامات',
        'شهادة فحص مرحلية لإبراء الذمة قبل اللياسة والبلاط'
      ]
    },
    {
      id: '05',
      title: 'التشطيب النهائي والإنارة وتركيب الأطقم',
      phaseTag: 'مرحلة التشطيب الفندقي',
      desc: 'تركيب الأطقم الصحية والخلاطات المدفونة، وزجاج الشاور السيكوريت، وتجميع الطبالين الرئيسية بموازنة أحمال 3 فاز، وتركيب مفاتيح الإنارة الذكية.',
      deliverables: [
        'تشطيب فندقي متقن ومظهر ديكوري فاخر',
        'موازنة تامة للأمبير بين الفازات R-S-T',
        'اختبار تدفق المياه وقوة الشفط وتصريف الأمطار'
      ]
    },
    {
      id: '06',
      title: 'التسليم النهائي وتفعيل وثيقة الضمان',
      phaseTag: 'التسليم والضمان 15 سنة',
      desc: 'تسليم الموقع للمالك جاهزاً للاستخدام، وتسليمه ألبوماً رقمياً لمسارات التمديدات بالجدران، وتقديم وثيقة الضمان الإنشائي المعتمدة بجدة.',
      deliverables: [
        'وثيقة ضمان كتابي رسمي معتمد 15 سنة',
        'مخطط أرشيفي لمسارات المواسير والأسلاك',
        'خدمة دعم وصيانة ومتابعة دورية'
      ]
    }
  ];

  // --------------------------------------------------------------------------
  // 2. Contracting Portfolio Case Studies
  // --------------------------------------------------------------------------
  const [activeProject, setActiveProject] = useState(0);

  const contractingProjects = [
    {
      id: 'villas-complex',
      title: 'مقاولات تأسيس وتشطيب مجمع 4 فلل مودرن - حي أبحر الشمالية',
      propertyType: 'مشروع مجمع فلل سكنية خاصة',
      scope: 'تنفيذ كامل لأعمال السباكة والكهرباء والتشطيب الفندقي من مرحلة العظم وحتى تسليم المفتاح.',
      image: imagesConfig.roughinService || '/images/project_villa.jpg',
      procedure: 'تأسيس شبكات سباكة معلقة بالكامل لـ 24 دورة مياه و4 مطابخ رئيسية، وسحب كابلات الفنار وتجميع 8 طبالين 3 فاز بموازنة أحمال دقيقة.',
      result: 'تسليم المشروع في الوقت المحدد واجتياز اختبارات الضغط 12 بار بنجاح تام، مع تسليم وثيقة الضمان الإنشائي 15 سنة للمالك.'
    },
    {
      id: 'apartments-building',
      title: 'تأسيس مقاولات عمارة سكنية 12 شقة تمليك - حي الحمدانية',
      propertyType: 'عمارة سكنية استثمارية (6 أدوار)',
      scope: 'تنفيذ شبكات الصرف الرئيسية، النوازل المعلقة، غرف العدادات، وتأسيس لوحات الشقق المستقلة.',
      image: imagesConfig.electricalService || '/images/hero.jpg',
      procedure: 'استخدام مواسير الصرف كلاس 5 المقاومة للصدمات، وتأسيس شبكات تأريض مستقلة لكل شقة مع قواطع حماية تفاضلية.',
      result: 'اعتماد الأعمال من المشرف الهندسي للمشروع وربط التيار النظامي بدون أي ملاحظات مع مطابقة الكود السعودي SBC.'
    },
    {
      id: 'luxury-finishing',
      title: 'تشطيب وتأهيل قصر سكني ودورات مياه فندقية - حي الروضة',
      propertyType: 'فيلا قصر فاخرة',
      scope: 'تركيب أنظمة سيفونات دفن ألمانية، شاورات مطرية مخفية، وليد بروفايل ديكوري مدمج.',
      image: imagesConfig.finishingService || '/images/finishing.jpg',
      procedure: 'عزل فندقي مزدوج لأرضيات الشاور بمواد إيبوكسية ألمانية، وتركيب صفايات بلاط ستانلس 304 مخفية وتنسيق مفاتيح الإنارة الذكية.',
      result: 'مستوى تشطيب راقٍ يلبي تطلعات المالك مع ضمان كتابي شامل لكافة التركيبات والمواسير.'
    }
  ];

  // --------------------------------------------------------------------------
  // 3. Smart Quotation Request Form State
  // --------------------------------------------------------------------------
  const [formData, setFormData] = useState({
    projectType: 'فيلا خاصة',
    projectPhase: 'مرحلة العظم الإنشائي',
    neighborhood: 'حي الأجاويد (المركز الرئيسي)',
    notes: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formattedMessage = `السلام عليكم ورحمة الله،
أرغب بطلب مقايسة وعرض سعر مقاولة متكاملة (سباكة وكهرباء وتشطيب):
• نوع المشروع: ${formData.projectType}
• المرحلة الحالية للعقار: ${formData.projectPhase}
• الحي بجدة: ${formData.neighborhood || 'جدة'}
${formData.notes ? `• تفاصيل إضافية: ${formData.notes}` : ''}

يرجى التواصل لترتيب موعد معاينة المخططات والموقع وتقديم عرض السعر وجدول الدفعات.`;

    const whatsappUrl = `https://wa.me/${intlPhone}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  // --------------------------------------------------------------------------
  // 4. Construction FAQs State
  // --------------------------------------------------------------------------
  const [openFaq, setOpenFaq] = useState(0);

  const constructionFaqs = [
    {
      q: 'كيف يتم تسعير مقاولات السباكة والكهرباء (بالمتر أم بالنقطة أم مقطوعية)؟',
      a: 'تعتمد طريقتنا على المقايسة الشاملة (المقطوعية الموثقة بجداول كميات)، حيث نقوم بدراسة المخطط المعماري وحصر كافة غرف العقار والحمامات والمطابخ والنقاط المطلوبة، ونقدم سعراً نهائياً ثابتاً ومفصلاً يوضح تكلفة المصنعية وتكلفة المواد الأصلية بدون أي زيادات مفاجئة لاحقاً.'
    },
    {
      q: 'هل ترتبط الدفعات المالية في العقد بنسب الإنجاز الفعلي؟',
      a: 'نعم بكل تأكيد؛ يحتوي العقد الرسمي على جدول دفعات مرحلي واضح يرتبط باستلام كل مرحلة هندسياً (دفعة عند توقيع العقد وبدء التأسيس، دفعة بعد انتهاء التمديدات واختبار الضغط 12 بار، دفعة بعد سحب الكابلات وتركيب الطبالين، ودفعة ختامية عند التسليم النهائي بوثيقة الضمان).'
    },
    {
      q: 'هل يشمل نشاطكم أعمال البناء العظم والخرسانات؟',
      a: 'نحن مؤسسة متخصصة في المقاولات الكهروميكانيكية (MEP) وتشطيباتها؛ أي أننا نتولى تأسيس وتمديد واختبار وتشطيب شبكات السباكة والكهرباء والإنارة الحديثة والعزل المائي لشبكات المياه، ولا نقوم بأعمال صب الخرسانات أو بناء البلوك، مما يمنحنا تركيزاً واحترافية مطلقة في جودة التأسيسات.'
    },
    {
      q: 'هل أعمالكم مطابقة لاشتراطات كود البناء السعودي (SBC)؟',
      a: 'نعم، جميع مخططات التوزيع، وسماكات الكابلات، وميول خطوط الصرف، واختبارات الضغط بالمانومتر تُنفذ طبقاً لاشتراطات الكود السعودي للبناء للمباني السكنية، مما يضمن لك سهولة إصدار شهادات إشغال المبنى واعتماد التراخيص.'
    },
    {
      q: 'ما المدة المعتادة لتأسيس سباكة وكهرباء فيلا سكنية دورين وملحق؟',
      a: 'تستغرق مرحلة التأسيسات الميدانية (حفر المسارات، تمديد الخراطيم، سحب الأسلاك، وتمديد شبكات الصرف واختبار الضغط 12 بار) عادة ما بين 25 إلى 40 يوم عمل بحسب مساحة الفيلا وعدد دورات المياه وجاهزية الموقع.'
    }
  ];

  return (
    <div className="construction-page-wrapper">
      {/* ======================================================================
          1. Hero Section (واجهة المقاولات والتشطيب)
          ====================================================================== */}
      <section
        className="plumbing-hero-section"
        style={{ backgroundImage: `url(${imagesConfig.heroBg || '/images/project_villa.jpg'})` }}
      >
        <div className="hero-gradient-overlay" />

        <div className="container plumbing-hero-container">
          <nav className="plumbing-breadcrumb" aria-label="مسار التنقل">
            <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="breadcrumb-home">
              <span>الرئيسية</span>
            </a>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">مقاولات التأسيس والتشطيب</span>
          </nav>

          <div className="hero-badge" style={{ background: 'rgba(234, 88, 12, 0.25)', border: '1px solid rgba(234, 88, 12, 0.45)', color: '#FFEDD5' }}>
            <Building2 size={16} />
            <span>عقود رسمية موثقة • إشراف فني • ضمان كتابي 15 سنة</span>
          </div>

          <h1 className="hero-headline plumbing-title">
            مقاولات التأسيس والتشطيب المتكامل للفلل والعمائر بجدة
          </h1>

          <p className="hero-subline plumbing-desc">
            تنفيذ شامل لمشاريع السباكة والكهرباء والتشطيب الفندقي من مرحلة العظم وحتى تسليم المفتاح وفق الكود السعودي للبناء SBC.
          </p>

          <div className="hero-cta-buttons">
            <a
              href={getWhatsAppLink("السلام عليكم، أرغب بطلب مقايسة وعرض سعر لمشروع مقاولة تأسيس وتشطيب")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-hero"
            >
              <MessageCircle size={20} />
              <span>طلب عرض سعر عبر الواتساب</span>
            </a>

            <a href={`tel:${phoneNumber}`} className="btn-call-hero">
              <Phone size={20} />
              <span dir="ltr">اتصال مباشر: {phoneNumber}</span>
            </a>
          </div>

          <div className="plumbing-hero-anchors">
            <a href="#work-scope" className="hero-anchor-link">
              <span>نطاق الأعمال المشمولة</span>
              <ArrowLeft size={14} />
            </a>
            <a href="#project-roadmap" className="hero-anchor-link">
              <span>مراحل المشروع من العظم للتسليم</span>
              <ArrowLeft size={14} />
            </a>
            <a href="#contracting-portfolio" className="hero-anchor-link">
              <span>سجل المشاريع المنفذة</span>
              <ArrowLeft size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================================
          2. Scope of Work (نطاق الأعمال المعتمد والمشمول)
          ====================================================================== */}
      <section id="work-scope" className="plumbing-section-wrap bg-subtle">
        <div className="container">
          <div className="section-head-clean">
            <span className="section-pill">الشفافية الهندسية</span>
            <h2 className="section-big-title">نطاق الأعمال: تخصص دقيق يضمن أعلى درجات الإتقان</h2>
            <p className="section-lead-text">
              نوضح بكل وضوح مجالات تخصصنا المعتمدة لضمان تركيز فريقنا الهندسي على ما نتقنه 100%.
            </p>
          </div>

          <div className="scope-comparison-grid">
            {/* Included Scope */}
            <div className="scope-box included">
              <div className="scope-header">
                <CheckCircle2 size={24} color="#16a34a" />
                <h3>الأعمال المشمولة في عقود مقاولاتنا:</h3>
              </div>
              <ul className="scope-list">
                <li>
                  <Check size={18} color="#16a34a" />
                  <span><strong>تأسيس السباكة وشبكات الصرف:</strong> خطوط التغذية الحرارية وتصريف الصرف المعلق والأسطح والخزانات.</span>
                </li>
                <li>
                  <Check size={18} color="#16a34a" />
                  <span><strong>تأسيس وتمديد شبكات الكهرباء:</strong> سحب كابلات الفنار، موازنة الأحمال، وتجميع الطبالين الرئيسية والفرعية.</span>
                </li>
                <li>
                  <Check size={18} color="#16a34a" />
                  <span><strong>الفحوصات الهيدروليكية والميجر:</strong> اختبار ضغط السباكة بـ 12 بار وفحص عزل الكابلات والتأريض.</span>
                </li>
                <li>
                  <Check size={18} color="#16a34a" />
                  <span><strong>التشطيب الفندقي لدورات المياه:</strong> تركيب شاسيهات السيفونات المدفونة، الكراسي المعلقة، والإنارة الحديثة.</span>
                </li>
                <li>
                  <Check size={18} color="#16a34a" />
                  <span><strong>العقد والضمان الرسمي:</strong> إشراف فني مباشر وضمان كتابي 15 سنة على سلامة التأسيسات.</span>
                </li>
              </ul>
            </div>

            {/* Excluded Scope / Honest Boundaries */}
            <div className="scope-box excluded">
              <div className="scope-header">
                <XCircle size={24} color="#78716c" />
                <h3>أعمال خارج نطاق مقاولاتنا التخصصية:</h3>
              </div>
              <ul className="scope-list">
                <li>
                  <span style={{ color: '#78716C', fontWeight: 800 }}>✖</span>
                  <span><strong>أعمال صب الخرسانات وبناء العظم:</strong> لا نقوم بأعمال القواعد أو الأعمدة الخرسانية أو بناء الجدران.</span>
                </li>
                <li>
                  <span style={{ color: '#78716C', fontWeight: 800 }}>✖</span>
                  <span><strong>أعمال اللياسة والبلاط العام:</strong> نركز على التأسيسات الكهروميكانيكية وننسق مع مقاولي البلاط لضبط المناسيب.</span>
                </li>
                <li>
                  <span style={{ color: '#78716C', fontWeight: 800 }}>✖</span>
                  <span><strong>أعمال النجارة والألمنيوم العامة:</strong> نختص بالسباكة والكهرباء والإنارة دون التدخل في الأبواب والشبابيك.</span>
                </li>
              </ul>
              <div style={{ marginTop: '20px', padding: '12px', background: '#F5EFEB', borderRadius: '8px', fontSize: '0.85rem', color: '#78716C', lineHeight: '1.6' }}>
                💡 <em>تركيزنا الكامل على الأنظمة الكهروميكانيكية (MEP) والتشطيب المرتبط بها هو السبب وراء قدرتنا على تقديم ضمان كتابي حقيقي 15 سنة.</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          3. Project Stages Roadmap (مراحل المشروع من العظم للتسليم)
          ====================================================================== */}
      <section id="project-roadmap" className="plumbing-section-wrap">
        <div className="container">
          <div className="section-head-clean">
            <span className="section-pill">مسار العمل المنظم</span>
            <h2 className="section-big-title">مخطط مراحل تنفيذ المشروع: من المخططات حتى تسليم المفتاح</h2>
            <p className="section-lead-text">
              مسار عمل هندسي دقيق يضمن التزامنا بالمواعيد وبأعلى مواصفات الجودة المعتمدة.
            </p>
          </div>

          <div className="stages-stepper-nav" style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
            {projectStages.map((stage, idx) => (
              <button
                key={stage.id}
                type="button"
                className={`stage-step-btn ${activeStage === idx ? 'active' : ''}`}
                onClick={() => setActiveStage(idx)}
              >
                <div className="step-circle">{stage.id}</div>
                <div className="step-meta">
                  <span className="step-tag-mini">{stage.phaseTag.split(' ')[0]}</span>
                  <span className="step-title-mini">{stage.title.split(' ')[0]} {stage.title.split(' ')[1]}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="stage-active-panel">
            <div className="stage-panel-grid">
              <div className="stage-panel-info">
                <div className="panel-badge-row">
                  <span className="panel-num">المرحلة {projectStages[activeStage].id}</span>
                  <span className="panel-tag">{projectStages[activeStage].phaseTag}</span>
                </div>
                <h3>{projectStages[activeStage].title}</h3>
                <p className="panel-desc">{projectStages[activeStage].desc}</p>

                <div className="panel-check-card">
                  <h4>مخرجات وضمانات هذه المرحلة للمالك:</h4>
                  <ul>
                    {projectStages[activeStage].deliverables.map((item, dIdx) => (
                      <li key={dIdx}>
                        <Check size={18} color="#16a34a" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="stage-panel-aside">
                <div className="aside-tip-card">
                  <div className="tip-header">
                    <CalendarCheck size={24} color="#ea580c" />
                    <h4>جدول الدفعات المرتبط</h4>
                  </div>
                  <p>
                    ترتبط دفعاتك المالية باستلامك الفعلي لكل مرحلة بعد التحقق من نتائج الاختبارات الميدانية ومطابقة المخطط.
                  </p>
                  <div className="tip-footer-indicator">
                    <span>الضمان: 15 سنة رسمي موثق</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          4. Contracting Portfolio (سجل المشاريع المنفذة)
          ====================================================================== */}
      <section id="contracting-portfolio" className="plumbing-section-wrap bg-dark-warm">
        <div className="container">
          <div className="section-head-clean light-version">
            <span className="section-pill orange">مشاريع منجزة بجدة</span>
            <h2 className="section-big-title">قصص نجاح من مشاريع المقاولات المنفذة</h2>
            <p className="section-lead-text">
              نماذج واقعية لمشاريع وفلل سكنية قمنا بتأسيسها وتشطيبها بالكامل في أحياء جدة.
            </p>
          </div>

          <div className="story-showcase-container">
            <div className="story-nav-bar">
              {contractingProjects.map((proj, idx) => (
                <button
                  key={proj.id}
                  type="button"
                  className={`story-nav-btn ${activeProject === idx ? 'active' : ''}`}
                  onClick={() => setActiveProject(idx)}
                >
                  <MapPin size={15} />
                  <span>{proj.title.split('-')[1]?.trim() || proj.title}</span>
                </button>
              ))}
            </div>

            <div className="story-display-card" style={{ background: '#FFFFFF', color: '#1C1917' }}>
              <div className="story-image-side">
                <img
                  src={contractingProjects[activeProject].image}
                  alt={contractingProjects[activeProject].title}
                  loading="lazy"
                />
                <span className="story-tag-pill">{contractingProjects[activeProject].propertyType}</span>
              </div>

              <div className="story-content-side">
                <div className="story-header-meta">
                  <span className="story-location-badge">📍 تنفيذ مقاولات معتمد بجدة</span>
                  <h3>{contractingProjects[activeProject].title}</h3>
                </div>

                <div className="story-scope-block">
                  <strong>نطاق المقاولة المنجز:</strong>
                  <p>{contractingProjects[activeProject].scope}</p>
                </div>

                <div className="story-procedure-block">
                  <strong>المنهجية الهندسية المطبقة:</strong>
                  <p>{contractingProjects[activeProject].procedure}</p>
                </div>

                <div className="story-result-box">
                  <div className="result-icon">
                    <CheckCircle2 size={20} color="#16a34a" />
                  </div>
                  <div>
                    <strong>نتيجة التسليم والضمان:</strong>
                    <p>{contractingProjects[activeProject].result}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          5. Smart Quotation Request Form (طلب مقايسة وعرض سعر)
          ====================================================================== */}
      <section className="plumbing-section-wrap bg-subtle">
        <div className="container">
          <div className="request-form-card">
            <div className="form-header-side">
              <span className="section-pill">عرض سعر رسمي</span>
              <h2>طلب مقايسة وعرض سعر مشروع</h2>
              <p>
                حدد طبيعة مشروعك والمرحلة الحالية، وسنقوم بالتواصل معك لمراجعة المخططات الهندسية وتقديم مقايسة تفصيلية واضحة وجدول زمني للإنجاز.
              </p>

              <div className="form-trust-badges">
                <div className="trust-item">
                  <CheckCircle2 size={16} color="#ea580c" />
                  <span>عقد رسمي موثق بسجل تجاري وترخيص مهني معتمد</span>
                </div>
                <div className="trust-item">
                  <CheckCircle2 size={16} color="#ea580c" />
                  <span>دفعات مالية مرتبطة بنسب الإنجاز الفعلي لكل مرحلة</span>
                </div>
                <div className="trust-item">
                  <CheckCircle2 size={16} color="#ea580c" />
                  <span>ضمان كتابي رسمي 15 سنة مطابق للكود السعودي SBC</span>
                </div>
              </div>

              <div style={{ marginTop: '24px' }}>
                <span style={{ fontSize: '0.85rem', color: '#78716C', display: 'block', marginBottom: '8px' }}>صفحات الخدمات المستقلة المرتبطة:</span>
                <div className="cross-services-row">
                  <a href="/services/plumbing" onClick={(e) => handleLinkClick(e, '/services/plumbing')} className="cross-service-link">
                    🔧 صفحة خدمات السباكة المعتمدة
                  </a>
                  <a href="/services/electrical" onClick={(e) => handleLinkClick(e, '/services/electrical')} className="cross-service-link">
                    ⚡ صفحة خدمات تمديد الكهرباء
                  </a>
                </div>
              </div>
            </div>

            <form className="form-inputs-side" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>نوع المشروع:</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="form-select"
                >
                  <option value="فيلا سكنية خاصة">فيلا سكنية خاصة</option>
                  <option value="عمارة شقق تمليك">عمارة شقق تمليك</option>
                  <option value="مجمع فلل سكنية">مجمع فلل سكنية</option>
                  <option value="مبنى تجاري / مكاتب">مبنى تجاري / مكاتب</option>
                  <option value="ترميم وتأهيل عقار كامل">ترميم وتأهيل عقار كامل</option>
                </select>
              </div>

              <div className="form-group">
                <label>المرحلة الحالية للعقار:</label>
                <select
                  value={formData.projectPhase}
                  onChange={(e) => setFormData({ ...formData, projectPhase: e.target.value })}
                  className="form-select"
                >
                  <option value="مرحلة المخططات والتراخيص">مرحلة المخططات والتراخيص</option>
                  <option value="مرحلة العظم الإنشائي">مرحلة العظم الإنشائي</option>
                  <option value="مرحلة التأسيسات والتمديد الميداني">مرحلة التأسيسات والتمديد الميداني</option>
                  <option value="مرحلة التشطيب النهائي">مرحلة التشطيب النهائي</option>
                </select>
              </div>

              <div className="form-group">
                <label>الحي بجدة:</label>
                <select
                  value={formData.neighborhood}
                  onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                  className="form-select"
                >
                  <option value="حي الأجاويد (المركز الرئيسي)">حي الأجاويد (المركز الرئيسي)</option>
                  <option value="أبحر الشمالية">أبحر الشمالية</option>
                  <option value="الحمدانية">الحمدانية</option>
                  <option value="الروضة">الروضة</option>
                  <option value="الصفا">الصفا</option>
                  <option value="المحمدية">المحمدية</option>
                  <option value="السامر">السامر</option>
                  <option value="المرجان">المرجان</option>
                  <option value="حي آخر بجدة">حي آخر بجدة</option>
                </select>
              </div>

              <div className="form-group">
                <label>ملاحظات إضافية أو تفاصيل المشروع (اختياري):</label>
                <textarea
                  rows="3"
                  placeholder="مثال: عدد 3 أدوار، 6 دورات مياه، أرغب بتمديدات معلقة وموازنة أحمال كاملة..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="form-submit-whatsapp-btn">
                <MessageCircle size={20} />
                <span>إرسال تفاصيل المشروع عبر الواتساب</span>
              </button>

              <div className="form-direct-phone-line">
                <span>أو للاتصال الفوري بإدارة المشاريع: </span>
                <a href={`tel:${phoneNumber}`} dir="ltr"><strong>{phoneNumber}</strong></a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ======================================================================
          6. Construction FAQs (الأسئلة الشائعة للمقاولات)
          ====================================================================== */}
      <section className="plumbing-section-wrap">
        <div className="container">
          <div className="section-head-clean">
            <span className="section-pill">إجابات استشارية</span>
            <h2 className="section-big-title">أسئلة شائعة حول مقاولات التأسيس والتشطيب</h2>
            <p className="section-lead-text">
              معلومات واضحة وشفافة حول العقود، الأسعار، ومواعيد الإنجاز لمشروعك.
            </p>
          </div>

          <div className="plumbing-faq-accordion">
            {constructionFaqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-accordion-item ${openFaq === index ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  aria-expanded={openFaq === index}
                >
                  <div className="faq-q-text">
                    <HelpCircle size={18} color="#ea580c" />
                    <span>{faq.q}</span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`faq-chevron ${openFaq === index ? 'rotate' : ''}`}
                  />
                </button>

                {openFaq === index && (
                  <div className="faq-answer-panel">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          7. Call To Action (دعوة ختامية للتواصل)
          ====================================================================== */}
      <section className="plumbing-cta-section">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-banner-content">
              <span className="cta-badge">عقود رسمية • كود SBC • ضمان كتابي 15 سنة</span>
              <h2>هل تخطط لبدء تأسيس أو تشطيب عقارك وتبحث عن مقاول موثوق بجدة؟</h2>
              <p>
                فريقنا الهندسي مستعد لمراجعة مخططاتك وتقديم استشارة فنية مجانية ومقايسة تفصيلية تضمن لك راحة البال.
              </p>
              <div className="cta-buttons-row">
                <a
                  href={getWhatsAppLink("السلام عليكم، أرغب بطلب موعد لمناقشة مخططات مشروعي وطلب مقايسة مقاولة")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn-whatsapp"
                >
                  <MessageCircle size={20} />
                  <span>تواصل عبر الواتساب الآن</span>
                </a>

                <a href={`tel:${phoneNumber}`} className="cta-btn-call">
                  <Phone size={20} />
                  <span dir="ltr">اتصال مباشر: {phoneNumber}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
