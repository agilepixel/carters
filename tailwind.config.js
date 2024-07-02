module.exports = {
  prefix: 'twcss-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      xlg: '1440px',
      x2lg: '1920px',
      pageMaxWidth: '1440px',
    },
    maxWidth: {
      desktop: '1170px',
      design: '1366px',
    },
    extend: {
      fontFamily: {
        heading: 'var(--font-heading-family)',
      },
      colors: {
        primary: '#FFD700',
        secondary: '#041E42',
        tertiary: '#F0F0F0',
        content: '#454545',
      },
    },
  },
  plugins: [],
};
