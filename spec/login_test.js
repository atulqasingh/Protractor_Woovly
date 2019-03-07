var loginElements = require("../pageObject/loginElements"); 
var data = require("../conf");
 
 describe('woovly SignIn', function() {
   beforeEach( function() {
    loginElements.openBrowser("https://alpha.woovly.com");
    browser.sleep(5000);
    browser.ignoreSynchronization = true;
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;

   });

    it('email signin', function() { 
      browser.sleep(1000);
      loginElements.emailLogin(data.config.params.email,data.config.params.password);
      browser.sleep(5000);
      expect(browser.getTitle()).toBe("atul.singh - Feed");
    });
    
  });
   