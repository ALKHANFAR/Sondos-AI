// Blog data structure
export interface BlogPost {
  id: number
  title: Record<'en' | 'ar', string>
  excerpt: Record<'en' | 'ar', string>
  content: Record<'en' | 'ar', string>
  author: string
  date: string
  category: string
  tags: string[]
  image: string
  readTime: number
  slug: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: {
      en: 'How AI Voice Agents Are Revolutionizing Customer Service',
      ar: 'كيف تقوم وكلاء الصوت الذكية بثورة في خدمة العملاء'
    },
    excerpt: {
      en: 'Discover how artificial intelligence is transforming customer interactions and improving business efficiency.',
      ar: 'اكتشف كيف يقوم الذكاء الاصطناعي بتحويل تفاعلات العملاء وتحسين كفاءة الأعمال.'
    },
    content: {
      en: 'AI voice agents are changing the way businesses interact with their customers...',
      ar: 'وكلاء الصوت الذكية يغيرون الطريقة التي تتفاعل بها الشركات مع عملائها...'
    },
    author: 'Sondos AI Team',
    date: '2024-01-15',
    category: 'AI Technology',
    tags: ['AI', 'Customer Service', 'Voice Agents', 'Automation'],
    image: '/images/blog/ai-voice-agents.jpg',
    readTime: 5,
    slug: 'ai-voice-agents-revolutionizing-customer-service'
  },
  {
    id: 2,
    title: {
      en: 'The Future of Business Communication: Automated Calling Systems',
      ar: 'مستقبل التواصل التجاري: أنظمة الاتصال الآلية'
    },
    excerpt: {
      en: 'Explore the benefits and implementation strategies of automated calling systems in modern business.',
      ar: 'استكشف فوائد واستراتيجيات تنفيذ أنظمة الاتصال الآلية في الأعمال الحديثة.'
    },
    content: {
      en: 'Automated calling systems represent the next evolution in business communication...',
      ar: 'تمثل أنظمة الاتصال الآلية التطور التالي في التواصل التجاري...'
    },
    author: 'Sondos AI Team',
    date: '2024-01-10',
    category: 'Business Automation',
    tags: ['Automation', 'Communication', 'Business', 'Technology'],
    image: '/images/blog/automated-calling.jpg',
    readTime: 4,
    slug: 'future-business-communication-automated-calling'
  },
  {
    id: 3,
    title: {
      en: 'Building Trust with AI: Best Practices for Customer Engagement',
      ar: 'بناء الثقة مع الذكاء الاصطناعي: أفضل الممارسات للتفاعل مع العملاء'
    },
    excerpt: {
      en: 'Learn how to build customer trust while implementing AI solutions in your business.',
      ar: 'تعلم كيفية بناء ثقة العملاء أثناء تنفيذ حلول الذكاء الاصطناعي في عملك.'
    },
    content: {
      en: 'Building trust with AI requires a thoughtful approach to customer experience...',
      ar: 'بناء الثقة مع الذكاء الاصطناعي يتطلب نهجاً مدروساً لتجربة العملاء...'
    },
    author: 'Sondos AI Team',
    date: '2024-01-05',
    category: 'Customer Experience',
    tags: ['AI', 'Trust', 'Customer Experience', 'Best Practices'],
    image: '/images/blog/building-trust-ai.jpg',
    readTime: 6,
    slug: 'building-trust-ai-customer-engagement'
  }
]

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug)
}

export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post => post.id !== currentPost.id && post.category === currentPost.category)
    .slice(0, limit)
}

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category)
}

export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag))
}

// Blog categories
export const categories = [
  'All',
  'AI Technology',
  'Business Automation',
  'Customer Experience',
  'Healthcare',
  'E-commerce',
  'Real Estate',
  'Sales & Marketing'
]

// Get unique categories from posts
export const getPostCategories = (): string[] => {
  const uniqueCategories = new Set(blogPosts.map(post => post.category))
  return ['All', ...Array.from(uniqueCategories)]
} 