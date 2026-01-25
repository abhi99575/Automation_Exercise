class SignupPage{
    constructor(page){
        this.page=page;
        this.loginNavigation=this.page.locator('//a[@href="/login"]');
        this.name=this.page.locator('[data-qa="signup-name"]');
        this.email=this.page.locator('[data-qa="signup-email"]');
        this.signUpButton=this.page.locator('[data-qa="signup-button"]');
        this.password=this.page.locator('[data-qa="password"]');
        this.fName=this.page.locator('[data-qa="first_name"]');
        this.lName=this.page.locator('[data-qa="last_name"]');
        this.country=this.page.locator('#country');
        this.state=this.page.locator('#state');
        this.city=this.page.locator('#city');
        this.zipCode=this.page.locator('#zipcode');
        this.mobileNumber=this.page.locator('#mobile_number');
        this.signingUP=this.page.getByRole("button",{name:'Create Account'});
        this.address=this.page.locator('#address1');
        //this.success=this.page.getByText('ACCOUNT CREATED!');
    }
    async goto()
{
    await this.page.goto("https://automationexercise.com/")
}

    async signUp(signingUP)
    {
        await this.loginNavigation.click();
        await this.name.fill(signingUP.name);
        await this.email.fill(signingUP.email);
        await this.signUpButton.click();
        await this.address.fill(signingUP.address);
        await this.password.fill(signingUP.password);
        await this.fName.fill(signingUP.firstName);
        await this.lName.fill(signingUP.lastName); 
        await this.country.selectOption(signingUP.country);
        await this.state.fill(signingUP.state);
        await this.city.fill(signingUP.city);
        await this.zipCode.fill(signingUP.zipcode);
        await this.mobileNumber.fill(signingUP.mobileNumber);
        await this.signingUP.click();
    }

}
module.exports={SignupPage}