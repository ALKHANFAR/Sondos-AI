import { Phone } from 'lucide-react'

export default function CalendarMock() {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const calendarDays = [25, 26, 27, 28, 29, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

  return (
    <div className='rounded-2xl bg-white p-6 shadow-custom'>
      <div className='mb-4'>
        <h3 className='mb-2 text-lg font-semibold'>March 2024</h3>
        <div className='grid grid-cols-7 gap-1 text-center text-sm'>
          {daysOfWeek.map(day => (
            <div key={day} className='py-2 font-medium text-gray-500'>
              {day}
            </div>
          ))}

          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`py-2 ${
                day < 15
                  ? 'text-gray-400'
                  : day === 15
                    ? 'rounded-full bg-primary text-white'
                    : 'text-gray-900'
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      {/* Appointment Card */}
      <div className='flex items-start space-x-3 rounded-lg border border-green-200 bg-green-50 p-4 rtl:space-x-reverse'>
        <div className='flex h-8 w-8 items-center justify-center rounded-full bg-green-100'>
          <Phone className='h-4 w-4 text-green-600' />
        </div>
        <div>
          <p className='text-sm font-medium text-green-800'>Appointment added by Autocalls</p>
          <p className='text-sm text-green-600'>9:30 am to 10:30 am</p>
        </div>
      </div>
    </div>
  )
}
