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
      src: 'https://img.bioopticsworld.com/files/base/pennwell/bow/logo.png?h=60',
      srcset: [
        'https://img.bioopticsworld.com/files/base/pennwell/bow/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.bioopticsworld.com/files/base/pennwell/bow/logo.png?h=60',
      srcset: [
        'https://img.bioopticsworld.com/files/base/pennwell/bow/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/biooptics-world/' },
    { provider: 'twitter', href: 'https://twitter.com/BioOptics' },
    { provider: 'facebook', href: 'https://www.facebook.com/pages/BioOptics-World/131802223749' },
  ],
  identityX: {
    appId: '5e693f6bfa46c41a1eeb29f3',
    enabled: true,
    comments: { enabled: true },
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  gtm: {
    containerId: 'GTM-53W9PRB',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'BioOptics World magzaine has merged with its sister publication, Laser Focus World, with coverage on optical technologies and instrumentation for the Life Sciences.',
  },
  contactUs: {
    branding: {
      bgColor: '#445b51',
      logo: 'https://img.bioopticsworld.com/files/base/pennwell/bow/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'juliac@pennwell.com',
    sendFrom: 'BioOpticWorld.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.bioopticsworld.com/files/base/pennwell/bow/logo.png?h=60',
    bgColor: '#445b51',
    isGdprEnabled: true,
    gdprMessage: "Yes, Endeavor Business Media may use my contact information consistent with Endeavor's Privacy Policy to communicate with me by email or telephone about other offerings by Endeavor, its brands, affiliates and/or third-party partners that may be of interest to businesses and individual participants in my industry.",
    privacyMessage: "By clicking above, I acknowledge and agree to Endeavor Business Media’s Terms of Service and to Endeavor Business Media's use of my contact information to communicate with me about offerings by Endeavor, its brands, affiliates and/or third-party partners, consistent with Endeavor's Privacy Policy. In addition, I understand that my personal information will be shared with any sponsor(s) of the resource, so they can contact me directly about their products or services. Please refer to the privacy policies of such sponsor(s) for more details on how your information will be used by them. You may unsubscribe at any time.",
  },
};
