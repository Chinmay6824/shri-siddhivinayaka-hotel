'use client'

import Image from 'next/image'
import { useMemo, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Plus, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { galleryImages, restaurant } from '@/lib/restaurant'
import { cn } from '@/lib/utils'

const categories = ['All flavours', 'Coastal favourites', 'House specialities', 'Full coastal meals'] as const

export function FoodGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All flavours')
  const [selectedId, setSelectedId] = useState<string>(galleryImages[0].id)
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All flavours') return galleryImages
    return galleryImages.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  const currentIndex = Math.max(0, filteredImages.findIndex((item) => item.id === selectedId))
  const activeImage = filteredImages[currentIndex] || galleryImages[0]

  const step = (direction: number) => {
    const nextIndex = (currentIndex + direction + filteredImages.length) % filteredImages.length
    setSelectedId(filteredImages[nextIndex].id)
  }

  return (
    <section id="food" className="food-section" aria-labelledby="food-heading">
      <div className="site-width">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Food &amp; moments</p>
            <h2 id="food-heading">A taste of the<br /><em>simple things.</em></h2>
          </div>
          <p className="food-intro">
            A celebration of familiar flavours, coastal rituals,<br className="desktop-break" />
            and the joy of sitting down to a fresh, home-cooked meal.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="gallery-filter-tabs" role="tablist" aria-label="Food categories">
          {categories.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
              className={cn(
                'gallery-tab-btn',
                activeCategory === category && 'active'
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="food-gallery">
          {filteredImages.map((item, index) => (
            <article className="food-item" key={item.id}>
              <button
                className="gallery-image-button"
                aria-label={`View photo: ${item.title}`}
                aria-haspopup="dialog"
                onClick={(event) => {
                  triggerRef.current = event.currentTarget
                  setSelectedId(item.id)
                  setOpen(true)
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 767px) 45vw, 30vw"
                />
                <span className="gallery-zoom"><Plus size={20} aria-hidden="true" /></span>
                <span className="gallery-image-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </button>
              <p className="food-category">{item.category}</p>
              <h3>{item.title}</h3>
              <p className="food-caption">{item.caption}</p>
            </article>
          ))}
        </div>

        <div className="gallery-note-row">
          <p>
            Photos from Shri Siddhivinayaka Home Food.<br />
            Daily catch and fish varieties may vary based on morning sea availability.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={restaurant.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Ask today&apos;s special catch <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={restaurant.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Explore business listing <ArrowUpRight size={17} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="gallery-dialog sm:max-w-3xl"
          showCloseButton={false}
          finalFocus={triggerRef}
          onKeyDown={(event) => {
            if (event.nativeEvent.isComposing || event.keyCode === 229) return
            if (event.key === 'ArrowRight') { event.preventDefault(); step(1) }
            if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1) }
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <DialogHeader>
              <DialogTitle>{activeImage.title}</DialogTitle>
              <DialogDescription>
                Shri Siddhivinayaka Kitchen · {currentIndex + 1} of {filteredImages.length}
              </DialogDescription>
            </DialogHeader>
            <DialogClose render={<Button size="icon-touch" variant="outline" />} aria-label="Close gallery">
              <X aria-hidden="true" />
            </DialogClose>
          </div>
          <div className="lightbox-image">
            <Image src={activeImage.src} alt={activeImage.alt} fill sizes="(max-width: 767px) 90vw, 720px" />
          </div>
          <div className="lightbox-footer">
            <p aria-live="polite">{activeImage.detail}</p>
            <div className="flex shrink-0 gap-2">
              <Button variant="outline" size="icon-touch" onClick={() => step(-1)} aria-label="Previous photo">
                <ArrowLeft aria-hidden="true" />
              </Button>
              <Button variant="outline" size="icon-touch" onClick={() => step(1)} aria-label="Next photo">
                <ArrowRight aria-hidden="true" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

