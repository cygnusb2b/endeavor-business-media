const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/ww/logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ww/logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/ww/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ww/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/waterworld-magazine/about/' },
    { provider: 'twitter', href: 'https://twitter.com/WaterWorld' },
    { provider: 'facebook', href: 'https://www.facebook.com/waterworldmag' },
  ],
  gtm: {
    containerId: 'GTM-MXBGH3V',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'WaterWorld serves professionals in the North American municipal water/wastewater industry. WaterWorld delivers monthly news and information about products and services, technology, applications, legislation and regulations to help you successfully plan, design, operate and maintain your water/wastewater systems. Editorial topics include: drinking water treatment, wastewater treatment, filtration, disinfection, membrane systems, biosolids and sludge treatment, water reuse, pipe maintenance and repairs, trenchless technology, meter reading, valves, pumps, stormwater management, odor control, computers and automation technology, corrosion control, and so much more!',
  },
};
