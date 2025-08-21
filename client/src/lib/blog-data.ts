export interface BlogPost {
  id: number
  title: {
    en: string
    ar: string
  }
  excerpt: {
    en: string
    ar: string
  }
  content: {
    en: string
    ar: string
  }
  image: string
  category: string
  tags: string[]
  author: string
  date: string
  readTime: number
  slug: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: {
      en: "How AI Voice Agents Are Revolutionizing Customer Service in 2024",
      ar: "كيف أحدثت وكلاء الذكاء الاصطناعي الصوتيون ثورة في خدمة العملاء في 2024"
    },
    excerpt: {
      en: "Discover how AI voice agents are transforming customer service, reducing response times, and improving customer satisfaction across industries.",
      ar: "اكتشف كيف يحول وكلاء الذكاء الاصطناعي الصوتيون خدمة العملاء ويقللون أوقات الاستجابة ويحسنون رضا العملاء في مختلف الصناعات."
    },
    content: {
      en: `
        <h2>The Rise of AI Voice Technology</h2>
        <p>Artificial Intelligence has made significant strides in recent years, particularly in voice recognition and natural language processing. This technology is now being leveraged to create intelligent voice agents that can handle customer inquiries, book appointments, and provide support 24/7.</p>
        
        <h2>Key Benefits for Businesses</h2>
        <ul>
          <li><strong>24/7 Availability:</strong> Never miss a customer call again</li>
          <li><strong>Instant Response:</strong> Immediate answers to common questions</li>
          <li><strong>Cost Reduction:</strong> Lower operational costs compared to human agents</li>
          <li><strong>Scalability:</strong> Handle multiple calls simultaneously</li>
        </ul>
        
        <h2>Real-World Applications</h2>
        <p>From healthcare to e-commerce, AI voice agents are being deployed across various sectors. They're particularly effective in:</p>
        <ul>
          <li>Appointment scheduling</li>
          <li>Order processing</li>
          <li>Technical support</li>
          <li>Lead qualification</li>
        </ul>
        
        <h2>Future Outlook</h2>
        <p>As technology continues to advance, we can expect even more sophisticated voice agents that can handle complex conversations and provide personalized experiences.</p>
      `,
      ar: `
        <h2>صعود تقنية الذكاء الاصطناعي الصوتي</h2>
        <p>حقق الذكاء الاصطناعي تقدمًا كبيرًا في السنوات الأخيرة، خاصة في التعرف على الصوت ومعالجة اللغة الطبيعية. يتم الآن الاستفادة من هذه التقنية لإنشاء وكلاء صوتيين أذكياء يمكنهم التعامل مع استفسارات العملاء وحجز المواعيد وتقديم الدعم على مدار الساعة.</p>
        
        <h2>الفوائد الرئيسية للأعمال</h2>
        <ul>
          <li><strong>التوفر على مدار الساعة:</strong> لا تفوت مكالمة عميل أبداً</li>
          <li><strong>الاستجابة الفورية:</strong> إجابات فورية للأسئلة الشائعة</li>
          <li><strong>تقليل التكاليف:</strong> تكاليف تشغيل أقل مقارنة بالوكلاء البشر</li>
          <li><strong>قابلية التوسع:</strong> التعامل مع مكالمات متعددة في وقت واحد</li>
        </ul>
        
        <h2>التطبيقات العملية</h2>
        <p>من الرعاية الصحية إلى التجارة الإلكترونية، يتم نشر وكلاء الذكاء الاصطناعي الصوتيين في مختلف القطاعات. إنهم فعالون بشكل خاص في:</p>
        <ul>
          <li>جدولة المواعيد</li>
          <li>معالجة الطلبات</li>
          <li>الدعم الفني</li>
          <li>تأهيل العملاء المحتملين</li>
        </ul>
        
        <h2>النظرة المستقبلية</h2>
        <p>مع استمرار تقدم التكنولوجيا، يمكننا توقع وكلاء صوتيين أكثر تطوراً يمكنهم التعامل مع المحادثات المعقدة وتقديم تجارب مخصصة.</p>
      `
    },
    image: "/assets/blog/ai-voice-agents-2024.jpg",
    category: "AI Technology",
    tags: ["AI", "Voice Technology", "Customer Service", "Automation"],
    author: "Sondos AI Team",
    date: "2024-12-21",
    readTime: 5,
    slug: "ai-voice-agents-revolutionizing-customer-service-2024"
  },
  {
    id: 2,
    title: {
      en: "5 Ways AI Voice Agents Boost Sales and Lead Generation",
      ar: "5 طرق لتعزيز وكلاء الذكاء الاصطناعي الصوتيون للمبيعات وتوليد العملاء المحتملين"
    },
    excerpt: {
      en: "Learn how AI voice agents can significantly improve your sales process, qualify leads more effectively, and increase conversion rates.",
      ar: "تعلم كيف يمكن لوكلاء الذكاء الاصطناعي الصوتيين تحسين عملية المبيعات بشكل كبير وتأهيل العملاء المحتملين بفعالية أكبر وزيادة معدلات التحويل."
    },
    content: {
      en: `
        <h2>1. 24/7 Lead Capture</h2>
        <p>Unlike human sales teams, AI voice agents never sleep. They can capture leads at any time of day, ensuring you never miss a potential customer.</p>
        
        <h2>2. Intelligent Lead Qualification</h2>
        <p>AI agents can ask targeted questions to determine if a prospect is a good fit for your product or service, saving your sales team valuable time.</p>
        
        <h2>3. Consistent Messaging</h2>
        <p>Every customer interaction follows the same script, ensuring your brand message is delivered consistently across all touchpoints.</p>
        
        <h2>4. Data Collection and Analysis</h2>
        <p>AI agents collect valuable customer data that can be used to improve your sales strategy and customer experience.</p>
        
        <h2>5. Follow-up Automation</h2>
        <p>Automated follow-up sequences ensure that no lead falls through the cracks, increasing your chances of conversion.</p>
      `,
      ar: `
        <h2>1. التقاط العملاء المحتملين على مدار الساعة</h2>
        <p>على عكس فرق المبيعات البشرية، لا ينام وكلاء الذكاء الاصطناعي الصوتيون أبداً. يمكنهم التقاط العملاء المحتملين في أي وقت من اليوم، مما يضمن عدم تفويت أي عميل محتمل.</p>
        
        <h2>2. تأهيل ذكي للعملاء المحتملين</h2>
        <p>يمكن للوكلاء الذكيون طرح أسئلة مستهدفة لتحديد ما إذا كان العميل المحتمل مناسباً لمنتجك أو خدمتك، مما يوفر على فريق المبيعات وقتاً ثميناً.</p>
        
        <h2>3. رسائل متسقة</h2>
        <p>كل تفاعل مع العملاء يتبع نفس النص، مما يضمن تسليم رسالة علامتك التجارية بشكل متسق عبر جميع نقاط الاتصال.</p>
        
        <h2>4. جمع البيانات والتحليل</h2>
        <p>يجمع الوكلاء الذكيون بيانات قيمة عن العملاء يمكن استخدامها لتحسين استراتيجية المبيعات وتجربة العملاء.</p>
        
        <h2>5. أتمتة المتابعة</h2>
        <p>تضمن تسلسلات المتابعة الآلية عدم إغفال أي عميل محتمل، مما يزيد من فرص التحويل.</p>
      `
    },
    image: "/assets/blog/ai-sales-boost.jpg",
    category: "Sales & Marketing",
    tags: ["Sales", "Lead Generation", "AI", "Automation"],
    author: "Sondos AI Team",
    date: "2024-12-20",
    readTime: 4,
    slug: "5-ways-ai-voice-agents-boost-sales-lead-generation"
  },
  {
    id: 3,
    title: {
      en: "The Future of Healthcare: AI Voice Agents in Medical Practices",
      ar: "مستقبل الرعاية الصحية: وكلاء الذكاء الاصطناعي الصوتيون في الممارسات الطبية"
    },
    excerpt: {
      en: "Explore how AI voice agents are transforming healthcare by streamlining appointment scheduling, patient communication, and administrative tasks.",
      ar: "اكتشف كيف يحول وكلاء الذكاء الاصطناعي الصوتيون الرعاية الصحية من خلال تبسيط جدولة المواعيد والتواصل مع المرضى والمهام الإدارية."
    },
    content: {
      en: `
        <h2>Streamlining Patient Communication</h2>
        <p>AI voice agents can handle routine patient inquiries, appointment scheduling, and follow-up calls, allowing medical staff to focus on patient care.</p>
        
        <h2>Appointment Management</h2>
        <p>Automated scheduling systems can reduce no-shows by sending reminders and confirming appointments, improving practice efficiency.</p>
        
        <h2>Patient Education</h2>
        <p>AI agents can provide patients with information about procedures, medications, and post-treatment care instructions.</p>
        
        <h2>Administrative Efficiency</h2>
        <p>By automating routine tasks, medical practices can reduce administrative overhead and improve patient satisfaction.</p>
      `,
      ar: `
        <h2>تبسيط التواصل مع المرضى</h2>
        <p>يمكن لوكلاء الذكاء الاصطناعي الصوتيين التعامل مع الاستفسارات الروتينية للمرضى وجدولة المواعيد والمكالمات المتابعة، مما يسمح للطاقم الطبي بالتركيز على رعاية المرضى.</p>
        
        <h2>إدارة المواعيد</h2>
        <p>يمكن لأنظمة الجدولة الآلية تقليل عدم الحضور من خلال إرسال تذكيرات وتأكيد المواعيد، مما يحسن كفاءة الممارسة.</p>
        
        <h2>تعليم المرضى</h2>
        <p>يمكن للوكلاء الذكيون تزويد المرضى بمعلومات حول الإجراءات والأدوية وتعليمات الرعاية بعد العلاج.</p>
        
        <h2>الكفاءة الإدارية</h2>
        <p>من خلال أتمتة المهام الروتينية، يمكن للممارسات الطبية تقليل النفقات الإدارية وتحسين رضا المرضى.</p>
      `
    },
    image: "/assets/blog/healthcare-ai.jpg",
    category: "Healthcare",
    tags: ["Healthcare", "AI", "Medical", "Patient Care"],
    author: "Sondos AI Team",
    date: "2024-12-19",
    readTime: 6,
    slug: "future-healthcare-ai-voice-agents-medical-practices"
  },
  {
    id: 4,
    title: {
      en: "E-commerce Success: How AI Voice Agents Improve Online Shopping",
      ar: "نجاح التجارة الإلكترونية: كيف يحسن وكلاء الذكاء الاصطناعي الصوتيون التسوق عبر الإنترنت"
    },
    excerpt: {
      en: "Discover how AI voice agents are enhancing the e-commerce experience by providing personalized assistance and improving customer support.",
      ar: "اكتشف كيف يحسن وكلاء الذكاء الاصطناعي الصوتيون تجربة التجارة الإلكترونية من خلال تقديم مساعدة مخصصة وتحسين دعم العملاء."
    },
    content: {
      en: `
        <h2>Personalized Shopping Assistance</h2>
        <p>AI voice agents can understand customer preferences and provide personalized product recommendations, improving the shopping experience.</p>
        
        <h2>Order Processing and Tracking</h2>
        <p>Automated order processing and real-time tracking updates keep customers informed about their purchases.</p>
        
        <h2>Customer Support</h2>
        <p>24/7 customer support ensures that customers can get help whenever they need it, increasing satisfaction and loyalty.</p>
        
        <h2>Returns and Refunds</h2>
        <p>Streamlined return processes make it easier for customers to return products and receive refunds.</p>
      `,
      ar: `
        <h2>مساعدة التسوق المخصصة</h2>
        <p>يمكن لوكلاء الذكاء الاصطناعي الصوتيين فهم تفضيلات العملاء وتقديم توصيات منتجات مخصصة، مما يحسن تجربة التسوق.</p>
        
        <h2>معالجة الطلبات والتتبع</h2>
        <p>معالجة الطلبات الآلية وتحديثات التتبع في الوقت الفعلي تبقي العملاء على اطلاع بمشترياتهم.</p>
        
        <h2>دعم العملاء</h2>
        <p>دعم العملاء على مدار الساعة يضمن أن العملاء يمكنهم الحصول على المساعدة متى احتاجوا إليها، مما يزيد من الرضا والولاء.</p>
        
        <h2>المرتجعات والاسترداد</h2>
        <p>عمليات المرتجعات المبسطة تجعل من السهل على العملاء إرجاع المنتجات والحصول على استرداد الأموال.</p>
      `
    },
    image: "/assets/blog/ecommerce-ai.jpg",
    category: "E-commerce",
    tags: ["E-commerce", "AI", "Online Shopping", "Customer Support"],
    author: "Sondos AI Team",
    date: "2024-12-18",
    readTime: 4,
    slug: "ecommerce-success-ai-voice-agents-online-shopping"
  },
  {
    id: 5,
    title: {
      en: "Real Estate Revolution: AI Voice Agents for Property Management",
      ar: "ثورة العقارات: وكلاء الذكاء الاصطناعي الصوتيون لإدارة العقارات"
    },
    excerpt: {
      en: "Learn how AI voice agents are transforming the real estate industry by automating property inquiries, scheduling viewings, and managing leads.",
      ar: "تعلم كيف يحول وكلاء الذكاء الاصطناعي الصوتيون صناعة العقارات من خلال أتمتة استفسارات العقارات وجدولة المعاينات وإدارة العملاء المحتملين."
    },
    content: {
      en: `
        <h2>Property Inquiry Management</h2>
        <p>AI agents can handle property inquiries 24/7, providing instant information about available properties and scheduling viewings.</p>
        
        <h2>Lead Qualification</h2>
        <p>Automated lead qualification ensures that only serious buyers are passed to real estate agents, improving efficiency.</p>
        
        <h2>Appointment Scheduling</h2>
        <p>Automated scheduling systems can coordinate viewings between buyers and sellers, reducing administrative overhead.</p>
        
        <h2>Market Updates</h2>
        <p>AI agents can provide real-time market updates and property recommendations based on customer preferences.</p>
      `,
      ar: `
        <h2>إدارة استفسارات العقارات</h2>
        <p>يمكن للوكلاء الذكيون التعامل مع استفسارات العقارات على مدار الساعة، وتقديم معلومات فورية عن العقارات المتاحة وجدولة المعاينات.</p>
        
        <h2>تأهيل العملاء المحتملين</h2>
        <p>تأهيل العملاء المحتملين الآلي يضمن أن المشترين الجادين فقط يتم تمريرهم إلى وكلاء العقارات، مما يحسن الكفاءة.</p>
        
        <h2>جدولة المواعيد</h2>
        <p>أنظمة الجدولة الآلية يمكنها تنسيق المعاينات بين المشترين والبائعين، مما يقلل من النفقات الإدارية.</p>
        
        <h2>تحديثات السوق</h2>
        <p>يمكن للوكلاء الذكيون تقديم تحديثات السوق في الوقت الفعلي وتوصيات العقارات بناءً على تفضيلات العملاء.</p>
      `
    },
    image: "/assets/blog/real-estate-ai.jpg",
    category: "Real Estate",
    tags: ["Real Estate", "AI", "Property Management", "Automation"],
    author: "Sondos AI Team",
    date: "2024-12-17",
    readTime: 5,
    slug: "real-estate-revolution-ai-voice-agents-property-management"
  }
]

export const categories = ["All", "AI Technology", "Sales & Marketing", "Healthcare", "E-commerce", "Real Estate"]

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug)
}

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === "All") return blogPosts
  return blogPosts.filter(post => post.category === category)
}

export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post => post.id !== currentPost.id && post.category === currentPost.category)
    .slice(0, limit)
} 