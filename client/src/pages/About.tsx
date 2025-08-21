import Container from '@/components/Container'
import Section from '@/components/Section'
import { useLanguage } from '@/hooks/useLanguage'
import SEOHead from '@/components/SEOHead'

export default function About() {
  const { locale } = useLanguage()
  const isArabic = locale === 'ar'

  return (
    <>
      <SEOHead page="about" />
      <div className='min-h-screen'>
        <Section className='py-16'>
        <Container>
          <div className='mx-auto max-w-5xl'>
            <div className='mb-8 text-center'>
              <h1 className='mb-3 text-4xl font-bold text-gray-900 md:text-5xl'>
                {isArabic ? 'من نحن – سندس AI' : 'About – Sondos AI'}
              </h1>
              <p className='text-gray-600'>
                {isArabic
                  ? 'نحو خدمة عملاء ذكية، فورية، ومقنعة.'
                  : 'Smart, instant, persuasive customer experience.'}
              </p>
            </div>

            {/* Intro */}
            <div
              className='mb-8 rounded-2xl border bg-white p-6 md:p-8'
              style={{ borderColor: '#EEF2F7' }}
            >
              <h2 className='mb-3 text-xl font-bold text-gray-900'>
                {isArabic ? 'رسالتنا' : 'Our Mission'}
              </h2>
              <p className='text-lg leading-relaxed text-gray-800'>
                {isArabic
                  ? 'نساعد الشركات على تحويل الاتصال الهاتفي والمحادثات إلى تجربة ذكية ومقنعة تُبنى عليها الثقة وتتحقق منها النتائج.'
                  : 'We help companies turn calls and conversations into smart, persuasive experiences that build trust and drive outcomes.'}
              </p>
            </div>

            {/* Numbers band */}
            <div className='mb-8 flex flex-wrap gap-3'>
              <div
                className='rounded-xl border bg-white px-4 py-3'
                style={{ borderColor: '#EEF2F7' }}
              >
                <div className='text-2xl font-extrabold text-emerald-600'>2,500+</div>
                <div className='text-sm text-gray-600'>
                  {isArabic ? 'شركة تثق بنا' : 'Businesses'}
                </div>
              </div>
              <div
                className='rounded-xl border bg-white px-4 py-3'
                style={{ borderColor: '#EEF2F7' }}
              >
                <div className='text-2xl font-extrabold text-emerald-600'>2.5M+</div>
                <div className='text-sm text-gray-600'>
                  {isArabic ? 'مكالمة شهرياً' : 'Calls / month'}
                </div>
              </div>
              <div
                className='rounded-xl border bg-white px-4 py-3'
                style={{ borderColor: '#EEF2F7' }}
              >
                <div className='text-2xl font-extrabold text-emerald-600'>2</div>
                <div className='text-sm text-gray-600'>{isArabic ? 'لغتان' : 'Languages'}</div>
              </div>
              <div
                className='rounded-xl border bg-white px-4 py-3'
                style={{ borderColor: '#EEF2F7' }}
              >
                <div className='text-2xl font-extrabold text-emerald-600'>99.5%</div>
                <div className='text-sm text-gray-600'>
                  {isArabic ? 'توفر المنصّة (SLA)' : 'Uptime SLA'}
                </div>
              </div>
            </div>

            {/* Presence + value bullets */}
            <div className='grid gap-6 md:grid-cols-2'>
              <div className='rounded-2xl border bg-white p-6' style={{ borderColor: '#EEF2F7' }}>
                <h3 className='mb-3 font-bold text-gray-900'>
                  {isArabic ? 'مقارّنا' : 'Our Presence'}
                </h3>
                <p className='mb-2 text-gray-700'>
                  {isArabic
                    ? 'الرياض – السعودية | ديلاوير – الولايات المتحدة'
                    : 'Riyadh, KSA | Delaware, USA'}
                </p>
                <p className='text-gray-700'>
                  {isArabic
                    ? 'نصمّم حلول مركز اتصال ومحادثات ذكية للشركات الطموحة.'
                    : 'We design modern contact center & conversational AI for ambitious teams.'}
                </p>
              </div>
              <div className='rounded-2xl border bg-white p-6' style={{ borderColor: '#EEF2F7' }}>
                <h3 className='mb-3 font-bold text-gray-900'>
                  {isArabic ? 'ماذا نقدّم' : 'What We Deliver'}
                </h3>
                <ul className='list-inside list-disc space-y-2 text-gray-700'>
                  <li>
                    {isArabic
                      ? 'تخفيض التكاليف التشغيلية حتى 70%'
                      : 'Operational cost reduction up to 70%'}{' '}
                  </li>
                  <li>
                    {isArabic
                      ? 'زيادة الإيرادات بوكلاء ذكاء اصطناعي مدرّبين على المبيعات'
                      : 'Revenue growth with AI agents trained for sales'}{' '}
                  </li>
                  <li>
                    {isArabic
                      ? 'تحسين الرضا بالردود الفورية وتحليلات لحظية للمشاعر'
                      : 'Higher CSAT with instant responses and live sentiment analytics'}
                  </li>
                </ul>
              </div>
            </div>

            {/* Values */}
            <div className='my-8 grid gap-6 md:grid-cols-3'>
              {[
                {
                  h: isArabic ? 'الثقة أولاً' : 'Trust first',
                  p: isArabic
                    ? 'شفافية في التجربة، وضوح في النتائج.'
                    : 'Transparent experience. Clear outcomes.',
                },
                {
                  h: isArabic ? 'أثر ملموس' : 'Measurable impact',
                  p: isArabic
                    ? 'نقيس كل مكالمة لنحسّن كل قرار.'
                    : 'We measure every call to improve every decision.',
                },
                {
                  h: isArabic ? 'بساطة تُقنع' : 'Simplicity that persuades',
                  p: isArabic
                    ? 'تجربة سلسة للعميل وفريقك معاً.'
                    : 'A smooth experience for customers and your team.',
                },
              ].map((v, i) => (
                <div
                  key={i}
                  className='rounded-2xl border bg-white p-6'
                  style={{ borderColor: '#EEF2F7' }}
                >
                  <h3 className='mb-2 font-bold text-gray-900'>{v.h}</h3>
                  <p className='text-gray-700'>{v.p}</p>
                </div>
              ))}
            </div>

            {/* Compliance */}
            <div
              className='my-8 rounded-2xl border bg-white p-6 md:p-8'
              style={{ borderColor: '#EEF2F7' }}
            >
              <h3 className='mb-3 font-bold text-gray-900'>
                {isArabic ? 'الأمان والامتثال' : 'Security & Compliance'}
              </h3>
              <ul className='list-inside list-disc space-y-2 text-gray-700'>
                <li>
                  {isArabic
                    ? 'تشفير للبيانات أثناء النقل والتخزين'
                    : 'Encryption in transit and at rest'}
                </li>
                <li>
                  {isArabic
                    ? 'ضوابط وصول وحدود صلاحيات على مستوى الفريق'
                    : 'Role-based access controls'}
                </li>
                <li>
                  {isArabic
                    ? 'جاهزية للخصوصية (GDPR) وخيارات استضافة مرنة'
                    : 'Privacy-ready (GDPR) with flexible data residency'}
                </li>
                <li>
                  {isArabic
                    ? 'توفر 99.9% مع مراقبة مستمرة'
                    : '99.9% availability with continuous monitoring'}
                </li>
              </ul>
              <p className='mt-4 text-gray-800'>
                {isArabic
                  ? 'لسنا مورّد تقنية فقط؛ نحن شريك نمو يحوّل مركز الاتصال من مركز تكلفة إلى محرّك عائد وولاء. مع سندس AI، يصبح كل اتصال فرصة.'
                  : 'We are a growth partner—not just a vendor. With Sondos AI your contact center becomes a revenue and loyalty engine.'}
              </p>
            </div>

            {/* CTA */}
            <div className='text-center'>
              <a
                href='/signup'
                className='inline-flex items-center justify-center rounded-xl px-6 py-3 font-bold text-white'
                style={{ background: 'linear-gradient(135deg, #3d2daa, #16e060)' }}
              >
                {isArabic ? 'ابدأ رحلتك الآن' : 'Start your journey'}
              </a>
            </div>
          </div>
        </Container>
      </Section>
      </div>
    </>
  )
}
