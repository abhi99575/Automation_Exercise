
class Payment{
    constructor(page){
        this.page=page;
        this.nameOnCard=this.page.locator('[name="name_on_card"]');
        this.cardNumber=this.page.locator('[data-qa="card-number"]');
        this.cvc=this.page.locator('[data-qa="cvc"]');
        this.expiry=this.page.locator('[data-qa="expiry-month"]');
        this.year=this.page.locator('[data-qa="expiry-year"]');
        this.payButton=this.page.locator('[data-qa="pay-button"]');
        this.paymentconfirmation=this.page.locator('div[class="alert-success alert"]').first();
    }

    async payConfirmOrder(cardDetails)
    {
        await this.nameOnCard.fill(cardDetails.nameOnCard);
        await this.cardNumber.fill(cardDetails.cardNumber);
        await this.cvc.fill(cardDetails.cvc);
        await this.expiry.fill(cardDetails.expiry);
        await this.year.fill(cardDetails.year);
        await this.payButton.click();
       // await this.page.waitFor(this.paymentconfirmation);
    }
    async orderconfirmation()
    {
        return this.paymentconfirmation;

    }



}
module.exports={Payment}