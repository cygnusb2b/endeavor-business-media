const navigation = require('./navigation');
const gam = require('./gam');

const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');
const leaders = require('./leaders');

module.exports = {
  navigation,
  gam,
  nativeX,
  dragonForms,
  leaders,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.laserfocusworld.com/files/base/pennwell/lfw/logo.png?h=60',
      srcset: [
        'https://img.laserfocusworld.com/files/base/pennwell/lfw/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.laserfocusworld.com/files/base/pennwell/lfw/logo.png?h=60',
      srcset: [
        'https://img.laserfocusworld.com/files/base/pennwell/lfw/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/2896249/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/LaserFocusWorld', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/pages/Laser-Focus-World/126899915297', target: '_blank' },
  ],
  identityX: {
    appId: '5e42bbab1f09853dd6c31bd8',
    enabled: true,
    comments: { enabled: true },
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  gtm: {
    containerId: 'GTM-MFCT2LV',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#164f77',
      logo: 'https://img.laserfocusworld.com/files/base/pennwell/lfw/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'bgweb@endeavorb2b.com',
    sendFrom: 'LaserFocusWorld.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.laserfocusworld.com/files/base/pennwell/lfw/logo.png?h=60',
    bgColor: '#164f77',
  },
};
