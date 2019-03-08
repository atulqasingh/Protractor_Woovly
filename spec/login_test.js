var loginElements = require("../pageObject/loginElements"); 
var logoutElements = require("../pageObject/logoutElements");
var data = require("../conf");
 
 describe('woovly SignIn', function() {
   beforeEach( function() {
    loginElements.openBrowser("https://alpha.woovly.com");
    browser.sleep(5000);
    browser.ignoreSynchronization = true;
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;

   });

    // it('email signin', function() { 
    //   browser.sleep(1000);
    //   loginElements.emailLogin(data.config.params.email,data.config.params.password);
    //   browser.sleep(5000);
    //   expect(browser.getTitle()).toBe("atul.singh - Feed");
    //   browser.sleep(5000);
    //   // logoutElements.Logout();
    //   // browser.sleep(5000);
    // });
    
    it('Social Profile Login like google', async()=>{
      
      browser.sleep(5000);
      loginElements.googleLogin(data.config.params.google_email,data.config.params.google_password);
      browser.sleep(3000);
      expect(browser.getTitle()).toEqual("shivam.186 - Feed");
      browser.sleep(5000);
      // logoutElements.Logout();

    });
  });
   