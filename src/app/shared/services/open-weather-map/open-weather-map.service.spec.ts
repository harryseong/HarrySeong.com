import { TestBed } from '@angular/core/testing';

import { OpenWeatherMapService } from './open-weather-map.service';

describe('OpenWeatherMapApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenWeatherMapService = TestBed.get(OpenWeatherMapService);
    expect(service).toBeTruthy();
  });
});
