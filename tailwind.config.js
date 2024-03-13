const headerHeight = 56;

module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        sortTextColor: 'rgb(64,64,64)',
        textBtnColor: '#171717',
        textBtnHoverColor: 'rgb(59,73,223)',
      },
      boxShadow: {
        center: '0 0px 12px 1px rgb(123 113 113 / 77%)',
      },
      backgroundColor: {
        appBackground: 'rgb(245, 245, 245)',
        hoverColor: 'rgba(23, 23, 23, 0.05)',
        //按钮的颜色
        buttonColor: 'rgba(29,161,242,1)',
        //文字按钮hover的颜色
        textBtnHoverColor: 'rgb(226,227,243)',
      },
      height: {
        headerHeight: headerHeight + 'px',
        bodyHeight: `calc(100vh - ${headerHeight + 'px'})`,
      },
    },
  },
  plugins: [],
};
