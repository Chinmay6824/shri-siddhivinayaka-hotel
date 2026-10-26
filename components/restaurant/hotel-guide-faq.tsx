'use client'

import { useState } from 'react'
import { ChevronDown, Compass, MapPin, Sparkles } from 'lucide-react'
import { hotelFaqs, nearbyLandmarks, restaurant } from '@/lib/restaurant'
import { cn } from '@/lib/utils'

export function GokarnaGuide() {
  return (
    <section id="gokarna-guide" className="gokarna-guide-section" aria-labelledby="guide-heading">
      <div className="site-width">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Discover Gokarna</p>
            <h2 id="guide-heading">Centrally located.<br /><em>Naturally calm.</em></h2>
          </div>
          <p className="food-intro">
            Shri Siddhivinayaka Hotel is situated in peaceful Ganjigadde, offering easy access to Gokarna&apos;s famous beaches and sacred temples while keeping you away from crowded tourist noise.
          </p>
        </div>

        <div className="guide-grid">
          <div className="guide-card why-us-card">
            <div className="flex items-center gap-2 text-primary font-medium text-xs uppercase tracking-wider mb-3">
              <Sparkles size={16} /> Why Guests Choose Us
            </div>
            <h3>Best Home-Style Hotel Experience in Gokarna</h3>
            <p>
              Whether you are looking for freshly prepared kingfish thali after a morning beach swim, or a relaxed homestay dinner under swaying coconut palms, our family kitchen serves each meal with traditional Karavali love and warmth.
            </p>
            <ul className="guide-features-list">
              <li>100% Home-ground spices and traditional wood-fired inspirations</li>
              <li>Daily fresh catch straight from local Arabian Sea fishermen</li>
              <li>Open veranda dining with cool coastal breeze</li>
              <li>Peaceful residential location with private parking</li>
            </ul>
          </div>

          <div className="guide-card landmarks-card">
            <div className="flex items-center gap-2 text-primary font-medium text-xs uppercase tracking-wider mb-3">
              <Compass size={16} /> Proximity to Key Attractions
            </div>
            <h3>Distance From Hotel</h3>
            <p className="mb-4 text-xs text-muted-foreground">
              Conveniently located for beach hoppers, pilgrims, and backpackers:
            </p>
            <div className="landmarks-list">
              {nearbyLandmarks.map((item) => (
                <div key={item.name} className="landmark-item">
                  <div className="flex items-center gap-2">
                    <MapPin size={15} className="text-terracotta shrink-0" />
                    <span className="landmark-name">{item.name}</span>
                  </div>
                  <div className="landmark-stats">
                    <strong>{item.distance}</strong>
                    <span>({item.time})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HotelFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-heading">
      <div className="site-width">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Frequently Asked Questions</p>
            <h2 id="faq-heading">Everything you need<br /><em>to know.</em></h2>
          </div>
          <p className="food-intro">
            Planning your visit to Gokarna? Here are quick answers to common questions about dining, stay arrangements, and directions.
          </p>
        </div>

        <div className="faq-accordion-list">
          {hotelFaqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className={cn('faq-item', isOpen && 'active')}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={cn('faq-chevron', isOpen && 'rotate-180')}
                  />
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
