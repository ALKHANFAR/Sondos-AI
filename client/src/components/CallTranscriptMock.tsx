export default function CallTranscriptMock() {
  return (
    <div className='rounded-2xl bg-white p-6 shadow-custom'>
      <div className='mb-4 flex items-center'>
        <div className='mr-2 h-3 w-3 rounded-full bg-red-500'></div>
        <span className='text-sm text-gray-600'>Live Call</span>
      </div>

      {/* Audio Wave */}
      <div className='mb-6 rounded-lg bg-gray-50 p-4'>
        <svg className='h-12 w-full' viewBox='0 0 300 48'>
          <rect x='0' y='20' width='4' height='8' fill='#10b981' rx='2' />
          <rect x='8' y='16' width='4' height='16' fill='#10b981' rx='2' />
          <rect x='16' y='22' width='4' height='4' fill='#d1d5db' rx='2' />
          <rect x='24' y='18' width='4' height='12' fill='#10b981' rx='2' />
          <rect x='32' y='24' width='4' height='2' fill='#d1d5db' rx='2' />
          <rect x='40' y='14' width='4' height='20' fill='#ff453e' rx='2' />
          <rect x='48' y='20' width='4' height='8' fill='#ff453e' rx='2' />
          <rect x='56' y='22' width='4' height='4' fill='#d1d5db' rx='2' />
        </svg>
      </div>

      {/* Chat Bubbles */}
      <div className='space-y-4'>
        <div className='flex items-start space-x-2 rtl:space-x-reverse'>
          <div className='flex h-6 w-6 items-center justify-center rounded-full bg-blue-100'>
            <span className='text-xs text-blue-600'>C</span>
          </div>
          <div className='max-w-xs rounded-lg bg-gray-100 p-3'>
            <p className='text-sm'>Hi, I need help with my order #12345</p>
          </div>
        </div>

        <div className='flex items-start justify-end space-x-2 rtl:justify-start rtl:space-x-reverse'>
          <div className='max-w-xs rounded-lg bg-primary p-3 text-white'>
            <p className='text-sm'>
              I'll help you track that order right away. Let me check our system.
            </p>
          </div>
          <div className='flex h-6 w-6 items-center justify-center rounded-full bg-primary'>
            <span className='text-xs text-white'>AI</span>
          </div>
        </div>
      </div>
    </div>
  )
}
