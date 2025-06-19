// menuItems.js
import {
  GiftIcon,
  CalendarIcon,
  ShoppingCartIcon,
  CubeIcon,
  StarIcon,
  TrophyIcon,
} from '@heroicons/vue/24/solid'

export const iconComponents = {
  GiftIcon,
  CalendarIcon,
  ShoppingCartIcon,
  CubeIcon,
  StarIcon,
  TrophyIcon,
}

export const menuItems = [
  { label: 'Promotions', icon: 'GiftIcon', path: '/promotions' },
  { label: 'Daily Bonus Map', icon: 'CalendarIcon' },
  { label: 'Shop', icon: 'ShoppingCartIcon' },
  { label: 'Casino', icon: 'CubeIcon', path: '/live-casino' },
  { label: 'Top Games', icon: 'StarIcon', path: '/games' },
  { label: 'Live Games', icon: 'CubeIcon', path: '/games' },
  { label: 'Sports', icon: 'TrophyIcon', path: '/sport' },
  { label: 'VIP Club', icon: 'StarIcon' },
]
