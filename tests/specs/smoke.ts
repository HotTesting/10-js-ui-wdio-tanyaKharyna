

describe("Product return", function() {
    it("can be submited", function() {
        const url = '/index.php?route=account/return/add';
        browser.url(url);

        const content = $('#content');

        const firstName = content.$('#input-firstname');
        firstName.setValue('name');

        const lastName = content.$('#input-lastname');
        lastName.setValue('lastname');

        const email = content.$('#input-email');
        const emailStr = `test+${Date.now()}@test.com`;
        email.setValue(emailStr);

        const phone = content.$('#input-telephone');
        phone.setValue('078 990 78 99');

        const orderID = content.$('#input-order-id');
        const orderIdStr = Math.random.toString().slice(2,11);
        orderID.setValue(orderIdStr);

        const productName = content.$('#input-product');
        productName.setValue('Mac');

        const productCode = content.$('#input-model');
        productCode.setValue('UH78');

        const reasonForReturn = $('input[type="radio"][value="2"]')
        reasonForReturn.click();

        const comment = content.$('#input-comment');
        comment.setValue('hate it');

        const submitButton = content.$('[value="Submit"]');
        submitButton.click();

        const title = content.$('h1')

        expect(browser.getUrl()).toContain('route=account/return/success');
        expect(title).toHaveText('Product Returns');
    });
  });