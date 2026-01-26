const {test,expect}=require('@playwright/test');
const {SignupPage}=require('../pages/SignupPage');
const Objecttestdata=require('../utils/Objecttestdata');
test('Signup To Automationexercise ',async({page})=>{
   
    const Signup=new SignupPage(page);
    await Signup.goto();
    await Signup.signUp(Objecttestdata.signupData);
    await expect(page.getByText('ACCOUNT CREATED!')).toBeVisible();
})