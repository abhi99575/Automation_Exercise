const {test,expect} = require('@playwright/test') 
//import {test,expect} from '@playwright/test'
test('iFrame verification',async({page})=>{
await page.goto("https://demoqa.com/frames");
//const Textframe=page.frameLocator('#frame1');
const Textframe=page.frame({url:'https://demoqa.com/sample'});
const text=await Textframe.locator("#sampleHeading").textContent();
console.log(text);
})
test('file upload',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.setInputFiles("#file-upload","C:/Users/MAHESH NARI/Downloads/Abhilash_QA_Automation_Playwright_Resume.pdf");
    await page.locator('#file-submit').click();
})