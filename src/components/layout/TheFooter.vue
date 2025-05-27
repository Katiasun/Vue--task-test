<template>
  <footer class="bg-black text-yellow py-6">
    <div class="flex flex-wrap justify-center gap-4 mb-6 p-3 text-sm font-bold">
      <BaseLink to="/terms-conditions">Terms & Conditions</BaseLink>
      <BaseLink to="/privacy-policy">Privacy Policy</BaseLink>
      <BaseLink to="/responsible-gaming">Responsible Gaming</BaseLink>
      <BaseLink to="/faq">FAQ</BaseLink>
      <BaseLink to="/about-us">About Us</BaseLink>
      <BaseLink to="/contact-us">Contact Us</BaseLink>
      <BaseLink to="/bonus-tc">Bonus T&C</BaseLink>
      <BaseLink to="/affiliates">Affiliates</BaseLink>
    </div>

    <div class="flex flex-wrap justify-center items-center gap-6 mb-6">
      <img
        src="../../assets/paymentIcons/visa.svg"
        alt="VISA"
        class="h-8 w-auto cursor-pointer bg-slate-400 rounded-full p-1"
      />
      <img
        src="../../assets/paymentIcons/nubank.svg"
        alt="nubank"
        class="h-8 w-auto cursor-pointer bg-slate-400 rounded-full p-1"
      />
      <img
        src="../../assets/paymentIcons/klarna.svg"
        alt="Klarna"
        class="h-8 w-auto cursor-pointer bg-slate-400 rounded-full p-1"
      />
      <img
        src="../../assets/paymentIcons/paypal.svg"
        alt="PayPal"
        class="h-8 w-auto cursor-pointer bg-slate-400 rounded-full p-1"
      />
      <img
        src="../../assets/paymentIcons/mastercard.svg"
        alt="Mastercard"
        class="h-8 w-auto cursor-pointer bg-slate-400 rounded-full p-1"
      />
    </div>

    <hr class="border-gray mb-4" />
    <!-- Information about company -->
    <div class="text-center text-xs text-gray space-y-1">
      <p>GambleCorp Ltd., 123 Casino Street, Berlin, Germany</p>
      <p>Tel: +49 123 456789 | Email: support@gamblecorp.com</p>
      <p>License No. 987654321, issued Gambling Commission, Malta</p>
      <p>© 2025 GambleCorp. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import BaseLink from '@/components/base/BaseLink.vue'
</script>
