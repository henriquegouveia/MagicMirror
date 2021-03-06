/*************** AUTO GENERATED BY REMOTE CONTROL MODULE ***************/

var config = 
{
  address: '0.0.0.0',
  ipWhitelist: [
    '192.168.0.100/24',
    '127.0.0.1'
  ],
  language: 'pt',
  modules: [
    {
      module: 'alert',
      config: {}
    },
    {
      module: 'updatenotification',
      position: 'top_bar',
      config: {}
    },
    {
      module: 'clock',
      position: 'top_left',
      config: {
	 timezone: 'America/Sao_Paulo',
      }
    },
    {
      module: 'MMM-uber',
      position: 'top_center',
      header: 'Uber (DC)',
      config: {
        lat: -20.5301,
        lng: -47.3681,
        uberServerToken: 'JA.VUNmGAAAAAAAEgASAAAABwAIAAwAAAAAAAAAEgAAAAAAAAH4AAAAFAAAAAAADgAQAAQAAAAIAAwAAAAOAAAAzAAAABwAAAAEAAAAEAAAAEevGIIH2IEGduxEn2nLTcCnAAAA46er8cAx9iJqfKtFJ4i-XGD2qUyAL8LBq8Oti5MDkfILMvam-gJs0rIc2sX-HI_WAkLX6_YkofkiNPqi-HBgpi1zNkLZYRx4QT4gnVzndEHIzoUWhtwS9Tv0rRYCUq6Fe_SXGuaRgLItKHLCNL1Yrgnd2oehk1atNf7rkctO7oEvxR2KrXRJhb87NaFHWQ6GS72FsvtpbxRg4FDhlQz_BtPDdafjZFEADAAAAPUbuTD20Ol7HnPZaSQAAABiMGQ4NTgwMy0zOGEwLTQyYjMtODA2ZS03YTRjZjhlMTk2ZWU'
      }
    },
    {
      module: 'MMM-GoogleAssistant',
      position: 'top_left',
      config: {
        maxWidth: '100%',
        header: '',
        publishKey: 'sub-c-885002c0-4168-11eb-ae10-b69578166507',
        subscribeKey: 'pub-c-3fdc8285-9164-4b22-94c0-3ec87af1b766',
        updateDelay: 500
      }
    },
    {
      module: 'currentweather',
      position: 'top_right',
      config: {
        location: 'Franca, BR',
        locationID: '3463011',
        appid: '440587f3fa7ec5f23e23cfcbed36aa26',
        showWindDirection: false,
        useBeaufort: false,
        roundTemp: true
      }
    },
    {
      module: 'weatherforecast',
      position: 'top_right',
      header: 'Weather Forecast',
      config: {
        location: 'Franca, BR',
        locationID: '3463011',
        appid: 'e0d871c75e27cebf384f4eae7f14ebf1'
      }
    },
    {
      module: 'MMM-AVStock',
      position: 'middle_center',
      header: '',
      config: {
        apiKey: '85GYIPWT6CAXDQ0G',
        symbols: [
          'ABEV3.SA',
          'AZUL4.SA',
          'HCRI11.SA',
          'HGBS11.SA',
          'HGLG11.SA',
          'ITSA4.SA',
          'ITUB4.SA',
          'KNRI11.SA',
          'LREN3.SA',
          'LVBI11.SA',
          'MGLU3.SA',
          'MXRF11.SA',
          'OUJP11.SA',
          'RBRP11.SA',
          'SHPH11.SA',
          'TSLA',
          'VISC11.SA',
          'XPLG11.SA',
          'XPML11.SA'
        ],
        purchasePrice: [
          13.76,
          25.97,
          366,
          249.57,
          169.62,
          9.39,
          26.3,
          153.87,
          46.59,
          115.79,
          19.97,
          10.87,
          102.58,
          92.19,
          940,
          641.87,
          112.85,
          140.49,
          112.8
        ],
        showPurchasePrices: true,
        showPerformance2Purchase: true,
        mode: 'grid',
        showChart: false,
        showVolume: false,
        debug: true
      }
    },
    {
      module: 'MMM-NowPlayingOnSpotify',
      position: 'bottom_left',
      config: {
        clientID: 'b8474970ae6f4e92bbe61887a5feaef5',
        clientSecret: 'a109fe01b19840de9e3505abc75dbcdb',
        accessToken: 'BQAs5WgULI_LZncruRAS29L4oA1XQ1SZlSNf1nrlC1-yvQl37bbaOoC9iVCewhwmkwTM0c2dmLGveWB4TPjbegpeG5Fs6iV5mFcwsFVz-_IMGfzxlVbkyFJslUCGavJmkYJdR22NHPWO9ibkpvlIcrU',
        refreshToken: 'AQBgsd7R3c-iIX583UAIL73GxuyrauSHYz8rUS2bqMZzpqt-4QFKV8PUcPz0PhjzKYMzt7bwu3VPehjGtK-kybIZfVFjO--JesEkW4pZtLRd8Ldf2SKfkyLe_K7YRkxaqLw'
      }
    },
    {
      module: 'newsfeed',
      position: 'bottom_bar',
      config: {
        feeds: [
          {
            title: 'Últimas Notícias',
            url: 'https://www.noticiasaominuto.com.br/rss/ultima-hora'
          }
        ],
        showPublishDate: false,
        ignoreOldItems: true
      }
    },
    {
      module: 'MMM-Remote-Control',
      config: {
        showModuleApiMenu: true,
        secureEndpoints: false
      }
    }
  ],
  useHttps: false,
  httpsPrivateKey: '',
  httpsCertificate: '',
  logLevel: [
    'INFO',
    'LOG',
    'WARN',
    'ERROR'
  ]
}

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
