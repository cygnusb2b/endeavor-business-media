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
    isGdprEnabled: true,
    gdprMessage: "Yes, Endeavor Business Media may use my contact information consistent with Endeavor's Privacy Policy to communicate with me by email or telephone about other offerings by Endeavor, its brands, affiliates and/or third-party partners that may be of interest to businesses and individual participants in my industry.",
    privacyMessage: "By clicking above, I acknowledge and agree to Endeavor Business Media’s Terms of Service and to Endeavor Business Media's use of my contact information to communicate with me about offerings by Endeavor, its brands, affiliates and/or third-party partners, consistent with Endeavor's Privacy Policy. In addition, I understand that my personal information will be shared with any sponsor(s) of the resource, so they can contact me directly about their products or services. Please refer to the privacy policies of such sponsor(s) for more details on how your information will be used by them. You may unsubscribe at any time.",
  },
};
