'use client'

import ProtectedRoute from '../../../components/ProtectedRoute'
import { usePathname } from 'next/navigation'
import { AuthProvider } from '../../../context/AuthContext'

export default function ClientLayout({ children }) {
  const pathname = usePathname()
  const publicPaths = ['/login', '/signup']
  
  // Don't wrap login and signup pages with ProtectedRoute
  if (publicPaths.includes(pathname)) {
    return <>{children}</>
  }

  // Wrap client routes with both AuthProvider and ProtectedRoute
  return (
    <AuthProvider>
      <ProtectedRoute>{children}</ProtectedRoute>
    </AuthProvider>
  )
} 