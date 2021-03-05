import { NgModule } from '@angular/core';
import { NgAnnoteComponent } from './ng-annote/ng-annote.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ColorPhotoshopModule } from 'ngx-color/photoshop';
import { CommonModule } from '@angular/common';
export class SpproNgAnnoteModule {
}
SpproNgAnnoteModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NgAnnoteComponent,
                    ToolbarComponent
                ],
                imports: [
                    FontAwesomeModule,
                    ColorPhotoshopModule,
                    CommonModule
                ],
                exports: [NgAnnoteComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bwcm8tbmctYW5ub3RlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3NwcHJvLW5nLWFubm90ZS9zcmMvbGliL3NwcHJvLW5nLWFubm90ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQTtBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFjL0MsTUFBTSxPQUFPLG1CQUFtQjs7O1lBWC9CLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osaUJBQWlCO29CQUNqQixnQkFBZ0I7aUJBQUM7Z0JBQ25CLE9BQU8sRUFBRTtvQkFDUCxpQkFBaUI7b0JBQ2pCLG9CQUFvQjtvQkFDcEIsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0Fubm90ZUNvbXBvbmVudCB9IGZyb20gJy4vbmctYW5ub3RlL25nLWFubm90ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci90b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IENvbG9yUGhvdG9zaG9wTW9kdWxlIH0gZnJvbSAnbmd4LWNvbG9yL3Bob3Rvc2hvcCdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmdBbm5vdGVDb21wb25lbnQsXG4gICAgVG9vbGJhckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBGb250QXdlc29tZU1vZHVsZSxcbiAgICBDb2xvclBob3Rvc2hvcE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW05nQW5ub3RlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTcHByb05nQW5ub3RlTW9kdWxlIHsgfVxuIl19