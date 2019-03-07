exports.config = {
    framework: "jasmine",
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    capabilities: {
        browserName: "chrome",
        shardTestFiles: true,
        maxInstances: 10,
        chromeOptions: {
         // args: ["--headless", "--disable-gpu", "--window-size=800,600"]
        },
        chromeOptions: {
          args: ["no-sandbox"]
        }
      },
      params: {
        url: "https://alpha.woovly.com",
        email: "xyz@gmail.com",
        password: "XXXXXX",
        
      },
    specs: ["spec/login_test.js"]
  };