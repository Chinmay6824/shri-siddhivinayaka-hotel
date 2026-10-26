import { Sprout } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Brand({ className }: { className?: string }) {
  return (
    <a href="#home" className={cn('brand', className)} aria-label="Shri Siddhivinayaka Home Food — home">
      <span className="brand-mark" aria-hidden="true"><Sprout strokeWidth={1.25} /></span>
      <span className="brand-type">
        <span className="brand-name">Shri Siddhivinayaka</span>
        <span className="brand-description">Home food <span aria-hidden="true">·</span> Gokarna</span>
      </span>
    </a>
  )
}
