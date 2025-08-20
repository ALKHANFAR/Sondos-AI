import { useState } from 'react'
import { Link } from 'wouter'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'
import { useToast } from '@/hooks/use-toast'

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: 'Password mismatch',
        description: 'Passwords do not match.',
        variant: 'destructive',
      })
      return
    }

    toast({
      title: 'Signup attempted',
      description: 'This is a demo - signup functionality not implemented.',
      variant: 'default',
    })
  }

  return (
    <Section>
      <Container>
        <div className='mx-auto max-w-md'>
          <div className='rounded-2xl bg-white p-8 shadow-custom'>
            <h1 className='mb-6 text-center text-2xl font-bold'>Join AutoVoice</h1>

            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label className='mb-1 block text-sm font-medium text-gray-700'>Full Name</label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary'
                  required
                />
              </div>

              <div>
                <label className='mb-1 block text-sm font-medium text-gray-700'>Email</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className='w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary'
                  required
                />
              </div>

              <div>
                <label className='mb-1 block text-sm font-medium text-gray-700'>Password</label>
                <input
                  type='password'
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                  className='w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary'
                  required
                />
              </div>

              <div>
                <label className='mb-1 block text-sm font-medium text-gray-700'>
                  Confirm Password
                </label>
                <input
                  type='password'
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className='w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary'
                  required
                />
              </div>

              <Button type='submit' className='w-full'>
                Create Account
              </Button>
            </form>

            <p className='mt-4 text-center text-sm text-gray-600'>
              Already have an account?{' '}
              <a href='https://app.sondos-ai.com/login' target='_blank' rel='noopener noreferrer' className='text-primary hover:text-red-600'>
                Sign in
              </a>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
