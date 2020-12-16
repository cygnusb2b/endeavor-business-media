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
      src: 'https://img.dentaleconomics.com/files/base/pennwell/de/logo.png?h=60',
      srcset: [
        'https://img.dentaleconomics.com/files/base/pennwell/de/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.dentaleconomics.com/files/base/pennwell/de/logo.png?h=60',
      srcset: [
        'https://img.dentaleconomics.com/files/base/pennwell/de/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/dental-economics?trk=biz-brand-tree-co-name', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/dentalmagazine', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/DentalEconomics', target: '_blank' },
  ],
  identityX: {
    appId: '5e69494987774f276ba7dcf4',
    enabled: true,
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  gtm: {
    containerId: 'GTM-58C63G3',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'Dental Economics is the leading business journal for the dental profession. For more than 100 years, DE has helped dentists improve their practices through sound business advice and updates on new products, techniques, and technologies. Magazine subscriptions are free to dentists and select groups of dental professionals. Each month, DE also publishes e-newsletters on specialized topics. DE partners with DentistryIQ.com to deliver current information on practice management, dental products, and clincial improvement.',
  },
  contactUs: {
    branding: {
      bgColor: '#285923',
      logo: 'https://img.dentaleconomics.com/files/base/pennwell/de/logo.png?h=60',
    },
    to: 'dental@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'zacharyk@pennwell.com',
    sendFrom: 'DentalEconomics.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.dentaleconomics.com/files/base/pennwell/de/logo.png?h=60',
    bgColor: '#285923',
    isGdprEnabled: true,
    gdprMessage: "Yes, Endeavor Business Media may use my contact information consistent with Endeavor's Privacy Policy to communicate with me by email or telephone about other offerings by Endeavor, its brands, affiliates and/or third-party partners that may be of interest to businesses and individual participants in my industry.",
    privacyMessage: "By clicking above, I acknowledge and agree to Endeavor Business Media’s Terms of Service and to Endeavor Business Media's use of my contact information to communicate with me about offerings by Endeavor, its brands, affiliates and/or third-party partners, consistent with Endeavor's Privacy Policy. In addition, I understand that my personal information will be shared with any sponsor(s) of the resource, so they can contact me directly about their products or services. Please refer to the privacy policies of such sponsor(s) for more details on how your information will be used by them. You may unsubscribe at any time.",
  },
};
