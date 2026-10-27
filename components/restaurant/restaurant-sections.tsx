'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowUpRight, Clock, MapPin, MessageCircle, MoveUpRight, Phone, Sprout } from 'lucide-react'
import { Brand } from '@/components/restaurant/brand'
import { buttonVariants } from '@/components/ui/button'
import { getAssetPath, navigation, restaurant, venueImages } from '@/lib/restaurant'
import { cn } from '@/lib/utils'

export function OurStory() {
  return (
    <section id="our-story" className="site-width story-section" aria-labelledby="story-heading">
      <div className="story-heading">
        <p className="eyebrow">A place to slow down</p>
        <h2 id="story-heading">A familiar feeling,<br /><em>far from home.</em></h2>
      </div>
      <div className="story-copy">
        <Sprout className="story-sprout" size={38} strokeWidth={1.1} aria-hidden="true" />
        <p>Sometimes, the best part of a journey is a meal that makes you feel right at home.</p>
        <p>
          Welcome to Shri Siddhivinayaka Home Food in Ganjigadde, Gokarna. Whether you&apos;re exploring the coast or simply taking a break from the everyday, make a little room for the comfort of home-cooked seafood and hospitality.
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-2">
          <a className="text-link" href="#food">
            View our coastal dishes <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a className="text-link" href="#ambience">
            See the hotel &amp; stay <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export function TheStayAmbience() {
  const [activeVenue, setActiveVenue] = useState(0)

  return (
    <section id="ambience" className="site-width ambience-section" aria-labelledby="ambience-heading">
      <div className="section-heading-row">
        <div>
          <p className="eyebrow">The Homestay &amp; Ambience</p>
          <h2 id="ambience-heading">Peaceful coastal<br /><em>hospitality.</em></h2>
        </div>
        <p className="food-intro">
          Relax in a calm Gokarna setting surrounded by coconut groves. Dine in our open veranda or stay comfortably close to the beaches.
        </p>
      </div>

      <div className="ambience-grid">
        <div className="ambience-feature-visual">
          <div className="ambience-main-frame">
            <Image
              src={venueImages[activeVenue].src}
              alt={venueImages[activeVenue].alt}
              fill
              sizes="(max-width: 900px) 92vw, 650px"
              className="ambience-image"
            />
          </div>
          <figcaption className="ambience-caption">
            <strong>{venueImages[activeVenue].title}</strong> — {venueImages[activeVenue].caption}
          </figcaption>
        </div>

        <div className="ambience-cards-list">
          {venueImages.map((item, index) => (
            <button
              key={item.src}
              type="button"
              className={cn(
                'ambience-selector-card',
                activeVenue === index && 'active'
              )}
              onClick={() => setActiveVenue(index)}
            >
              <div className="ambience-thumb-wrap">
                <Image src={item.src} alt={item.alt} fill sizes="100px" />
              </div>
              <div className="ambience-card-text">
                <h4>{item.title}</h4>
                <p>{item.caption}</p>
              </div>
            </button>
          ))}

          <div className="ambience-callout">
            <div className="flex items-center gap-2 text-primary font-medium text-xs uppercase tracking-wider">
              <Sprout size={16} /> Coastal Welcome
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Visiting Gokarna with family or friends? Contact us on WhatsApp to reserve tables or ask about stay options.
            </p>
            <a
              href={restaurant.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: 'sm', variant: 'outline' }), 'mt-3 gap-2 w-fit')}
            >
              <MessageCircle size={15} /> Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function VisitUs() {
  return (
    <section id="visit" className="visit-section" aria-labelledby="visit-heading">
      <div className="site-width visit-grid">
        <div className="visit-invitation">
          <p className="eyebrow">Good food is worth finding</p>
          <h2 id="visit-heading">Next stop?<br /><em>Our table.</em></h2>
          <p>
            Take the scenic route. Bring your appetite.<br />
            We&apos;re located in peaceful Ganjigadde, Gokarna.
          </p>

          <div className="visit-timings-badge">
            <div className="flex items-center gap-2 text-secondary text-xs uppercase font-medium tracking-wider">
              <Clock size={16} /> Service Timings
            </div>
            <div className="visit-timings-rows mt-2 text-xs">
              <p><span>Lunch:</span> {restaurant.lunchTimings}</p>
              <p><span>Dinner:</span> {restaurant.dinnerTimings}</p>
            </div>
            <p className="visit-service-note">Serving authentic home-cooked lunch and dinner.</p>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href={restaurant.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'secondary', size: 'comfortable' }))}
            >
              View on Google <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={restaurant.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'outline', size: 'comfortable' }), 'border-secondary/40 text-secondary hover:bg-secondary/20 hover:text-secondary')}
            >
              <MessageCircle size={16} className="mr-2" /> WhatsApp Us
            </a>
          </div>
        </div>

        <div className="visit-details">
          <figure className="venue-photo-card">
            <Image
              src={getAssetPath('/images/venue/entrance.jpg')}
              alt="Exterior of Shri Siddhivinayaka Home Food surrounded by coconut palms"
              width={900}
              height={675}
              className="venue-photo"
            />
            <figcaption>Our home in Ganjigadde, Gokarna</figcaption>
          </figure>

          <div className="visit-detail-block">
            <MapPin size={23} strokeWidth={1.3} aria-hidden="true" />
            <div>
              <p className="visit-detail-label">Find your way here</p>
              <h3>Shri Siddhivinayaka Home Food</h3>
              <address>
                Ganjigadde, Gokarna<br />
                Karnataka, India
              </address>
              <a
                href={restaurant.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Find on Google Maps <MoveUpRight size={15} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>

          <div className="visit-detail-block">
            <Sprout size={23} strokeWidth={1.3} aria-hidden="true" />
            <div>
              <p className="visit-detail-label">Before you stop by</p>
              <p className="visit-info">
                Fresh catch varies daily. To confirm table availability, special fish pre-orders, and directions, feel free to reach out before visiting.
              </p>
              <div className="flex flex-col gap-2 mt-3">
                <a
                  href={restaurant.justdialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  View on Justdial <MoveUpRight size={15} aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a
                  href={restaurant.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  See us on Instagram <MoveUpRight size={15} aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-width site-footer">
      <div className="footer-main">
        <Brand />
        <p>A little Gokarna. A lot like home.</p>
        <nav aria-label="Footer navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shri Siddhivinayaka Home Food.</p>
        <span>Ganjigadde, Gokarna, Karnataka</span>
        <a
          href={restaurant.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram <ArrowUpRight size={14} aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a href="#home">
          Back to top <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}

