import Container from './Container'
import { useLanguage } from '@/hooks/useLanguage'

type Brand = { name: string; slug?: string }

// أمثلة لشركات صغيرة ومتوسطة محلية وعالمية (أسماء عامة بدون علامات تجارية معروفة)
const brands: Brand[] = [
  // KSA / GCC
  { name: 'Riyadh Dental Clinic' },
  { name: 'Jeddah Auto Care' },
  { name: 'Al Noor Bakery' },
  { name: 'Al Khobar Laundry' },
  { name: 'Hail Farm Fresh' },
  { name: 'Madinah Bookstore' },
  { name: 'Dammam Fitness Studio' },
  { name: 'Taif Flower Shop' },
  { name: 'Mecca Home Repairs' },
  // Global SMBs
  { name: 'Bright Path Tutoring' },
  { name: 'GreenLeaf Landscaping' },
  { name: 'Oceanview Cafe' },
  { name: 'Craft & Clay Studio' },
  { name: 'SwiftFix IT Services' },
  { name: 'Summit Accounting' },
  { name: 'CityRide Shuttle' },
  { name: 'FreshBite Catering' },
  { name: 'BlueWave Spa' },
  { name: 'Golden Key Realty' },
]

export default function LogoMarquee() {
  const { locale } = useLanguage()

  return (
    <div className='mt-16 border-t pt-8' style={{ borderColor: '#EEF2F7' }}>
      <Container>
        <div className='space-y-6 text-center'>
          <div className='marquee-wrapper'>
            <div className='marquee-track'>
              {[...brands, ...brands].map((brand, i) => (
                <div key={i} className='marquee-item'>
                  {brand.slug ? (
                    <img
                      src={`https://cdn.simpleicons.org/${brand.slug}/9CA3AF`}
                      alt={brand.name}
                      className='h-7 w-auto opacity-90'
                      onError={e => {
                        const target = e.currentTarget as HTMLImageElement
                        target.style.display = 'none'
                        const sibling = target.nextElementSibling as HTMLElement | null
                        if (sibling) sibling.style.display = 'block'
                      }}
                    />
                  ) : null}
                  <span
                    style={{ display: brand.slug ? ('none' as const) : 'block', color: '#9CA3AF' }}
                    className='font-semibold'
                  >
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
