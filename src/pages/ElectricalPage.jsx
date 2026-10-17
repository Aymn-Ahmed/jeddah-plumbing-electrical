import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Zap,
  CheckCircle2,
  ShieldAlert,
  ArrowLeft,
  ChevronDown,
  Layers,
  Activity,
  FileCheck2,
  HelpCircle,
  Sparkles,
  MapPin,
  Check,
  Maximize2,
  X
} from 'lucide-react';
import { imagesConfig } from '../config/images';

export default function ElectricalPage({ onNavigate }) {
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
  // 1. Interactive Stages State
  // --------------------------------------------------------------------------
  const [activeStage, setActiveStage] = useState(0);

  const electricalStages = [
    {
      id: '01',
      title: 'دراسة مخطط الأحمال ومسارات التوزيع',
      tag: 'التخطيط الهندسي',
      desc: 'مراجعة المخطط الكهربائي المعتمد، حصر نقاط الإنارة والأفياش والمكيفات، وحساب الحمل الإجمالي بالأمبير لكل دور لتحديد مقاطع الكابلات الرئيسية.',
      focusPoints: [
        'مطابقة أماكن الطبالين مع سهولة الوصول ومسارات التغذية الصاعدة',
        'تحديد مواقع أفياش المطبخ والأفران وسخانات المياه المنفصلة',
        'عزل خطوط التيار الخفيف (الإنترنت، الكاميرات، الإنتركم) عن خطوط القوى'
      ]
    },
    {
      id: '02',
      title: 'شق المسارات وتثبيت العلب بالليزر',
      tag: 'الدقة الميدانية',
      desc: 'استخدام أجهزة الليزر لضبط ارتفاعات مفاتيح الإنارة (120-140 سم) والأفياش (40-50 سم) بدقة هندسية موحدة في كامل غرف العقار.',
      focusPoints: [
        'تثبيت علب الماجيك بميزان مائي وليزر لضمان استقامتها التامة',
        'تمديد خراطيم أصلية مقاومة للحريق في الجدران والأسقف',
        'تجنب التكسير الأفقي العشوائي في الجدران الحاملة لحماية سلامة المبنى'
      ]
    },
    {
      id: '03',
      title: 'سحب وتمديد الأسلاك النحاسية المعزولة',
      tag: 'مرحلة التمديد',
      desc: 'سحب كابلات الفنار النحاسية الأصلية المعتمدة بالألوان القياسية للكود السعودي (فاز، نيوترال، إيرث) مع مراعاة مقطع السلك المناسب لكل حمل.',
      focusPoints: [
        'أسلاك 2.5 ملم لدوائر الإنارة العادية',
        'أسلاك 4 ملم لدوائر الأفياش العامة ومكيفات الاسبليت الصغيرة',
        'أسلاك 6 ملم إلى 10 ملم لأفران المطبخ والمكيفات الكبيرة ومضخات المياه'
      ]
    },
    {
      id: '04',
      title: 'تجميع الطبلون وموازنة الأحمال (Load Balancing)',
      tag: 'الأمان الهندسي',
      desc: 'تركيب القواطع الفرعية والرئيسية في لوحات التوزيع وتوزيع الأحمال بالتساوي على الفازات الثلاثة (R-S-T) لتفادي احتراق الأسلاك أو سقوط القواطع.',
      focusPoints: [
        'موازنة استهلاك التيار بالأمبير بين الأطوار الثلاثة',
        'تركيب قاطع تفاضلي لحماية التسريب الأرضي (RCCB / ELCB)',
        'ترقيم جميع القواطع بمخطط تعريفي واضح لسهولة الصيانة لاحقاً'
      ]
    },
    {
      id: '05',
      title: 'فحص العزل واختبار الميجر وشبكة التأريض',
      tag: 'الفحص والاعتماد',
      desc: 'فحص مقاومة العزل بين الموصلات بجهاز الميجر (Megger) والتحقق من كفاءة خط التأريض لضمان تفريغ أي تيار شارد وحماية الأجهزة والأفراد.',
      focusPoints: [
        'فحص مقاومة القابس الأرضي والتأكد من انخفاض المقاومة للأمان',
        'اختبار عمل قواطع الحماية الفورية عند وجود التماس تجريبي',
        'تسليم العقار جاهزاً مع عقد وضمان كتابي موثق 15 سنة'
      ]
    }
  ];

  // --------------------------------------------------------------------------
  // 2. Services Explorer Data
  // --------------------------------------------------------------------------
  const [selectedService, setSelectedService] = useState(0);

  const electricalServices = [
    {
      id: 'roughin-elec',
      name: 'تأسيس شبكات الكهرباء للفلل والعمائر',
      badge: 'تأسيس هندسي',
      shortDesc: 'تمديد مسارات الخراطيم وتأسيس العلب وطبالين التوزيع من مرحلة العظم وفق الكود السعودي SBC 401.',
      details: 'يشمل مراجعة المخططات الهندسية، حفر مسارات التمديدات، تأسيس نقاط المكيفات الكونسيلد والاسبليت، وخطوط السخانات المركزية والفورية مع عزل كامل لمسارات القوى عن خطوط التيار الخفيف.',
      deliverables: ['مطابقة كود البناء السعودي SBC 401', 'موازين ليزر لكافة العلب والمفاتيح', 'ضمان 15 سنة على جودة التأسيس']
    },
    {
      id: 'cables-pull',
      name: 'سحب وتمديد الأسلاك والكابلات الأصلية',
      badge: 'نحاس نقي 100%',
      shortDesc: 'سحب كابلات الفنار النحاسية المعتمدة بأقطار مطابقة للأحمال الكهربائية مع التمييز اللوني النظامي.',
      details: 'نلتزم حصراً باستخدام كابلات النحاس المعزولة من مصانع معتمدة (مثل الفنار أو الرياض) بمقاطع محسوبة هندسياً: 2.5 ملم للإنارة، 4 ملم للأفياش، 6 و10 ملم للمكيفات والأفران وسخانات المياه.',
      deliverables: ['كابلات نحاسية نقية مقاومة للحريق', 'ترميز لوني واضح (فاز / نيوترال / تأريض)', 'دوائر مستقلة لكل جهاز عالي السحب']
    },
    {
      id: 'distribution-panels',
      name: 'تجميع وتنظيم لوحات التوزيع والطبالين',
      badge: 'تنظيم واحتراف',
      shortDesc: 'تجميع وربط طبالين التوزيع الرئيسية والفرعية مع الترقيم الكامل للدوائر وحمايات الأوفرلود.',
      details: 'ترتيب أسلاك الطبلون بمسارات هندسية منظمة داخل مجاري بلاستيكية، وتوزيع القواطع حسب الغرف والمناطق، مع وضع لوحة تعريفية واضحة أمام كل قاطع لمعرفة الدائرة التي يتحكم بها فوراً.',
      deliverables: ['طبالين معتمدة (الفنار / شنايدر)', 'ترقيم وكتابة دليل الدوائر', 'أغطية حماية عازلة لمنع اللمس العرضي']
    },
    {
      id: 'load-balancing',
      name: 'موازنة الأحمال والدوائر الكهربائية',
      badge: 'أمان وكفاءة',
      shortDesc: 'توزيع متوازن للأحمال على الفازات الثلاثة لمنع انقطاع الكهرباء وتلف الأجهزة الحساسة.',
      details: 'السبب الأول لاحتراق القواطع وسقوطها المتكرر هو تكديس أحمال المكيفات على خط واحد (فاز واحد). نقوم بموازنة دقيقة تجعل استهلاك الأمبير متساوياً على الفازات الثلاثة، مما يقلل استهلاك الطاقة ويحمي القواطع.',
      deliverables: ['موازنة دقيقة بالأمبيرميتر', 'حماية المكيفات والأفران من هبوط الجهد', 'ثبات التيار الكهربائي بدون تذبذب']
    },
    {
      id: 'grounding-safety',
      name: 'شبكة التأريض الوقائي وقواطع الحماية (Earth)',
      badge: 'حماية الأرواح',
      shortDesc: 'تأسيس خط التأريض الأرضي وربطه بقواطع التسريب لحماية أفراد الأسرة من مخاطر الصعق الكهربائي.',
      details: 'تمديد سلك التأريض الأخضر والأصفر لجميع الأفياش ولوحات التوزيع وربطه بقواطع التسريب الأرضي (RCCB) الحساسة التي تفصل التيار في أجزاء من الثانية فور حدوث أي نضوح كهربائي أو لمس للأجهزة المعدنية.',
      deliverables: ['قواطع تفاضلية فائقة الحساسية (30mA)', 'تأريض كامل للأفياش ومعدات المطبخ', 'مطابقة لاشتراطات الدفاع المدني']
    },
    {
      id: 'troubleshoot-elec',
      name: 'فحص الأعطال والالتماسات الكهربائية',
      badge: 'تدخل سريع',
      shortDesc: 'فحص عزل الكابلات وتحديد أسباب سقوط القواطع المتكرر باستخدام أجهزة قياس متقدمة.',
      details: 'نستخدم أجهزة الميجر والكاميرات الحرارية لفحص درجات حرارة القواطع داخل الطبلون واكتشاف أي سلك غير محكم الربط (Loose Connection) أو التماس بين الفازات لمعالجته فوراً قبل تفاقمه.',
      deliverables: ['فحص حراري للطبالين والقواطع', 'معالجة فورية للالتماسات', 'إعادة عزل وتأمين الخطوط المتضررة']
    }
  ];

  // --------------------------------------------------------------------------
  // 3. Project Showcase & Image Zoom State
  // --------------------------------------------------------------------------
  const [activeProject, setActiveProject] = useState(0);
  const [zoomImage, setZoomImage] = useState(null);

  const electricalProjects = [
    {
      id: 'villa-panel',
      title: 'تجميع وموازنة طبلون فيلا سكنية 3 فاز - حي الحمدانية',
      propertyType: 'فيلا مستقلة (دورين وملحق)',
      scope: 'تجميع طبلون رئيسي 36 خط مع قواطع حماية تفاضلية وموازنة أحمال 9 مكيفات اسبليت وفرن كهربائي.',
      image: imagesConfig.electricalService || '/images/hero.jpg',
      procedure: 'توزيع الدوائر بالتساوي على الفازات الثلاثة، وربط خطوط التأريض الوقائي، وترقيم جميع الخطوط بمخطط تعريفي.',
      result: 'استقرار تام في الجهد الكهربائي، وتوزيع مثالي للأمبير على الفازات R-S-T بنسبة تفاوت أقل من 5%، مع تسليم الضمان 15 سنة.'
    },
    {
      id: 'lighting-finishing',
      title: 'تشطيب إنارة حديثة وليد بروفايل شقة فاخرة - حي الروضة',
      propertyType: 'شقة سكنية (240 م²)',
      scope: 'تأسيس مسارات الليد بروفايل المخفي، والإنارة المغناطيسية (Magnetic Track)، ومفاتيح الإنارة الذكية.',
      image: imagesConfig.finishingService || '/images/finishing.jpg',
      procedure: 'تركيب محولات الليد في أماكن تهوية مخصصة لضمان عدم ارتفاع حرارتها، وتغذيتها بأسلاك نحاسية معزولة مع قواطع مخصصة.',
      result: 'إضاءة ديكورية مريحة وخالية من الوميض مع سهولة الصيانة والتحكم الذكي واستلام موثق.'
    },
    {
      id: 'building-cables',
      title: 'تأسيس شبكة كهرباء عمارة سكنية 8 شقق - حي الصفا',
      propertyType: 'عمارة سكنية استثمارية',
      scope: 'سحب الكابلات الصاعدة، تأسيس غرف العدادات، وربط اللوحات الفرعية لكل شقة بكابلات الفنار الأصلية.',
      image: imagesConfig.projectVilla || '/images/project_villa.jpg',
      procedure: 'تنظيم النوازل الرأسية داخل دكتات كهرباء معزولة، وتركيب قواطع رئيسية بقوة مناسبة ومطابقة لاشتراطات شركة الكهرباء.',
      result: 'اجتياز الفحص الميداني واكتمال إطلاق التيار بدون أي ملاحظات مع توثيق مسارات التمديدات للمالك.'
    }
  ];

  // --------------------------------------------------------------------------
  // 4. Interactive Pre-Handover Checklist
  // --------------------------------------------------------------------------
  const initialChecklist = [
    { id: 1, text: 'التأكد من استخدام كابلات نحاسية معتمدة بالأقطار المناسبة لكل حمل', checked: false },
    { id: 2, text: 'فحص وجود قاطع التسريب الأرضي (RCCB / ELCB) واختبار زر التجربة (Test)', checked: false },
    { id: 3, text: 'استواء واستقامة علب المفاتيح والأفياش بميزان الليزر على ارتفاعات موحدة', checked: false },
    { id: 4, text: 'ترقيم القواطع داخل الطبلون وتوضيح الدائرة التابعة لكل قاطع', checked: false },
    { id: 5, text: 'عزل وفصل خطوط التيار الخفيف (شبكات والإنترنت) عن خطوط القوى الكهربائية', checked: false },
    { id: 6, text: 'فحص موازنة استهلاك الأمبير على الفازات الثلاثة لمنع سقوط القاطع الرئيسي', checked: false }
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
  // 5. Smart Electrical Request Form
  // --------------------------------------------------------------------------
  const [formData, setFormData] = useState({
    propertyType: 'فيلا سكنية',
    serviceType: 'تأسيس كهرباء كامل من الصفر',
    neighborhood: 'حي الأجاويد (المركز الرئيسي)',
    notes: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formattedMessage = `السلام عليكم ورحمة الله،
أرغب بطلب معاينة واستفسار عن خدمات الكهرباء المعتمدة:
• نوع العقار: ${formData.propertyType}
• نوع الخدمة: ${formData.serviceType}
• الحي بجدة: ${formData.neighborhood || 'جدة'}
${formData.notes ? `• تفاصيل إضافية: ${formData.notes}` : ''}

يرجى إفادتي بالتكلفة والموعد المتاح للمعاينة وموازنة الأحمال مع الضمان الكتابي.`;

    const whatsappUrl = `https://wa.me/${intlPhone}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  // --------------------------------------------------------------------------
  // 6. Electrical FAQs State
  // --------------------------------------------------------------------------
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'لماذا نشترط كابلات الفنار النحاسية الأصلية في التمديدات؟',
      a: 'لأن أسلاك النحاس التجاري الرخيص تحتوي على شوائب ترفع من مقاومتها الكهربائية، مما يسبب سخونة السلك واحتراق العازل البلاستيكي وربما نشوب حرائق لا قدر الله. كابلات النحاس النقي 100% تتحمل درجات الحرارة العالية وتضمن توصيلاً آمناً يدوم لعشرات السنين.'
    },
    {
      q: 'ما أهمية موازنة الأحمال (Load Balancing) في طبلون الفيلا؟',
      a: 'التيار الواصل من شركة الكهرباء يكون ثلاثي الأطوار (3-Phase). إذا تم ربط أغلب مكيفات الفيلا على طور واحد (فاز واحد)، سيرتفع السحب عليه إلى أقصى حد مما يسقط القاطع الرئيسي باستمرار، بينما الطوران الآخران شبه فارغين. الموازنة الهندسية تضمن توزيع الأمبير بالتساوي لحماية القواطع والأسلاك.'
    },
    {
      q: 'ما فائدة قاطع التسريب الأرضي (RCCB) وكيف يحمي أفراد الأسرة؟',
      a: 'قاطع التسريب الأرضي هو صمام أمان منقذ للأرواح؛ إذا حدث أي التماس في غسالة أو سخان أو لمس طفل سلكاً مكشوفاً، يكتشف القاطع تسرب تيار قدره 30 مللي أمبير فقط ويفصل الكهرباء في أقل من 0.03 ثانية قبل أن يتعرض الشخص لصعق كهربائي خطير.'
    },
    {
      q: 'ما هي المقاسات الهندسية المعتمدة لأسلاك المكيفات والأفران؟',
      a: 'وفق الكود السعودي للبناء: دوائر الإنارة 2.5 ملم، الأفياش العادية 4 ملم، مكيفات الاسبليت 24 و 30 وحدة 4 إلى 6 ملم، وأفران المطبخ والمكيفات المركزية الكبيرة ومضخات الخزانات 6 إلى 10 ملم مع قواطع تيار مناسبة.'
    },
    {
      q: 'هل تقدمون مخططاً لتوزيع نقاط الأفياش والإنارة قبل البدء بالعمل؟',
      a: 'نعم، قبل البدء بالشغل الميداني نراجع المخطط مع المالك ومهندس الديكور لتحديد أماكن الأثاث والأسرة ومسارات التلفزيون والأجهزة لضمان عدم وجود أفياش خلف الخزائن أو في أماكن غير مريحة للاستخدام.'
    }
  ];

  return (
    <div className="electrical-page-wrapper">
      {/* ======================================================================
          1. Hero Section (واجهة الكهرباء الافتتاحية)
          ====================================================================== */}
      <section
        className="plumbing-hero-section"
        style={{ backgroundImage: `url(${imagesConfig.electricalService || '/images/hero.jpg'})` }}
      >
        <div className="hero-gradient-overlay" />

        <div className="container plumbing-hero-container">
          <nav className="plumbing-breadcrumb" aria-label="مسار التنقل">
            <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="breadcrumb-home">
              <span>الرئيسية</span>
            </a>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">خدمات الكهرباء والتأريض</span>
          </nav>

          <div className="hero-badge electric-badge">
            <Zap size={16} />
            <span>تنفيذ وفق الكود السعودي SBC 401 • كابلات نحاس أصلية</span>
          </div>

          <h1 className="hero-headline plumbing-title">
            تأسيس وتمديدات الكهرباء للفلل والمباني بجدة
          </h1>

          <p className="hero-subline plumbing-desc">
            تمديدات هندسية آمنة، موازنة أحمال التكييف، تنظيم وتوزيع الطبالين، وشبكات تأريض وقائي معتمدة بضمان كتابي 15 سنة.
          </p>

          <div className="hero-cta-buttons">
            <a
              href={getWhatsAppLink("السلام عليكم، أرغب بطلب معاينة واستفسار عن خدمات تمديد وتأسيس الكهرباء مع الضمان")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-hero"
            >
              <MessageCircle size={20} />
              <span>محادثة واتساب للكهرباء</span>
            </a>

            <a href={`tel:${phoneNumber}`} className="btn-call-hero">
              <Phone size={20} />
              <span dir="ltr">اتصال مباشر: {phoneNumber}</span>
            </a>
          </div>

          <div className="plumbing-hero-anchors">
            <a href="#electrical-services" className="hero-anchor-link">
              <span>استكشف خدمات الكهرباء</span>
              <ArrowLeft size={14} />
            </a>
            <a href="#electrical-stages" className="hero-anchor-link">
              <span>مراحل التنفيذ وموازنة الأحمال</span>
              <ArrowLeft size={14} />
            </a>
            <a href="#electrical-checklist" className="hero-anchor-link">
              <span>قائمة فحص استلام الكهرباء</span>
              <ArrowLeft size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================================
          2. Services Explorer (استكشاف خدمات الكهرباء)
          ====================================================================== */}
      <section id="electrical-services" className="plumbing-section-wrap bg-subtle">
        <div className="container">
          <div className="section-head-clean">
            <span className="section-pill">الخدمات التخصصية</span>
            <h2 className="section-big-title">حلول كهربائية متكاملة من التأسيس حتى التشغيل</h2>
            <p className="section-lead-text">
              اختر الخدمة للاطلاع على المواصفات الفنية والمقاييس المعتمدة لموقعك.
            </p>
          </div>

          <div className="plumbing-explorer-layout">
            <div className="explorer-tabs-column">
              {electricalServices.map((srv, idx) => (
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

            <div className="explorer-detail-column">
              <div className="explorer-detail-card">
                <div className="detail-card-header">
                  <div className="detail-tag-row">
                    <span className="detail-badge-pill">{electricalServices[selectedService].badge}</span>
                    <span className="detail-sbc-tag">مطابق لاشتراطات SBC 401</span>
                  </div>
                  <h3>{electricalServices[selectedService].name}</h3>
                </div>

                <div className="detail-body-text">
                  <p>{electricalServices[selectedService].details}</p>
                </div>

                <div className="detail-deliverables-box">
                  <h5>المعايير الهندسية المضمونة في هذه الخدمة:</h5>
                  <ul className="deliverables-list">
                    {electricalServices[selectedService].deliverables.map((item, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} color="#ea580c" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="detail-action-footer">
                  <a
                    href={getWhatsAppLink(`السلام عليكم، أرغب بطلب معاينة لخدمة الكهرباء: ${electricalServices[selectedService].name}`)}
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
          3. Interactive Execution Stages (مراحل التنفيذ وموازنة الأحمال)
          ====================================================================== */}
      <section id="electrical-stages" className="plumbing-section-wrap">
        <div className="container">
          <div className="section-head-clean">
            <span className="section-pill">المنهجية الميدانية</span>
            <h2 className="section-big-title">مراحل تنفيذ شبكة الكهرباء: من المخطط حتى فحص الميجر</h2>
            <p className="section-lead-text">
              اضغط على أي مرحلة لاستعراض نقاط الفحص الفنية المتبعة لضمان أمان يدوم 15 سنة.
            </p>
          </div>

          <div className="stages-stepper-nav">
            {electricalStages.map((stage, idx) => (
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

          <div className="stage-active-panel">
            <div className="stage-panel-grid">
              <div className="stage-panel-info">
                <div className="panel-badge-row">
                  <span className="panel-num">المرحلة {electricalStages[activeStage].id}</span>
                  <span className="panel-tag">{electricalStages[activeStage].tag}</span>
                </div>
                <h3>{electricalStages[activeStage].title}</h3>
                <p className="panel-desc">{electricalStages[activeStage].desc}</p>

                <div className="panel-check-card">
                  <h4>أهم نقاط المراجعة في هذه المرحلة:</h4>
                  <ul>
                    {electricalStages[activeStage].focusPoints.map((point, pIdx) => (
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
                    <Zap size={24} color="#ea580c" />
                    <h4>معيار السلامة الكهربائية</h4>
                  </div>
                  <p>
                    نلتزم بالتحقق من عزل الأسلاك بمقياس الميجر وفحص التأريض الوقائي لكل فيش ومفتاح لضمان سلامة الأرواح والأجهزة المنزلية.
                  </p>
                  <div className="tip-footer-indicator">
                    <span>الكود المعتمد: SBC 401 للكهرباء</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          4. Quality & Technical Safety (الجودة والسلامة الكهربائية)
          ====================================================================== */}
      <section className="plumbing-section-wrap bg-dark-warm">
        <div className="container">
          <div className="section-head-clean light-version">
            <span className="section-pill orange">معايير الأمان</span>
            <h2 className="section-big-title">الجودة والسلامة الكهربائية: حماية عقارك وأسرتك أولاً</h2>
            <p className="section-lead-text">
              لماذا نلتزم الصرامة في تنظيم الطبالين وموازنة الأحمال واستخدام كابلات النحاس الأصلية؟
            </p>
          </div>

          <div className="pressure-cards-grid">
            <div className="pressure-fact-card">
              <div className="fact-icon-wrap electric-glow-icon">
                <Activity size={24} />
              </div>
              <h3>موازنة الأحمال (Load Balancing)</h3>
              <p>
                توزيع استهلاك المكيفات والأجهزة بالتساوي على الفازات الثلاثة يمنع سقوط القواطع ويحمي محركات المكيفات من هبوط الجهد المتكرر.
              </p>
            </div>

            <div className="pressure-fact-card">
              <div className="fact-icon-wrap electric-glow-icon">
                <ShieldAlert size={24} />
              </div>
              <h3>قاطع التسريب الأرضي (ELCB/RCCB)</h3>
              <p>
                حماية إلزامية ضد الصعق؛ يفصل التيار تلقائياً خلال 30 جزء من الثانية فور حدوث أي تسرب كهربائي لجسم الأجهزة أو لمس عرضي.
              </p>
            </div>

            <div className="pressure-fact-card">
              <div className="fact-icon-wrap electric-glow-icon">
                <Layers size={24} />
              </div>
              <h3>نحاس أصلي معتمد 100%</h3>
              <p>
                استخدام كابلات الفنار المقاومة للحرارة بأقطار هندسية مدروسة يمنع ارتفاع حرارة التمديدات داخل الجدران ويحافظ على كفاءة الطاقة.
              </p>
            </div>

            <div className="pressure-fact-card">
              <div className="fact-icon-wrap electric-glow-icon">
                <FileCheck2 size={24} />
              </div>
              <h3>ترقيم وتنظيم الطبالين</h3>
              <p>
                توضيح الدوائر الكهربائية بملصقات إرشادية داخل الطبلون يسهل الصيانة المستقبلية ويمنع فصل الدوائر الخاطئة أثناء الطوارئ.
              </p>
            </div>
          </div>

          {/* Safety Notice */}
          <div className="safety-notice-banner">
            <ShieldAlert size={28} color="#ea580c" style={{ flexShrink: 0 }} />
            <p>
              <strong>تنبيه فني وسلامة:</strong> التعامل مع شبكات الكهرباء ولوحات التوزيع الرئيسية ينطوي على مخاطر حقيقية ويجب أن يُنفذ حصراً بأيدي فنيين مؤهلين وباستخدام أدوات عزل معتمدة. لا تحاول تعديل القواطع أو سحب أسلاك إضافية دون مراجعة فني كهرباء معتمد.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================================
          5. Projects Showcase with Image Zoom (معرض الأعمال والمشاريع)
          ====================================================================== */}
      <section className="plumbing-section-wrap">
        <div className="container">
          <div className="section-head-clean">
            <span className="section-pill">توثيق ميداني</span>
            <h2 className="section-big-title">نماذج من أعمال الكهرباء المنفذة بجدة</h2>
            <p className="section-lead-text">
              أعمال حقيقية لتجميع الطبالين وموازنة الأحمال وتأسيس الشقق والفلل.
            </p>
          </div>

          <div className="story-showcase-container">
            <div className="story-nav-bar">
              {electricalProjects.map((proj, idx) => (
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

            <div className="story-display-card">
              <div
                className="story-image-side"
                onClick={() => setZoomImage(electricalProjects[activeProject])}
                style={{ cursor: 'zoom-in' }}
                title="اضغط لتكبير الصورة"
              >
                <img
                  src={electricalProjects[activeProject].image}
                  alt={electricalProjects[activeProject].title}
                  loading="lazy"
                />
                <span className="story-tag-pill">{electricalProjects[activeProject].propertyType}</span>
                <span style={{ position: 'absolute', bottom: 14, left: 14, background: 'rgba(0,0,0,0.6)', color: '#fff', padding: '4px 10px', borderRadius: '6px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Maximize2 size={13} /> تكبير الصورة
                </span>
              </div>

              <div className="story-content-side">
                <div className="story-header-meta">
                  <span className="story-location-badge">📍 جدة - تنفيذ معتمد</span>
                  <h3>{electricalProjects[activeProject].title}</h3>
                </div>

                <div className="story-scope-block">
                  <strong>نطاق العمل:</strong>
                  <p>{electricalProjects[activeProject].scope}</p>
                </div>

                <div className="story-procedure-block">
                  <strong>الإجراء الهندسي:</strong>
                  <p>{electricalProjects[activeProject].procedure}</p>
                </div>

                <div className="story-result-box">
                  <div className="result-icon">
                    <CheckCircle2 size={20} color="#16a34a" />
                  </div>
                  <div>
                    <strong>النتيجة والتوثيق:</strong>
                    <p>{electricalProjects[activeProject].result}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Zoom Modal */}
      {zoomImage && (
        <div className="image-zoom-overlay" onClick={() => setZoomImage(null)}>
          <div className="image-zoom-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="image-zoom-close-btn"
              onClick={() => setZoomImage(null)}
              aria-label="إغلاق الصورة"
            >
              <X size={20} />
            </button>
            <img src={zoomImage.image} alt={zoomImage.title} />
            <div className="image-zoom-caption">
              <div>
                <strong style={{ fontSize: '1rem', color: '#1C1917' }}>{zoomImage.title}</strong>
                <p style={{ fontSize: '0.88rem', color: '#78716C', marginTop: '2px' }}>{zoomImage.propertyType}</p>
              </div>
              <span style={{ background: '#FFF7ED', color: '#EA580C', padding: '4px 12px', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 700 }}>
                تنفيذ هندسي موثق
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================================
          6. Interactive Pre-Handover Checklist (قائمة فحص استلام الكهرباء)
          ====================================================================== */}
      <section id="electrical-checklist" className="plumbing-section-wrap bg-subtle">
        <div className="container">
          <div className="section-head-clean">
            <span className="section-pill">دليل المالك الإرشادي</span>
            <h2 className="section-big-title">قائمة فحص استلام أعمال الكهرباء</h2>
            <p className="section-lead-text">
              تحقق بنفسك من أهم البنود الهندسية الواجب توافرها في لوحات وتمديدات منزلك قبل الاستلام النهائي.
            </p>
          </div>

          <div className="checklist-box-card">
            <div className="checklist-progress-header">
              <div className="progress-labels">
                <span>نسبة استيفاء بنود فحص الكهرباء:</span>
                <span className="progress-num">{checkedCount} من {checklist.length} ({progressPercent}%)</span>
              </div>
              <div className="checklist-progress-track">
                <div
                  className="checklist-progress-fill"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

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

            <div className="checklist-advice-banner">
              {progressPercent === 100 ? (
                <div className="advice-badge success">
                  <CheckCircle2 size={20} />
                  <span>ممتاز! تم استيفاء كافة نقاط الفحص الإرشادية لشبكة الكهرباء والطبالين.</span>
                </div>
              ) : (
                <div className="advice-badge info">
                  <Sparkles size={18} />
                  <span>حدد البنود التي تم فحصها للتأكد من استيفاء معايير الأمان وموازنة الأحمال.</span>
                </div>
              )}
              <small className="checklist-disclaimer">
                * ملاحظة: هذه القائمة أداة إرشادية للمساعدة في المتابعة، وليست بديلاً عن الفحص المتخصص بجهاز الميجر بواسطة مهندس أو فني معتمد.
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          7. Smart Electrical Request Form (نموذج طلب خدمة كهرباء)
          ====================================================================== */}
      <section className="plumbing-section-wrap">
        <div className="container">
          <div className="request-form-card">
            <div className="form-header-side">
              <span className="section-pill">طلب مباشر</span>
              <h2>طلب معاينة أو تأسيس كهرباء</h2>
              <p>
                حدد نوع عقارك والخدمة المطلوبة، وسنجهز لك رسالة واتساب مرتبة بكافة التفاصيل للتواصل المباشر مع فني الكهرباء المسؤول بجدة.
              </p>

              <div className="form-trust-badges">
                <div className="trust-item">
                  <CheckCircle2 size={16} color="#ea580c" />
                  <span>سحب وتمديد كابلات الفنار الأصلية المعتمدة</span>
                </div>
                <div className="trust-item">
                  <CheckCircle2 size={16} color="#ea580c" />
                  <span>موازنة أحمال التكييف وتوزيع دقيق للطبالين</span>
                </div>
                <div className="trust-item">
                  <CheckCircle2 size={16} color="#ea580c" />
                  <span>ضمان كتابي رسمي 15 سنة مطابق للكود السعودي</span>
                </div>
              </div>

              {/* Related Services Internal Links */}
              <div style={{ marginTop: '24px' }}>
                <span style={{ fontSize: '0.85rem', color: '#78716C', display: 'block', marginBottom: '8px' }}>خدمات ذات صلة بالعقار:</span>
                <div className="cross-services-row">
                  <a href="/services/plumbing" onClick={(e) => handleLinkClick(e, '/services/plumbing')} className="cross-service-link">
                    🔧 خدمات السباكة المعتمدة
                  </a>
                  <a href="/services/construction" onClick={(e) => handleLinkClick(e, '/services/construction')} className="cross-service-link">
                    🏗️ مقاولات وتشطيب الفلل
                  </a>
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
                  <option value="محل / معرض تجاري">محل / معرض تجاري</option>
                  <option value="أخرى">نوع آخر</option>
                </select>
              </div>

              <div className="form-group">
                <label>نوع الخدمة الكهربائية المطلوبة:</label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="form-select"
                >
                  <option value="تأسيس كهرباء كامل من الصفر">تأسيس كهرباء كامل من الصفر</option>
                  <option value="تجميع وتنظيم طبالين وموازنة أحمال">تجميع وتنظيم طبالين وموازنة أحمال</option>
                  <option value="سحب وتمديد كابلات جديدة">سحب وتمديد كابلات جديدة</option>
                  <option value="فحص وإصلاح التماسات كهربائية">فحص وإصلاح التماسات كهربائية</option>
                  <option value="تشطيب إنارة حديثة ومفاتيح ذكية">تشطيب إنارة حديثة ومفاتيح ذكية</option>
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
                <label>ملاحظات إضافية أو وصف للعمل (اختياري):</label>
                <textarea
                  rows="3"
                  placeholder="مثال: عدد 8 مكيفات سبليت، طبلون 3 فاز بحاجة لموازنة أحمال وسحب كابلات..."
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
          8. Electrical FAQs (الأسئلة الشائعة للكهرباء)
          ====================================================================== */}
      <section className="plumbing-section-wrap bg-subtle">
        <div className="container">
          <div className="section-head-clean">
            <span className="section-pill">إجابات فنية</span>
            <h2 className="section-big-title">أسئلة شائعة حول تمديدات وأمان الكهرباء</h2>
            <p className="section-lead-text">
              إجابات عملية تساعدك على ضمان أمان عقارك وتفادي مخاطر الالتماسات الكهربائية.
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
          9. Call To Action (دعوة ختامية للتواصل)
          ====================================================================== */}
      <section className="plumbing-cta-section">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-banner-content">
              <span className="cta-badge">كابلات معتمدة • موازنة أحمال احترافية</span>
              <h2>جاهز لتأسيس أو موازنة شبكة الكهرباء لعقارك بأعلى معايير الأمان؟</h2>
              <p>
                فريقنا الفني المتخصص في جدة جاهز لمعاينة موقعك وتقديم مقايسة دقيقة مع ضمان كتابي معتمد 15 سنة.
              </p>
              <div className="cta-buttons-row">
                <a
                  href={getWhatsAppLink("السلام عليكم، أرغب بحجز موعد لمعاينة كهرباء العقار وطلب مقايسة")}
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
