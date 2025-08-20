import Badge from './Badge'

interface StatsCardProps {
  title: string
  value: string
  description: string
  badge: string
  trend?: 'up' | 'down'
}

export default function StatsCard({
  title,
  value,
  description,
  badge,
  trend = 'up',
}: StatsCardProps) {
  return (
    <div className='rounded-2xl bg-white p-6 shadow-custom'>
      <div className='mb-4 flex items-center justify-between'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <Badge variant='green'>{badge}</Badge>
      </div>

      <div className='mb-2 text-3xl font-bold text-gray-900'>{value}</div>
      <p className='mb-4 text-sm text-gray-600'>{description}</p>

      {/* Sparkline */}
      <svg className='h-12 w-full' viewBox='0 0 200 48'>
        <polyline
          fill='none'
          stroke='#10b981'
          strokeWidth='2'
          points={
            trend === 'up'
              ? '0,40 25,35 50,30 75,25 100,20 125,15 150,18 175,12 200,8'
              : '0,8 25,12 50,18 75,15 100,20 125,25 150,30 175,35 200,40'
          }
        />
        <circle cx='200' cy={trend === 'up' ? '8' : '40'} r='3' fill='#10b981' />
      </svg>
    </div>
  )
}
