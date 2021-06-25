const dragonForms = require('./dragon-forms');

module.exports = {
  primary: {
    items: [
      { href: '/personal-wellness', label: 'Personal Wellness' },
      { href: '/dentistry', label: 'Dentistry' },
      { href: '/dental-hygiene', label: 'Dental Hygiene' },
      { href: '/front-office', label: 'Front Office' },
      { href: '/dental-assisting', label: 'Dental Assisting' },
      { href: '/practice-management', label: 'Practice Management' },
    ],
  },
  secondary: {
    items: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/videos', label: 'Videos' },
      { href: '/page/about-us', label: 'About Us' },
      { href: 'https://dentalacademyofce.com/default.aspx', label: 'Earn CE', target: '_blank' },
      { href: '/products/free-samples', label: 'Free Samples' },
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
        { href: '/personal-wellness', label: 'Personal Wellness' },
        { href: '/dentistry', label: 'Dentistry' },
        { href: '/dental-hygiene', label: 'Dental Hygiene' },
        { href: '/front-office', label: 'Front Office' },
        { href: '/dental-assisting', label: 'Dental Assisting' },
        { href: '/practice-management', label: 'Practice Management' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: 'https://dentalacademyofce.com/default.aspx', label: 'Earn CE', target: '_blank' },
        { href: '/products/free-samples', label: 'Free Samples' },
        { href: '/front-office/office-forms', label: 'Front Office Forms' },
        { href: '/page/submission-guidelines', label: 'Submission Guidelines' },
        { href: '/videos', label: 'Videos' },
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
