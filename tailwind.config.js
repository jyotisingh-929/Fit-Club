/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgray: "#D9D9D9",
        gray: "#9c9c9c",
        gray1: "#393D42",
        gray2: "#4C4E53",
        orange: "#f48915",
        darkGrey: "#464D53",
        caloryCard: "#656565",
        planCard: "linear-gradient(210.41deg, #fa5042 1.14 %, #ffa739 100.75 %)",
        ppColor:  "#3c3f45",
        garred: "#fa5042",
        garyellow: "#ffa739",
        ct1: "4E5055",
       
      },
      margin: {
        '500px': '500px',
        '450px': '450px',
        '1000px': '747px',
        '388px': '388px',
        '300px': '305px',
      },
      width: {
        '368px': '368px',
        '240px': '240px',
        '352px': '352px',
        '512px': '512px',
      },
      height:{
        '480px': '480px',
        '368px': '368px',
      },
      borderRadius: {
        'sm1': '50%',
      },
      blur: {
        xs: '212px',
      },
    },
  },
plugins: [],
}

