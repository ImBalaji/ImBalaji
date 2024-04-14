module.exports = {
    darkMode: 'selector',
    content: [
      './_drafts/**/*.html',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.md',
      './*.md',
      './*.html',
    ],
    theme: {
      extend: {
        animation: {
          'spinslow': 'spin 3s linear infinite',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',        
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
      keyframes: {
        spinslow: {
          '0%, 100%': { transform: 'translate-x-0' },
          // '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
    plugins: []
  }
}