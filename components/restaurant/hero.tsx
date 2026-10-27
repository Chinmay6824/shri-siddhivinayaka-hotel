import Image from 'next/image'
import { ArrowDown, ArrowUpRight, CookingPot, Heart, MapPin, MessageCircle, Sprout } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { restaurant, getAssetPath } from '@/lib/restaurant'
import { cn } from '@/lib/utils'

const comforts = [
  { icon: CookingPot, title: 'The comfort of home food', text: 'Simple pleasures, full hearts.' },
  { icon: MapPin, title: 'Rooted in Gokarna', text: 'Find us in Ganjigadde.' },
  { icon: Heart, title: 'Come as you are', text: 'There is joy in sharing a meal.' },
]

export function Hero() {
  return (
    <>
      <section className="site-width hero" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span aria-hidden="true" /> A warm welcome to our table</p>
          <h1 id="hero-heading">A little Gokarna.<br />A lot like<br /><em>home.</em></h1>
          <p className="hero-description">Good food. Familiar flavours. A moment to slow down.<br className="desktop-break" /> Welcome to Shri Siddhivinayaka Home Food.</p>
          <div className="hero-actions">
            <a href="#food" className={cn(buttonVariants({ size: 'comfortable' }))}>A taste of home <ArrowDown data-icon="inline-end" aria-hidden="true" /></a>
            <a href={restaurant.whatsapp} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: 'outline', size: 'comfortable' }), 'gap-2 border-primary/30 text-primary hover:bg-primary/10')}>
              <MessageCircle size={17} aria-hidden="true" /> Quick Enquiry
            </a>
            <a href="#visit" className="text-link">Plan your visit <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
          <p className="hero-location"><MapPin size={15} aria-hidden="true" /> Ganjigadde, Gokarna, Karnataka</p>
        </div>
        <figure className="hero-visual">
          <div className="hero-image-frame">
            <Image src={getAssetPath('/images/food/kingfish-thali.jpg')} alt="Kingfish thali with fish curry, rice, chapati, fish fry, and sabji" fill priority sizes="(max-width: 767px) 90vw, (max-width: 1200px) 46vw, 590px" className="hero-image" />
          </div>
          <div className="hospitality-seal" aria-hidden="true">
            <span>Simple food.</span><Sprout strokeWidth={1.15} /><span>Full hearts.</span>
          </div>
          <figcaption>A taste of the region <span aria-hidden="true">·</span> From our kitchen</figcaption>
        </figure>
      </section>
      <div className="comforts-strip">
        <div className="site-width comforts-grid">
          {comforts.map(({ icon: Icon, title, text }) => (
            <div className="comfort-item" key={title}>
              <Icon aria-hidden="true" strokeWidth={1.35} />
              <div><p>{title}</p><span>{text}</span></div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

