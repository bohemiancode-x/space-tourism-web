/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Bellefair'],
        others: ['Barlow Condensed']
      },
      colors: {
        one: '#0B0D17',
        two: '#D0D6F9',
        three: '#ffffff'
      },
      backgroundImage: {
        'homedesktop': "url('./assets/home/background-home-desktop.jpg')",
        'hometablet': "url('./assets/home/background-home-tablet.jpg')",
        'homemobile': "url('./assets/home/background-home-mobile.jpg')",
        'destinationdesktop': "url('./assets/destination/background-destination-desktop.jpg')",
        'destinationtablet': "url('./assets/destination/background-destination-tablet.jpg')",
        'destinationmobile': "url('./assets/destination/background-destination-mobile.jpg')",
        'crewdesktop': "url('./assets/crew/background-crew-desktop.jpg')",
        'crewtablet': "url('./assets/crew/background-crew-tablet.jpg')",
        'crewmobile': "url('./assets/crew/background-crew-mobile.jpg')",
        'technologydesktop': "url('./assets/technology/background-technology-desktop.jpg')",
        'technologytablet': "url('./assets/technology/background-technology-tablet.jpg')",
        'technologymobile': "url('./assets/technology/background-technology-mobile.jpg')",
      }
    },
  },
  plugins: [],
}
