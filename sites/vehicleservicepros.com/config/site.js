const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');

const siteLogo = 'https://img.vehicleservicepros.com/files/base/cygnus/vspc/image/static/logo/vsp.png?h=60';

module.exports = {
  navigation,
  gam,
  nativeX,
  dragonForms,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: siteLogo,
      srcset: [
        'https://img.vehicleservicepros.com/files/base/cygnus/vspc/image/static/logo/vsp.png?h=120 2x',
      ],
    },
    footer: {
      src: siteLogo,
      srcset: [
        'https://img.vehicleservicepros.com/files/base/cygnus/vspc/image/static/logo/vsp.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/vehicleservicepros/', target: '_blank' },
    { provider: 'twitter', href: 'https://www.twitter.com/VehicleSrvcPros', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/VehicleServicePros', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCoU05FUN1AdvXj5AjyfX83Q?view_as=subscriber', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/vehiclesrvcpros/', target: '_blank' },
  ],
  identityX: {
    appId: '5e28a60658e67bec4255ae5a',
    enabled: true,
    comments: { enabled: true },
  },
  radix: {
    enabled: true,
    appId: '97b09a4b-8eb8-475f-b72f-19d0f2073256',
    submissionFieldIds: [
      { name: 'comments', id: '57e55318bcf2d6f3c30e0833' },
    ],
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  gtm: {
    containerId: 'GTM-KVJDNC9',
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
      logo: siteLogo,
    },
    to: 'contact@vehicleservicepros.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'sales@vehicleservicepros.com',
    sendFrom: 'VehicleServicePros.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: siteLogo,
    bgColor: '#164f77',
    isGdprEnabled: true,
    gdprMessage: "Yes, Endeavor Business Media may use my contact information consistent with Endeavor's Privacy Policy to communicate with me by email or telephone about other offerings by Endeavor, its brands, affiliates and/or third-party partners that may be of interest to businesses and individual participants in my industry.",
    privacyMessage: "By clicking above, I acknowledge and agree to Endeavor Business Media’s Terms of Service and to Endeavor Business Media's use of my contact information to communicate with me about offerings by Endeavor, its brands, affiliates and/or third-party partners, consistent with Endeavor's Privacy Policy. In addition, I understand that my personal information will be shared with any sponsor(s) of the resource, so they can contact me directly about their products or services. Please refer to the privacy policies of such sponsor(s) for more details on how your information will be used by them. You may unsubscribe at any time.",
  },
};
