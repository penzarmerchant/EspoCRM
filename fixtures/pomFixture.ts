import {test as baseTest} from '@playwright/test'
import { LoginPage } from '@pages/loginPage'
import  {HomePage} from '@pages/homePage'
import  {CreateContact} from '@pages/createContact'
import { ContactPage } from '@pages/contactPage'
import  {AccountPage} from '@pages/accountPage'
import  {CreateAccount} from '@pages/createAccount'
import  {Teams} from '@pages/teams'
import  {AssignedUser} from '@pages/assignedUser'
import {TeamsContact} from '@pages/teamsContact'
import {CreatedContact} from '@pages/createdContact'

type pages = {
    homepage:HomePage,
    loginpage:LoginPage,
    createContact:CreateContact,
    contactpage:ContactPage,
    accountPage:AccountPage,
    createAccount:CreateAccount,  
    teams:Teams,
    assignedUser:AssignedUser,
    teamsContact:TeamsContact,
    createdContact:CreatedContact
}
const testPages = baseTest.extend<pages>({
    homepage: async({page}, use) =>{
        await use(new HomePage(page));
    },

    loginpage: async({page}, use) =>{
        await use(new LoginPage(page));
    },

    createContact: async({page}, use) =>{
        await use(new CreateContact(page));
    },

    contactpage:async({page},use)=>{
        await use(new ContactPage(page))
    },

    accountPage:async({page},use)=>{
        await use(new AccountPage(page))
    },

    assignedUser:async({page},use)=>{
        await use(new AssignedUser(page))
    },

    teams:async({page},use)=>{
        await use(new Teams(page))
    },

    createAccount: async({page}, use) =>{
        await use(new CreateAccount(page));
    },

    teamsContact:async({page},use)=>{
        await use(new TeamsContact(page))
    },

    createdContact:async({page},use)=>{
        await use(new CreatedContact(page))
    },
})

export const test = testPages;
export const expect = testPages.expect;