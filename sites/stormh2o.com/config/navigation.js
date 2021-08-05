const dragonForms = require('./dragon-forms');

module.exports = {
  primary: {
    items: [
      { href: '/bmps', label: 'BMPs' },
      { href: '/green-infrastructure', label: 'Green Infrastructure' },
      { href: '/program-management', label: 'Program Management' },
      { href: '/compliance', label: 'Compliance' },
      { href: '/erosion-control', label: 'Erosion Control' },
    ],
  },
  secondary: {
    items: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/page/advertise', label: 'Advertise' },
      { href: '/white-papers', label: 'White Papers' },
      { href: '/webinars', label: 'Webcasts' },
      {
        href: 'https://stormwateruniv.com',
        label: 'Stormwater University',
        target: '_blank',
      },
    ],
  },
  tertiary: {
    items: [
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: [
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/page/advertise', label: 'Advertise' },
      { href: dragonForms.getFormUrl('doNotSell'), label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { href: '/bmps', label: 'BMPs' },
        { href: '/green-infrastructure', label: 'Green Infrastructure' },
        { href: '/program-management', label: 'Program Management' },
        { href: '/compliance', label: 'Compliance' },
        { href: '/erosion-control', label: 'Erosion Control' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: '/webinars', label: 'Webcasts' },
        {
          href: 'https://stormwateruniv.com',
          label: 'Stormwater University',
          target: '_blank',
        },
        { href: '/events', label: 'Events' },
        { href: '/magazine', label: 'Magazine' },
        { href: '/white-papers', label: 'White Papers' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/page/advertise', label: 'Advertise' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
