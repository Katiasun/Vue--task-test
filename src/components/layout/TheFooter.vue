<script setup>
import { ref } from 'vue'

import BaseLink from '@/components/base/BaseLink.vue'

import VisaLogo from '@/assets/paymentIcons/visa.svg'
import NubankLogo from '@/assets/paymentIcons/nubank.svg'
import KlarnaLogo from '@/assets/paymentIcons/klarna.svg'
import PayPalLogo from '@/assets/paymentIcons/paypal.svg'
import MastercardLogo from '@/assets/paymentIcons/mastercard.svg'

const footerNavLinks = ref([
  // Перейменовано для ясності, що це навігаційні посилання футера
  { to: '/terms-conditions', text: 'Умови та положення' }, // Перекладено текст для прикладу
  { to: '/privacy-policy', text: 'Політика конфіденційності' },
  { to: '/responsible-gaming', text: 'Відповідальна гра' },
  { to: '/faq', text: 'Часті питання' },
  { to: '/about-us', text: 'Про нас' },
  { to: '/contact-us', text: 'Контакти' },
  { to: '/bonus-tc', text: 'Бонусні У&П' }, // Можна залишити "Bonus T&C" або перекласти
  { to: '/affiliates', text: 'Партнери' },
])

const paymentMethodLogos = [
  // Нова змінна для платіжних методів (як приклад)
  { src: VisaLogo, alt: 'VISA' },
  { src: NubankLogo, alt: 'Nubank' },
  { src: KlarnaLogo, alt: 'Klarna' },
  { src: PayPalLogo, alt: 'PayPal' },
  { src: MastercardLogo, alt: 'Mastercard' },
]

// Інформація про компанію також може бути об'єктом, якщо буде використовуватися в кількох місцях.
const companyInfo = {
  address: 'GambleCorp Ltd., 123 Casino Street, Berlin, Germany',
  contact: 'Тел: +49 123 456789 | Email: support@gamblecorp.com',
  license: 'Ліцензія № 987654321, видана Комісією з азартних ігор, Мальта',
  copyright: '© 2025 GambleCorp. Всі права захищені.',
}
</script>

<template>
  <footer class="bg-black text-yellow py-6">
    <nav class="flex flex-wrap justify-center gap-4 mb-6 p-3 text-sm font-bold">
      <BaseLink v-for="link in footerNavLinks" :key="link.to" :to="link.to">
        {{ link.text }}
      </BaseLink>
    </nav>

    <div class="flex flex-wrap justify-center items-center gap-6 mb-6">
      <img
        v-for="{ src, alt } in paymentMethodLogos"
        :key="alt"
        :src="src"
        :alt="alt"
        class="h-8 w-auto cursor-pointer bg-slate-400 rounded-full p-1"
      />
    </div>

    <hr class="border-gray mb-4" />

    <address class="text-center text-xs text-gray space-y-1">
      <p>{{ companyInfo.address }}</p>
      <p>{{ companyInfo.contact }}</p>
      <p>{{ companyInfo.license }}</p>
      <p>{{ companyInfo.copyright }}</p>
    </address>
  </footer>
</template>
