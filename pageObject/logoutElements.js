var logoutElements = function(){
    var profile_pic = element(by.css('[ng-show="loggedInUser"]'));
    var logout = element(by.xpath('//*[@id="usersetting1"]/div/a[3]/div'));

    this.Logout = function() {
        browser.sleep(1000);
        console.log("inside logout");
        profile_pic.click();
        logout.click();
      };
};
module.exports = new logoutElements();