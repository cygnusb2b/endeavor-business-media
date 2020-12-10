const navigation = require('./navigation');
const leaders = require('./leaders');
const gam = require('./gam');

const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');

module.exports = {
  navigation,
  gam,
  nativeX,
  dragonForms,
  leaders,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.foresternetwork.com/files/base/ebm/frn/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.foresternetwork.com/files/base/ebm/frn/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.foresternetwork.com/files/base/ebm/frn/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.foresternetwork.com/files/base/ebm/frn/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/forester_media_inc-/' },
    { provider: 'twitter', href: 'https://twitter.com/foresternetwork' },
    { provider: 'facebook', href: 'https://www.facebook.com/foresternetwork' },
  ],
  identityX: {
    appId: '5e6948c287774f8616a7dcee',
    enabled: false,
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  gtm: {
    containerId: 'GTM-TNFLPD9',
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
      logo: 'https://img.foresternetwork.com/files/base/ebm/frn/image/static/logo/site_logo.png?h=60',
    },
    to: 'adsales@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'adsales@endeavorb2b.com',
    sendFrom: 'ForesterNetwork.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.foresternetwork.com/files/base/ebm/frn/image/static/logo/site_logo.png?h=60',
    bgColor: '#164f77',
  },
};
