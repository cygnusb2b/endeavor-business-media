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
      src: 'https://img.mlo-online.com/files/base/ebm/mlo/image/static/logo/prestitial_logo.png',
    },
    navbar: {
      src: 'https://img.mlo-online.com/files/base/ebm/mlo/image/static/logo/site_logo.png?h=45',
      srcset: [
        'https://img.mlo-online.com/files/base/ebm/mlo/image/static/logo/site_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.mlo-online.com/files/base/ebm/mlo/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.mlo-online.com/files/base/ebm/mlo/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/?home=&gid=2301731&trk=groups_guest_about-h-logo', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/MedicalLabMLO', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/MLOMedicalLaboratoryObserver', target: '_blank' },
  ],
  identityX: {
    appId: '5e69474987774f9568a7dce5',
    enabled: true,
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  gtm: {
    containerId: 'GTM-NBTQ9MW',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'mlo-online.com features online exclusive content as well as feature articles and stories from our print publications. Access digital editions and recent issues for our magazine here.',
  },
  contactUs: {
    branding: {
      bgColor: '#000000',
      logo: 'https://img.mlo-online.com/files/base/ebm/mlo/image/static/logo/site_logo.png?h=60',
    },
    to: 'krussell@mlo-online.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'krussell@mlo-online.com',
    sendFrom: 'Medical Laboratory Observer <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.mlo-online.com/files/base/ebm/mlo/image/static/logo/site_logo.png?h=60',
    bgColor: '#000000',
    isGdprEnabled: true,
    gdprMessage: "Yes, Endeavor Business Media may use my contact information consistent with Endeavor's Privacy Policy to communicate with me by email or telephone about other offerings by Endeavor, its brands, affiliates and/or third-party partners that may be of interest to businesses and individual participants in my industry.",
    privacyMessage: "By clicking above, I acknowledge and agree to Endeavor Business Media’s Terms of Service and to Endeavor Business Media's use of my contact information to communicate with me about offerings by Endeavor, its brands, affiliates and/or third-party partners, consistent with Endeavor's Privacy Policy. In addition, I understand that my personal information will be shared with any sponsor(s) of the resource, so they can contact me directly about their products or services. Please refer to the privacy policies of such sponsor(s) for more details on how your information will be used by them. You may unsubscribe at any time.",
  },
};
