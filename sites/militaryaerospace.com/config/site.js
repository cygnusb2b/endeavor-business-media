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
      src: 'https://img.militaryaerospace.com/files/base/pennwell/mae/mae-header-logo.png?h=60',
      srcset: [
        'https://img.militaryaerospace.com/files/base/pennwell/mae/mae-header-logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.militaryaerospace.com/files/base/pennwell/mae/mae-header-logo.png?h=60',
      srcset: [
        'https://img.militaryaerospace.com/files/base/pennwell/mae/mae-header-logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'http://www.linkedin.com/groups/PennWell-Aerospace-Defense-Media-Group-2448878', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/MilAero', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/pages/Military-Aerospace-Electronics/174732214480', target: '_blank' },
  ],
  identityX: {
    appId: '5e69476e87774f53aaa7dce6',
    enabled: true,
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  gtm: {
    containerId: 'GTM-N3KJF35',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'Since the beginning, Military & Aerospace Electronics has been on top of COTS issues and continues to be the clear leader when it comes to coverage of COTS success stories, COTS failures, and COTS trends. Articles focus on how and when designers should use mil-spec, non-developmental-item, or commercial off-the-shelf (COTS) equipment and components. Feature articles cover timely issues of design trends, emerging standards, programs, budgets, contracts, and application success stories.',
  },
  contactUs: {
    branding: {
      bgColor: '#00417e',
      logo: 'https://img.militaryaerospace.com/files/base/pennwell/mae/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'bgweb@endeavorb2b.com',
    sendFrom: 'MilitaryAerospace.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.militaryaerospace.com/files/base/pennwell/mae/logo.png?h=60',
    bgColor: '#00417e',
    isGdprEnabled: true,
    gdprMessage: "Yes, Endeavor Business Media may use my contact information consistent with Endeavor's Privacy Policy to communicate with me by email or telephone about other offerings by Endeavor, its brands, affiliates and/or third-party partners that may be of interest to businesses and individual participants in my industry.",
    privacyMessage: "By clicking above, I acknowledge and agree to Endeavor Business Media’s Terms of Service and to Endeavor Business Media's use of my contact information to communicate with me about offerings by Endeavor, its brands, affiliates and/or third-party partners, consistent with Endeavor's Privacy Policy. In addition, I understand that my personal information will be shared with any sponsor(s) of the resource, so they can contact me directly about their products or services. Please refer to the privacy policies of such sponsor(s) for more details on how your information will be used by them. You may unsubscribe at any time.",
  },
};
