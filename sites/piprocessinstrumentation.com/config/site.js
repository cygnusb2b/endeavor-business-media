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
      src: 'https://img.piprocessinstrumentation.com/files/base/ebm/fcn/image/static/fcn_logo_og.png?h=60',
      srcset: [
        'https://img.piprocessinstrumentation.com/files/base/ebm/fcn/image/static/fcn_logo_og.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.piprocessinstrumentation.com/files/base/ebm/fcn/image/static/fcn_logo_og.png?h=60',
      srcset: [
        'https://img.piprocessinstrumentation.com/files/base/ebm/fcn/image/static/fcn_logo_og.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/4068011', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/flowcontrol_mag', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/FlowControlMagazine', target: '_blank' },
  ],
  identityX: {
    appId: '5e6948dd87774f47b7a7dcf1',
    enabled: true,
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  gtm: {
    containerId: 'GTM-MNTKWH8',
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
      logo: 'https://img.piprocessinstrumentation.com/files/base/ebm/fcn/image/static/site_logo.png?h=60',
    },
    to: 'contact@piprocessinstrumentation.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'juliac@endeavorb2b.com',
    sendFrom: 'PIProcessInstrumentation.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@endeavorb2b.com',
    logo: 'https://img.piprocessinstrumentation.com/files/base/ebm/fcn/image/static/site_logo.png?h=60',
    bgColor: '#164f77',
  },
};
