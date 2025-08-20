interface LoadingSkeletonProps {
  type?: 'section' | 'card' | 'testimonial' | 'pricing'
  className?: string
}

export default function LoadingSkeleton({
  type = 'section',
  className = '',
}: LoadingSkeletonProps) {
  const renderSkeleton = () => {
    switch (type) {
      case 'testimonial':
        return (
          <div className='rounded-3xl border border-gray-100 bg-white p-8 shadow-lg'>
            <div className='mb-4 flex space-x-1'>
              {[...Array(5)].map((_, i) => (
                <div key={i} className='h-5 w-5 animate-pulse rounded bg-gray-200' />
              ))}
            </div>
            <div className='mb-6 space-y-3'>
              <div className='h-4 animate-pulse rounded bg-gray-200' />
              <div className='h-4 animate-pulse rounded bg-gray-200' />
              <div className='h-4 w-3/4 animate-pulse rounded bg-gray-200' />
            </div>
            <div className='flex items-center space-x-4'>
              <div className='h-14 w-14 animate-pulse rounded-full bg-gray-200' />
              <div className='space-y-2'>
                <div className='h-4 w-24 animate-pulse rounded bg-gray-200' />
                <div className='h-3 w-32 animate-pulse rounded bg-gray-200' />
              </div>
            </div>
          </div>
        )

      case 'card':
        return (
          <div className='rounded-2xl bg-white p-6 shadow-lg'>
            <div className='mb-4 h-48 animate-pulse rounded-xl bg-gray-200' />
            <div className='mb-2 h-6 animate-pulse rounded bg-gray-200' />
            <div className='h-4 w-3/4 animate-pulse rounded bg-gray-200' />
          </div>
        )

      case 'pricing':
        return (
          <div className='rounded-3xl border border-gray-200 bg-white p-8 shadow-lg'>
            <div className='mb-6 text-center'>
              <div className='mb-2 h-6 animate-pulse rounded bg-gray-200' />
              <div className='mx-auto h-8 w-1/2 animate-pulse rounded bg-gray-200' />
            </div>
            <div className='mb-6 space-y-3'>
              {[...Array(5)].map((_, i) => (
                <div key={i} className='h-4 animate-pulse rounded bg-gray-200' />
              ))}
            </div>
            <div className='h-12 animate-pulse rounded bg-gray-200' />
          </div>
        )

      default:
        return (
          <div className='py-20'>
            <div className='mx-auto mb-16 max-w-4xl text-center'>
              <div className='mb-4 h-12 animate-pulse rounded bg-gray-200' />
              <div className='mx-auto h-6 w-3/4 animate-pulse rounded bg-gray-200' />
            </div>
            <div className='grid gap-8 md:grid-cols-3'>
              {[...Array(3)].map((_, i) => (
                <div key={i} className='rounded-2xl bg-white p-6 shadow-lg'>
                  <div className='mb-4 h-32 animate-pulse rounded bg-gray-200' />
                  <div className='mb-2 h-6 animate-pulse rounded bg-gray-200' />
                  <div className='h-4 animate-pulse rounded bg-gray-200' />
                </div>
              ))}
            </div>
          </div>
        )
    }
  }

  return <div className={`animate-pulse ${className}`}>{renderSkeleton()}</div>
}
