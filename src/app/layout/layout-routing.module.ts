import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
             { path: 'college', loadChildren: './college/college.module#CollegeModule' },
             { path: 'exams', loadChildren: './exams/exams.module#ExamsModule' },
            { path: 'collegeinfo', loadChildren: './college/college-info/college-info.module#CollegeInfoModule' },
            { path: 'exam-12', loadChildren: './exams/examone/examone.module#ExamoneModule' },
            { path: 'exam-ug', loadChildren: './exams/examtwo/examtwo.module#ExamtwoModule' },
             { path: 'profile', loadChildren: './college/colprofile/colprofile.module#ColprofileModule' }
             ,
             { path: 'exam-profile', loadChildren: './exams/eprofile/eprofile.module#EprofileModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
