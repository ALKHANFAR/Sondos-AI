import { useState } from 'react'
import { CheckCircle, Calculator, TrendingDown, DollarSign } from 'lucide-react'

export default function CostCalculator() {
  const [callsPerMonth, setCallsPerMonth] = useState(3200)
  const [avgCallLength, setAvgCallLength] = useState(3)
  const [hourlyWage, setHourlyWage] = useState(25)

  // Calculate costs
  const totalMinutes = callsPerMonth * avgCallLength
  const humanHours = totalMinutes / 60
  const humanCost = Math.round(humanHours * hourlyWage)

  // AI cost calculation (simplified)
  const aiCostPerMinute = 0.27 // Average cost per minute
  const aiCost = Math.round(totalMinutes * aiCostPerMinute)
  const savings = humanCost - aiCost

  const benefits = [
    'Instant 24/7 availability',
    'Scale to hundreds of parallel calls',
    'No onboarding or training costs',
    'Pay only for active calls duration',
  ]

  return (
    <div className='bg-gradient-to-br from-green-50/50 via-white to-blue-50/30 py-20'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='mb-16 text-center'>
          <h2 className='mb-6 text-4xl font-bold text-gray-900 md:text-5xl'>
            Calculate your savings with{' '}
            <span className='bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent'>
              AI voice assistants
            </span>
          </h2>
          <p className='mx-auto max-w-4xl text-xl leading-relaxed text-gray-600'>
            Discover how much you can save by automating calls with AI compared to hiring human
            assistants. Adjust the sliders to match your needs and see real-time results.
          </p>
        </div>

        <div className='grid items-center gap-12 lg:grid-cols-2'>
          {/* Benefits Section */}
          <div className='space-y-8'>
            {benefits.map((benefit, index) => (
              <div key={index} className='flex items-center space-x-4'>
                <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500'>
                  <CheckCircle className='h-5 w-5 text-white' />
                </div>
                <span className='text-lg font-medium text-gray-700'>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Calculator Card */}
          <div className='rounded-3xl bg-slate-800 p-8 shadow-2xl'>
            <div className='mb-8 text-center'>
              <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-green-400 to-blue-500'>
                <Calculator className='h-8 w-8 text-white' />
              </div>
              <h3 className='mb-2 text-3xl font-bold text-white'>Cost calculator</h3>
            </div>

            <div className='space-y-8'>
              {/* Calls per month */}
              <div>
                <div className='mb-3 flex items-center justify-between'>
                  <label className='text-lg font-medium text-white'>Calls per month</label>
                  <span className='text-2xl font-bold text-green-400'>
                    {callsPerMonth.toLocaleString()}
                  </span>
                </div>
                <input
                  type='range'
                  min='100'
                  max='10000'
                  step='100'
                  value={callsPerMonth}
                  onChange={e => setCallsPerMonth(Number(e.target.value))}
                  className='slider h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-600'
                />
              </div>

              {/* Average call length */}
              <div>
                <div className='mb-3 flex items-center justify-between'>
                  <label className='text-lg font-medium text-white'>
                    Average call length (min)
                  </label>
                  <span className='text-2xl font-bold text-green-400'>{avgCallLength}</span>
                </div>
                <input
                  type='range'
                  min='1'
                  max='15'
                  step='0.5'
                  value={avgCallLength}
                  onChange={e => setAvgCallLength(Number(e.target.value))}
                  className='slider h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-600'
                />
              </div>

              {/* Human agent hourly wage */}
              <div>
                <div className='mb-3 flex items-center justify-between'>
                  <label className='text-lg font-medium text-white'>
                    Human agent hourly wage ($)
                  </label>
                  <span className='text-2xl font-bold text-green-400'>{hourlyWage}</span>
                </div>
                <input
                  type='range'
                  min='10'
                  max='100'
                  step='1'
                  value={hourlyWage}
                  onChange={e => setHourlyWage(Number(e.target.value))}
                  className='slider h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-600'
                />
              </div>

              {/* Results */}
              <div className='mt-8 grid grid-cols-2 gap-4'>
                <div className='rounded-2xl bg-slate-700 p-6 text-center'>
                  <div className='mb-2 text-sm text-slate-400'>Estimated AI cost</div>
                  <div className='text-3xl font-bold text-green-400'>
                    ${aiCost.toLocaleString()}
                  </div>
                </div>
                <div className='rounded-2xl bg-slate-700 p-6 text-center'>
                  <div className='mb-2 text-sm text-slate-400'>Estimated human cost</div>
                  <div className='text-3xl font-bold text-red-400'>
                    ${humanCost.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Monthly savings highlight */}
              <div className='rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 p-6 text-center'>
                <div className='mb-2 text-lg text-white'>Monthly savings</div>
                <div className='text-4xl font-bold text-white'>${savings.toLocaleString()}</div>
                <div className='mt-2 text-sm text-green-100'>
                  {Math.round((savings / humanCost) * 100)}% cost reduction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #10b981, #3b82f6);
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #10b981, #3b82f6);
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  )
}
