export const environment = {
  production: false,
  mapbox: {
    accessToken: 'pk.eyJ1IjoiaGFycnlzZW9uZyIsImEiOiJja2s1cXJ6b3owbm1mMm90aDdhamllYmkyIn0.OEEkiykq7mJpEammhbSGuQ'
  },
  aws: {
    apiKey: 'edHslV7avfSqgHmoNXTG82GAFMHZ8Ad83BgmXkec',
    api: {
      music: {
        spotify: {
          apiUrl: 'https://api.harryseong.com/test/v1/music/spotify/currently-playing'
        }
      },
      places: {
        apiUrl: 'https://api.harryseong.com/test/v1/places'
      },
      weather: {
        apiUrl: 'https://api.harryseong.com/test/v1/weather',
        apiCallFrequency: 3000000, // Every 5 minutes.
        harryZipcode: '60201' // Evanston, IL
      }
    }
  }
};
