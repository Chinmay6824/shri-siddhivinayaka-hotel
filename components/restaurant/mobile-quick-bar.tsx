'use client'

import { MapPin, MessageCircle, Utensils } from 'lucide-react'
import { restaurant } from '@/lib/restaurant'

export function MobileQuickBar() {
  return (
    <aside className="mobile-quick-bar" aria-label="Mobile quick actions">
      <div className="mobile-quick-bar-inner">
        <a
          href={restaurant.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-quick-btn whatsapp-btn"
        >
          <MessageCircle size={17} aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
        <a
          href={restaurant.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-quick-btn directions-btn"
        >
          <MapPin size={17} aria-hidden="true" />
          <span>Directions</span>
        </a>
        <a
          href="#food"
          className="mobile-quick-btn food-btn"
        >
          <Utensils size={17} aria-hidden="true" />
          <span>Food Menu</span>
        </a>
      </div>
    </aside>
  )
}
