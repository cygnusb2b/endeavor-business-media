const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');
const leaders = require('./leaders');

const siteLogo = 'https://img.officer.com/files/base/cygnus/ofcr/image/static/logo/site_logo_2021.png';

module.exports = {
  navigation,
  gam,
  nativeX,
  dragonForms,
  leaders,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: `${siteLogo}?h=45`,
      srcset: [
        `${siteLogo}?h=90 2x`,
      ],
    },
    footer: {
      src: `${siteLogo}?h=60`,
      srcset: [
        `${siteLogo}?h=120 2x`,
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/3287176/profile', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/officercom', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/officercom', target: '_blank' },
  ],
  identityX: {
    appId: '5e28a80658e67b295255ae5d',
    enabled: true,
    comments: { enabled: true },
  },
  radix: {
    enabled: true,
    appId: 'b105cce3-d815-4347-9ae4-b203d58347a4',
    submissionFieldIds: [
      { name: 'comments', id: '57e55318bcf2d6f3c30e0833' },
    ],
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  gtm: {
    containerId: 'GTM-PXB3XNX',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#222222',
      logo: `${siteLogo}?h=60`,
    },
    to: 'support@officer.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'notifications@officer.com',
    sendFrom: 'Officer.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: `${siteLogo}?h=60`,
    bgColor: '#222222',
    isGdprEnabled: true,
    gdprMessage: "Yes, Endeavor Business Media may use my contact information consistent with Endeavor's Privacy Policy to communicate with me by email or telephone about other offerings by Endeavor, its brands, affiliates and/or third-party partners that may be of interest to businesses and individual participants in my industry.",
    privacyMessage: "By clicking above, I acknowledge and agree to Endeavor Business Media’s Terms of Service and to Endeavor Business Media's use of my contact information to communicate with me about offerings by Endeavor, its brands, affiliates and/or third-party partners, consistent with Endeavor's Privacy Policy. In addition, I understand that my personal information will be shared with any sponsor(s) of the resource, so they can contact me directly about their products or services. Please refer to the privacy policies of such sponsor(s) for more details on how your information will be used by them. You may unsubscribe at any time.",
  },
};
