const navigation = require('./navigation');
const gam = require('./gam');
const gcse = require('./gcse');
const nativeX = require('./native-x');

module.exports = {
  navigation,
  gam,
  gcse,
  nativeX,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.offshore-mag.com/files/base/pennwell/os/logo.png?h=60',
      srcset: [
        'https://img.offshore-mag.com/files/base/pennwell/os/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.offshore-mag.com/files/base/pennwell/os/logo.png?h=60',
      srcset: [
        'https://img.offshore-mag.com/files/base/pennwell/os/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/offshore-magazine', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/offshoremgzn', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/offshoremagazine', target: '_blank' },
  ],
  identityX: {
    appId: '5e6946e4fa46c4129eeb2a0d',
    enabled: true,
    comments: { enabled: true },
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  gtm: {
    containerId: 'GTM-NFS8BVJ',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'Offshore magazine covers the global trends and technologies for offshore oil and gas operations. Offshore covers the latest news, market trends, and products relative to oil and gas E&P operations. Each monthly issue contains current topics, special reports, in-depth interviews with industry executives, maps of the hottest offshore E&P areas and posters of important offshore technologies.',
  },
  contactUs: {
    branding: {
      bgColor: '#094e85',
      logo: 'https://img.offshore-mag.com/files/base/pennwell/os/logo.png?h=60',
    },
    to: 'pwestervelt@pennwell.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'pwestervelt@pennwell.com',
    sendFrom: 'OffShore-Mag.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.offshore-mag.com/files/base/pennwell/os/logo.png?h=60',
    bgColor: '#094e85',
    isGdprEnabled: true,
    gdprMessage: "Yes, Endeavor Business Media may use my contact information consistent with Endeavor's Privacy Policy to communicate with me by email or telephone about other offerings by Endeavor, its brands, affiliates and/or third-party partners that may be of interest to businesses and individual participants in my industry.",
    privacyMessage: "By clicking above, I acknowledge and agree to Endeavor Business Media’s Terms of Service and to Endeavor Business Media's use of my contact information to communicate with me about offerings by Endeavor, its brands, affiliates and/or third-party partners, consistent with Endeavor's Privacy Policy. In addition, I understand that my personal information will be shared with any sponsor(s) of the resource, so they can contact me directly about their products or services. Please refer to the privacy policies of such sponsor(s) for more details on how your information will be used by them. You may unsubscribe at any time.",
  },
};
