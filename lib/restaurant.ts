export const restaurant = {
  name: 'Shri Siddhivinayaka Hotel & Home Food',
  shortName: 'Shri Siddhivinayaka',
  tagline: 'A little Gokarna. A lot like home.',
  locality: 'Ganjigadde, Gokarna',
  address: 'Ganjigadde, Gokarna, Karnataka 581326, India',
  phone: '+91 94800 00000', // Update with actual phone number
  whatsapp: 'https://wa.me/919480000000?text=Hello%20Shri%20Siddhivinayaka%20Hotel,%20I%20would%20like%20to%20enquire%20about%20stay%20and%20food%20in%20Gokarna',
  lunchTimings: '12:30 PM – 3:30 PM',
  dinnerTimings: '7:30 PM – 10:30 PM',
  geo: {
    latitude: 14.5479,
    longitude: 74.3188,
  },
  priceRange: '₹₹ (Affordable & Authentic)',
  googleUrl: 'https://share.google/BBJHVDes9fhjvzr5i',
  instagramUrl: 'https://www.instagram.com/siddivinayaka_home_food?rpxt=OHZwdHU0bDd5b21z',
  justdialUrl:
    'https://www.justdial.com/Gokarna/Shri-Siddhivinayaka-Home-Food-Ganjigadde/9999P8382-8382-220704021106-N2L8_BZDET',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Shri%20Siddhivinayaka%20Home%20Food%20Ganjigadde%20Gokarna',
} as const

export const navigation = [
  { label: 'Our story', href: '#our-story' },
  { label: 'Food & moments', href: '#food' },
  { label: 'The Stay & Ambience', href: '#ambience' },
  { label: 'Gokarna Guide', href: '#gokarna-guide' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Visit us', href: '#visit' },
] as const

export const nearbyLandmarks = [
  { name: 'Sri Mahabaleshwar Temple', distance: '2.3 km', time: '5 mins' },
  { name: 'Kudle Beach', distance: '3.2 km', time: '8 mins' },
  { name: 'Om Beach', distance: '5.1 km', time: '12 mins' },
  { name: 'Gokarna Main Beach', distance: '2.5 km', time: '6 mins' },
  { name: 'Gokarna Bus Stand', distance: '1.8 km', time: '4 mins' },
  { name: 'Gokarna Road Railway Station', distance: '8.9 km', time: '18 mins' },
] as const

export const hotelFaqs = [
  {
    question: 'Why is Shri Siddhivinayaka considered one of the best home-style hotels in Gokarna?',
    answer:
      'Shri Siddhivinayaka Hotel & Home Food offers authentic Karavali and Konkani home-cooked seafood prepared with freshly ground local spices and daily morning coastal catch, set in a tranquil coconut palm setting in Ganjigadde, Gokarna.',
  },
  {
    question: 'What are the must-try seafood dishes at Shri Siddhivinayaka Hotel?',
    answer:
      'Our signature dishes include the Kingfish Thali (fish curry, rice, chapati, crispy fry, sabji, and sol kadhi), White Pomfret Fry, Crispy Prawns Fry, Silver Fish Fry, Crispy Mackerel Rava Fry, and homestyle Spiced Chicken Fry.',
  },
  {
    question: 'Does Shri Siddhivinayaka offer stay and dining for families and groups?',
    answer:
      'Yes! We welcome travelers, families, and couples looking for a calm stay and home dining experience away from crowded commercial hotels, with open-air veranda dining surrounded by nature.',
  },
  {
    question: 'What are the lunch and dinner timings of the hotel?',
    answer:
      'Lunch is served daily from 12:30 PM to 3:30 PM, and dinner is served from 7:30 PM to 10:30 PM. We recommend reaching out on WhatsApp or calling ahead for table reservations and special catch pre-orders.',
  },
  {
    question: 'How far is the hotel from Gokarna beaches and temples?',
    answer:
      'We are centrally located in Ganjigadde, just 2.3 km (5 mins) from Sri Mahabaleshwar Temple, 3.2 km from Kudle Beach, and 5.1 km from Om Beach, making it convenient for sightseeing while enjoying peaceful nights.',
  },
] as const


export interface GalleryItem {
  id: string
  src: string
  alt: string
  title: string
  caption: string
  detail: string
  category: 'Coastal favourites' | 'House specialities' | 'Full coastal meals' | 'Fresh from the coast' | 'The Homestay & Ambience'
  type: 'food' | 'venue'
}

export const galleryImages: GalleryItem[] = [
  {
    id: 'silver-fish-fry',
    src: '/images/food/silver-fish-fry.jpg',
    alt: 'Crispy silver fish fry arranged on a banana leaf with onion rings',
    title: 'Silver fish fry',
    caption: 'Golden, crisp, and made for a coastal lunch.',
    detail: 'Fresh silver fish marinated with authentic coastal spices, shallow-fried crisp with sliced onions and lime.',
    category: 'Coastal favourites',
    type: 'food',
  },
  {
    id: 'prawns-fry',
    src: '/images/food/prawns-fry.jpg',
    alt: 'Crispy prawns fry served with lime and onion on a banana leaf',
    title: 'Prawns fry',
    caption: 'A little crunch, a lot of coastal flavour.',
    detail: 'Plump coastal prawns coated in traditional spices and roasted to juicy, crispy perfection.',
    category: 'Fresh from the coast',
    type: 'food',
  },
  {
    id: 'kingfish-thali',
    src: '/images/food/kingfish-thali.jpg',
    alt: 'Kingfish thali with fish curry, rice, chapati, fish fry, and sabji',
    title: 'Kingfish thali',
    caption: 'A complete coastal meal, served with care.',
    detail: 'The signature Gokarna experience: steamed rice, soft chapati, coastal fish curry, crispy kingfish fry, sabji, and refreshing sol kadhi.',
    category: 'Full coastal meals',
    type: 'food',
  },
  {
    id: 'fish-fry',
    src: '/images/food/fish-fry.jpg',
    alt: 'Two crispy fish fry pieces arranged on a banana leaf with sliced onion',
    title: 'Fresh Catch Fish fry',
    caption: 'Simple, crisp, and deeply satisfying.',
    detail: 'Locally caught fresh coastal fish prepared with home-ground red chili and kokum marinade.',
    category: 'House specialities',
    type: 'food',
  },
  {
    id: 'pomfret-fry',
    src: '/images/food/pomfret-fry.jpg',
    alt: 'Pomfret fry served on a red plate with lime, onion, and green chillies',
    title: 'Pomfret fry',
    caption: 'A coastal classic with a bright finish.',
    detail: 'Delicate whole white pomfret fried till golden with fresh lime squeeze, green chilies, and onion salad.',
    category: 'Coastal favourites',
    type: 'food',
  },
  {
    id: 'mackerel-rava-fry',
    src: '/images/food/mackerel-rava-fry.jpg',
    alt: 'Crispy rava fish fry served on a fresh banana leaf with lime slices',
    title: 'Crispy Rava Fish Fry',
    caption: 'Crunchy semolina crust, succulent fresh fish inside.',
    detail: 'Traditional Karavali style rava coating that seals in the fresh juices with aromatic homemade masalas.',
    category: 'Coastal favourites',
    type: 'food',
  },
  {
    id: 'spiced-chicken-fry',
    src: '/images/food/spiced-chicken-fry.jpg',
    alt: 'Spiced fried chicken pieces served on a banana leaf with lime and onion',
    title: 'Spiced chicken fry',
    caption: 'Richly spiced, crisp at the edges, tender inside.',
    detail: 'Home-style chicken fry loaded with roasted spices, garlic, curry leaves, and a touch of coastal heat.',
    category: 'House specialities',
    type: 'food',
  },
]

export const venueImages = [
  {
    src: '/images/venue/entrance.jpg',
    alt: 'Exterior view of Shri Siddhivinayaka Home Food entrance surrounded by green coconut palms',
    title: 'Our Home in Ganjigadde',
    caption: 'Tucked amid coastal coconut palms in peaceful Ganjigadde, Gokarna.',
  },
  {
    src: '/images/venue/evening-ambience.jpg',
    alt: 'Evening lighting at Shri Siddhivinayaka Home Food with outdoor dining tables',
    title: 'Evening Veranda & Dining',
    caption: 'A calm, breezy coastal atmosphere for slow evening dinners with family.',
  },
  {
    src: '/images/venue/dining-area.jpg',
    alt: 'Dining setup inside Shri Siddhivinayaka Home Food',
    title: 'Homestyle Hospitality',
    caption: 'Casual, welcoming open-air dining where every guest feels right at home.',
  },
]

