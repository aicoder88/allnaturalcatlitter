import { defineConfig, presetWind3, presetWebFonts, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        display: 'Cormorant Garamond:400,500,600,700',
        body: 'Karla:400,500,600,700',
      },
    }),
  ],
  theme: {
    colors: {
      sage: '#87A878',
      'sage-light': '#A3C496',
      'sage-dark': '#6B8C5E',
      sand: '#E8DCC4',
      'sand-light': '#F2EAD9',
      terracotta: '#C4A484',
      'terracotta-light': '#D4BBA0',
      gold: '#B8A88A',
      cream: '#FAF8F5',
      earth: '#5C4B3A',
      'earth-light': '#7A6652',
      mist: '#E8EDE6',
      white: '#FFFFFF',
    },
    fontFamily: {
      display: 'Cormorant Garamond, Georgia, serif',
      body: 'Karla, sans-serif',
    },
  },
  shortcuts: {
    // Layout
    'container-narrow': 'max-w-2xl mx-auto px-6',
    'container-wide': 'max-w-5xl mx-auto px-6',
    'container-full': 'max-w-7xl mx-auto px-6',

    // Breathing space
    'breathing-space': 'py-16 md:py-24 lg:py-32',
    'breathing-space-sm': 'py-10 md:py-16 lg:py-20',

    // Organic borders
    'organic-border': 'rounded-[60%_40%_30%_70%/60%_30%_70%_40%]',
    'organic-border-alt': 'rounded-[40%_60%_70%_30%/30%_70%_40%_60%]',

    // Typography
    'text-display': 'font-display text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight',
    'text-heading': 'font-display text-3xl md:text-4xl leading-snug',
    'text-subheading': 'font-display text-xl md:text-2xl leading-relaxed',
    'text-body': 'font-body text-lg leading-relaxed',
    'text-body-sm': 'font-body text-base leading-relaxed',

    // Buttons
    'btn-primary': 'inline-block px-8 py-4 bg-sage text-white font-body font-medium rounded-full hover:bg-sage-dark transition-all duration-300 no-underline',
    'btn-secondary': 'inline-block px-8 py-4 border-2 border-sage text-sage font-body font-medium rounded-full hover:bg-sage hover:text-white transition-all duration-300 no-underline',
    'btn-gentle': 'inline-block px-6 py-3 bg-sand text-earth font-body font-medium rounded-full hover:bg-terracotta hover:text-white transition-all duration-300 no-underline',

    // Cards
    'card-organic': 'bg-white rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
    'card-journey': 'bg-mist rounded-3xl p-8 md:p-10 transition-all duration-300 hover:bg-white hover:shadow-lg',
  },
  rules: [
    // Custom line height
    ['leading-generous', { 'line-height': '1.85' }],
    // Soft shadow
    ['shadow-soft', { 'box-shadow': '0 4px 20px rgba(92, 75, 58, 0.08)' }],
    ['shadow-warm', { 'box-shadow': '0 8px 32px rgba(135, 168, 120, 0.12)' }],
  ],
})
