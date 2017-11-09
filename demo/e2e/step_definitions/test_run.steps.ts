import { defineSupportCode } from 'cucumber';
import { browser } from 'protractor';

defineSupportCode(({ Given, When}) => {
  Given(/^I am on the demo page$/, () => {
    browser.get('http://valor-software.com/ngx-bootstrap/#/');
      });

  When(/^I wait for loading$/, () => {
    browser.sleep(1000);
  });
});
