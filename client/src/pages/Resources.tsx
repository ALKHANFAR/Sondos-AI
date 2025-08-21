import React, { useState } from 'react'
import {
  BookOpen,
  Download,
  Play,
  Mail,
  Clock,
  User,
  ArrowRight,
  MessageSquare,
  FileText,
  Video,
  Headphones,
  Star,
  CheckCircle,
} from 'lucide-react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'
import { trackEvent } from '@/lib/analytics-helpers'
import SEOHead from '@/components/SEOHead'

export default function Resources() {
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en
  const isArabic = locale === 'ar'
  const [query, setQuery] = useState('')

  const sections = [
    {
      title: isArabic ? 'عام (General)' : 'General',
      items: [
        [
          'ما هو Sondos AI؟',
          'منصة ذكاء اصطناعي لأتمتة المكالمات وإدارة المحادثات لفرق المبيعات والدعم.',
        ],
        ['هل المنصة No‑Code؟', 'نعم، يمكن بناء تدفقات وتشغيل المساعدين دون كود.'],
        ['هل تدعم اللغة العربية؟', 'تدعم لغات ولهجات متعددة، ويتوسع الدعم دورياً وفق الإعدادات.'],
        ['كم لغة تدعمون؟', 'تتوفر لغات ولهجات عديدة ويجري تحديثها باستمرار.'],
        [
          'هل يمكنني التجربة مجانًا؟',
          'يمكن إنشاء حساب مجاني وتجربة الإعداد والمكالمات التجريبية المحدودة.',
        ],
        ['هل المنصة تعمل 24/7؟', 'يمكن تشغيل المساعدين في أي وقت حسب الجداول التي تحددها.'],
        ['هل تغني عن الكول سنتر؟', 'تعمل مستقلة أو مكملة لفريقك حسب سيناريو العمل.'],
        ['أبرز حالات الاستخدام؟', 'خدمة العملاء، المبيعات، الحجوزات، العقارات، المطاعم، التحصيل.'],
        ['هل مناسبة للشركات الصغيرة؟', 'نعم، قابلة للتكيّف مع أحجام الأعمال المختلفة.'],
        ['هل تناسب المؤسسات الكبيرة؟', 'مصممة للتوسع والتشغيل على نطاق واسع.'],
      ],
    },
    {
      title: 'Phone & Calls',
      items: [
        [
          'هل أقدر أستخدم رقمي الحالي؟',
          'يدعم الربط الهاتفي وإعداد هوية المتصل وفق ما تسمح به القوانين والمشغلين.',
        ],
        ['هل توفرون أرقام جديدة؟', 'تتوفر أرقام في دول متعددة ويختلف التوفّر حسب المنطقة.'],
        ['Branded Caller ID؟', 'قد يتوفر في دول محددة عبر مزودي الاتصالات.'],
        ['مكالمات واردة؟', 'نعم، عبر أرقام Inbound.'],
        [
          'كم المكالمات المتزامنة؟',
          'يعتمد على الرصيد والإعدادات وحدود مزود الاتصال، مع دعم التشغيل المتوازي.',
        ],
        ['البريد الصوتي؟', 'يمكن معالجته وفق إعداداتك ويُحتسب ضمن الاستخدام.'],
        ['تحديد مدة المكالمة؟', 'نعم، من إعدادات السكربت.'],
        ['تسجيل المكالمات؟', 'متاح كخيار وفق سياسات الخصوصية لديك.'],
        ['رد آلي؟', 'نعم، يجيب المساعد تلقائياً.'],
        ['استخدام أكثر من رقم؟', 'ممكن حسب الحملة أو الدولة.'],
      ],
    },
    {
      title: isArabic ? 'المساعد الذكي (AI Assistant)' : 'AI Assistant',
      items: [
        ['تغيير الصوت؟', 'نعم، أصوات متعددة + استنساخ.'],
        ['اللغة واللهجة؟', 'قابلة للتخصيص لكل مساعد.'],
        ['المقاطعات؟', 'يمكن ضبط حساسية الصوت والتعامل مع المقاطعات أثناء الحديث.'],
        ['حجز مواعيد؟', 'يدعم التكامل مع Google Calendar وCal.com.'],
        ['تحويل لبشري؟', 'نعم، Transfer Tool.'],
        ['الوصول لـ API؟', 'يدعم واجهات API وWebhooks أثناء/بعد المكالمة.'],
        ['التدريب؟', 'Prompts وقواعد معرفة.'],
        ['مساعدين متعددين؟', 'نعم، لكل حملة مساعد.'],
        ['التعلم؟', 'تحسين بالإعدادات والنتائج.'],
        ['تشغيل في دول مختلفة؟', 'نعم، بأرقام محلية أو دولية.'],
      ],
    },
    {
      title: isArabic ? 'الأسعار والفوترة' : 'Pricing & Billing',
      items: [
        [
          'كيف تُحسب التكلفة؟',
          'تعتمد على وقت المكالمات وتكاليف الاتصالات وتختلف حسب المنطقة والباقات.',
        ],
        ['هل الأسعار ثابتة؟', 'تختلف حسب الباقة والدولة.'],
        ['الرصيد يتجدد تلقائياً؟', 'إدارة الرصيد مرنة ويمكن الشحن حسب الحاجة.'],
        ['رسوم خفية؟', 'لا، يتم عرض تفاصيل التسعير قبل الشراء.'],
        ['خصومات للكميات؟', 'متاحة للاستخدام العالي وفق سياسة التسعير.'],
        ['الدفع بالعملة المحلية؟', 'تتوفر بوابات دفع تدعم تحويل العملة محلياً حسب الدولة.'],
        ['باقة مجانية؟', 'متاحة للتجربة المحدودة.'],
        ['طرق الدفع؟', 'بطاقات وبوابات دفع معتمدة حسب المنطقة.'],
        ['شهري أو سنوي؟', 'الاثنان متاحان.'],
        ['عقود إلزامية؟', 'لا، اشتراك مرن.'],
      ],
    },
    {
      title: isArabic ? 'الحملات (Campaigns)' : 'Campaigns',
      items: [
        ['ما هي الحملة الصادرة؟', 'مجموعة مكالمات لعملاء محددين.'],
        ['تشغيل أكثر من حملة؟', 'يمكن تشغيل عدة حملات بالتوازي ضمن الحدود الفنية.'],
        ['إيقاف مؤقت؟', 'نعم واستئناف لاحقاً.'],
        ['تعديل القائمة أثناء الحملة؟', 'نعم، CSV أو Google Sheets.'],
        ['اختبار قبل الإطلاق؟', 'يتوفر وضع اختبار لتجربة الإعداد قبل الإرسال الفعلي.'],
        ['رسالة مخصصة لكل عميل؟', 'نعم عبر دمج البيانات.'],
        ['جدولة الحملات؟', 'نعم بوقت وتاريخ محدد.'],
        ['حملات ضخمة؟', 'يدعم التشغيل واسع النطاق وفق الإعدادات والموارد.'],
        ['نتائج الحملة؟', 'متابعة عبر Dashboard.'],
        ['إعادة الاتصال؟', 'يمكن تفعيل سياسات إعادة المحاولة وفق إعداداتك.'],
      ],
    },
    {
      title: 'Integrations',
      items: [
        ['Google Sheets؟', 'مدعوم عبر موصلات وتكاملات بدون كود.'],
        ['HubSpot/Zoho/Salesforce؟', 'يمكن الربط عبر موصلات جاهزة أو عبر API.'],
        ['إشعارات بعد المكالمة؟', 'يدعم Slack والبريد وWebhooks.'],
        ['SMS؟', 'متاح للأرقام المدعومة حسب المنطقة.'],
        ['واتساب؟', 'يتوفر عبر مزودي تكامل خارجيين.'],
        ['أنظمة CRM/ERP أخرى؟', 'مدعومة عبر API وWebhooks.'],
        ['دفع إلكتروني؟', 'يمكن الدمج عبر API.'],
        ['سحابات وملفات؟', 'يدعم الربط عبر موصلات بدون كود.'],
      ],
    },
    {
      title: isArabic ? 'الأمان والخصوصية' : 'Security',
      items: [
        ['البيانات مشفرة؟', 'يتم تطبيق التشفير أثناء النقل ومع خيارات للتخزين الآمن.'],
        ['حذف بيانات العملاء؟', 'متاح يدوياً أو عبر API بحسب سياساتك.'],
        ['تخزين المكالمات؟', 'اختياري ويمكن التحكم بفترات الاحتفاظ.'],
        ['ضوابط الوصول؟', 'يدعم أدوار وصلاحيات للمستخدمين داخل الفريق.'],
      ],
    },
    {
      title: isArabic ? 'الدعم الفني' : 'Support',
      items: [
        ['التواصل؟', 'يمكن التواصل عبر البريد، المحادثة، أو تذاكر الدعم.'],
        ['الدعم 24/7؟', 'تختلف ساعات الدعم حسب الباقة، وتتوفر أولوية أعلى للباقات المتقدمة.'],
        ['تدريب؟', 'جلسات مباشرة.'],
        ['Onboarding؟', 'للبدء السريع.'],
        ['استشارات مخصصة؟', 'Customer Success.'],
        ['قاعدة معرفة؟', 'docs.sondos.ai.'],
        ['فيديوهات تعليمية؟', 'Tutorials.'],
        ['زمن الرد؟', 'نسعى للرد السريع وفق أولوية التذاكر والباقات.'],
        ['تخصيص دعم؟', 'نعم مع Enterprise.'],
        ['دعم بالعربية؟', 'نعم.'],
      ],
    },
    {
      title: isArabic ? 'الأداء والتوسع' : 'Performance & Scaling',
      items: [
        ['آلاف المكالمات؟', 'يدعم التشغيل المتوازي والتوسع الأفقي وفق الحاجة.'],
        ['معدل النجاح؟', 'يعتمد على البلد والمشغل وجودة الشبكة.'],
        ['مدة المكالمة؟', 'تختلف حسب السيناريو وغالباً بضع دقائق.'],
        ['A/B Testing؟', 'يمكن اختبار الإعدادات والحملات لتحسين النتائج.'],
        ['نغمة انتظار؟', 'نعم.'],
        ['حملات ضخمة بسرعة؟', 'يدعم التنفيذ على موارد سحابية متوازية.'],
        ['ضغط عالي؟', 'تم تصميم البنية لتحمل الضغط العالي مع مراقبة مستمرة.'],
        ['لوحة أداء؟', 'نعم.'],
        ['متابعة الجودة؟', 'متوفر عبر تقارير ولوحات متابعة.'],
        ['توسع عالمي؟', 'بنية قابلة للتوسع عالمياً.'],
      ],
    },
    {
      title: isArabic ? 'إضافات' : 'Extras',
      items: [
        ['دفع داخل المكالمة؟', 'يمكن الدمج عبر API وفق مزود الدفع لديك.'],
        ['Web Call Widget؟', 'يمكن توفير الاتصال من الويب عبر تكاملات مناسبة.'],
        ['تقارير مخصصة؟', 'لوحات وتقارير قابلة للتخصيص والتصدير.'],
        ['White Label؟', 'يتوفر برنامج إعادة بيع بعلامتك وفق الخطة.'],
        ['تشغيل داخلي؟', 'يتم عبر ترتيبات خاصة للاحتياجات الكبرى.'],
        ['ساعات العمل؟', 'نعم بجدولة.'],
        ['مكالمات طوارئ؟', 'غير مخصص لمكالمات الطوارئ.'],
        ['API للمطورين؟', 'متوفر مع Webhooks.'],
        ['Slack؟', 'مدعوم عبر التكاملات.'],
        ['نقل الرقم؟', 'يمكن من خلال مزودي SIP والربط الهاتفي.'],
      ],
    },
  ]

  // Helper to improve very short answers into short, useful sentences
  const polish = (a: string) => {
    const trimmed = a.trim()
    if (trimmed === 'نعم' || trimmed === 'نعم.' || trimmed.toLowerCase() === 'yes') {
      return 'نعم، متاح ومدعوم ضمن الإعدادات.'
    }
    if (trimmed === 'لا' || trimmed === 'لا.' || trimmed.toLowerCase() === 'no') {
      return 'لا، غير مدعوم حالياً.'
    }
    return a
  }

  const filtered = sections
    .map(s => ({
      ...s,
      items: s.items.filter(qa => {
        if (!query) return true
        const ql = query.toLowerCase()
        return qa[0].toLowerCase().includes(ql) || qa[1].toLowerCase().includes(ql)
      }),
    }))
    .filter(s => s.items.length > 0)

  return (
    <>
      <SEOHead page="resources" />
      {/* Hero Section */}
      <Section className='bg-gradient-to-br from-green-50/50 via-white to-blue-50/30 pt-32'>
        <Container>
          <div className='mb-16 text-center'>
            <h1 className='mb-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl'>
              {isArabic ? 'الأسئلة الشائعة' : 'Help & FAQ'}
            </h1>
            <p className='mx-auto max-w-3xl text-xl leading-relaxed text-gray-600'>
              {isArabic
                ? 'إجابات واضحة ومنظمة عن أكثر ما يهمك.'
                : 'Clear, organized answers to what matters most.'}
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className='bg-white'>
        <Container>
          <div className='mx-auto max-w-5xl'>
            {/* Search */}
            <div className='mb-8'>
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={isArabic ? 'ابحث في الأسئلة…' : 'Search in questions…'}
                className='w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2'
                style={{ borderColor: '#E5E7EB' }}
              />
            </div>

            {filtered.map((sec, si) => (
              <div key={si} className='mb-10'>
                <h3 className='mb-4 text-2xl font-bold text-gray-900'>{sec.title}</h3>
                <Accordion type='single' collapsible className='w-full rounded-2xl border'>
                  {sec.items.map((qa, qi) => (
                    <AccordionItem key={qi} value={`item-${si}-${qi}`}>
                      <AccordionTrigger className='px-4 text-right'>{qa[0]}</AccordionTrigger>
                      <AccordionContent className='px-4 pb-4 text-gray-700'>
                        {polish(qa[1])}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
