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
    navbar: {
      src: 'https://img.plasticsmachinerymanufacturing.com/files/base/ebm/pmm/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.plasticsmachinerymanufacturing.com/files/base/ebm/pmm/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.plasticsmachinerymanufacturing.com/files/base/ebm/pmm/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.plasticsmachinerymanufacturing.com/files/base/ebm/pmm/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/plastics-machinery-magazine', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/PlasticsMM', target: '_blank' },
  ],
  identityX: {
    appId: '5e69468c87774f11bba7dcdd',
    enabled: true,
    comments: { enabled: true },
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  gtm: {
    containerId: 'GTM-MWVRJBJ',
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
      logo: 'https://img.plasticsmachinerymanufacturing.com/files/base/ebm/pmm/image/static/logo/site_logo.png?h=60',
    },
    to: 'contact@plasticsmachinerymagazine.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'sales@plasticsmachinerymagazine.com',
    sendFrom: 'PlasticsMachineryManufacturing.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.plasticsmachinerymanufacturing.com/files/base/ebm/pmm/image/static/logo/site_logo.png?h=60',
    bgColor: '#164f77',
  },
};
