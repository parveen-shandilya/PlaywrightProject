import {test as baseTest} from '@playwright/test';
import { LandingPage } from '../pages/landingPage';
import {SignInPage} from '../pages/signinPage';


type pages = {
    landingPage: LandingPage,
    signinPage: SignInPage,
}

const testPages = baseTest.extend<pages>({
    landingPage: async({page}, use)=>{
        await use(new LandingPage(page));
    },
   
    signinPage: async({page}, use)=>{
        await use(new SignInPage(page));
    }
  
})

export const test = testPages;
export const expect = testPages.expect;