'use client'
 
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
 
export function GoBack() {
    const router = useRouter()
 
    return (
      <Button type="button" onClick={() => router.back()}>
        Go back
      </Button>
    )
}