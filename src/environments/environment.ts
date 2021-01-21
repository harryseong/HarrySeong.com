// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapbox: {
    accessToken: 'pk.eyJ1IjoiaGFycnlzZW9uZyIsImEiOiJja2s1cXJ6b3owbm1mMm90aDdhamllYmkyIn0.OEEkiykq7mJpEammhbSGuQ'
  },
  aws: {
    apiKey: 'AVTTb7jWelslsIoUQ2xb9A71RF17N5zavlrGN4ie',
    api: {
      music: {
        spotify: {
          apiUrl: 'https://api.harryseong.com/dev/v1/music/spotify/currently-playing'
        }
      },
      places: {
        apiUrl: 'https://api.harryseong.com/dev/v1/places'
      },
      weather: {
        apiUrl: 'https://api.harryseong.com/dev/v1/weather',
        apiCallFrequency: 3000000, // Every 5 minutes.
        harryZipcode: '60201' // Evanston, IL
      }
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
