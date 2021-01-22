export const environment = {
  production: true,
  mapbox: {
    accessToken: 'pk.eyJ1IjoiaGFycnlzZW9uZyIsImEiOiJja2s1cXJ6b3owbm1mMm90aDdhamllYmkyIn0.OEEkiykq7mJpEammhbSGuQ'
  },
  aws: {
    apiKey: 'MlQj5eePWlMe6yPXaA2O2paFNuH1yUt3lrtYAyTc',
    api: {
      music: {
        spotify: {
          apiUrl: 'https://api.harryseong.com/prod/v1/music/spotify/currently-playing'
        }
      },
      places: {
        apiUrl: 'https://api.harryseong.com/prod/v1/places'
      },
      weather: {
        apiUrl: 'https://api.harryseong.com/prod/v1/weather',
        apiCallFrequency: 3000000, // Every 5 minutes.
        harryZipcode: '60201' // Evanston, IL
      }
    }
  }
};
