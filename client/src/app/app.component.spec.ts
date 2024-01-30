import { Store } from '@ngrx/store';
import { AppComponent } from './app.component';
import { SessionStorageService } from './core/service/session-storage.service';
import { TokenService } from './core/service/token.service';
import { McConfigService } from './shared/service/mc-config.service';
import { AppState } from './store-ngrx/app.state';

jest.mock('jwt-decode');

const store = {
  dispatch: jest.fn(),
  subscribe: jest.fn(),
};
const session = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};
const token = {
  getDataToken: jest.fn(),
};
const mcConfigService = {
  getConfigMC: jest.fn().mockImplementation(() => ({
    subscribe: jest.fn(),
  })),
};

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async () => {
    component = new AppComponent(
      store as unknown as Store<AppState>,
      session as unknown as SessionStorageService,
      token as unknown as TokenService,
      mcConfigService as unknown as McConfigService,
    );
  });

  it('should create the app', () => {
    expect(component).toBeDefined();
  });
});
