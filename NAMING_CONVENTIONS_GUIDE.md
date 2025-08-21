# دليل المعايير الدولية للمسميات | International Naming Standards Guide

## نظرة عامة | Overview

هذا الدليل يوضح المعايير الدولية المطبقة في مشروع سندس AI لضمان الامتثال للمعايير العالمية في التطوير والوصول (Accessibility) والتدويل (i18n).

This guide outlines the international standards applied in the Sondos AI project to ensure compliance with global development, accessibility, and internationalization standards.

---

## 1. معايير التسمية | Naming Standards

### 1.1 مكونات React | React Components

#### ✅ الممارسات الصحيحة | Best Practices
```typescript
// Component Names - PascalCase
export default function Hero() { }
export default function DemoCallForm() { }
export default function TestimonialsSection() { }

// Props Interface
interface HeroProps {
  title?: string;
  subtitle?: string;
}

// Hook Names - camelCase with 'use' prefix
export function useLanguage() { }
export function useLeadMagnet() { }
```

#### ❌ تجنب | Avoid
```typescript
// Wrong naming
export default function hero() { }
export default function Demo_Call_Form() { }
function Language() { } // Missing 'use' for hooks
```

### 1.2 CSS Classes | فئات CSS

#### ✅ نظام BEM المعدل | Modified BEM System
```css
/* Block - Component name with semantic meaning */
.header { }
.hero-section { }
.hero-content { }
.hero-actions { }

/* Element - Specific parts */
.header__nav { }
.header__logo { }
.header__actions { }
.hero-badge { }
.hero-kpi { }
.hero-avatar { }
.nav-item { }
.nav-dropdown { }

/* Modifier - Variations */
.header--scrolled { }
.header--top { }
.nav-item--active { }
.nav-item--inactive { }
.nav-link--external { }
.nav-cta--mobile { }
.hero-bg-blur--primary { }
.hero-bg-blur--secondary { }
.hero-avatar--blue { }
.hero-btn--secondary { }
```

#### ✅ فئات الوظائف | Utility Classes
```css
/* Layout utilities */
.flex { }
.grid { }
.space-y-4 { }

/* Responsive utilities */
.sm:w-auto { }
.md:grid-cols-3 { }
.lg:grid-cols-2 { }

/* RTL support */
.rtl:space-x-reverse { }
.rtl:sm:space-x-reverse { }
```

---

## 2. معايير الوصول | Accessibility Standards (WCAG 2.1 AA)

### 2.1 السمات الضرورية | Required Attributes

#### ✅ ARIA Labels والأدوار | ARIA Labels and Roles
```typescript
// Semantic roles
<header role="banner" aria-label="Main navigation">
<nav role="navigation" aria-label="Primary navigation">
<div role="menubar" aria-label="Main navigation menu">
<div role="menuitem" aria-haspopup="menu">
<Section role="banner" aria-labelledby="hero-title">
<aside role="complementary" aria-labelledby="demo-form-title">
<div role="list" aria-label="Trust badges">
<div role="listitem">

// Accessible labels with i18n
<h1 id="hero-title" role="heading" aria-level={1}>
<button aria-label={item.ariaLabel || item.label}>
<input aria-describedby="search-description">
<div aria-hidden="true"> // For decorative elements

// RTL-aware labels
aria-label={isRTL ? 'فتح البحث' : 'Open search'}
title={isRTL ? 'البحث في الموقع' : 'Search the website'}
```

#### ✅ معرفات فريدة | Unique Identifiers
```typescript
// Clear, descriptive IDs
<div id="pickup-rate-value" aria-label="100 percent">
<div id="pickup-rate-label">
<div aria-labelledby="pickup-rate-value pickup-rate-label">
```

### 2.2 النصوص البديلة | Alternative Text

#### ✅ للأيقونات والعناصر المرئية | For Icons and Visual Elements
```typescript
// Icons with semantic meaning
<CheckCircle 
  className="h-4 w-4 text-green-500" 
  aria-hidden="true" 
/>

// Decorative elements
<div 
  className="hero-bg-blur" 
  aria-hidden="true"
>
```

---

## 3. معايير التدويل | Internationalization Standards (i18n)

### 3.1 هيكل الرسائل | Messages Structure

#### ✅ تنظيم هرمي واضح | Clear Hierarchical Organization
```typescript
export const messages = {
  en: {
    nav: {
      solution: 'Solution',
      industries: 'Industries',
      // ...
    },
    home: {
      title: 'AI Voice Agents that answer every call',
      badges: {
        customers: '250+ Happy Customers',
        uptime: '99.5% Uptime',
        support: '24/7 Support',
      },
      kpis: {
        pickupRate: 'Call Pickup Rate',
        fasterResponse: 'Faster Response',
        costReduction: 'Cost Reduction',
      }
    }
  },
  ar: {
    nav: {
      solution: 'الحل',
      industries: 'الصناعات',
      // ...
    },
    home: {
      title: 'ولا مكالمة تروح عليك — وكلاؤنا بالذكاء الاصطناعي دايمًا يردّون',
      badges: {
        customers: '+250 عميل سعيد',
        uptime: '99.5% وقت تشغيل',
        support: 'دعم 24/7',
      },
      kpis: {
        pickupRate: 'نسبة الرد على المكالمات',
        fasterResponse: 'استجابة أسرع',
        costReduction: 'تخفيض التكاليف',
      }
    }
  }
};
```

### 3.2 دعم RTL | RTL Support

#### ✅ فئات CSS للاتجاه | Direction-aware CSS Classes
```typescript
// RTL-aware spacing
<div className="space-x-4 rtl:space-x-reverse">

// RTL-aware margins
<Play className="mr-2 rtl:ml-2 rtl:mr-0" />

// Document direction setting
document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = locale === 'ar' ? 'ar' : 'en';
```

### 3.3 الخطوط المتعددة | Multi-font Support

#### ✅ تحميل ديناميكي للخطوط | Dynamic Font Loading
```typescript
// Arabic font support
if (locale === 'ar') {
  document.body.classList.add('font-arabic');
} else {
  document.body.classList.remove('font-arabic');
}
```

---

## 4. معايير SEO | SEO Standards

### 4.1 العلامات الوصفية | Meta Tags

#### ✅ دعم متعدد اللغات | Multi-language Support
```typescript
// Dynamic SEO based on locale
const currentTitle = isRTL ? arSEO.title : title;
const currentDescription = isRTL ? arSEO.description : description;
const currentKeywords = isRTL ? arSEO.keywords : keywords;

// Language indicators
<html lang={langCode} dir={isRTL ? 'rtl' : 'ltr'}>
```

### 4.2 الهيكل الدلالي | Semantic Structure

#### ✅ HTML5 الدلالي | Semantic HTML5
```typescript
<header role="banner">
<main role="main">
<aside role="complementary">
<footer role="contentinfo">
<nav role="navigation">
```

---

## 5. معايير TypeScript | TypeScript Standards

### 5.1 تعريف الأنواع | Type Definitions

#### ✅ واجهات واضحة | Clear Interfaces
```typescript
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  role?: string;
  'aria-labelledby'?: string;
  'aria-label'?: string;
}

interface LanguageContextValue {
  locale: Locale;
  changeLocale: (locale: Locale) => void;
}

type Locale = 'en' | 'ar' | 'es' | 'fr' | 'de' | 'tr' | 'zh' | 'pt';
```

---

## 6. معايير الأداء | Performance Standards

### 6.1 التحميل الذكي | Smart Loading

#### ✅ تقسيم الكود | Code Splitting
```typescript
// Lazy loading for routes
const Industries = lazy(() => import('@/pages/Industries'));
const Pricing = lazy(() => import('@/pages/Pricing'));

// Dynamic imports for large libraries
const { Chart } = await import('chart.js');
```

### 6.2 تحسين الصور | Image Optimization

#### ✅ تنسيقات حديثة | Modern Formats
```typescript
// WebP with fallback
<picture>
  <source srcSet="/hero.webp" type="image/webp" />
  <img src="/hero.jpg" alt="Hero image" />
</picture>
```

---

## 7. معايير الأمان | Security Standards

### 7.1 التحقق من الإدخال | Input Validation

#### ✅ تنظيف البيانات | Data Sanitization
```typescript
// Form validation
const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// XSS prevention
const sanitizeInput = (input: string) => {
  return DOMPurify.sanitize(input);
};
```

---

## 8. قائمة التحقق | Checklist

### ✅ معايير إجبارية | Mandatory Standards

- [ ] جميع المكونات تستخدم PascalCase
- [ ] جميع الـ hooks تبدأ بـ "use"
- [ ] ARIA labels لجميع العناصر التفاعلية
- [ ] دعم RTL كامل للعربية
- [ ] TypeScript interfaces لجميع الProps
- [ ] SEO meta tags متعددة اللغات
- [ ] اختبار accessibility (WCAG 2.1 AA)
- [ ] اختبار responsive design
- [ ] اختبار keyboard navigation
- [ ] اختبار screen readers

### 🔄 معايير تحسينية | Enhancement Standards

- [ ] Progressive Web App (PWA) support
- [ ] Service Worker للتخزين المؤقت
- [ ] Image optimization وWebP
- [ ] Critical CSS inlining
- [ ] Bundle size optimization
- [ ] Performance monitoring
- [ ] Error boundary implementation
- [ ] Analytics integration

---

## 9. الأدوات والتحقق | Tools and Validation

### 9.1 أدوات التطوير | Development Tools

```bash
# Accessibility testing
npm install --save-dev @axe-core/react

# Type checking
npm run type-check

# Linting
npm run lint

# Testing
npm run test:a11y
```

### 9.2 أدوات التحقق | Validation Tools

- **axe-core**: اختبار الوصول
- **Lighthouse**: أداء و SEO
- **WAVE**: تحليل الوصول
- **Color Contrast Analyzer**: تباين الألوان

---

## خلاصة | Summary

هذا الدليل يضمن:
- **الامتثال للمعايير الدولية** في التطوير
- **الوصول الشامل** لجميع المستخدمين
- **دعم التدويل** الكامل
- **الأداء المحسن** والأمان

This guide ensures:
- **International standards compliance** in development
- **Universal accessibility** for all users  
- **Complete internationalization** support
- **Optimized performance** and security