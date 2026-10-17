import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Search,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  ChevronDown,
  HelpCircle,
  MapPin,
  Droplets,
  Gauge,
  Camera
} from 'lucide-react';
import { imagesConfig } from '../config/images';

export default function LeakDetectionPage({ onNavigate }) {
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
  // 1. Interactive Symptom Selector State
  // --------------------------------------------------------------------------
  const symptomsList = [
    {
      id: 'high-bill',
      title: 'ارتفاع مفاجئ في فاتورة المياه',
      desc: 'ملاحظة زيادة غير مبررة في استهلاك العداد الشهري بالرغم من ثبات نمط الاستخدام المعتاد.',
      possibleCauses: 'نضوح في عوامة الخزان الأرضي، تسريب مستمر في سيفون مدفون، أو كسر في خط التغذية الرئيسي تحت البلاط.'
    },
    {
      id: 'damp-walls',
      title: 'رطوبة وتقشر الدهان في الجدران',
      desc: 'ظهور بقع مائية صفراء أو انتفاخ وتساقط البوية في أسفل جدران الحمامات أو الغرف المجاورة.',
      possibleCauses: 'تسريب في أكواع خطوط التغذية داخل الجدار، أو خلل في عزل زوايا كبائن الشاور وأطراف الصفايات.'
    },
    {
      id: 'running-pump',
      title: 'استمرار عمل مضخة المياه (الدينمو)',
      desc: 'المضخة تعمل وتفصل بشكل متكرر وتلقائي حتى عندما تكون جميع الحنفيات والخلاطات مغلقة تماماً.',
      possibleCauses: 'انخفاض مستمر في ضغط الشبكة ناتج عن تنفيس أو شرخ في أحد خطوط التغذية المضغوطة بالفيلا.'
    },
    {
      id: 'mold-odor',
      title: 'روائح رطوبة وعفن متكررة',
      desc: 'انبعاث روائح مكتومة غير مريحة تحت المغاسل أو في زوايا دورات المياه والأسقف الجبسية.',
      possibleCauses: 'تجمع مياه راكدة تحت دفان البلاط ناتجة عن تسريب بطيء لا يظهر مباشرة على السطح.'
    },
    {
      id: 'low-pressure',
      title: 'ضعف غير مبرر في ضغط المياه',
      desc: 'انخفاض ملحوظ في قوة اندفاع الماء من الخلاطات والدشاش في دور أو حمام محدد دون غيره.',
      possibleCauses: 'تسريب كميات كبيرة من المياه من ماسورة فرعية مكسورة قبل وصولها للخلاطات.'
    },
    {
      id: 'wet-joints',
      title: 'ترشيح مياه بين فواصل السيراميك',
      desc: 'خروج ماء خفيف أو لمعان رطب دائم بين ترويبة البلاط حتى بعد تجفيف الحمام أو المطبخ.',
      possibleCauses: 'تشبع الدفان الداخلي بالكامل بالمياه وبدء خروجها عبر الفواصل الأضعف.'
    }
  ];

  const [selectedSymptoms, setSelectedSymptoms] = useState(['high-bill', 'damp-walls']);

  const toggleSymptom = (id) => {
    if (selectedSymptoms.includes(id)) {
      if (selectedSymptoms.length > 1) {
        setSelectedSymptoms(selectedSymptoms.filter((s) => s !== id));
      }
    } else {
      setSelectedSymptoms([...selectedSymptoms, id]);
    }
  };

  // --------------------------------------------------------------------------
  // 2. Detection Steps Journey
  // --------------------------------------------------------------------------
  const [activeStep, setActiveStep] = useState(0);

  const detectionJourneySteps = [
    {
      stepNum: '01',
      title: 'المعاينة الأولية ومراجعة العداد والمضخات',
      desc: 'فحص مؤشر عداد المياه مع إغلاق المحابس لاكتشاف وجود دوران شارد، وتفقد صوت المضخات والخزانات الأرضية والعلوية لحصر دائرة الشك.',
      tool: 'المعاينة الميدانية ومراقبة حركة العداد'
    },
    {
      stepNum: '02',
      title: 'عزل الخطوط واختبار الضغط الهيدروليكي',
      desc: 'فصل شبكة المياه الباردة عن الحارة وشبكة الخزان الأرضي، وضغط كل خط مستقلاً بغاز النيتروجين أو الماء لتحديد الخط الذي يعاني من هبوط في الضغط.',
      tool: 'طلمبة الضغط وسدادات العزل الميكانيكية'
    },
    {
      stepNum: '03',
      title: 'المسح الصوتي والحراري فوق الأرضيات والجدران',
      desc: 'استخدام أجهزة التحسس الكهرومغناطيسي والميكروفون الأرضي للاستماع لتردد ذبذبات خروج الماء، وتصوير الجدران بكاميرا الأشعة تحت الحمراء لرؤية مسار الرطوبة.',
      tool: 'جهاز الفحص الصوتي والكاميرا الحرارية FLIR'
    },
    {
      stepNum: '04',
      title: 'تحديد نقطة الكسر بدقة وتقديم تقرير الإصلاح',
      desc: 'تحديد موقع الخلل بالضبط على بلاطة واحدة محددة وتوثيق القراءة وتقديم خيارات المعالجة الفورية المتاحة مع تقرير معتمد لشركة المياه.',
      tool: 'علامة ليزر موضعية + تقرير فني موثق'
    }
  ];

  // --------------------------------------------------------------------------
  // 3. Documented Real Cases
  // --------------------------------------------------------------------------
  const [activeCase, setActiveCase] = useState(0);

  const leakCases = [
    {
      id: 'rawdah-case',
      title: 'كشف تسريب خط تغذية مدفون تحت بلاط رخامي - حي الروضة',
      propertyType: 'فيلا سكنية',
      problem: 'ارتفاع فاتورة المياه إلى 2,800 ريال وظهور رطوبة في جدار الصالون الملاصق للمغاسل.',
      detectionMethod: 'فحص بغاز النيتروجين وجهاز الكشف الصوتي لتتبع مسار التغذية المدفون.',
      result: 'تحديد كسر دقيق في كوع حراري 3/4 بوصة تحت بلاطة واحدة، تم فك البلاطة ولحام كوع جديد واختبار الضغط بـ 10 بار دون الإضرار ببقية الرخام.'
    },
    {
      id: 'obhur-case',
      title: 'كشف نضوح خفي خلف سيفون دفن وكابينة شاور - حي أبحر',
      propertyType: 'شقة فاخرة جديدة',
      problem: 'تقشر دهان الغرفة المجاورة وظهور رائحة رطوبة رغم أن الشقة لم تسكن إلا منذ 4 أشهر.',
      detectionMethod: 'مسح حراري بالأشعة تحت الحمراء لكامل الجدار المشترك وفحص ضغط خطوط الشاور.',
      result: 'اكتشاف عدم إحكام ربط وصلة السيفون المدفون؛ تم الإصلاح عبر فتحة صيانة السيفون بدون أي تكسير في السيراميك إطلاقاً.'
    },
    {
      id: 'hamdaniya-case',
      title: 'كشف تسريب في خط مياه السطح والخزان العلوي - حي الحمدانية',
      propertyType: 'عمارة سكنية 6 شقق',
      problem: 'هبوط مياه وتجمع برك صغيرة على سطح العمارة مع تشغيل متواصل لمضخة الرفع.',
      detectionMethod: 'عزل خطوط النوازل واختبار الضغط بالمانومتر وتتبع مسار العزل الإيبوكسي.',
      result: 'تحديد شرخ طولي في ماسورة التغذية الرئيسية النازلة من الخزان؛ تم استبدال الجزء المتضرر وتثبيت قفزات دعم جديدة وتسليم التقرير للمالك.'
    }
  ];

  // --------------------------------------------------------------------------
  // 4. Smart Leak Request Form State
  // --------------------------------------------------------------------------
  const [formData, setFormData] = useState({
    propertyType: 'فيلا سكنية',
    symptom: 'ارتفاع حاد في فاتورة المياه',
    neighborhood: 'حي الأجاويد (المركز الرئيسي)',
    notes: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formattedMessage = `السلام عليكم ورحمة الله،
أرغب بطلب موعد كشف تسريبات مياه معتمد بالأجهزة الإلكترونية:
• نوع العقار: ${formData.propertyType}
• العَرَض الملاحظ: ${formData.symptom}
• الحي بجدة: ${formData.neighborhood || 'جدة'}
${formData.notes ? `• تفاصيل المشكلة: ${formData.notes}` : ''}

يرجى إفادتي بأقرب موعد متاح للفحص وتفاصيل التقرير المعتمد.`;

    const whatsappUrl = `https://wa.me/${intlPhone}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  // --------------------------------------------------------------------------
  // 5. Leak FAQs State
  // --------------------------------------------------------------------------
  const [openFaq, setOpenFaq] = useState(0);

  const leakFaqs = [
    {
      q: 'هل كشف التسريبات يتطلب تكسير البلاط أو الجدران؟',
      a: 'عملية الكشف نفسها تتم إلكترونياً بنسبة 100% دون أي تكسير، حيث نعتمد على التحسس الصوتي والكاميرات الحرارية لتحديد مكان التسريب من فوق السيراميك والرخام. التكسير لا يتم إلا في مرحلة الإصلاح وفقط في حدود بلاطة واحدة بموضع العطل المحدد.'
    },
    {
      q: 'كم يستغرق فحص كشف التسريبات للفيلا أو الشقة؟',
      a: 'يستغرق الفحص الشامل للشبكات والخزانات عادة ما بين 45 إلى 90 دقيقة بحسب مساحة العقار وعدد دورات المياه وشبكات الأسطح. يتم خلالها فحص كافة خطوط التغذية الحارة والباردة وعوامات الخزانات.'
    },
    {
      q: 'هل يساعد تقرير الفحص في تخفيض فاتورة شركة المياه الوطنية؟',
      a: 'نعم، نوفر لك تقريراً فنياً معتمداً ومصوراً يوضح سبب التسريب ومكانه وتاريخ إتمام الإصلاح واختبار الضغط التأكيدي، وهو التقرير الذي تشترطه شركة المياه الوطنية لقبول اعتراضات ارتفاع الفواتير وتعديلها.'
    },
    {
      q: 'ما الفرق بين كشف التسريبات وإصلاح التسريب؟',
      a: 'الكشف هو خدمة تشخيصية دقيقة بالأجهزة لتحديد مكان العطل وإثباته بالتقرير. بعد تحديد المكان، نعرض على العميل خيار الإصلاح الفوري المباشر مع التكلفة، أو تقديم التقرير له ليتصرف به حسب رغبته دون أي إلزام.'
    },
    {
      q: 'ما الذي يجب تجهيزه في المنزل قبل وصول فني الكشف؟',
      a: 'يُفضل التأكد من توفر كمية مياه كافية في الخزان لتعبئة الخطوط، وإيقاف استخدام الغسالات وغسيل الأحواش قبل الفحص بـ 30 دقيقة لتفادي أي ضوضاء صوتية تؤثر على حساسية الميكروفون الأرضي.'
    }
  ];

  return (
    <div className="leak-page-wrapper">
      {/* ======================================================================
          1. Hero Section (واجهة كشف التسريبات)
          ====================================================================== */}
      <section
        className="plumbing-hero-section"
        style={{ backgroundImage: `url(${imagesConfig.plumbingService || '/images/plumbing_gauge.jpg'})` }}
      >
        <div className="hero-gradient-overlay" />

        <div className="container plumbing-hero-container">
          <nav className="plumbing-breadcrumb" aria-label="مسار التنقل">
            <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="breadcrumb-home">
              <span>الرئيسية</span>
            </a>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">كشف تسريبات المياه</span>
          </nav>

          <div className="hero-badge" style={{ background: 'rgba(2, 132, 199, 0.25)', border: '1px solid rgba(2, 132, 199, 0.45)', color: '#E0F2FE' }}>
            <Search size={16} />
            <span>فحص إلكتروني دقيق بدون تكسير عشوائي • تقرير معتمد</span>
          </div>

          <h1 className="hero-headline plumbing-title">
            كشف تسريبات المياه بدون تكسير عشوائي بجدة
          </h1>

          <p className="hero-subline plumbing-desc">
            أحدث أجهزة الفحص الصوتي والحراري لتحديد مكان التسريب بدقة بلاطة واحدة، حل مشكلة ارتفاع فواتير المياه، ومعالجة فورية وضمان كتابي.
          </p>

          <div className="hero-cta-buttons">
            <a
              href={getWhatsAppLink("السلام عليكم، أرغب بطلب فحص كشف تسريبات مياه عاجل بالعقار")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-hero"
            >
              <MessageCircle size={20} />
              <span>طلب فحص تسريب عبر الواتساب</span>
            </a>

            <a href={`tel:${phoneNumber}`} className="btn-call-hero">
              <Phone size={20} />
              <span dir="ltr">اتصال طوارئ: {phoneNumber}</span>
            </a>
          </div>

          <div className="plumbing-hero-anchors">
            <a href="#symptom-identifier" className="hero-anchor-link">
              <span>أداة تحديد الأعراض</span>
              <ArrowLeft size={14} />
            </a>
            <a href="#inspection-journey" className="hero-anchor-link">
              <span>رحلة الفحص والأجهزة</span>
              <ArrowLeft size={14} />
            </a>
            <a href="#after-detection" className="hero-anchor-link">
              <span>ماذا بعد اكتشاف التسريب؟</span>
              <ArrowLeft size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================================
          2. Symptom Identifier (أداة تفاعلية لتحديد الأعراض)
          ====================================================================== */}
      <section id="symptom-identifier" className="plumbing-section-wrap bg-subtle">
        <div className="container">
          <div className="section-head-clean">
            <span className="section-pill" style={{ background: '#E0F2FE', color: '#0284C7', border: '1px solid rgba(2, 132, 199, 0.2)' }}>
              أداة إرشادية للمالك
            </span>
            <h2 className="section-big-title">ما هي الأعراض التي تلاحظها في عقارك؟</h2>
            <p className="section-lead-text">
              اضغط على الأعراض التي تشاهدها لمساعدتنا على فهم الحالة وتجهيز الأجهزة المناسبة لفحص منزلك.
            </p>
          </div>

          <div className="symptom-cards-grid">
            {symptomsList.map((sym) => {
              const isSelected = selectedSymptoms.includes(sym.id);
              return (
                <div
                  key={sym.id}
                  className={`symptom-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => toggleSymptom(sym.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && toggleSymptom(sym.id)}
                >
                  <div className="symptom-icon-box">
                    <Droplets size={22} />
                  </div>
                  <h4>{sym.title}</h4>
                  <p>{sym.desc}</p>
                  <div className="symptom-status-row">
                    <span>{isSelected ? '✔ محدد ضمن الأعراض' : '+ اضغط للتحديد'}</span>
                    <span style={{ color: '#78716C', fontSize: '0.75rem' }}>احتمال تسريب خفي</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Educational Analysis Box */}
          <div className="symptoms-analysis-box">
            <div className="analysis-header">
              <AlertTriangle size={22} color="#0284C7" />
              <h4>تحليل إرشادي وفهم للمشكلة:</h4>
            </div>
            <p className="analysis-text">
              الأعراض المحددة ({selectedSymptoms.length} أعراض) تشير بقوة إلى وجود خلل في شبكة المياه، ولكن من الناحية الهندسية: <strong>ظهور الرطوبة في جدار معين لا يعني بالضرورة أن الكسر في نفس الجدار!</strong>  
              المياه قد تتسرب من ماسورة في السطح أو صفاية الحمام وتسير لعدة أمتار تحت الدفان الخرساني لتظهر في أضعف نقطة بالجدار المجاور. لذلك فإن محاولات التكسير العشوائي دون فحص إلكتروني غالباً ما تفشل في العثور على مكان التسريب الأصلي وتكبدك تكاليف بلاط باهظة.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================================
          3. Inspection Journey & Detection Tools (رحلة الفحص ووسائل الكشف)
          ====================================================================== */}
      <section id="inspection-journey" className="plumbing-section-wrap">
        <div className="container">
          <div className="section-head-clean">
            <span className="section-pill">التقنية والأجهزة</span>
            <h2 className="section-big-title">رحلة الفحص الميداني: كيف نحدد مكان التسريب دون تكسير؟</h2>
            <p className="section-lead-text">
              نعتمد 4 خطوات علمية متتالية وأجهزة متطورة لعزل الشبكات والوصول إلى النقطة المصابة.
            </p>
          </div>

          {/* Stepper Grid */}
          <div className="stages-stepper-nav" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {detectionJourneySteps.map((st, idx) => (
              <button
                key={st.stepNum}
                type="button"
                className={`stage-step-btn ${activeStep === idx ? 'active' : ''}`}
                onClick={() => setActiveStep(idx)}
              >
                <div className="step-circle" style={{ borderColor: activeStep === idx ? '#0284C7' : '', background: activeStep === idx ? '#0284C7' : '' }}>
                  {st.stepNum}
                </div>
                <div className="step-meta">
                  <span className="step-tag-mini" style={{ color: '#0284C7' }}>الخطوة {st.stepNum}</span>
                  <span className="step-title-mini">{st.title}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="stage-active-panel">
            <div className="stage-panel-grid">
              <div className="stage-panel-info">
                <div className="panel-badge-row">
                  <span className="panel-num" style={{ background: '#0284C7' }}>الخطوة {detectionJourneySteps[activeStep].stepNum}</span>
                  <span className="panel-tag" style={{ background: '#F0F9FF', color: '#0284C7' }}>فحص تقني معتمد</span>
                </div>
                <h3>{detectionJourneySteps[activeStep].title}</h3>
                <p className="panel-desc">{detectionJourneySteps[activeStep].desc}</p>

                <div className="panel-check-card" style={{ borderRight: '4px solid #0284C7' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Gauge size={18} color="#0284C7" />
                    <span>التقنية والأداة المستخدمة في هذه الخطوة:</span>
                  </h4>
                  <p style={{ fontSize: '0.95rem', color: '#1C1917', fontWeight: 600, marginTop: '4px' }}>
                    {detectionJourneySteps[activeStep].tool}
                  </p>
                </div>
              </div>

              <div className="stage-panel-aside">
                <div className="aside-tip-card" style={{ background: '#F0F9FF', borderColor: 'rgba(2, 132, 199, 0.25)' }}>
                  <div className="tip-header">
                    <Camera size={24} color="#0284C7" />
                    <h4>الفحص الحراري والصوتي</h4>
                  </div>
                  <p>
                    تجمع أجهزتنا بين الحساسية الصوتية تحت الأرض والتصوير الحراري للرطوبة خلف الجدران لتحديد موقع الخلل بدقة لا تتجاوز 10 سم.
                  </p>
                  <div className="tip-footer-indicator" style={{ color: '#0284C7', borderColor: 'rgba(2, 132, 199, 0.3)' }}>
                    <span>دقة التحديد: بلاطة واحدة فقط</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          4. What Comes After Leak Detection? (ماذا بعد اكتشاف التسريب؟)
          ====================================================================== */}
      <section id="after-detection" className="plumbing-section-wrap bg-dark-warm">
        <div className="container">
          <div className="section-head-clean light-version">
            <span className="section-pill" style={{ background: 'rgba(2, 132, 199, 0.2)', color: '#38BDF8', border: '1px solid rgba(2, 132, 199, 0.4)' }}>
              الشفافية الكاملة
            </span>
            <h2 className="section-big-title">ماذا بعد اكتشاف مكان التسريب؟</h2>
            <p className="section-lead-text">
              نوضح للعميل خيارات المعالجة المتاحة بمهنية، مع الفصل التام بين خدمة الفحص وخيارات الإصلاح.
            </p>
          </div>

          <div className="next-steps-grid">
            <div className="next-step-card">
              <div>
                <div className="next-step-num">01</div>
                <h3>الإصلاح الفوري الموضعي</h3>
                <p>
                  إزالة بلاطة واحدة فقط فوق مكان الكسر، قص القطعة المثقوبة، ولحام وصلة حرارية جديدة بمكائن اللحام المعتمدة مع اختبار ضغط تأكيدي قبل إغلاق البلاطة.
                </p>
              </div>
              <span style={{ fontSize: '0.82rem', color: '#16A34A', fontWeight: 700 }}>
                ✔ توفير تكاليف التكسير الواسع بنسبة 90%
              </span>
            </div>

            <div className="next-step-card">
              <div>
                <div className="next-step-num">02</div>
                <h3>معالجة عوازل الصرف والصفايات</h3>
                <p>
                  إذا تبين أن التسريب ليس من ماسورة مضغوطة بل من ارتشاح أطراف صفاية الحمام أو زوايا الشاور، نقوم بعزل الفواصل بمواد إيبوكسية ألمانية مانعة للماء بدون تكسير.
                </p>
              </div>
              <span style={{ fontSize: '0.82rem', color: '#0284C7', fontWeight: 700 }}>
                ✔ حل نهائي لمشاكل الرطوبة برائحة نظيفة
              </span>
            </div>

            <div className="next-step-card">
              <div>
                <div className="next-step-num">03</div>
                <h3>تقرير فني لشركة المياه الوطنية</h3>
                <p>
                  تسليم العميل تقريراً رسمياً موثقاً يتضمن صور الكشف ونتائج اختبار الضغط وموقع الإصلاح لتقديمه في منصة شركة المياه للاعتراض على ارتفاع الفاتورة وتعديلها.
                </p>
              </div>
              <span style={{ fontSize: '0.82rem', color: '#EA580C', fontWeight: 700 }}>
                ✔ دعم كامل لتخفيض الفاتورة النظامية
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          5. Documented Real Cases (نماذج موثقة من أحياء جدة)
          ====================================================================== */}
      <section className="plumbing-section-wrap">
        <div className="container">
          <div className="section-head-clean">
            <span className="section-pill">توثيق حقيقي</span>
            <h2 className="section-big-title">حالات كشف ومعالجة تسريبات حقيقية بجدة</h2>
            <p className="section-lead-text">
              أمثلة واقعية على المشاكل التي واجهها عملاؤنا وكيف تم الوصول إلى الحل الجذري.
            </p>
          </div>

          <div className="story-showcase-container">
            <div className="story-nav-bar">
              {leakCases.map((cs, idx) => (
                <button
                  key={cs.id}
                  type="button"
                  className={`story-nav-btn ${activeCase === idx ? 'active' : ''}`}
                  onClick={() => setActiveCase(idx)}
                >
                  <MapPin size={15} />
                  <span>{cs.title.split('-')[1]?.trim() || cs.title}</span>
                </button>
              ))}
            </div>

            <div className="story-display-card">
              <div className="story-image-side">
                <img
                  src={imagesConfig.plumbingService || '/images/plumbing_gauge.jpg'}
                  alt={leakCases[activeCase].title}
                  loading="lazy"
                />
                <span className="story-tag-pill">{leakCases[activeCase].propertyType}</span>
              </div>

              <div className="story-content-side">
                <div className="story-header-meta">
                  <span className="story-location-badge">📍 كشف تسريب معتمد بجدة</span>
                  <h3>{leakCases[activeCase].title}</h3>
                </div>

                <div className="story-scope-block">
                  <strong>المشكلة والأعراض الملاحظة:</strong>
                  <p>{leakCases[activeCase].problem}</p>
                </div>

                <div className="story-procedure-block">
                  <strong>وسيلة الفحص المطبقة:</strong>
                  <p>{leakCases[activeCase].detectionMethod}</p>
                </div>

                <div className="story-result-box">
                  <div className="result-icon">
                    <CheckCircle2 size={20} color="#16a34a" />
                  </div>
                  <div>
                    <strong>النتيجة والإصلاح:</strong>
                    <p>{leakCases[activeCase].result}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          6. Smart Leak Request Form (طلب فحص تسريب ذكي)
          ====================================================================== */}
      <section className="plumbing-section-wrap bg-subtle">
        <div className="container">
          <div className="request-form-card">
            <div className="form-header-side">
              <span className="section-pill">تدخل سريع</span>
              <h2>طلب فحص كشف تسريبات مياه</h2>
              <p>
                حدد طبيعة المشكلة وعقارك، وسيقوم فني الكشف الميداني بتجهيز الأجهزة المناسبة والتواصل معك مباشرة عبر الواتساب.
              </p>

              <div className="form-trust-badges">
                <div className="trust-item">
                  <CheckCircle2 size={16} color="#0284C7" />
                  <span>تحديد موقع التسريب بدقة بلاطة واحدة دون تكسير عشوائي</span>
                </div>
                <div className="trust-item">
                  <CheckCircle2 size={16} color="#0284C7" />
                  <span>تقرير فني موثق معتمد للاعتراض لدى شركة المياه الوطنية</span>
                </div>
                <div className="trust-item">
                  <CheckCircle2 size={16} color="#0284C7" />
                  <span>إمكانية الإصلاح الموضعي الفوري واختبار الضغط التأكيدي</span>
                </div>
              </div>

              <div style={{ marginTop: '24px' }}>
                <span style={{ fontSize: '0.85rem', color: '#78716C', display: 'block', marginBottom: '8px' }}>خدمات تكميلية قد تحتاجها:</span>
                <div className="cross-services-row">
                  <a href="/services/plumbing" onClick={(e) => handleLinkClick(e, '/services/plumbing')} className="cross-service-link">
                    🔧 صيانة وتجديد شبكات السباكة
                  </a>
                  <a href="/services/construction" onClick={(e) => handleLinkClick(e, '/services/construction')} className="cross-service-link">
                    🏗️ ترميم وتشطيب الحمامات
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
                  <option value="مبنى تجاري">مبنى تجاري</option>
                  <option value="استراحة / شاليه">استراحة / شاليه</option>
                </select>
              </div>

              <div className="form-group">
                <label>العَرَض أو المشكلة الأساسية:</label>
                <select
                  value={formData.symptom}
                  onChange={(e) => setFormData({ ...formData, symptom: e.target.value })}
                  className="form-select"
                >
                  <option value="ارتفاع حاد في فاتورة المياه">ارتفاع حاد في فاتورة المياه</option>
                  <option value="رطوبة وتقشر الدهان في الجدران">رطوبة وتقشر الدهان في الجدران</option>
                  <option value="المضخة (الدينمو) تعمل باستمرار">المضخة (الدينمو) تعمل باستمرار</option>
                  <option value="تسريب مياه من السقف على الدور الأسفل">تسريب مياه من السقف على الدور الأسفل</option>
                  <option value="نضوح مياه حول الخزان الأرضي أو البيارة">نضوح مياه حول الخزان الأرضي أو البيارة</option>
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
                <label>ملاحظات إضافية عن المشكلة (اختياري):</label>
                <textarea
                  rows="3"
                  placeholder="مثال: الفاتورة الشهرية تجاوزت 1500 ريال، ورطوبة واضحة في جدار المطبخ المشترك..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="form-submit-whatsapp-btn" style={{ background: '#0284C7' }}>
                <MessageCircle size={20} />
                <span>إرسال تفاصيل الفحص عبر الواتساب</span>
              </button>

              <div className="form-direct-phone-line">
                <span>أو للاتصال الفوري والمباشر: </span>
                <a href={`tel:${phoneNumber}`} dir="ltr"><strong>{phoneNumber}</strong></a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ======================================================================
          7. Leak FAQs (الأسئلة الشائعة لكشف التسريبات)
          ====================================================================== */}
      <section className="plumbing-section-wrap">
        <div className="container">
          <div className="section-head-clean">
            <span className="section-pill">إجابات فنية صريحة</span>
            <h2 className="section-big-title">أسئلة شائعة حول فحص وعلاج تسريبات المياه</h2>
            <p className="section-lead-text">
              كل ما تحتاج لمعرفته حول طريقة الكشف، التكاليف، وكيفية التعامل مع شركة المياه.
            </p>
          </div>

          <div className="plumbing-faq-accordion">
            {leakFaqs.map((faq, index) => (
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
                    <HelpCircle size={18} color="#0284C7" />
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
          8. Call To Action
          ====================================================================== */}
      <section className="plumbing-cta-section">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-banner-content">
              <span className="cta-badge" style={{ background: 'rgba(2, 132, 199, 0.2)', color: '#38BDF8', borderColor: 'rgba(2, 132, 199, 0.4)' }}>
                أجهزة إلكترونية حديثة • تقرير معتمد
              </span>
              <h2>هل تعاني من ارتفاع الفاتورة أو رطوبة الجدران وتبحث عن حل جذري؟</h2>
              <p>
                فريقنا المعتمد بجدة جاهز للوصول إلى موقعك بأحدث أجهزة الكشف الصوتي والحراري وحل المشكلة من جذورها.
              </p>
              <div className="cta-buttons-row">
                <a
                  href={getWhatsAppLink("السلام عليكم، أرغب بطلب كشف تسريبات فوري بالعقار وتحديد موعد")}
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
