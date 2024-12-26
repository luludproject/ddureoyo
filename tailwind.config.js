/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'Nanum': ['NanumSquare'], // 나눔스퀘어 폰트 추가
      },
      backgroundImage: {
        'bgimg': "url('assets/imgs/7.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

