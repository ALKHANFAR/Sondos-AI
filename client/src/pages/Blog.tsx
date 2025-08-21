import { useState } from 'react'
import { useLocation } from 'wouter'
import Container from '@/components/Container'
import Section from '@/components/Section'
import SEOHead from '@/components/SEOHead'
import { useLanguage } from '@/hooks/useLanguage'
import { Search, Calendar, User, Tag, ArrowRight, BookOpen } from 'lucide-react'
import { blogPosts, categories, BlogPost } from '@/lib/blog-data'

export default function Blog() {
  const { locale } = useLanguage()
  const [, setLocation] = useLocation()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const isArabic = locale === 'ar'
  const t = {
    title: isArabic ? 'مدونة سندس AI' : 'Sondos AI Blog',
    subtitle: isArabic 
      ? 'اكتشف أحدث الأخبار والنصائح حول الذكاء الاصطناعي وأتمتة الأعمال'
      : 'Discover the latest news and tips about AI and business automation',
    search: isArabic ? 'ابحث في المقالات...' : 'Search articles...',
    featuredPost: isArabic ? 'المقال المميز' : 'Featured Post',
    recentPosts: isArabic ? 'أحدث المقالات' : 'Recent Posts',
    allPosts: isArabic ? 'جميع المقالات' : 'All Posts',
    readMore: isArabic ? 'اقرأ المزيد' : 'Read More',
    noResults: isArabic ? 'لا توجد نتائج تطابق بحثك' : 'No results match your search'
  }

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title[locale as keyof typeof post.title].toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt[locale as keyof typeof post.excerpt].toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1, 4)

  const handlePostClick = (post: BlogPost) => {
    setLocation(`/blog/${post.id}`)
  }

  return (
    <>
      <SEOHead 
        page="blog"
        title={isArabic ? 'مدونة سندس AI - أحدث الأخبار والنصائح حول الذكاء الاصطناعي' : 'Sondos AI Blog - Latest News and Tips About AI'}
        description={isArabic 
          ? 'اكتشف أحدث الأخبار والنصائح حول الذكاء الاصطناعي وأتمتة الأعمال. مقالات شاملة عن وكلاء الذكاء الاصطناعي الصوتي وتطبيقاتهم في مختلف الصناعات.'
          : 'Discover the latest news and tips about AI and business automation. Comprehensive articles about AI voice agents and their applications across industries.'
        }
        keywords="AI blog, artificial intelligence news, business automation tips, AI voice agents, machine learning, customer service automation"
      />
      
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          {/* Search and Categories */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Post */}
      <Section className="bg-white py-16">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.featuredPost}
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow" onClick={() => handlePostClick(featuredPost)}>
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title[locale as keyof typeof featuredPost.title]}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.date).toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US')}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredPost.title[locale as keyof typeof featuredPost.title]}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {featuredPost.excerpt[locale as keyof typeof featuredPost.excerpt]}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <BookOpen className="h-4 w-4" />
                      {featuredPost.readTime} {isArabic ? 'دقائق' : 'min read'}
                    </div>
                  </div>
                  
                  <button className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    {t.readMore}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </Section>

      {/* Recent Posts Grid */}
      <Section className="bg-gray-50 py-16">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.recentPosts}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handlePostClick(post)}>
                <img
                  src={post.image}
                  alt={post.title[locale as keyof typeof post.title]}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title[locale as keyof typeof post.title]}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt[locale as keyof typeof post.excerpt]}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <BookOpen className="h-4 w-4" />
                      {post.readTime} {isArabic ? 'دقائق' : 'min'}
                    </div>
                  </div>
                  
                  <button className="mt-4 w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                    {t.readMore}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* All Posts */}
      <Section className="bg-white py-16">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.allPosts}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handlePostClick(post)}>
                <img
                  src={post.image}
                  alt={post.title[locale as keyof typeof post.title]}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title[locale as keyof typeof post.title]}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt[locale as keyof typeof post.excerpt]}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <BookOpen className="h-4 w-4" />
                      {post.readTime} {isArabic ? 'دقائق' : 'min'}
                    </div>
                  </div>
                  
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    {t.readMore}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {t.noResults}
              </p>
            </div>
          )}
        </Container>
      </Section>
    </>
  )
} 