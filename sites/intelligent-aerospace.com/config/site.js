const navigation = require('./navigation');
const gam = require('./gam');

const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');

module.exports = {
  navigation,
  gam,
  nativeX,
  dragonForms,
  company: 'Endeavor Business Media, LLC',
  logos: {
    prestitial: {
      src: 'https://img.intelligent-aerospace.com/files/base/pennwell/ias/prestitial_logo.png',
    },
    navbar: {
      src: 'https://img.intelligent-aerospace.com/files/base/pennwell/ias/logo.png?h=60',
      srcset: [
        'https://img.intelligent-aerospace.com/files/base/pennwell/ias/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.intelligent-aerospace.com/files/base/pennwell/ias/logo.png?h=60',
      srcset: [
        'https://img.intelligent-aerospace.com/files/base/pennwell/ias/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/intelligent-aerospace', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/intelligentaero', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/intelligentaerospace/', target: '_blank' },
  ],
  identityX: {
    appId: '5e694803fa46c4637beb2a11',
    enabled: true,
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  gtm: {
    containerId: 'GTM-K79SD2G',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#106d7d',
      logo: 'https://img.intelligent-aerospace.com/files/base/pennwell/ias/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'juliac@pennwell.com',
    sendFrom: 'Intelligent-Aerospace.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.intelligent-aerospace.com/files/base/pennwell/ias/logo.png?h=60',
    bgColor: '#106d7d',
  },
};
