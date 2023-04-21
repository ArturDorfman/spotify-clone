<template>
  <div class="flex">
    <div
      class="flex items-center justify-center space-x-2 rounded-2xl px-2 py-1 cursor-pointer
        border border-navigation hover:border-white hover:scale-105 text-white duration-300"
      @click="toggleLanguageSwitcher"
    >
      <div class="flex items-center">
        <svg fill="currentColor" height="16" width="16" viewBox="0 0 16 16">
          <path d="M8.152 16H8a8 8 0 1 1 .152 0zm-.41-14.202c-.226.273-.463.713-.677 1.323-.369 1.055-.626 2.496-.687 4.129h3.547c-.06-1.633-.318-3.074-.687-4.129-.213-.61-.45-1.05-.676-1.323-.194-.235-.326-.285-.385-.296h-.044c-.055.007-.19.052-.391.296zM4.877 7.25c.062-1.771.34-3.386.773-4.624.099-.284.208-.554.329-.806a6.507 6.507 0 0 0-4.436 5.43h3.334zm-3.334 1.5a6.507 6.507 0 0 0 4.436 5.43 7.974 7.974 0 0 1-.33-.806c-.433-1.238-.71-2.853-.772-4.624H1.543zm4.835 0c.061 1.633.318 3.074.687 4.129.214.61.451 1.05.677 1.323.202.244.336.29.391.297l.044-.001c.06-.01.19-.061.385-.296.226-.273.463-.713.676-1.323.37-1.055.626-2.496.687-4.129H6.378zm5.048 0c-.061 1.771-.339 3.386-.772 4.624-.082.235-.171.46-.268.674a6.506 6.506 0 0 0 4.071-5.298h-3.03zm3.031-1.5a6.507 6.507 0 0 0-4.071-5.298c.097.214.186.44.268.674.433 1.238.711 2.853.772 4.624h3.031z" />
        </svg>
      </div>
      <div>{{ t('general.navigation.language') }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { localStorageUtils } from '@/core/localstorage.utils'

const { availableLocales, t, locale } = useI18n()

function toggleLanguageSwitcher () {
  const newLocale = locale.value === 'en' ? 'uk' : 'en'
  locale.value = newLocale
  localStorageUtils.setItem('locale', newLocale)
}

console.log(availableLocales)
</script>
