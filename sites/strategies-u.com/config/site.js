const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.strategies-u.com/files/base/pennwell/su/logo.png?h=60',
      srcset: [
        'https://img.strategies-u.com/files/base/pennwell/su/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.strategies-u.com/files/base/pennwell/su/logo.png?h=60',
      srcset: [
        'https://img.strategies-u.com/files/base/pennwell/su/logo.png?h=120 2x',
      ],
    },
  },
  identityX: {
    appId: '5e694622fa46c462faeb2a08',
    enabled: false,
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  gtm: {
    containerId: 'GTM-PTZXJ4B',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'Strategies Unlimited offers comprehensive coverage of high-brightness LEDs and LED lighting and laser market sectors.',
  },
  contactUs: {
    branding: {
      bgColor: '#0b5392',
      logo: 'https://img.strategies-u.com/files/base/pennwell/su/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'juliac@pennwell.com',
    sendFrom: 'Strategies-U.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.strategies-u.com/files/base/pennwell/su/logo.png?h=60',
    bgColor: '#0b5392',
    isGdprEnabled: true,
    gdprMessage: "Yes, Endeavor Business Media may use my contact information consistent with Endeavor's Privacy Policy to communicate with me by email or telephone about other offerings by Endeavor, its brands, affiliates and/or third-party partners that may be of interest to businesses and individual participants in my industry.",
    privacyMessage: "By clicking above, I acknowledge and agree to Endeavor Business Media’s Terms of Service and to Endeavor Business Media's use of my contact information to communicate with me about offerings by Endeavor, its brands, affiliates and/or third-party partners, consistent with Endeavor's Privacy Policy. In addition, I understand that my personal information will be shared with any sponsor(s) of the resource, so they can contact me directly about their products or services. Please refer to the privacy policies of such sponsor(s) for more details on how your information will be used by them. You may unsubscribe at any time.",
  },
};
