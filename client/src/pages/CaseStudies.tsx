import Container from '@/components/Container'
import Section from '@/components/Section'
import { useLanguage } from '@/hooks/useLanguage'
import {
  BadgePercent,
  CheckCircle2,
  LineChart,
  Phone,
  Settings,
  Sparkles,
  Stethoscope,
  Store,
  Building2,
  Utensils,
  Car,
  Gavel,
  PhoneCall,
} from 'lucide-react'
import { useState } from 'react'

type CaseStudy = {
  sector: string
  title: string
  before: { label: string; value?: string }[]
  solution: { label: string }[]
  after: { label: string; value: string }[]
  testimonial: string
  conclusion: string
  cta: string
  icon:
    | 'b2b'
    | 'clinic'
    | 'ecom'
    | 'realestate'
    | 'restaurant'
    | 'legal'
    | 'auto'
    | 'debt'
    | 'callcenter'
}

const CASES_AR: CaseStudy[] = [
  {
    sector: 'B2B | شركة خدمات لوجستية',
    title: '30 يوم: مبيعات منظمة ورد فوري بدل ضياع العملاء',
    before: [
      { label: '40% مكالمات فائتة وقت الذروة' },
      { label: 'رد أولي بعد 6–12 ساعة' },
      { label: 'تسريب عملاء محتملين بسبب عدم المتابعة' },
    ],
    solution: [
      { label: 'وكيل صوتي يستقبل المكالمات 24/7 ويربط مباشرة بـ CRM (Pipedrive)' },
      { label: 'تصنيف تلقائي للطلبات + إرسال بريد/واتساب فوري' },
      { label: 'لوحة مؤشرات للمدير: حالة كل عميل وزمن الاستجابة' },
    ],
    after: [
      { label: 'تحويل العملاء المحتملين', value: '+45%' },
      { label: 'زمن الاستجابة', value: '-63%' },
      { label: 'إغلاق الصفقات شهرياً', value: '+28%' },
    ],
    testimonial: '“كل مكالمة محفوظة ومتابعة تلقائياً. ضياع العملاء اختفى.” — مدير المبيعات',
    conclusion: 'وكيل صوتي + ربط CRM = خط مبيعات سريع وواضح.',
    cta: 'جرّب وكيل المبيعات الذكي الآن',
    icon: 'b2b',
  },
  {
    sector: 'العقارات | مكتب وساطة',
    title: 'عقارات: متابعة فورية للمشترين بدل فوات الفرص',
    before: [
      { label: 'تأخير الرد على طلبات المعاينة' },
      { label: 'تسريب ليدز من الإعلانات' },
      { label: 'مواعيد متداخلة' },
    ],
    solution: [
      { label: 'وكيل صوتي يحجز المعاينة فوراً ويرسل الموقع' },
      { label: 'تأهيل العميل (ميزانية/منطقة) وتسجيلها في CRM' },
      { label: 'تذكير تلقائي قبل الموعد بساعتين' },
    ],
    after: [
      { label: 'حجوزات المعاينة', value: '+47%' },
      { label: 'فوات الفرص الإعلانية', value: '-38%' },
      { label: 'إغلاق الصفقات', value: '+22%' },
    ],
    testimonial: '“المعاينات تتحدد لحظياً… والفريق يركّز على الإغلاق.” — مدير المكتب',
    conclusion: 'سرعة الاستجابة تصنع الثقة… والثقة تسرّع البيع.',
    cta: 'فعّل وكيل المعاينات العقارية',
    icon: 'realestate',
  },
  {
    sector: 'مطاعم | خدمة الطلبات',
    title: 'مطعم: طلبات أسرع وتقليل الضغط على الاستقبال',
    before: [
      { label: 'ازدحام مكالمات وقت الذروة' },
      { label: 'أخطاء إدخال الطلبات' },
      { label: 'تجربة انتظار سيئة' },
    ],
    solution: [
      { label: 'وكيل صوتي يستقبل الطلب ويؤكد العنوان' },
      { label: 'تكامل مع نظام نقاط البيع لإرسال التذكرة' },
      { label: 'رسالة تتبع للعميل عبر واتساب' },
    ],
    after: [
      { label: 'سرعة تجهيز الطلب', value: '+35%' },
      { label: 'أخطاء الطلبات', value: '-42%' },
      { label: 'تقييم العملاء', value: '+29%' },
    ],
    testimonial: '“الذروة صارت أهدأ… والطلبات أوضح.” — مالك المطعم',
    conclusion: 'أتمتة الطلب + تتبع واضح = تجربة عميل أفضل.',
    cta: 'جرّب وكيل الطلبات للمطاعم',
    icon: 'restaurant',
  },
  {
    sector: 'مكتب محاماة | استشارات',
    title: 'قانوني: فرز الاستشارات وحجز الجلسات تلقائياً',
    before: [
      { label: 'مكالمات استشارة غير مصنفة' },
      { label: 'وقت مهدور في أسئلة أولية' },
      { label: 'صعوبة جدولة الجلسات' },
    ],
    solution: [
      { label: 'وكيل صوتي يجمع المعطيات ويوقّت الموعد' },
      { label: 'تصنيف القضية وتمرير المهم للمحامي المناسب' },
      { label: 'تذكير بالموعد وإرسال المستندات المطلوبة' },
    ],
    after: [
      { label: 'نسبة العملاء المؤهلين', value: '+44%' },
      { label: 'وقت ما قبل الجلسة', value: '-37%' },
      { label: 'رضا العملاء', value: '+26%' },
    ],
    testimonial: '“نستقبل القضايا الصحيحة… بوقت أقل.” — الشريك الإداري',
    conclusion: 'تأهيل ذكي يقلّل الإهدار ويرفع جودة الملفات.',
    cta: 'ابدأ بتأهيل الاستشارات قانونياً',
    icon: 'legal',
  },
  {
    sector: 'معارض سيارات | مبيعات',
    title: 'سيارات: متابعة ليدز المعارض 24/7 وحجز تجارب القيادة',
    before: [
      { label: 'تأخر الرد على نماذج الموقع' },
      { label: 'ضياع ليدز خارج أوقات الدوام' },
      { label: 'جدولة تجارب قيادة يدوياً' },
    ],
    solution: [
      { label: 'رد فوري وحجز تجربة قيادة حسب المتاح' },
      { label: 'تأهيل (الميزانية/التمويل/الموديل)' },
      { label: 'تنبيه المبيعات بخلاصة المكالمة' },
    ],
    after: [
      { label: 'حجوزات التجربة', value: '+49%' },
      { label: 'سرعة الرد', value: '+58%' },
      { label: 'تحويل المبيعات', value: '+27%' },
    ],
    testimonial: '“الفرص ما تضيع… والزيارات صارت أكثر جدية.” — مدير المعرض',
    conclusion: 'التأهيل السريع يختصر نصف الطريق للبيع.',
    cta: 'فعّل وكيل المبيعات لمعرضك',
    icon: 'auto',
  },
  {
    sector: 'تحصيل | وكالة ديون',
    title: 'تحصيل: تواصل منضبط واحترام للامتثال',
    before: [
      { label: 'محاولات اتصال عالية بتجاوب ضعيف' },
      { label: 'تباين في لهجة الحديث والامتثال' },
      { label: 'تكلفة تشغيل مرتفعة' },
    ],
    solution: [
      { label: 'وكيل صوتي بمخاطبة محترمة ونبرة ثابتة' },
      { label: 'سيناريوهات دفع متعددة وروابط فورية' },
      { label: 'تقارير امتثال وتوثيق المكالمة' },
    ],
    after: [
      { label: 'مبالغ محصلة شهرياً', value: '+38%' },
      { label: 'تكلفة التشغيل', value: '-33%' },
      { label: 'شكاوى العملاء', value: '-41%' },
    ],
    testimonial: '“لهجة ثابتة ونتائج أفضل بامتثال كامل.” — مدير العمليات',
    conclusion: 'ذكاء اصطناعي يوازن بين الحزم والاحترام.',
    cta: 'انقل التحصيل إلى نمط ذكي',
    icon: 'debt',
  },
  {
    sector: 'مراكز اتصال | تعهيد',
    title: 'كول سنتر: توزيع مكالمات ذكي وتقليل وقت الانتظار',
    before: [
      { label: 'طوابير انتظار طويلة' },
      { label: 'تفاوت جودة الرد' },
      { label: 'ضغط عالي في المواسم' },
    ],
    solution: [
      { label: 'IVR ذكي يوجه العميل للحل الأسرع' },
      { label: 'تسليم للبشري مع ملخص المكالمة' },
      { label: 'تحليلات لحظية لأوقات الذروة' },
    ],
    after: [
      { label: 'متوسط وقت الانتظار', value: '-46%' },
      { label: 'حل الطلب من أول مكالمة', value: '+34%' },
      { label: 'رضا العملاء', value: '+25%' },
    ],
    testimonial: '“الطوابير انخفضت والنتائج ارتفعت.” — مدير المركز',
    conclusion: 'التوجيه الذكي يوفر الوقت والموارد.',
    cta: 'جرّب IVR بذكاء فعلي',
    icon: 'callcenter',
  },
  {
    sector: 'القطاع الطبي | عيادة أسنان',
    title: 'عيادة أسنان: حجوزات أسرع وتجربة أهدأ بلا توظيف إضافي',
    before: [
      { label: 'مكالمات صباحية مكثفة + انتظار طويل' },
      { label: '30% مواعيد ضائعة لعدم التأكيد' },
      { label: 'تشتيت موظفي الاستقبال بين الاتصال والمرضى داخل العيادة' },
    ],
    solution: [
      { label: 'وكيل صوتي يرد خلال ثانيتين، يحجز بالمزامنة مع Google Calendar' },
      { label: 'تأكيد وإرسال تذكير تلقائي (SMS/WhatsApp)' },
      { label: 'تصنيف الحالات العاجلة وتمريرها فوراً للطبيب المناوب' },
    ],
    after: [
      { label: 'حجوزات مؤكدة', value: '+52%' },
      { label: 'الإلغاء المتأخر', value: '-41%' },
      { label: 'رضا المرضى (استبيان)', value: '+36%' },
    ],
    testimonial: '“الاستقبال هدأ والمواعيد صارت مؤكدة.” — مديرة العيادة',
    conclusion: 'رد آلي ذكي + تذكير تلقائي = تجربة مريض أفضل.',
    cta: 'ابدأ تجربة الحجز الذكي للعيادات',
    icon: 'clinic',
  },
  {
    sector: 'تجارة إلكترونية | متجر ملابس',
    title: 'متجر ملابس: دعم لحظي يزيد التكرار ويقلّل الكلفة',
    before: [
      { label: 'استفسارات شحن واستبدال غير مُجابة' },
      { label: 'تأخر في الرد عبر الهاتف والبريد' },
      { label: 'انخفاض تكرار الشراء بسبب التجربة' },
    ],
    solution: [
      { label: 'وكيل صوتي يجاوب على الأسئلة الشائعة ويصدر أرقام تتبع' },
      { label: 'تكامل مع Shopify وCRM لتحديث الحالة مباشرة' },
      { label: 'تصعيد تلقائي للبشري عند الحالات الحساسة' },
    ],
    after: [
      { label: 'سرعة حل الاستفسارات', value: '+61%' },
      { label: 'تكرار الشراء خلال 60 يوم', value: '+24%' },
      { label: 'تكلفة الدعم الشهري', value: '-32%' },
    ],
    testimonial: '“الرد فوري… رضا أعلى وتذاكر أقل.” — مالك المتجر',
    conclusion: 'سرعة + وضوح = ولاء وعائد أعلى.',
    cta: 'فعّل وكيل خدمة العملاء لمتجرك',
    icon: 'ecom',
  },
]

function IconByType({ type }: { type: CaseStudy['icon'] }) {
  const common = 'w-5 h-5'
  if (type === 'clinic') return <Stethoscope className={common} />
  if (type === 'ecom') return <Store className={common} />
  return <BadgePercent className={common} />
}

export default function CaseStudies() {
  const { locale } = useLanguage()
  const isArabic = locale === 'ar'
  const [active, setActive] = useState(0)

  return (
    <div className='min-h-screen'>
      <Section className='py-14'>
        <Container>
          {/* Header */}
          <div className='mx-auto mb-10 max-w-3xl text-center'>
            <h1 className='mb-3 text-4xl font-bold text-gray-900 md:text-5xl'>
              {isArabic ? 'دراسات الحالة' : 'Case Studies'}
            </h1>
            <p className='text-gray-600'>
              {isArabic
                ? 'نتائج حقيقية بلغة الأرقام — مختصرة، واضحة، مقنعة.'
                : 'Real results, clear and concise.'}
            </p>
          </div>

          {/* Tabs */}
          <div className='mb-8 flex flex-wrap justify-center gap-2'>
            {CASES_AR.map((c, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full border px-4 py-2 text-sm transition ${active === i ? 'text-white' : 'text-gray-700'}`}
                style={{ background: active === i ? '#3d2daa' : 'white', borderColor: '#E5E7EB' }}
              >
                {c.sector}
              </button>
            ))}
          </div>

          {/* Featured card */}
          {(() => {
            const cs = CASES_AR[active]
            return (
              <div
                className='mb-10 rounded-2xl border bg-white p-6 md:p-8'
                style={{ borderColor: '#EEF2F7' }}
              >
                <div className='mb-3 flex items-center gap-2 text-sm text-gray-600'>
                  <IconByType type={cs.icon} />
                  <span>{cs.sector}</span>
                </div>
                <h3 className='mb-6 text-2xl font-bold leading-snug text-gray-900 md:text-3xl'>
                  {cs.title}
                </h3>

                {/* KPI Row – concise chips */}
                <div className='mb-6 flex flex-wrap gap-2'>
                  {cs.after.map((a, i) => (
                    <span
                      key={i}
                      className='inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm'
                      style={{ borderColor: '#E5E7EB', background: '#F9FAFB' }}
                    >
                      <LineChart className='h-4 w-4 text-emerald-600' />
                      <span className='font-extrabold text-emerald-600'>{a.value}</span>
                      <span className='text-gray-600'>{a.label}</span>
                    </span>
                  ))}
                </div>

                {/* Timeline */}
                <div className='grid gap-4 md:grid-cols-3'>
                  <div className='rounded-xl border p-4' style={{ borderColor: '#FDE68A' }}>
                    <div className='mb-2 flex items-center gap-2 font-semibold text-amber-700'>
                      <Phone className='h-4 w-4' />
                      قبل
                    </div>
                    <ul className='list-inside list-disc space-y-1 text-sm text-gray-700'>
                      {cs.before.map((b, i) => (
                        <li key={i}>{b.label}</li>
                      ))}
                    </ul>
                  </div>
                  <div className='rounded-xl bg-gray-50 p-4'>
                    <div className='mb-2 flex items-center gap-2 font-semibold text-gray-900'>
                      <Settings className='h-4 w-4' />
                      حل سندس AI
                    </div>
                    <ul className='space-y-1 text-sm text-gray-700'>
                      {cs.solution.map((s, i) => (
                        <li key={i} className='flex items-center gap-2'>
                          <span
                            className='h-1.5 w-1.5 rounded-full'
                            style={{ background: '#3d2daa' }}
                          ></span>
                          <span>{s.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='rounded-xl border p-4' style={{ borderColor: '#BBF7D0' }}>
                    <div className='mb-2 flex items-center gap-2 font-semibold text-emerald-700'>
                      <LineChart className='h-4 w-4' />
                      بعد
                    </div>
                    <ul className='space-y-1 text-sm'>
                      {cs.after.map((a, i) => (
                        <li key={i} className='flex items-center justify-between'>
                          <span className='text-gray-700'>{a.label}</span>
                          <span className='font-bold text-emerald-600'>{a.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Testimonial + CTA */}
                <div className='mt-6 grid items-center gap-4 md:grid-cols-3'>
                  <div
                    className='rounded-xl border p-4 md:col-span-2'
                    style={{ borderColor: '#E5E7EB' }}
                  >
                    <div className='mb-1 flex items-center gap-2 font-semibold text-gray-900'>
                      <CheckCircle2 className='h-4 w-4' />
                      قالوا عنا
                    </div>
                    <p className='text-sm leading-relaxed text-gray-700'>{cs.testimonial}</p>
                  </div>
                  <div className='md:col-span-1'>
                    <p className='mb-3 flex items-center gap-2 text-sm text-gray-600'>
                      <Sparkles className='h-4 w-4' />
                      {cs.conclusion}
                    </p>
                    <button
                      className='w-full rounded-xl py-3 font-bold text-white'
                      style={{ background: 'linear-gradient(135deg, #3d2daa, #16e060)' }}
                    >
                      {cs.cta}
                    </button>
                  </div>
                </div>
              </div>
            )
          })()}

          {/* Mini cards removed as requested */}
        </Container>
      </Section>
    </div>
  )
}
