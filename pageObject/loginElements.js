var loginElements = function(){
    var signup_loginButton = element(by.xpath('//*[@id="contHt"]/div[1]/div[2]/div[9]/div[1]/div[2]'));
    var signin_link = element(by.id('loginspan'));
    var email_field = element(by.model('loginEmail'));
    var pass_field = element(by.model('loginPassword'));
    var signin_button = element(by.xpath('//*[@id="signinFields"]/div[3]'));
    var google_button = element(by.xpath('//*[@id="googleLbtn2"]/div/div'));
    var google_email_id = element(by.id("identifierId"));
    var google_email_id_next = element(by.id("identifierNext"));
    var google_password = element(by.xpath('//*[@id="password"]/div[1]/div/div[1]/input'));
    var google_password_next = element(by.id("passwordNext"));
    
    
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

    this.googleLogin = function(google_emailid,google_pass){
      browser.sleep(5000);
      signup_loginButton.click();
      browser.sleep(2000);
      google_button.click();
      browser.sleep(5000);
      
      browser.getAllWindowHandles().then(function(handles) {   //Signin with 3rd party popup
      var popupHandle = handles[1];
      browser.switchTo().window(popupHandle);

      google_email_id.sendKeys(google_emailid);        //perform login operations
      google_email_id_next.click();
      browser.sleep(2000);
      google_password.sendKeys(google_pass);
      google_password_next.click();
      browser.sleep(5000);
      //Back to Previous Window
      browser.driver.switchTo().window(handles[0]);
    });
    }

};
module.exports = new loginElements();