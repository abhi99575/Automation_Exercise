class Dashboard {
    constructor(page) {
        this.page = page;
        this.productNames = this.page.locator('.features_items .text-center p');
        this.addToCartButtons = this.page.locator('.productinfo .btn .fa');
        this.cartnavigate = this.page.locator('a[href="/view_cart"] i')
        this.continueshopping = this.page.getByText('Continue Shopping');
        this.cartlist = this.page.locator('#cart_info_table h4');
        this.checkoutButton=this.page.locator('[class="btn btn-default check_out"]')
    }

    async products(selectedProduct) {
        const names = await this.productNames.allTextContents();
        let productFound = false;

        for (let i = 0; i < names.length; i++) {
            if (names[i].trim() === selectedProduct) {
                await this.addToCartButtons.nth(i).click();
                productFound = true;
                break;
            }
        }
        if (!productFound) {
            console.log(`❌ Product not found: ${selectedProduct}`);
        }
        await this.continueshopping.click();
    }

    async cartNavigation() {
        await this.cartnavigate.click();
    }

    async cartVerification(productname) {
        const cartdata = await this.cartlist.allTextContents();
        console.log(await cartdata);
        for (let i = 0; i < cartdata.length; i++) {

            if (cartdata[i].trim() == productname) {
                return true;
            }
        }
        return false;
    }

    async checkout() {
        await this.checkoutButton.click();
    }

}
module.exports = { Dashboard };
