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
  { label: 'Promotions', icon: 'GiftIcon' },
  { label: 'Daily Bonus Map', icon: 'CalendarIcon' },
  { label: 'Shop', icon: 'ShoppingCartIcon' },
  { divider: true },
  { label: 'Casino', icon: 'CubeIcon' },
  { label: 'Top Games', icon: 'StarIcon' },
  { label: 'Live Games', icon: 'CubeIcon' },
  { divider: true },
  { label: 'Sports', icon: 'TrophyIcon' },
  { divider: true },
  { label: 'VIP Club', icon: 'StarIcon' },
]
