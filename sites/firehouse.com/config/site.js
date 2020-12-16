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
      src: 'https://img.firehouse.com/files/base/cygnus/fhc/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.firehouse.com/files/base/cygnus/fhc/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.firehouse.com/files/base/cygnus/fhc/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.firehouse.com/files/base/cygnus/fhc/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/1938315/profile', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/FirehouseNews', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/firehousecom', target: '_blank' },
  ],
  identityX: {
    appId: '5e28a5b558e67b455855ae55',
    enabled: true,
    comments: { enabled: true },
  },
  radix: {
    enabled: true,
    appId: 'de0a0c07-a04d-444d-a5bf-4212f9df63a3',
    submissionFieldIds: [
      { name: 'comments', id: '5a81ed3f74265bb4c80b1aca' },
    ],
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  gtm: {
    containerId: 'GTM-WZWBT3Q',
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
      logo: 'https://img.firehouse.com/files/base/cygnus/fhc/image/static/logo/site_logo.png?h=60',
    },
    to: 'websupport@firehouse.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'rmi@firehouse.com',
    sendFrom: 'Firehouse.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.firehouse.com/files/base/cygnus/fhc/image/static/logo/site_logo.png?h=60',
    bgColor: '#164f77',
    isGdprEnabled: true,
    gdprMessage: "Yes, Endeavor Business Media may use my contact information consistent with Endeavor's Privacy Policy to communicate with me by email or telephone about other offerings by Endeavor, its brands, affiliates and/or third-party partners that may be of interest to businesses and individual participants in my industry.",
    privacyMessage: "By clicking above, I acknowledge and agree to Endeavor Business Media’s Terms of Service and to Endeavor Business Media's use of my contact information to communicate with me about offerings by Endeavor, its brands, affiliates and/or third-party partners, consistent with Endeavor's Privacy Policy. In addition, I understand that my personal information will be shared with any sponsor(s) of the resource, so they can contact me directly about their products or services. Please refer to the privacy policies of such sponsor(s) for more details on how your information will be used by them. You may unsubscribe at any time.",
  },
};
