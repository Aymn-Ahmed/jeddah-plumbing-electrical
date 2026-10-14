import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Clock,
  ArrowLeft,
  ChevronDown,
  Layers,
  Activity,
  FileCheck2,
  HelpCircle,
  Sparkles,
  MapPin,
  Check
} from 'lucide-react';
import { imagesConfig } from '../config/images';

export default function PlumbingPage({ onNavigate }) {
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
  // 1. Interactive Stages State
  // --------------------------------------------------------------------------
  const [activeStage, setActiveStage] = useState(0);

  const stagesData = [
    {
      id: '01',
      title: 'المعاينة الميدانية ودراسة المخطط',
      tag: 'مرحلة التخطيط',
      desc: 'فحص المخططات الإنشائية والمعمارية للفيلا أو المشروع، مطابقة مساحات دورات المياه والمطابخ، وتحديد مناسيب الصرف ومداخل التغذية الرئيسية من العداد والخزان.',
      focusPoints: [
        'مطابقة أماكن النوازل ومسارات خطوط المياه المعلقة',
        'تحديد مواقع المحابس الرئيسية وقواطع العزل',
        'التأكد من عدم تعارض المسارات مع الأعمدة والجسور الخرسانية'
      ]
    },
    {
      id: '02',
      title: 'تحديد المناسيب والمسارات بميزان الليزر',
      tag: 'مرحلة الدقة الهندسيّة',
      desc: 'استخدام أجهزة الليزر ثلاثية الأبعاد لتحديد ارتفاعات مخارج المياه بدقة تامة (خلاطات الدش، السخانات، المغاسل، والسيفونات المدفونة) مع ضبط ميول خطوط الصرف.',
      focusPoints: [
        'ضبط ميول مواسير الصرف بنسبة هندسية دقيقة (1.5 إلى 2 سم لكل متر)',
        'تثبيت مناسيب الخلاطات الدفونة لتتناسب مع سمك البلاط النهائي',
        'استقامة رأسية وأفقية لجميع الخطوط بالجدران'
      ]
    },
    {
      id: '03',
      title: 'التمديد الحراري والتثبيت المحكم',
      tag: 'مرحلة التنفيذ',
      desc: 'لحام مواسير البولي بروبلين الحرارية (PPR) بأجهزة لحام معايرة لضمان الاندماج الجزيئي التام، مع تثبيت المواسير بمرابط وقفزات حديدية قوية لمنع أي اهتزازات مستقبلية.',
      focusPoints: [
        'استخدام مواد حرارية معتمدة ومطابقة للمواصفات القياسية',
        'قفيز تثبيت مبطن بمطاط كل 80 سم للتمديد المعلق',
        'عزل خطوط التغذية المعرضة لأشعة الشمس لحماية المياه من الحرارة'
      ]
    },
    {
      id: '04',
      title: 'إجراء الاختبار الهيدروليكي والضغط',
      tag: 'مرحلة الأمان والجودة',
      desc: 'إغلاق نهايات الشبكة بطبات اختبار معتمدة، تعبئة الخطوط بالماء بالكامل للتخلص من الهواء، وضغط الشبكة بطلمبة هيدروليكية حتى 12 بار لـ 24 ساعة متواصلة.',
      focusPoints: [
        'مراقبة ثبات مؤشر المانومتر طوال فترة الاختبار دون أي نزول',
        'فحص بصري دقيق لـ 100% من الوصلات والأكواع والمحابس',
        'توثيق ضغط الاختبار بالفيديو والصور لملف الضمان'
      ]
    },
    {
      id: '05',
      title: 'المراجعة والتسليم لملف الضمان',
      tag: 'مرحلة التسليم والاعتماد',
      desc: 'تصوير وأرشفة كافة المسارات قبل الدفان واللياسة، وحماية فتحات الصرف بسدادات أمان، وتسليم الموقع للمالك مع وثيقة الضمان الإنشائي المعتمدة.',
      focusPoints: [
        'توفير صور توثيقية لمسارات الأنابيب لتفادي الثقب العشوائي لاحقاً',
        'إغلاق جميع الفتحات لمنع دخول بقايا الأسمنت والركام',
        'تسليم شهادة الضمان الرسمية 15 سنة المعتمدة بجدة'
      ]
    }
  ];

  // --------------------------------------------------------------------------
  // 2. Services Explorer Data
  // --------------------------------------------------------------------------
  const [selectedService, setSelectedService] = useState(0);

  const plumbingServices = [
    {
      id: 'roughin',
      name: 'تأسيس السباكة للفلل والعمائر الجديدة',
      badge: 'تأسيس من الصفر',
      shortDesc: 'تنفيذ كامل لشبكات المياه والصرف الصحي وفق الكود السعودي للبناء SBC بنظام التمديد المعلق أو الأرضي.',
      details: 'يشمل تمديد شبكات التغذية الحرارية لمياه الخزانات والمضخات، وتأسيس شبكات الصرف الصحي المعلقة في الأسقف لسهولة الصيانة، وتوزيع المحابس الرئيسية والفرعية مع عزل تام لمسارات الأنابيب.',
      deliverables: ['مخطط مسارات معتمد', 'تثبيت بأحدث موازين الليزر', 'ضمان 15 سنة على التأسيس']
    },
    {
      id: 'drainage',
      name: 'تمديدات شبكات المياه والصرف الصحي',
      badge: 'انسيابية وهندسة',
      shortDesc: 'شبكات تصريف مياه الصرف والأمطار بميول دقيقة مانعة للانسدادات والروائح الكريهة.',
      details: 'نركز على اختيار أقطار المواسير الصحيحة (3 و 4 بوصة) وميول الانحدار المحسوبة بدقة هندسية، مع تأسيس هوايات الصرف (Vent Pipes) لضمان تفريغ الهواء ومنع تفريغ حواجز الروائح في المغاسل.',
      deliverables: ['مزاريب تصريف أمطار للسطح', 'ردادات مانعة لارتداد الصرف', 'غرف تفتيش وتهوية نظامية']
    },
    {
      id: 'finishing',
      name: 'تأسيس وتجهيز الحمامات والمطابخ المودرن',
      badge: 'تشطيب فندقي',
      shortDesc: 'تركيب أنظمة السيفونات المدفونة والكراسي المعلقة والصفايات الذكية المخفية.',
      details: 'تأسيس دقيق للشاورات الفندقية والإنارة المخفية داخل كبائن الشاور، مع وزن شاسيهات السيفونات المدفونة قبل اللياسة لضمان ارتفاع مريح وصلابة قصوى تتحمل حتى 400 كجم.',
      deliverables: ['شاسيهات سيفونات مدفونة متينة', 'صفايات بلاط مخفية ستانلس 304', 'مخارج غسالات وفلاتر مدمجة']
    },
    {
      id: 'pressure',
      name: 'اختبار ضغط الشبكة بالهيدروليك والمانومتر',
      badge: 'أمان مؤكد 100%',
      shortDesc: 'فحص مسبق لجميع اللحامات والمواسير حتى 12 بار لضمان السلامة قبل صب الأرضيات أو اللياسة.',
      details: 'يتم استخدام مضخات ضغط هيدروليكية يدوية وكهربائية مع مانومترات معايرة للتحقق من سلامة اللحامات عند مستويات ضغط تفوق الضغط التشغيلي العادي بـ 3 أضعاف، لاكتشاف أي ثقب أو ضعف ميكروسكوبي فوراً.',
      deliverables: ['شهادة فحص ضغط موثقة', 'مراقبة لـ 24 ساعة', 'إبراء ذمة مرحلي قبل اللياسة']
    },
    {
      id: 'leaks',
      name: 'كشف وإصلاح تسريبات السباكة',
      badge: 'تدخل دقيق',
      shortDesc: 'تحديد أماكن التسريب والأعطال بأجهزة إلكترونية حديثة دون تكسير عشوائي في الجدران أو الأرضيات.',
      details: 'استخدام أجهزة الفحص الصوتي وغاز النيتروجين الآمن لتحديد نقطة الكسر أو تسريب الكوع بدقة عالية، مما يوفر تكاليف التكسير الواسع ويحصر الإصلاح في مساحة بلاطة واحدة فقط.',
      deliverables: ['فحص إلكتروني دقيق', 'إصلاح موضعي سريع', 'اختبار ضغط تأكيدي بعد الإصلاح']
    },
    {
      id: 'renovation',
      name: 'تجديد وصيانة الشبكات القائمة',
      badge: 'تحديث وترميم',
      shortDesc: 'استبدال المواسير المتهالكة وشبكات الحديد القديمة بمواسير حرارية متطورة مقاومة للتكلس.',
      details: 'حلول عملية للمنازل والشقق المأهولة بجدة؛ استبدال خطوط التغذية الضعيفة وحل مشاكل ضعف ضغط المياه بتحديث مضخات الضغط وتركيب صمامات عدم الرجوع وفلاتر المياه المركزية.',
      deliverables: ['تحسين ضغط تدفق المياه', 'مواسير PPR مقاومة للأملاح', 'تنفيذ سريع ونظيف']
    }
  ];

  // --------------------------------------------------------------------------
  // 3. Story-driven Real Work Showcase Data
  // --------------------------------------------------------------------------
  const [activeStory, setActiveStory] = useState(0);

  const realStories = [
    {
      id: 'villa-obhur',
      title: 'تأسيس سباكة فيلا سكنية كاملة بنظام معلق',
      location: 'حي أبحر الشمالية - جدة',
      propertyType: 'فيلا دوبلكس (3 أدوار)',
      scope: 'تأسيس شبكات التغذية الحرارية وتصريف الصرف المعلق لـ 7 دورات مياه ومطبخين وشبكة مياه السطح والخزان.',
      image: imagesConfig.projectVilla || '/images/project_villa.jpg',
      procedure: 'تم تنفيذ كافة التمديدات باستخدام موازين الليزر وتثبيت المواسير بمرابط معزولة كل 80 سم، مع تركيب 7 سيفونات مدفونة وخطوط تهوية مستقلة.',
      result: 'اجتياز اختبار الضغط الهيدروليكي عند 12 بار بنجاح تام وبدون أي انخفاض في المؤشر لمدة 24 ساعة، مع تسليم وثيقة الضمان 15 سنة للمالك.'
    },
    {
      id: 'pressure-rawdah',
      title: 'فحص واختبار هيدروليكي لشبكة تغذية عمارة سكنية',
      location: 'حي الروضة - جدة',
      propertyType: 'عمارة سكنية (10 وحدات)',
      scope: 'فحص ضغط شامل لكافة شبكات التغذية الصاعدة والفرعية قبل أعمال عزل الأرضيات وصب البلاط.',
      image: imagesConfig.plumbingService || '/images/plumbing_gauge.jpg',
      procedure: 'تعبئة الشبكة بالماء وتفريغ الهواء بالكامل، ثم ضغط الخطوط بمانومتر معاير حتى 12 بار وتفقد كافة اللحامات ومحابس الزاوية على مدار 24 ساعة متواصلة.',
      result: 'ثبات المؤشر واستقرار الضغط تماماً، مما أتاح لمقاول العزل استكمال أعماله بضمان هندسي موثق يمنع أي مسؤولية مشتركة لاحقاً.'
    },
    {
      id: 'rehab-hamdaniya',
      title: 'تصحيح وتعديل مسارات سباكة عشوائية لحمام ومطبخ',
      location: 'حي الحمدانية - جدة',
      propertyType: 'ترميم دورة مياه رئيسية ومطبخ',
      scope: 'معالجة مشكلة انسداد مزمنة وروائح كارهة ناتجة عن تمديدات تجارية بميول غير صحيحة.',
      image: imagesConfig.beforeWork || '/images/messy_work.jpg',
      procedure: 'إزالة الخطوط المعيبة، إعادة ضبط ميول مواسير الصرف بنسبة 2 سم لكل متر بميزان الليزر، وتأسيس مخرج هواء مستقل واستبدال خط التغذية بمواسير حرارية معتمدة.',
      result: 'انسياب تام للمياه، واختفاء الروائح المزعجة نهائياً، مع إعادة اختبار الضغط وتسليم العميل تقريراً مصوراً للإصلاح.'
    }
  ];

  // --------------------------------------------------------------------------
  // 4. Interactive Pre-Handover Checklist State
  // --------------------------------------------------------------------------
  const initialChecklist = [
    { id: 1, text: 'استقامة مواسير التغذية والصرف الرأسية والأفقية بميزان الليزر', checked: false },
    { id: 2, text: 'إجراء اختبار الضغط الهيدروليكي بالمانومتر وثبات المؤشر لـ 24 ساعة', checked: false },
    { id: 3, text: 'التحقق من ميول مواسير الصرف الصحي (1.5 - 2 سم لكل متر) لمنع الترسيب', checked: false },
    { id: 4, text: 'تغطية كافة فتحات ومخارج الصرف بطبات حماية محكمة لمنع بقايا الأسمنت', checked: false },
    { id: 5, text: 'تثبيت المواسير المعلقة بمرابط حديدية مبطنة بمطاط كل 80 - 100 سم', checked: false },
    { id: 6, text: 'تصوير وأرشفة مسارات التمديدات بالجدران والأرضيات للرجوع لها مستقبلاً', checked: false }
  ];

  const [checklist, setChecklist] = useState(initialChecklist);

  const toggleChecklistItem = (id) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const checkedCount = checklist.filter((item) => item.checked).length;
  const progressPercent = Math.round((checkedCount / checklist.length) * 100);

  // --------------------------------------------------------------------------
  // 5. Smart WhatsApp Request Form State
  // --------------------------------------------------------------------------
  const [formData, setFormData] = useState({
    propertyType: 'فيلا سكنية',
    serviceType: 'تأسيس سباكة جديد من الصفر',
    neighborhood: 'أبحر الشمالية',
    notes: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formattedMessage = `السلام عليكم ورحمة الله،
أرغب بطلب معاينة واستفسار عن خدمات السباكة المعتمدة:
• نوع العقار: ${formData.propertyType}
• نوع الخدمة: ${formData.serviceType}
• الحي بجدة: ${formData.neighborhood || 'جدة'}
${formData.notes ? `• تفاصيل إضافية: ${formData.notes}` : ''}

يرجى إفادتي بالتكلفة والموعد المتاح للمعاينة مع الضمان الكتابي.`;

    const whatsappUrl = `https://wa.me/${intlPhone}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  // --------------------------------------------------------------------------
  // 6. Plumbing FAQs State
  // --------------------------------------------------------------------------
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'متى يجب إجراء اختبار الضغط لشبكة السباكة؟',
      a: 'يجب إجراء الاختبار فور انتهاء الفني من تمديد كافة مواسير التغذية الحرارية وتركيب طبات الاختبار، وقبل وضع أي دفان أو لياسة أو عزل للأرضيات. يضمن هذا الإجراء كشف أي لحام ضعيف أو خلل في المواسير وهي مكشوفة بالكامل لسهولة معالجتها فوراً.'
    },
    {
      q: 'ما الفرق بين نظام السباكة المعلقة (الشيروفيكس) والسباكة الأرضية المدفونة؟',
      a: 'السباكة المعلقة تمر في سقف الدور الأسفل وتُثبت بمرابط حديدية، وأكبر ميزاتها سهولة صيانتها مستقبلاً دون الحاجة لتكسير بلاط الحمام نهائياً. أما السباكة الأرضية فتمر في دفان البلاط وتحتاج إلى دقة شديدة في الميول والعزل لحماية الأسقف من أي ارتشاح.'
    },
    {
      q: 'هل يمكن فحص وإصلاح تسريبات المياه دون تكسير كامل للبلاط؟',
      a: 'نعم، نستخدم أجهزة فحص إلكترونية حساسة لضغط الخطوط والصوت الهيدروليكي لتحديد النقطة المكسورة أو المتسربة بدقة متناهية، مما يتيح لنا حصر التكسير والإصلاح في مساحة بلاطة واحدة فقط دون تشويه الحمام أو المطبخ.'
    },
    {
      q: 'ما المعلومات والمخططات المطلوبة لتقديم عرض سعر ومقايسة دقيقة؟',
      a: 'لتقديم مقايسة دقيقة، يفضل تزويدنا بالمخطط المعماري يوضح عدد دورات المياه والمطابخ والمطابخ الفرعية وشبكة السطح، أو تحديد موعد لمعاينة العقار ميدانياً لرفع المقاسات وتقديم عرض سعر تفصيلي شامل المواد والمصنعية.'
    },
    {
      q: 'هل تقدمون خدمات الصيانة وتجديد الشبكات للمباني المأهولة؟',
      a: 'نعم، نقدم حلول تجديد وترميم متخصصة للفلل والشقق القائمة في أحياء جدة، بما يشمل استبدال مواسير التغذية المتهالكة، وتركيب مضخات الضغط الذكية، ومعالجة انسدادات الصرف بطرق حديثة تحافظ على نظافة المكان.'
    }
  ];

  return (
    <div className="plumbing-page-wrapper">
      {/* ======================================================================
          1. Hero Section (واجهة السباكة الافتتاحية القوية)
          ====================================================================== */}
      <section
        className="plumbing-hero-section"
        style={{ backgroundImage: `url(${imagesConfig.plumbingService || '/images/plumbing_gauge.jpg'})` }}
      >
        <div className="hero-gradient-overlay" />

        <div className="container plumbing-hero-container">
          {/* Breadcrumb Navigation */}
          <nav className="plumbing-breadcrumb" aria-label="مسار التنقل">
            <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="breadcrumb-home">
              <span>الرئيسية</span>
            </a>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">خدمات السباكة المعتمدة</span>
          </nav>

          <div className="hero-badge plumbing-badge">
            <Wrench size={16} />
            <span>تنفيذ وفق الكود السعودي للبناء SBC • اختبار 12 بار</span>
          </div>

          <h1 className="hero-headline plumbing-title">
            تأسيس وصيانة شبكات السباكة بجدة
          </h1>

          <p className="hero-subline plumbing-desc">
            أعمال هندسية متكاملة للفلل والعمائر بموازين الليزر واختبار ضغط هيدروليكي موثق مع ضمان كتابي رسمي 15 سنة.
          </p>

          <div className="hero-cta-buttons">
            <a
              href={getWhatsAppLink("السلام عليكم، أرغب باستفسار وطلب معاينة لخدمات السباكة مع الضمان")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-hero"
            >
              <MessageCircle size={20} />
              <span>محادثة واتساب للسباكة</span>
            </a>

            <a href={`tel:${phoneNumber}`} className="btn-call-hero">
              <Phone size={20} />
              <span dir="ltr">اتصال مباشر: {phoneNumber}</span>
            </a>
          </div>

          {/* Quick Jump Buttons */}
          <div className="plumbing-hero-anchors">
            <a href="#services-explorer" className="hero-anchor-link">
              <span>استكشف الخدمات</span>
              <ArrowLeft size={14} />
            </a>
            <a href="#execution-stages" className="hero-anchor-link">
              <span>مراحل التنفيذ الهندسي</span>
              <ArrowLeft size={14} />
            </a>
            <a href="#inspection-checklist" className="hero-anchor-link">
              <span>قائمة فحص الاستلام</span>
              <ArrowLeft size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================================
          2. Services Explorer (استكشاف خدمات السباكة)
          ====================================================================== */}
      <section id="services-explorer" className="plumbing-section-wrap bg-subtle">
        <div className="container">
          <div className="section-head-clean">
            <span className="section-pill">دليل الخدمات التخصصية</span>
            <h2 className="section-big-title">استكشف خدمات السباكة حسب احتياج عقارك</h2>
            <p className="section-lead-text">
              اختر الخدمة للاطلاع على المواصفات الفنية المعتمدة ومراحل تسليمها بدقة واحترافية.
            </p>
          </div>

          <div className="plumbing-explorer-layout">
            {/* Services Tabs / List */}
            <div className="explorer-tabs-column">
              {plumbingServices.map((srv, idx) => (
                <button
                  key={srv.id}
                  type="button"
                  className={`explorer-tab-btn ${selectedService === idx ? 'active' : ''}`}
                  onClick={() => setSelectedService(idx)}
                >
                  <div className="tab-btn-header">
                    <span className="tab-badge">{srv.badge}</span>
                    <h4>{srv.name}</h4>
                  </div>
                  <p>{srv.shortDesc}</p>
                </button>
              ))}
            </div>

            {/* Selected Service Detailed View */}
            <div className="explorer-detail-column">
              <div className="explorer-detail-card">
                <div className="detail-card-header">
                  <div className="detail-tag-row">
                    <span className="detail-badge-pill">{plumbingServices[selectedService].badge}</span>
                    <span className="detail-sbc-tag">مطابق لاشتراطات SBC</span>
                  </div>
                  <h3>{plumbingServices[selectedService].name}</h3>
                </div>

                <div className="detail-body-text">
                  <p>{plumbingServices[selectedService].details}</p>
                </div>

                <div className="detail-deliverables-box">
                  <h5>المعايير والمخرجات المضمونة:</h5>
                  <ul className="deliverables-list">
                    {plumbingServices[selectedService].deliverables.map((item, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} color="#ea580c" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="detail-action-footer">
                  <a
                    href={getWhatsAppLink(`السلام عليكم، أرغب بطلب معاينة لخدمة: ${plumbingServices[selectedService].name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-order-btn"
                  >
                    <MessageCircle size={18} />
                    <span>طلب معاينة لهذه الخدمة</span>
                    <ArrowLeft size={16} />
                  </a>

                  <a href={`tel:${phoneNumber}`} className="detail-phone-quick">
                    <Phone size={15} />
                    <span>أو اتصل فوراً: {phoneNumber}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          3. Interactive Execution Journey (رحلة تفاعلية لمراحل التنفيذ)
          ====================================================================== */}
      <section id="execution-stages" className="plumbing-section-wrap">
        <div className="container">
          <div className="section-head-clean">
            <span className="section-pill">المنهجية الهندسية</span>
            <h2 className="section-big-title">رحلة تنفيذ السباكة: 5 مراحل تضمن عملاً يبقى 15 سنة</h2>
            <p className="section-lead-text">
              اضغط على أي مرحلة لاستكشاف المعايير الفنية ونقاط الفحص التي نطبقها في موقعك.
            </p>
          </div>

          <div className="stages-stepper-nav">
            {stagesData.map((stage, idx) => (
              <button
                key={stage.id}
                type="button"
                className={`stage-step-btn ${activeStage === idx ? 'active' : ''}`}
                onClick={() => setActiveStage(idx)}
              >
                <div className="step-circle">{stage.id}</div>
                <div className="step-meta">
                  <span className="step-tag-mini">{stage.tag}</span>
                  <span className="step-title-mini">{stage.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Stage Detailed Panel */}
          <div className="stage-active-panel">
            <div className="stage-panel-grid">
              <div className="stage-panel-info">
                <div className="panel-badge-row">
                  <span className="panel-num">المرحلة {stagesData[activeStage].id}</span>
                  <span className="panel-tag">{stagesData[activeStage].tag}</span>
                </div>
                <h3>{stagesData[activeStage].title}</h3>
                <p className="panel-desc">{stagesData[activeStage].desc}</p>

                <div className="panel-check-card">
                  <h4>أهم نقاط المراجعة في هذه المرحلة:</h4>
                  <ul>
                    {stagesData[activeStage].focusPoints.map((point, pIdx) => (
                      <li key={pIdx}>
                        <Check size={18} color="#16a34a" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="stage-panel-aside">
                <div className="aside-tip-card">
                  <div className="tip-header">
                    <ShieldCheck size={24} color="#ea580c" />
                    <h4>معيار الجودة المطبق</h4>
                  </div>
                  <p>
                    نلتزم بعدم الانتقال من مرحلة إلى أخرى قبل التوثيق الفني ومراجعة المناسيب بالليزر لضمان تسليم خالي من أي عيوب إنشائية.
                  </p>
                  <div className="tip-footer-indicator">
                    <span>نسبة الإتقان المطلوبة: 100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          4. Pressure Testing & Quality Assurance (قسم خاص باختبار الضغط والجودة)
          ====================================================================== */}
      <section className="plumbing-section-wrap bg-dark-warm">
        <div className="container">
          <div className="section-head-clean light-version">
            <span className="section-pill orange">السلامة الإنشائية</span>
            <h2 className="section-big-title">اختبار الضغط الهيدروليكي: خط الدفاع الأول لعقارك</h2>
            <p className="section-lead-text">
              لماذا نصرّ على فحص شبكة التغذية بضغط 12 بار لمدة 24 ساعة متواصلة قبل إغلاق أي جدار أو صب أرضية؟
            </p>
          </div>

          <div className="pressure-cards-grid">
            <div className="pressure-fact-card">
              <div className="fact-icon-wrap">
                <Activity size={24} color="#ea580c" />
              </div>
              <h3>لماذا يتم الاختبار؟</h3>
              <p>
                اللحام الحراري قد يبدو مثالياً بالعين المجردة، لكن ضغط المضخات (الدينمو) المتكرر يكشف أي مسام مجهري. الاختبار بـ 12 بار (3 أضعاف الضغط العادي) يفجر أي نقطة ضعف قبل أن تتغطى بالأسمنت.
              </p>
            </div>

            <div className="pressure-fact-card">
              <div className="fact-icon-wrap">
                <Clock size={24} color="#ea580c" />
              </div>
              <h3>متى يُجرى الاختبار؟</h3>
              <p>
                مباشرة بعد انتهاء تركيب شبكة التغذية كاملة وتركيب طبات الإغلاق، وقبل أي عمل لياسة أو دفان أو عزل للأرضيات، لتكون جميع الوصلات مكشوفة للمعاينة الميدانية.
              </p>
            </div>

            <div className="pressure-fact-card">
              <div className="fact-icon-wrap">
                <Layers size={24} color="#ea580c" />
              </div>
              <h3>ما الذي تتم مراجعته؟</h3>
              <p>
                مراقبة مؤشر المانومتر وثباته التام لـ 24 ساعة، فحص بصري ولمسي لجميع الأكواع واللحامات للتأكد من جفافها 100%، والتأكد من خلو الشبكة من الجيوب الهوائية.
              </p>
            </div>

            <div className="pressure-fact-card">
              <div className="fact-icon-wrap">
                <FileCheck2 size={24} color="#ea580c" />
              </div>
              <h3>لماذا يُوثق الاختبار؟</h3>
              <p>
                توثيق القراءة بالفيديو والصور وإرفاقها بوثيقة الضمان يعطيك دليلاً قاطعاً على سلامة التأسيس، ويحمي حقوقك ويفصل بين مسؤولية السباك ومسؤولية مقاولي التشطيب والبلاط التاليين.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          5. Story-driven Real Work Showcase (عرض الأعمال الحقيقية بطريقة قصصية)
          ====================================================================== */}
      <section className="plumbing-section-wrap">
        <div className="container">
          <div className="section-head-clean">
            <span className="section-pill">واقعية وتوثيق</span>
            <h2 className="section-big-title">قصص من مشاريع وأعمال السباكة بجدة</h2>
            <p className="section-lead-text">
              نماذج واقعية من أعمال التأسيس والفحص الهيدروليكي التي نفذناها في أحياء جدة.
            </p>
          </div>

          <div className="story-showcase-container">
            {/* Story Tabs */}
            <div className="story-nav-bar">
              {realStories.map((story, idx) => (
                <button
                  key={story.id}
                  type="button"
                  className={`story-nav-btn ${activeStory === idx ? 'active' : ''}`}
                  onClick={() => setActiveStory(idx)}
                >
                  <MapPin size={15} />
                  <span>{story.location}</span>
                </button>
              ))}
            </div>

            {/* Active Story Card */}
            <div className="story-display-card">
              <div className="story-image-side">
                <img
                  src={realStories[activeStory].image}
                  alt={realStories[activeStory].title}
                  loading="lazy"
                />
                <span className="story-tag-pill">{realStories[activeStory].propertyType}</span>
              </div>

              <div className="story-content-side">
                <div className="story-header-meta">
                  <span className="story-location-badge">📍 {realStories[activeStory].location}</span>
                  <h3>{realStories[activeStory].title}</h3>
                </div>

                <div className="story-scope-block">
                  <strong>نطاق العمل:</strong>
                  <p>{realStories[activeStory].scope}</p>
                </div>

                <div className="story-procedure-block">
                  <strong>الإجراء الهندسي:</strong>
                  <p>{realStories[activeStory].procedure}</p>
                </div>

                <div className="story-result-box">
                  <div className="result-icon">
                    <CheckCircle2 size={20} color="#16a34a" />
                  </div>
                  <div>
                    <strong>النتيجة والتوثيق:</strong>
                    <p>{realStories[activeStory].result}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          6. Smart Pre-handover Inspection Checklist (قائمة فحص ذكية قبل استلام السباكة)
          ====================================================================== */}
      <section id="inspection-checklist" className="plumbing-section-wrap bg-subtle">
        <div className="container">
          <div className="section-head-clean">
            <span className="section-pill">أداة إرشادية للمالك</span>
            <h2 className="section-big-title">قائمة فحص استلام السباكة قبل إغلاق الجدران</h2>
            <p className="section-lead-text">
              استخدم هذه القائمة التفاعلية للتحقق بنفسك من أهم البنود الهندسية الواجب توفرها قبل السماح باللياسة أو الدفان.
            </p>
          </div>

          <div className="checklist-box-card">
            {/* Progress Bar Header */}
            <div className="checklist-progress-header">
              <div className="progress-labels">
                <span>نسبة استيفاء البنود الأساسية:</span>
                <span className="progress-num">{checkedCount} من {checklist.length} ({progressPercent}%)</span>
              </div>
              <div className="checklist-progress-track">
                <div
                  className="checklist-progress-fill"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Checklist Items */}
            <div className="checklist-items-grid">
              {checklist.map((item) => (
                <div
                  key={item.id}
                  className={`checklist-item-row ${item.checked ? 'checked' : ''}`}
                  onClick={() => toggleChecklistItem(item.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && toggleChecklistItem(item.id)}
                >
                  <div className={`checkbox-custom ${item.checked ? 'active' : ''}`}>
                    {item.checked && <Check size={14} color="#ffffff" />}
                  </div>
                  <span className="item-text">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Status Summary Banner */}
            <div className="checklist-advice-banner">
              {progressPercent === 100 ? (
                <div className="advice-badge success">
                  <CheckCircle2 size={20} />
                  <span>ممتاز! تم استيفاء جميع نقاط الفحص الإرشادية. موقعك جاهز بأمان للمرحلة التالية.</span>
                </div>
              ) : (
                <div className="advice-badge info">
                  <Sparkles size={18} />
                  <span>حدد البنود التي تحققت منها في موقعك للتأكد من اكتمال المعايير الهندسية.</span>
                </div>
              )}
              <small className="checklist-disclaimer">
                * ملاحظة: هذه القائمة أداة إرشادية لمساعدة المالك على المتابعة، وليست بديلاً عن الفحص الفني المتخصص وشهادة الضمان الرسمية.
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          7. Smart Service Request Form (نموذج طلب خدمة ذكي)
          ====================================================================== */}
      <section className="plumbing-section-wrap">
        <div className="container">
          <div className="request-form-card">
            <div className="form-header-side">
              <span className="section-pill">طلب مباشر</span>
              <h2>طلب معاينة أو عرض سعر سباكة</h2>
              <p>
                حدد تفاصيل عقارك والخدمة المطلوبة، وسنجهز لك رسالة واتساب مرتبة بكافة التفاصيل للتواصل المباشر مع الفني المسؤول بجدة.
              </p>

              <div className="form-trust-badges">
                <div className="trust-item">
                  <CheckCircle2 size={16} color="#ea580c" />
                  <span>معاينة ورفع مقاسات ميدانية في كافة أحياء جدة</span>
                </div>
                <div className="trust-item">
                  <CheckCircle2 size={16} color="#ea580c" />
                  <span>مقايسة واضحة بأسعار المصنعية والمواد بدون زيادات خفية</span>
                </div>
                <div className="trust-item">
                  <CheckCircle2 size={16} color="#ea580c" />
                  <span>ضمان كتابي رسمي 15 سنة مطابقة للكود السعودي</span>
                </div>
              </div>
            </div>

            <form className="form-inputs-side" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>نوع العقار:</label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="form-select"
                >
                  <option value="فيلا سكنية">فيلا سكنية</option>
                  <option value="شقة">شقة</option>
                  <option value="عمارة كاملة">عمارة كاملة</option>
                  <option value="مشروع تجاري / معرض">مشروع تجاري / معرض</option>
                  <option value="أخرى">نوع آخر</option>
                </select>
              </div>

              <div className="form-group">
                <label>نوع الخدمة المطلوبة:</label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="form-select"
                >
                  <option value="تأسيس سباكة جديد من الصفر">تأسيس سباكة جديد من الصفر</option>
                  <option value="فحص واختبار ضغط هيدروليكي 12 بار">فحص واختبار ضغط هيدروليكي 12 بار</option>
                  <option value="كشف ومعالجة تسريب مياه">كشف ومعالجة تسريب مياه</option>
                  <option value="تجديد وترميم شبكة سباكة قائمة">تجديد وترميم شبكة سباكة قائمة</option>
                  <option value="تشطيب وتركيب سيفونات مدفونة وأطقم">تشطيب وتركيب سيفونات مدفونة وأطقم</option>
                </select>
              </div>

              <div className="form-group">
                <label>الحي بجدة:</label>
                <select
                  value={formData.neighborhood}
                  onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                  className="form-select"
                >
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
                <label>ملاحظات إضافية أو وصف للعمل (اختياري):</label>
                <textarea
                  rows="3"
                  placeholder="مثال: عدد 4 حمامات ومطبخ، أرغب بتمديد معلق مع اختبار ضغط..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="form-submit-whatsapp-btn">
                <MessageCircle size={20} />
                <span>إرسال الطلب عبر الواتساب فوراً</span>
              </button>

              <div className="form-direct-phone-line">
                <span>أو للتواصل السريع هاتفياً: </span>
                <a href={`tel:${phoneNumber}`} dir="ltr"><strong>{phoneNumber}</strong></a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ======================================================================
          8. Plumbing FAQs (الأسئلة الشائعة الخاصة بالسباكة)
          ====================================================================== */}
      <section className="plumbing-section-wrap bg-subtle">
        <div className="container">
          <div className="section-head-clean">
            <span className="section-pill">إجابات واضحة</span>
            <h2 className="section-big-title">أسئلة شائعة حول خدمات وضمان السباكة</h2>
            <p className="section-lead-text">
              إجابات فنية صريحة وموثوقة تساعدك على اتخاذ القرار الصحيح لتأسيس وصيانة منزلك.
            </p>
          </div>

          <div className="plumbing-faq-accordion">
            {faqs.map((faq, index) => (
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
          9. Call To Action (دعوة ختامية للتواصل قبل الفوتر)
          ====================================================================== */}
      <section className="plumbing-cta-section">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-banner-content">
              <span className="cta-badge">ضمان كتابي 15 سنة • معتمد بجدة</span>
              <h2>جاهز لتأسيس أو صيانة شبكة السباكة لعقارك بأعلى معايير الأمان؟</h2>
              <p>
                فريقنا الهندسي جاهز لمعاينة موقعك وتقديم مقايسة تفصيلية واختبار ضغط هيدروليكي معتمد.
              </p>
              <div className="cta-buttons-row">
                <a
                  href={getWhatsAppLink("السلام عليكم، أرغب بحجز موعد لمعاينة سباكة العقار وطلب مقايسة")}
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
