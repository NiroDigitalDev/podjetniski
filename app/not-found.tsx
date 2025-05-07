import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stran Ne Obstaja (404) | Telefinder',
  description: 'Te strani ni bilo mogoče najti.',
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Stran Ne Obstaja</h1>
      <p className="text-lg mb-8">Oprostite, strani, ki jo iščete, ni bilo mogoče najti.</p>
      <Link href="/" className="text-blue-600 hover:underline">
        Pojdi nazaj na Domačo stran
      </Link>
    </div>
  )
} 