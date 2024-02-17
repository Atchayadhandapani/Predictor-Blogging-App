import { Routes } from '@angular/router';
import { SingleCategoryComponent } from './page/single-category/single-category.component';
import { SinglePostComponent } from './page/single-post/single-post.component';
import { TermsAndConditionComponent } from './page/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { HomeComponent } from './page/home/home.component';


export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'category',component:SingleCategoryComponent},
    {path:'post',component:SinglePostComponent},
    {path:'terms-condition',component:TermsAndConditionComponent},
    {path:'contact',component:ContactUsComponent},
    {path:'about-us',component:AboutUsComponent}
];
