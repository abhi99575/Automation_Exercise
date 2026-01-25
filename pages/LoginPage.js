class LoginPage{

constructor(page)
{
    this.page=page;
    this.loginNavigation=this.page.locator('//a[@href="/login"]');
    this.email=this.page.locator('[data-qa="login-email"]');
    this.password=this.page.getByPlaceholder('Password');
    this.submitButton=this.page.getByRole("button",{name:'Login'});
    this.logout=this.page.locator('[href="/logout"]');
    this.success=this.page.getByText(' Logged in as ');
}

async goTo()
{
    await this.page.goto("https://automationexercise.com/")
}

async Login(email,password)
{
    await this.loginNavigation.click();
    await this.email.fill(email);
    await this.password.fill(password);
    await this.submitButton.click();
}
async isLoginSuccess()
{
    return this.success.toBeVisible();
}

}

module.exports={LoginPage}