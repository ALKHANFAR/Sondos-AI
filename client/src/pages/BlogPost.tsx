import { useLocation } from 'wouter'
import { useLanguage } from '@/hooks/useLanguage'
import SEOHead from '@/components/SEOHead'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { ArrowLeft, Calendar, User, Tag, BookOpen, Share2, Facebook, Twitter, LinkedIn } from 'lucide-react'
import { blogPosts } from '@/lib/blog-data'

export default function BlogPost() {
  const [, setLocation] = useLocation()
  const { locale } = useLanguage()
  const isArabic = locale === 'ar'
  
  // Get post ID from URL (you'll need to implement proper routing)
  const postId = window.location.pathname.split('/').pop() || '1'
  const post = blogPosts.find(p => p.id.toString() === postId)
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {isArabic ? 'المقال غير موجود' : 'Post not found'}
          </h1>
          <button
            onClick={() => setLocation('/blog')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            {isArabic ? 'العودة للمدونة' : 'Back to Blog'}
          </button>
        </div>
      </div>
    )
  }

  const t = {
    backToBlog: isArabic ? 'العودة للمدونة' : 'Back to Blog',
    readTime: isArabic ? 'دقائق قراءة' : 'min read',
    share: isArabic ? 'مشاركة' : 'Share',
    relatedPosts: isArabic ? 'مقالات ذات صلة' : 'Related Posts',
    tags: isArabic ? 'العلامات' : 'Tags',
    publishedOn: isArabic ? 'نشر في' : 'Published on',
    author: isArabic ? 'الكاتب' : 'Author'
  }

  return (
    <>
      <SEOHead
        title={post.title[locale as keyof typeof post.title]}
        description={post.excerpt[locale as keyof typeof post.excerpt]}
        keywords={post.tags.join(', ')}
        image={post.image}
        url={`https://sondos.ai/blog/${post.id}`}
        type="article"
      />
      
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-16">
        <Container>
          <button
            onClick={() => setLocation('/blog')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.backToBlog}
          </button>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US')}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                {post.readTime} {t.readTime}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title[locale as keyof typeof post.title]}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {post.excerpt[locale as keyof typeof post.excerpt]}
            </p>
            
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">{post.author}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Share2 className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">{t.share}</span>
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                    <Facebook className="h-4 w-4 text-blue-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                    <Twitter className="h-4 w-4 text-blue-400" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                    <LinkedIn className="h-4 w-4 text-blue-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Image */}
      <Section className="bg-white py-8">
        <Container>
          <div className="max-w-4xl mx-auto">
            <img
              src={post.image}
              alt={post.title[locale as keyof typeof post.title]}
              className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </Container>
      </Section>

      {/* Article Content */}
      <Section className="bg-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {isArabic ? 'ملخص المقال' : 'Article Summary'}
                </h3>
                <p className="text-gray-700">
                  {post.excerpt[locale as keyof typeof post.excerpt]}
                </p>
              </div>
              
              {/* Full article content would go here */}
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  {isArabic 
                    ? 'هذا هو المحتوى الكامل للمقال. في التطبيق الحقيقي، سيكون هنا محتوى المقال الكامل مع تنسيق HTML مناسب.'
                    : 'This is the full article content. In the real application, this would contain the complete article content with proper HTML formatting.'
                  }
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {isArabic ? 'العنوان الفرعي الأول' : 'First Subheading'}
                </h2>
                
                <p>
                  {isArabic 
                    ? 'محتوى القسم الأول من المقال مع تفاصيل أكثر. يمكن أن يحتوي على فقرات متعددة ومعلومات مفصلة.'
                    : 'Content for the first section of the article with more details. This could contain multiple paragraphs and detailed information.'
                  }
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {isArabic ? 'العنوان الفرعي الثاني' : 'Second Subheading'}
                </h2>
                
                <p>
                  {isArabic 
                    ? 'محتوى القسم الثاني من المقال. يمكن أن يحتوي على أمثلة عملية ونصائح مفيدة.'
                    : 'Content for the second section of the article. This could contain practical examples and useful tips.'
                  }
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {isArabic ? 'الخلاصة' : 'Conclusion'}
                </h2>
                
                <p>
                  {isArabic 
                    ? 'ملخص المقال والاستنتاجات الرئيسية. يمكن أن يحتوي على دعوة للعمل أو خطوات التالية.'
                    : 'Summary of the article and key conclusions. This could contain a call to action or next steps.'
                  }
                </p>
              </div>
            </article>
          </div>
        </Container>
      </Section>

      {/* Tags */}
      <Section className="bg-gray-50 py-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.tags}</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Posts */}
      <Section className="bg-white py-16">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.relatedPosts}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <article key={relatedPost.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title[locale as keyof typeof relatedPost.title]}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {relatedPost.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(relatedPost.date).toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US')}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {relatedPost.title[locale as keyof typeof relatedPost.title]}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {relatedPost.excerpt[locale as keyof typeof relatedPost.excerpt]}
                    </p>
                    
                    <button 
                      onClick={() => setLocation(`/blog/${relatedPost.id}`)}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                      {isArabic ? 'اقرأ المزيد' : 'Read More'}
                      <ArrowLeft className="h-4 w-4 rotate-180" />
                    </button>
                  </div>
                </article>
              ))}
          </div>
        </Container>
      </Section>
    </>
  )
} 