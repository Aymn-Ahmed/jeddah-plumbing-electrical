import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HomePage from './pages/HomePage';
import PlumbingPage from './pages/PlumbingPage';
import ElectricalPage from './pages/ElectricalPage';
import LeakDetectionPage from './pages/LeakDetectionPage';
import ConstructionPage from './pages/ConstructionPage';

export default function App() {
  // Normalize current path from window.location.pathname or hash
  const getInitialPath = () => {
    if (typeof window === 'undefined') return '/';
    const hash = window.location.hash;
    if (hash) {
      if (hash.startsWith('#/services/plumbing') || hash === '#plumbing') return '/services/plumbing';
      if (hash.startsWith('#/services/electrical') || hash === '#electrical') return '/services/electrical';
      if (hash.startsWith('#/services/leak-detection') || hash === '#leak-detection') return '/services/leak-detection';
      if (hash.startsWith('#/services/construction') || hash === '#construction') return '/services/construction';
    }
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    if (
      path === '/services/plumbing' ||
      path === '/services/electrical' ||
      path === '/services/leak-detection' ||
      path === '/services/construction'
    ) {
      return path;
    }
    return '/';
  };

  const [currentPath, setCurrentPath] = useState(getInitialPath);

  // Synchronize browser history and popstate
  useEffect(() => {
    const handlePopState = () => {
      const path = getInitialPath();
      setCurrentPath(path);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update Document Title and Meta Tags based on Route
  useEffect(() => {
    let title = "سباكة وكهرباء جدة 🔧⚡ | المركز الرئيسي: حي الأجاويد وكافة أحياء جدة - 0555046951";
    let desc = "أفضل خدمات ومقاولات سباكة وكهرباء بجدة. المركز الرئيسي: حي الأجاويد مع تغطية سريعة لكافة أحياء جدة. تأسيس، تشطيب، كشف تسريبات وضمان 15 سنة. اتصل الآن: 0555046951";

    if (currentPath === '/services/plumbing') {
      title = "خدمات السباكة بجدة 🔧 | تأسيس وتمديدات معتمدة بضمان 15 سنة - 0555046951";
      desc = "خدمات سباكة متكاملة بجدة. تأسيس فلل، تمديد معلق، اختبار ضغط 12 بار، معالجة تسريبات، وتشطيب سيفونات مدفونة وضمان كتابي 15 سنة. اتصل الآن: 0555046951";
    } else if (currentPath === '/services/electrical') {
      title = "خدمات الكهرباء والتأريض بجدة ⚡ | موازنة أحمال وكود SBC - 0555046951";
      desc = "تأسيس وتمديد شبكات الكهرباء للفلل والعمائر بجدة. سحب كابلات الفنار، موازنة أحمال التكييف، تنظيم وتوزيع الطبالين، وشبكات تأريض معتمدة وضمان 15 سنة. اتصل: 0555046951";
    } else if (currentPath === '/services/leak-detection') {
      title = "كشف تسريبات المياه بجدة 🔍 | فحص إلكتروني بدون تكسير عشوائي - 0555046951";
      desc = "خدمة كشف تسريبات المياه المعتمدة بجدة بأحدث الأجهزة الإلكترونية والصوتية. تحديد مكان التسريب بدقة، تقرير فني، معالجة فورية وتخفيض فواتير المياه. اتصل: 0555046951";
    } else if (currentPath === '/services/construction') {
      title = "مقاولات سباكة وكهرباء وتشطيب الفلل بجدة 🏗️ | من العظم للتسليم - 0555046951";
      desc = "مؤسسة مقاولات معتمدة بجدة لأعمال السباكة والكهرباء والتشطيب المتكامل للعمائر والفلل. عقود موثقة، تنفيذ بالكود السعودي SBC، إشراف هندسي وضمان 15 سنة. اتصل: 0555046951";
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    }
  }, [currentPath]);

  // Navigate Handler
  const navigateTo = (path) => {
    if (path === currentPath) return;
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // WhatsApp context message per page
  const getFloatingMessage = () => {
    if (currentPath === '/services/plumbing') {
      return "السلام عليكم، أود الاستفسار وطلب معاينة لخدمات السباكة مع الضمان";
    }
    if (currentPath === '/services/electrical') {
      return "السلام عليكم، أود الاستفسار وطلب معاينة لخدمات الكهرباء وموازنة الأحمال";
    }
    if (currentPath === '/services/leak-detection') {
      return "السلام عليكم، أرغب بطلب فحص كشف تسريبات مياه عاجل بالعقار";
    }
    if (currentPath === '/services/construction') {
      return "السلام عليكم، أرغب بطلب مقايسة وعرض سعر لمشروع مقاولة تأسيس وتشطيب";
    }
    return "السلام عليكم، أرغب بحجز موعد معاينة واستفسار عن الضمان";
  };

  return (
    <div className="site-wrapper warm-light-theme">
      {/* Shared Persistent Navbar */}
      <Navbar currentPath={currentPath} onNavigate={navigateTo} />

      {/* Main Routed Content */}
      <main id="main-content">
        {currentPath === '/services/plumbing' && <PlumbingPage onNavigate={navigateTo} />}
        {currentPath === '/services/electrical' && <ElectricalPage onNavigate={navigateTo} />}
        {currentPath === '/services/leak-detection' && <LeakDetectionPage onNavigate={navigateTo} />}
        {currentPath === '/services/construction' && <ConstructionPage onNavigate={navigateTo} />}
        {currentPath === '/' && <HomePage onNavigate={navigateTo} />}
      </main>

      {/* Shared Persistent Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Shared Floating WhatsApp Action */}
      <FloatingWhatsApp message={getFloatingMessage()} />
    </div>
  );
}
