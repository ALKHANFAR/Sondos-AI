import { Play } from 'lucide-react'

interface PlayCardProps {
  title: string
  description: string
  gradientFrom: string
  gradientTo: string
  onPlay?: () => void
}

export default function PlayCard({
  title,
  description,
  gradientFrom = 'from-red-100',
  gradientTo = 'to-purple-100',
  onPlay,
}: PlayCardProps) {
  return (
    <div className='rounded-2xl bg-white p-6 shadow-custom transition-shadow duration-300 hover:shadow-purple'>
      <div
        className={`relative bg-gradient-to-br ${gradientFrom} ${gradientTo} mb-4 flex h-48 items-center justify-center rounded-xl p-8`}
      >
        {/* SVG Play Button */}
        <button
          onClick={onPlay}
          className='flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-primary transition-transform hover:scale-110'
        >
          <Play className='ml-1 h-6 w-6 text-white' />
        </button>

        {/* Audio Waves */}
        <div className='absolute bottom-4 left-4 right-4'>
          <svg className='h-8 w-full' viewBox='0 0 200 32'>
            <rect x='0' y='12' width='3' height='8' fill='#10b981' rx='1' />
            <rect x='8' y='8' width='3' height='16' fill='#10b981' rx='1' />
            <rect x='16' y='14' width='3' height='4' fill='#d1d5db' rx='1' />
            <rect x='24' y='10' width='3' height='12' fill='#10b981' rx='1' />
            <rect x='32' y='16' width='3' height='2' fill='#d1d5db' rx='1' />
            <rect x='40' y='6' width='3' height='20' fill='#10b981' rx='1' />
          </svg>
        </div>
      </div>

      <h3 className='mb-2 text-lg font-semibold'>{title}</h3>
      <p className='text-sm text-gray-600'>{description}</p>
    </div>
  )
}
