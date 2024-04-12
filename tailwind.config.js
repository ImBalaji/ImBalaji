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