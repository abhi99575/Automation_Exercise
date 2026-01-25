const {test,expect}=require('@playwright/test')
const LoginPage=require('../pages/LoginPage')
const testData=require('../utils/testdata.json')
test('Login To Automationexercise ',async({page})=>{
    const Login=new LoginPage.LoginPage(page);
    await Login.goTo();
    await expect(page).toHaveTitle(testData.login.title);
    await Login.Login(testData.login.email,testData.login.password);
    await expect(page.getByText(testData.login.loginAssertion)).toBeVisible();
})




