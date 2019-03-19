var HtmlReporter = require("./node_modules/protractor-beautiful-reporter");
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
        email: "xyz@xep.in",
        password: "admin",
        google_email: "shivam.parashar@xyz.in",
        google_password: "Pqr@123"
        
      },

      
    specs: ["spec/login_test.js"],

    onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(
        new HtmlReporter({
          baseDirectory: "Test-Report/screenshots"
        }).getJasmine2Reporter()
      );
    }

  };