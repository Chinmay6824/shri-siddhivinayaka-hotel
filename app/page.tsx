import { SiteHeader } from '@/components/restaurant/site-header'
import { Hero } from '@/components/restaurant/hero'
import { FoodGallery } from '@/components/restaurant/food-gallery'
import { GokarnaGuide, HotelFaq } from '@/components/restaurant/hotel-guide-faq'
import { OurStory, SiteFooter, TheStayAmbience, VisitUs } from '@/components/restaurant/restaurant-sections'
import { MobileQuickBar } from '@/components/restaurant/mobile-quick-bar'
import { hotelFaqs, restaurant } from '@/lib/restaurant'

const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Shri Siddhivinayaka Hotel',
  alternateName: [
    'Shri Siddhivinayaka Hotel & Home Food',
    'Shri Siddhivinayaka Home Food',
    'Siddhivinayaka Hotel Gokarna',
  ],
  url: 'https://shri-siddhivinayaka-hotel.github.io/',
}

const hotelStructuredData = {
  '@context': 'https://schema.org',
  '@type': ['Hotel', 'Restaurant', 'BedAndBreakfast'],
  name: restaurant.name,
  alternateName: ['Shri Siddhivinayaka Home Food', 'Siddhivinayaka Hotel Gokarna', 'Neha V Nayak Gokarna'],
  description:
    'Shri Siddhivinayaka Hotel & Home Food in Ganjigadde, Gokarna. Renowned for authentic coastal seafood thalis, fresh kingfish fry, peaceful stay ambience under coconut palms, and Karavali hospitality.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ganjigadde',
    addressLocality: 'Gokarna',
    addressRegion: 'Karnataka',
    postalCode: '581326',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: restaurant.geo.latitude,
    longitude: restaurant.geo.longitude,
  },
  url: 'https://shri-siddhivinayaka-hotel.github.io',
  hasMap: restaurant.mapsUrl,
  telephone: restaurant.phone,
  priceRange: restaurant.priceRange,
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, PhonePe, Google Pay',
  image: [
    'https://shri-siddhivinayaka-hotel.github.io/images/food/kingfish-thali.jpg',
    'https://shri-siddhivinayaka-hotel.github.io/images/venue/entrance.jpg',
    'https://shri-siddhivinayaka-hotel.github.io/images/venue/evening-ambience.jpg',
  ],
  servesCuisine: ['Coastal Karnataka', 'Konkani Seafood', 'Gokarna Home Food', 'South Indian'],
  mealServed: ['Lunch', 'Dinner'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '12:30',
      closes: '15:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '19:30',
      closes: '22:30',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Gokarna' },
    { '@type': 'Place', name: 'Ganjigadde' },
    { '@type': 'Place', name: 'Kudle Beach' },
    { '@type': 'Place', name: 'Om Beach' },
  ],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Open Air Veranda Dining', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Fresh Catch Daily', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Family Friendly', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Quiet Coconut Groves Setting', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Private Vehicle Parking', value: true },
  ],
  sameAs: [restaurant.googleUrl, restaurant.justdialUrl, restaurant.instagramUrl],
}

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: hotelFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function Page() {
  return (
    <div id="home">
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <OurStory />
        <FoodGallery />
        <TheStayAmbience />
        <GokarnaGuide />
        <HotelFaq />
        <VisitUs />
      </main>
      <SiteFooter />
      <MobileQuickBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelStructuredData).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData).replace(/</g, '\\u003c') }}
      />
    </div>
  )
}


