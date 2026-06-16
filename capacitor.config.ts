import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.innershelter.app',
  appName: '内在家园',
  webDir: 'www',
  ios: {
    contentInset: 'automatic',
    backgroundColor: '#d7e7fc',
    scheme: 'Inner Shelter',
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    SplashScreen: {
      launchAutoHide: true,
      launchShowDuration: 2000,
      backgroundColor: '#a6cdf4',
      showSpinner: false,
    },
    StatusBar: {
      style: 'LIGHT',
      backgroundColor: '#d7e7fc',
    },
  },
};

export default config;
