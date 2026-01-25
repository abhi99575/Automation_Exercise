class Checkout{
    constructor(page){
        this.page=page;
        this.placeorder=this.page.locator('[href="/payment"]')
    }
    async verifyCheckout()
    {
        return await this.placeorder.isVisible();
    }

    async placeOrder()
    {
        await this.placeorder.click();
    }
}
module.exports={Checkout}