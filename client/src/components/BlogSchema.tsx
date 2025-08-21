import React from 'react';
import { BlogPost } from '@/lib/blog-data';

interface BlogSchemaProps {
  post: BlogPost;
  locale: 'en' | 'ar';
}

const BlogSchema: React.FC<BlogSchemaProps> = ({ post, locale }) => {
  const baseUrl = 'https://sondos.ai';
  
  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title[locale],
    "description": post.excerpt[locale],
    "image": {
      "@type": "ImageObject",
      "url": `${baseUrl}${post.image}`,
      "width": 1200,
      "height": 600,
      "alt": post.imageAlt[locale]
    },
    "author": {
      "@type": "Person",
      "name": post.author,
      "description": post.authorBio[locale],
      "image": `${baseUrl}${post.authorImage}`,
      "url": `${baseUrl}/team/${post.author.toLowerCase().replace(/[.\s]/g, '-')}`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sondos AI",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/assets/sondos-lockup-light.png`,
        "width": 400,
        "height": 100
      }
    },
    "datePublished": post.date,
    "dateModified": post.lastUpdated,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.id}`
    },
    "url": `${baseUrl}/blog/${post.id}`,
    "articleSection": post.category,
    "keywords": post.tags.join(', '),
    "wordCount": post.content[locale].replace(/<[^>]*>/g, '').split(' ').length,
    "timeRequired": `PT${post.readTime}M`,
    "inLanguage": locale === 'ar' ? 'ar-SA' : 'en-US',
    "isAccessibleForFree": true,
    "genre": "Technology",
    "audience": {
      "@type": "Audience",
      "audienceType": "Business professionals and technology enthusiasts"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Artificial Intelligence",
        "description": "AI and machine learning technologies for business automation"
      },
      {
        "@type": "Thing", 
        "name": "Customer Service",
        "description": "Automated customer service solutions and best practices"
      }
    ],
    "mentions": post.tags.map(tag => ({
      "@type": "Thing",
      "name": tag
    })),
    "interactionStatistic": [
      {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/ViewAction",
        "userInteractionCount": post.views
      },
      {
        "@type": "InteractionCounter", 
        "interactionType": "https://schema.org/LikeAction",
        "userInteractionCount": post.likes
      },
      {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/ShareAction", 
        "userInteractionCount": post.shares
      }
    ]
  };

  // FAQ Schema (if FAQs exist)
  const faqSchema = post.faqs[locale].length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs[locale].map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": locale === 'ar' ? 'الرئيسية' : 'Home',
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": locale === 'ar' ? 'المدونة' : 'Blog',
        "item": `${baseUrl}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title[locale],
        "item": `${baseUrl}/blog/${post.id}`
      }
    ]
  };

  // How-to Schema for implementation guides
  const howToSchema = post.difficulty && post.tableOfContents[locale].length > 0 ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": post.title[locale],
    "description": post.excerpt[locale],
    "image": `${baseUrl}${post.image}`,
    "totalTime": `PT${post.readTime}M`,
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Computer or mobile device"
      },
      {
        "@type": "HowToSupply", 
        "name": "Internet connection"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Sondos AI Platform"
      }
    ],
    "step": post.tableOfContents[locale].map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "url": `${baseUrl}/blog/${post.id}#${step.anchor}`,
      "text": step.title
    }))
  } : null;

  // Review Schema for case studies
  const reviewSchema = post.category === 'Case Studies' ? {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "SoftwareApplication",
      "name": "Sondos AI",
      "description": "AI voice agents for customer service automation",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web-based"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "reviewBody": post.excerpt[locale],
    "datePublished": post.date
  } : null;

  // Citation Schema
  const citationSchema = post.citations.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "citation": post.citations.map(citation => ({
      "@type": "CreativeWork",
      "name": citation.title,
      "url": citation.url,
      "datePublished": citation.date
    }))
  } : null;

  const schemas = [
    articleSchema,
    breadcrumbSchema,
    faqSchema,
    howToSchema,
    reviewSchema,
    citationSchema
  ].filter(Boolean);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2)
          }}
        />
      ))}
    </>
  );
};

export default BlogSchema;