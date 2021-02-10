const dragonForms = require('./dragon-forms');

module.exports = {
  primary: {
    items: [
      { href: '/applications', label: 'Applications' },
      { href: '/industries', label: 'Industries' },
      { href: '/instrumentation', label: 'Instrumentation' },
      { href: '/test-issues-techniques', label: 'Test Issues & Techniques' },
      { href: '/ee-blogs', label: 'EE Blogs' },
    ],
  },
  secondary: {
    items: [
      { href: '/magazine', label: 'Magazine' },
      { href: '/white-papers', label: 'White Papers' },
      { href: '/page/resources', label: 'EE Resources' },
      { href: '/special-reports', label: 'Special Reports' },
      { href: '/page/subscribe', label: 'Subscribe' },
      { href: 'https://designengineering.endeavorb2b.com/evaluation-engineering/', label: 'Advertise', target: '_blank' },
      { href: '/leaders/company/21158731/evaluation-engineerings', label: 'About Us' },
    ],
  },
  tertiary: {
    items: [
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: [
      { href: '/leaders/company/21158731/evaluation-engineerings', label: 'About Us' },
      { href: '/page/about-us', label: 'Contact Us' },
      { href: 'https://designengineering.endeavorb2b.com/evaluation-engineering/', label: 'Advertise', target: '_blank' },
      { href: dragonForms.getFormUrl('doNotSell'), label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { href: '/applications', label: 'Applications' },
        { href: '/industries', label: 'Industries' },
        { href: '/instrumentation', label: 'Instrumentation' },
        { href: '/test-issues-techniques', label: 'Test Issues & Techniques' },
        { href: '/covid-19', label: 'COVID-19' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: '/page/resources', label: 'EE Resources' },
        { href: '/ee-blogs', label: 'Blogs' },
        { href: '/new-products', label: 'New Products' },
        { href: '/special-reports', label: 'Special Reports' },
        { href: '/magazine', label: 'Digital Archives' },
        { href: '/magazine/600a393814c8b4fd318b46f0', label: 'TechXchange' },
        { href: '/white-papers', label: 'White Papers' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/page/subscribe', label: 'Subscribe' },
        { href: 'https://designengineering.endeavorb2b.com/evaluation-engineering/', label: 'Advertise', target: '_blank' },
        { href: '/leaders/company/21158731/evaluation-engineerings', label: 'About Us' },
        { href: '/page/about-us', label: 'Contact Us' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
