import React, { useState } from 'react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import SEOHead from '@/components/SEOHead'
import { useLanguage } from '@/hooks/useLanguage'
import { 
  Phone, 
  Brain, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Play,
  Shield,
  Clock,
  Globe,
  Users,
  BarChart,
  Settings
} from 'lucide-react'

interface Step {
  icon: React.ReactNode
  title: {
    en: string
    ar: string
  }
  description: {
    en: string
    ar: string
  }
  details: {
    en: string[]
    ar: string[]
  }
}

const steps: Step[] = [
  {
    icon: <Phone className="h-8 w-8" />,
    title: {
      en: '1. Call Reception',
      ar: '1. استقبال المكالمة'
    },
    description: {
      en: 'AI voice agent answers every call 24/7',
      ar: 'يجيب وكلاء الذكاء الاصطناعي الصوتي على كل مكالمة على مدار الساعة'
    },
    details: {
      en: [
        'Professional greeting in multiple languages',
        'Automatic call identification and routing',
        '24/7 availability without breaks',
        'Instant response to customer inquiries'
      ],
      ar: [
        'تحية احترافية بلغات متعددة',
        'تحديد المكالمة والتوجيه التلقائي',
        'توفر على مدار الساعة بدون انقطاع',
        'استجابة فورية لاستفسارات العملاء'
      ]
    }
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: {
      en: '2. AI Understanding',
      ar: '2. فهم الذكاء الاصطناعي'
    },
    description: {
      en: 'Advanced NLP processes customer requests',
      ar: 'معالجة اللغات الطبيعية المتقدمة لطلبات العملاء'
    },
    details: {
      en: [
        'Natural language processing (NLP)',
        'Context awareness and conversation flow',
        'Multi-language support (Arabic, English, 20+)',
        'Emotion detection and response adaptation'
      ],
      ar: [
        'معالجة اللغات الطبيعية (NLP)',
        'الوعي بالسياق وتدفق المحادثة',
        'دعم متعدد اللغات (العربية، الإنجليزية، 20+)',
        'اكتشاف المشاعر وتكيف الاستجابة'
      ]
    }
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: {
      en: '3. Intelligent Action',
      ar: '3. الإجراء الذكي'
    },
    description: {
      en: 'AI performs tasks and provides solutions',
      ar: 'يقوم الذكاء الاصطناعي بالمهام ويقدم الحلول'
    },
    details: {
      en: [
        'Appointment scheduling and management',
        'Lead qualification and scoring',
        'Customer information collection',
        'Integration with business systems'
      ],
      ar: [
        'جدولة وإدارة المواعيد',
        'تأهيل وتقييم العملاء المحتملين',
        'جمع معلومات العملاء',
        'التكامل مع أنظمة الأعمال'
      ]
    }
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: {
      en: '4. Result Delivery',
      ar: '4. تسليم النتيجة'
    },
    description: {
      en: 'Customer receives immediate solution',
      ar: 'يحصل العميل على الحل الفوري'
    },
    details: {
      en: [
        'Instant confirmation and details',
        'Follow-up scheduling if needed',
        'Integration with CRM systems',
        'Performance analytics and reporting'
      ],
      ar: [
        'تأكيد فوري وتفاصيل',
        'جدولة المتابعة إذا لزم الأمر',
        'التكامل مع أنظمة إدارة علاقات العملاء',
        'تحليلات الأداء والتقارير'
      ]
    }
  }
]

const features = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: {
      en: 'Enterprise Security',
      ar: 'أمان المؤسسات'
    },
    description: {
      en: 'Bank-level encryption and compliance with international security standards',
      ar: 'تشفير بمستوى البنوك والامتثال لمعايير الأمان الدولية'
    }
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: {
      en: '24/7 Availability',
      ar: 'التوفر على مدار الساعة'
    },
    description: {
      en: 'Never miss a call, even outside business hours',
      ar: 'لا تفوت مكالمة أبداً، حتى خارج ساعات العمل'
    }
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: {
      en: 'Multi-language Support',
      ar: 'دعم متعدد اللغات'
    },
    description: {
      en: 'Native support for Arabic, English, and 20+ other languages',
      ar: 'دعم أصلي للعربية والإنجليزية وأكثر من 20 لغة أخرى'
    }
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: {
      en: 'Scalable Solution',
      ar: 'حل قابل للتوسع'
    },
    description: {
      en: 'Handle from 10 to 10,000+ calls simultaneously',
      ar: 'تتعامل مع 10 إلى 10,000+ مكالمة في وقت واحد'
    }
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: {
      en: 'Advanced Analytics',
      ar: 'تحليلات متقدمة'
    },
    description: {
      en: 'Real-time insights and performance metrics',
      ar: 'رؤى فورية ومقاييس الأداء'
    }
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: {
      en: 'Easy Integration',
      ar: 'تكامل سهل'
    },
    description: {
      en: 'Seamless integration with existing business tools',
      ar: 'تكامل سلس مع أدوات الأعمال الموجودة'
    }
  }
]

export default function HowItWorks() {
  const { locale } = useLanguage()
  const [activeStep, setActiveStep] = useState(0)
  
  const isArabic = locale === 'ar'
  const t = {
    title: isArabic ? 'كيف يعمل سندس AI' : 'How Sondos AI Works',
    subtitle: isArabic 
      ? 'اكتشف كيف يحوّل الذكاء الاصطناعي مكالماتك إلى نتائج مذهلة'
      : 'Discover how artificial intelligence transforms your calls into amazing results',
    heroTitle: isArabic 
      ? 'وكلاء الذكاء الاصطناعي الصوتي الذين يفهمون ويحلون ويحققون'
      : 'AI Voice Agents That Understand, Solve, and Deliver',
    heroDescription: isArabic
      ? 'من خلال تقنية الذكاء الاصطناعي المتقدمة، يتعامل وكلاؤنا الصوتيون مع كل مكالمة بذكاء وإنسانية، مما يضمن تجربة عملاء استثنائية على مدار الساعة.'
      : 'Using advanced artificial intelligence, our voice agents handle every call with intelligence and humanity, ensuring exceptional customer experiences 24/7.',
    howItWorks: isArabic ? 'كيف يعمل النظام' : 'How It Works',
    features: isArabic ? 'المميزات الرئيسية' : 'Key Features',
    getStarted: isArabic ? 'ابدأ الآن' : 'Get Started',
    watchDemo: isArabic ? 'شاهد العرض التوضيحي' : 'Watch Demo',
    step: isArabic ? 'خطوة' : 'Step',
    learnMore: isArabic ? 'اعرف المزيد' : 'Learn More'
  }

  return (
    <>
      <SEOHead 
        page="how-it-works"
        title={isArabic ? 'كيف يعمل سندس AI - دليل شامل لتقنية الذكاء الاصطناعي الصوتي' : 'How Sondos AI Works - Complete Guide to AI Voice Technology'}
        description={isArabic 
          ? 'تعرف على كيفية عمل سندس AI خطوة بخطوة. اكتشف كيف يحول الذكاء الاصطناعي المكالمات إلى حلول ذكية وأتمتة متقدمة للأعمال.'
          : 'Learn how Sondos AI works step by step. Discover how artificial intelligence transforms calls into smart solutions and advanced business automation.'
        }
        keywords="how AI works, AI voice technology, artificial intelligence process, AI automation steps, voice AI workflow, machine learning process"
      />
      
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t.heroDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-lg font-semibold">
                {t.getStarted}
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-lg font-semibold">
                <Play className="h-5 w-5" />
                {t.watchDemo}
              </button>
            </div>
          </div>
        </Container>
      </Section>

      {/* How It Works Steps */}
      <Section className="bg-white py-16">
        <Container>
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            {t.howItWorks}
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`text-center p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeStep === index 
                      ? 'bg-blue-50 border-2 border-blue-200 shadow-lg' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title[locale as keyof typeof step.title]}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {step.description[locale as keyof typeof step.description]}
                  </p>
                  
                  {activeStep === index && (
                    <div className="mt-4 text-left">
                      <ul className="space-y-2">
                        {step.details[locale as keyof typeof step.details].map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Key Features */}
      <Section className="bg-gray-50 py-16">
        <Container>
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            {t.features}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title[locale as keyof typeof feature.title]}
                </h3>
                
                <p className="text-gray-600">
                  {feature.description[locale as keyof typeof feature.description]}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Technology Deep Dive */}
      <Section className="bg-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              {isArabic ? 'التقنية المتقدمة وراء سندس AI' : 'Advanced Technology Behind Sondos AI'}
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {isArabic 
                ? 'يستخدم سندس AI أحدث تقنيات الذكاء الاصطناعي والتعلم الآلي، بما في ذلك معالجة اللغات الطبيعية المتقدمة، والتعرف على الكلام، وتحليل المشاعر، لضمان تجربة عملاء استثنائية.'
                : 'Sondos AI uses the latest artificial intelligence and machine learning technologies, including advanced natural language processing, speech recognition, and sentiment analysis, to ensure exceptional customer experiences.'
              }
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  99.9%
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {isArabic ? 'دقة الفهم' : 'Understanding Accuracy'}
                </h3>
                <p className="text-gray-600">
                  {isArabic ? 'معدل دقة عالي في فهم طلبات العملاء' : 'High accuracy rate in understanding customer requests'}
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  &lt; 2s
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {isArabic ? 'وقت الاستجابة' : 'Response Time'}
                </h3>
                <p className="text-gray-600">
                  {isArabic ? 'استجابة فورية في أقل من ثانيتين' : 'Instant response in less than 2 seconds'}
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  24/7
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {isArabic ? 'التوفر' : 'Availability'}
                </h3>
                <p className="text-gray-600">
                  {isArabic ? 'خدمة متواصلة على مدار الساعة' : 'Continuous service around the clock'}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              {isArabic ? 'جاهز لتحويل عملك؟' : 'Ready to Transform Your Business?'}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {isArabic 
                ? 'ابدأ رحلتك مع الذكاء الاصطناعي اليوم'
                : 'Start your AI journey today'
              }
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold">
              {t.getStarted}
            </button>
          </div>
        </Container>
      </Section>
    </>
  )
} 