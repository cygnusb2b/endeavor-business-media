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
      src: 'https://img.vendingmarketwatch.com/files/base/cygnus/vmw/image/static/logo/vending.png?h=45',
      srcset: [
        'https://img.vendingmarketwatch.com/files/base/cygnus/vmw/image/static/logo/vending.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.vendingmarketwatch.com/files/base/cygnus/vmw/image/static/logo/vending.png?h=60',
      srcset: [
        'https://img.vendingmarketwatch.com/files/base/cygnus/vmw/image/static/logo/vending.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/2233840', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/vendingmagazine', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/vendingmarket/', target: '_blank' },
  ],
  identityX: {
    appId: '5e28a61658e67b865e55ae5b',
    enabled: true,
    comments: { enabled: false },
  },
  radix: {
    enabled: true,
    appId: 'a6537ea9-0f1c-4c6f-a9e4-411cdf348a8e',
    submissionFieldIds: [
      { name: 'comments', id: '5be35119adff35d1547a4f7f' },
    ],
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  gtm: {
    containerId: 'GTM-MH74BHQ',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#000',
      logo: 'https://img.vendingmarketwatch.com/files/base/cygnus/vmw/image/static/logo/vending.png?h=60',
    },
    to: 'editors@vendingmarketwatch.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'editors@vendingmarketwatch.com',
    sendFrom: 'vendingmarketwatch.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.vendingmarketwatch.com/files/base/cygnus/vmw/image/static/logo/vending.png?h=60',
    bgColor: '#000',
    isGdprEnabled: true,
    gdprMessage: "Yes, Endeavor Business Media may use my contact information consistent with Endeavor's Privacy Policy to communicate with me by email or telephone about other offerings by Endeavor, its brands, affiliates and/or third-party partners that may be of interest to businesses and individual participants in my industry.",
    privacyMessage: "By clicking above, I acknowledge and agree to Endeavor Business Media’s Terms of Service and to Endeavor Business Media's use of my contact information to communicate with me about offerings by Endeavor, its brands, affiliates and/or third-party partners, consistent with Endeavor's Privacy Policy. In addition, I understand that my personal information will be shared with any sponsor(s) of the resource, so they can contact me directly about their products or services. Please refer to the privacy policies of such sponsor(s) for more details on how your information will be used by them. You may unsubscribe at any time.",
  },
};
