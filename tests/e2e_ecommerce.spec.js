const {LoginPage}=require('../pages/LoginPage');
const {Dashboard}= require('../pages/Dashboard');
const {Checkout}=require('../pages/Checkout');
const {Payment}=require('../pages/Payment');
const testData=require('../utils/testdata.json');
const Objecttestdata=require('../utils/Objecttestdata');
const {test,expect}=require('@playwright/test');

test('E2E test add to cart',async({page})=>{
 // await page.pause();
    const login=new LoginPage(page);
    await login.goTo();
    await login.Login(testData.login.email,testData.login.password);
    await expect(login.success).toBeTruthy();
    const dashboard=new Dashboard(page);
    await dashboard.products(testData.products.selectedproduct);
    await dashboard.cartNavigation();
    expect(await dashboard.cartVerification(testData.products.selectedproduct)).toBeTruthy();
    await dashboard.checkout();
    const checkout=new Checkout(page);
    expect(await checkout.verifyCheckout()).toBeTruthy();
    await checkout.placeOrder();
    const payment=new Payment(page);
    await payment.payConfirmOrder(Objecttestdata.payment);
    expect(await payment.orderconfirmation()).toBeHidden();


})