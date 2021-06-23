module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.html',
    './src/**/*.js',

  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      textColor:{
        skin:{
          base:'var(--color-text-base)',
          muted:'var( --color-text-muted)',
          header:'var(--color-text-header)',
          darkmode:'var(--color-text-darkmode)'
        }
      },
      backgroundColor:{
        skin:{
          primaryFill:'var(--color-primaryfill)',
          secondaryFill:'var(--color-secondaryfill)'
        }
      },   
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
