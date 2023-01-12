// spec.js
describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.get('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');  
        element(by.css('button[class="btn btn-primary btn-lg"]')).click();
        element(by.css('select[class="form-control ng-pristine ng-untouched ng-valid"]')).click();   
        element(by.model("custId")).all(by.css('option[value="2"]')).click();
        element(by.css('button[class="btn btn-default"]')).click();
        element.all(by.css('button[class="btn btn-lg tab"]')).get(1).click();
        element(by.css('input[class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required"]')).click();
         element(by.model('amount')).sendKeys(2544);
        element(by.css('button[class="btn btn-default"]')).click();
        expect(element(by.css('span[class="error ng-binding"]')).getText()).toEqual('Deposit Successful').then(function(){
                  console.log('Deposit Successful.');
                });
          
    
    });
});