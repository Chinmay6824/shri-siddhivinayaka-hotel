'use client'

import { useRef, useState } from 'react'
import { ArrowUpRight, MapPin, Menu, X } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Brand } from '@/components/restaurant/brand'
import { navigation } from '@/lib/restaurant'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="announcement-bar">
        <span><MapPin size={12} aria-hidden="true" /> A little taste of home in Ganjigadde, Gokarna</span>
        <span className="announcement-note">Come hungry. Leave happy.</span>
      </div>
      <header className="site-header" onKeyDown={(event) => {
        if (event.key === 'Escape' && menuOpen) {
          setMenuOpen(false)
          menuButton.current?.focus()
        }
      }}>
        <div className="site-width header-content">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a href="#visit" className={cn(buttonVariants({ size: 'comfortable' }), 'header-visit')}>
            Come on over <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
          </a>
          <Button ref={menuButton} size="icon-touch" variant="outline" className="mobile-menu-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
        {menuOpen && (
          <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">
            {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ArrowUpRight size={17} aria-hidden="true" /></a>)}
          </nav>
        )}
      </header>
    </>
  )
}
