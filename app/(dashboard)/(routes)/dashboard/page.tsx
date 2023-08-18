import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

export default function DashboardPage() {
  return (
    <div>
      <p>Dashboard Page (Protected)</p>
      {/* <UserButton afterSignOutUrl='/'/> */}
    </div>
    
  )
}
