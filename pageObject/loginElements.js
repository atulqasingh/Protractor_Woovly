var loginElements = function(){
    var signup_loginButton = element(by.xpath('//*[@id="contHt"]/div[1]/div[2]/div[9]/div[1]/div[2]'));
    var signin_link = element(by.id('loginspan'));
    var email_field = element(by.model('loginEmail'));
    var pass_field = element(by.model('loginPassword'));
    var signin_button = element(by.xpath('//*[@id="signinFields"]/div[3]'));
    
    
    this.openBrowser = function(url) {
        browser.get(url);
        browser.driver
          .manage()
          .window()
          .maximize();
        //for testing non-angular applications
        //browser.ignoreSynchronization = true;
      };

    this.emailLogin = function(email,pass){
        browser.sleep(2000);
        signup_loginButton.click();
        browser.sleep(2000);
        signin_link.click();
        email_field.sendKeys(email);
        pass_field.sendKeys(pass);
        signin_button.click();
    };
};
module.exports = new loginElements();