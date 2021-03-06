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
      src: 'https://img.locksmithledger.com/files/base/cygnus/ll/image/static/logo/lsl.png?h=60',
      srcset: [
        'https://img.locksmithledger.com/files/base/cygnus/ll/image/static/logo/lsl.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.locksmithledger.com/files/base/cygnus/ll/image/static/logo/lsl.png?h=60',
      srcset: [
        'https://img.locksmithledger.com/files/base/cygnus/ll/image/static/logo/lsl.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/4087326/profile', target: '_blank' },
    { provider: 'twitter', href: 'https://www.twitter.com/LocksmithLedger', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/locksmithledgerinternational', target: '_blank' },
  ],
  identityX: {
    appId: '5e28a5c758e67b1b2b55ae56',
    enabled: true,
    comments: { enabled: true },
  },
  radix: {
    enabled: true,
    appId: 'c920352a-94a5-4df1-ac0b-808fcc185499',
    submissionFieldIds: [
      { name: 'comments', id: '5be35103adff35d1547a0af6' },
    ],
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  gtm: {
    containerId: 'GTM-N7CHFQS',
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
      logo: 'https://img.locksmithledger.com/files/base/cygnus/ll/image/static/logo/lsl.png?h=60',
    },
    to: 'nbrokamp@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'nbrokamp@endeavorb2b.com',
    sendFrom: 'LocksmithLedger.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.locksmithledger.com/files/base/cygnus/ll/image/static/logo/lsl.png?h=60',
    bgColor: '#164f77',
    isGdprEnabled: true,
    gdprMessage: "Yes, Endeavor Business Media may use my contact information consistent with Endeavor's Privacy Policy to communicate with me by email or telephone about other offerings by Endeavor, its brands, affiliates and/or third-party partners that may be of interest to businesses and individual participants in my industry.",
    privacyMessage: "By clicking above, I acknowledge and agree to Endeavor Business Media’s Terms of Service and to Endeavor Business Media's use of my contact information to communicate with me about offerings by Endeavor, its brands, affiliates and/or third-party partners, consistent with Endeavor's Privacy Policy. In addition, I understand that my personal information will be shared with any sponsor(s) of the resource, so they can contact me directly about their products or services. Please refer to the privacy policies of such sponsor(s) for more details on how your information will be used by them. You may unsubscribe at any time.",
  },
};
