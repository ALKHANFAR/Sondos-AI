import { useLocation, useRoute } from 'wouter'
import { useLanguage } from '@/hooks/useLanguage'
import SEOHead from '@/components/SEOHead'
import BlogSchema from '@/components/BlogSchema'
import Container from '@/components/Container'
import Section from '@/components/Section'
import LazyImage from '@/components/LazyImage'
import { ArrowLeft, Calendar, User, Tag, BookOpen, Share2, Facebook, Twitter, Linkedin, Heart, MessageCircle, Eye, Clock } from 'lucide-react'
import { blogPosts } from '@/lib/blog-data'
import { useState, useEffect } from 'react'

export default function BlogPost() {
  const [, setLocation] = useLocation()
  const { params } = useRoute('/blog/:id')
  const { locale } = useLanguage()
  const isArabic = locale === 'ar'
  
  const [post, setPost] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [viewCount, setViewCount] = useState(0)
  const [likeCount, setLikeCount] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  
  useEffect(() => {
    if (params?.id) {
      const foundPost = blogPosts.find(p => p.id.toString() === params.id)
      if (foundPost) {
        setPost(foundPost)
        // Simulate view count
        setViewCount(Math.floor(Math.random() * 1000) + 100)
        setLikeCount(Math.floor(Math.random() * 100) + 10)
      }
      setIsLoading(false)
    }
  }, [params?.id])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

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
    author: isArabic ? 'الكاتب' : 'Author',
    views: isArabic ? 'مشاهدات' : 'Views',
    likes: isArabic ? 'إعجابات' : 'Likes',
    comments: isArabic ? 'تعليقات' : 'Comments',
    readingTime: isArabic ? 'وقت القراءة' : 'Reading Time',
    publishedDate: isArabic ? 'تاريخ النشر' : 'Published Date',
    category: isArabic ? 'التصنيف' : 'Category',
    summary: isArabic ? 'ملخص المقال' : 'Article Summary',
    conclusion: isArabic ? 'الخلاصة' : 'Conclusion',
    keyTakeaways: isArabic ? 'النقاط الرئيسية' : 'Key Takeaways'
  }

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1)
    } else {
      setLikeCount(prev => prev + 1)
    }
    setIsLiked(!isLiked)
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = post.title[locale as keyof typeof post.title]
    const text = post.excerpt[locale as keyof typeof post.excerpt]
    
    let shareUrl = ''
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <>
      <SEOHead
        title={post.title[locale as keyof typeof post.title]}
        description={post.metaDescription[locale as keyof typeof post.metaDescription]}
        keywords={post.tags.join(', ')}
        image={post.image}
        url={`https://sondos.ai/blog/${post.id}`}
        type="article"
      />
      <BlogSchema post={post} locale={locale as 'en' | 'ar'} />
      
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
                {formatDate(post.date)}
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
            
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">{post.author}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Share2 className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">{t.share}</span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleShare('facebook')}
                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                  >
                    <Facebook className="h-4 w-4 text-blue-600" />
                  </button>
                  <button 
                    onClick={() => handleShare('twitter')}
                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                  >
                    <Twitter className="h-4 w-4 text-blue-400" />
                  </button>
                  <button 
                    onClick={() => handleShare('linkedin')}
                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-blue-700" />
                  </button>
                </div>
              </div>
            </div>

            {/* Article Stats */}
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {viewCount} {t.views}
              </div>
              <div className="flex items-center gap-1">
                <Heart className={`h-4 w-4 ${isLiked ? 'text-red-500 fill-current' : ''}`} />
                {likeCount} {t.likes}
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />
                0 {t.comments}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Image */}
      <Section className="bg-white py-8">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <LazyImage
                src={post.image}
                alt={post.imageAlt[locale as keyof typeof post.imageAlt]}
                className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-lg"
                placeholder="/assets/blog/placeholder.jpg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                {post.category}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Article Content */}
      <Section className="bg-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {/* Article Summary */}
              <div className="mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t.summary}
                </h3>
                <p className="text-gray-700">
                  {post.excerpt[locale as keyof typeof post.excerpt]}
                </p>
              </div>
              
              {/* Key Takeaways */}
              <div className="mb-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  {t.keyTakeaways}
                </h3>
                <ul className="space-y-2 text-blue-800">
                  {post.tags.slice(0, 5).map((tag, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Full article content */}
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: post.content[locale as keyof typeof post.content] }} />
                
                {/* Conclusion */}
                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {t.conclusion}
                  </h2>
                  <p>
                    {isArabic 
                      ? 'هذا المقال يوضح كيف يمكن لوكلاء الذكاء الاصطناعي الصوتيين تحويل عملك. مع التطبيق الصحيح، يمكنك تحقيق نتائج مذهلة في خدمة العملاء والمبيعات.'
                      : 'This article demonstrates how AI voice agents can transform your business. With proper implementation, you can achieve remarkable results in customer service and sales.'
                    }
                  </p>
                </div>
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
                <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors cursor-pointer">
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
                <article key={relatedPost.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setLocation(`/blog/${relatedPost.id}`)}>
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title[locale as keyof typeof relatedPost.title]}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/blog/placeholder.jpg'
                    }}
                  />
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {relatedPost.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(relatedPost.date)}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {relatedPost.title[locale as keyof typeof relatedPost.title]}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {relatedPost.excerpt[locale as keyof typeof relatedPost.excerpt]}
                    </p>
                    
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
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