import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    label: string
    current: 'PRO' | 'FREE'
    landing?: boolean
}

const PaymentCard = ({label, current, landing}: Props) => {
  return (
    <div className={cn(label != current
         ? "bg-in-active"
         : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
         "p-[2px] rounded-xl overflow-hidden"
    )}>
        
    </div>
  )
}

export default PaymentCard