import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClrButtonModule, ClrIconModule, ClrInputModule, ClrFormsModule, ClrModalModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class ManagerInviteComponent {
    set inviter(inviter) {
        this.nameInput = inviter;
        this.previewInvitationSubject$.next(this.setPreviewInvitationText());
    }
    constructor() {
        this.title = 'Invite a Manager';
        this.cancelBtn = 'Cancel';
        this.submitBtn = 'Submit';
        this.requiredEmailError = 'Email is required';
        this.invalidEmailError = 'Email is invalid';
        this.emailHelper = 'The email of the manager you want to invite';
        this.emailLabel = 'Email';
        this.emailPlaceholder = 'Enter a email...';
        this.emailInput = '';
        this.emailError = '';
        this.nameError = 'Your name is required';
        this.nameHelper = 'Your name that appears on the invitation';
        this.nameLabel = 'Name';
        this.namePlaceholder = 'Enter your name...';
        this.nameInput = '';
        this.previewInvitationConstant = 'is inviting you to play in the Little Fantasy Hockey League (LHL).';
        this.previewInvitationSubject$ = new BehaviorSubject('');
        this.previewInvitationText$ = this.previewInvitationSubject$.asObservable();
    }
    onKeyUpName() {
        this.previewInvitationSubject$.next(this.setPreviewInvitationText());
    }
    setPreviewInvitationText() {
        return `<strong>${this.nameInput}</strong> ${this.previewInvitationConstant}`;
    }
    onClickSubmit() {
        // If no Errors
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerInviteComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.8", type: ManagerInviteComponent, isStandalone: true, selector: "lhl-manager-invite", inputs: { inviter: "inviter" }, ngImport: i0, template: "", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: ClrInputModule }, { kind: "ngmodule", type: ClrIconModule }, { kind: "ngmodule", type: ClrButtonModule }, { kind: "ngmodule", type: FormsModule }, { kind: "ngmodule", type: ClrFormsModule }, { kind: "ngmodule", type: ClrModalModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerInviteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lhl-manager-invite', standalone: true, imports: [CommonModule, ClrInputModule, ClrIconModule, ClrButtonModule, FormsModule, ClrFormsModule, ClrModalModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "" }]
        }], ctorParameters: function () { return []; }, propDecorators: { inviter: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci1pbnZpdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9saGwvbWFuYWdlci91aS9zcmMvbGliL21hbmFnZXItaW52aXRlL21hbmFnZXItaW52aXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbGhsL21hbmFnZXIvdWkvc3JjL2xpYi9tYW5hZ2VyLWludml0ZS9tYW5hZ2VyLWludml0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDOUcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBVXZDLE1BQU0sT0FBTyxzQkFBc0I7SUF1QmpDLElBQWEsT0FBTyxDQUFDLE9BQWU7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDekIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRDtRQTNCUyxVQUFLLEdBQUcsa0JBQWtCLENBQUM7UUFDM0IsY0FBUyxHQUFHLFFBQVEsQ0FBQztRQUNyQixjQUFTLEdBQUcsUUFBUSxDQUFDO1FBRXJCLHVCQUFrQixHQUFHLG1CQUFtQixDQUFDO1FBQ3pDLHNCQUFpQixHQUFHLGtCQUFrQixDQUFDO1FBQ3ZDLGdCQUFXLEdBQUcsNkNBQTZDLENBQUM7UUFDNUQsZUFBVSxHQUFHLE9BQU8sQ0FBQztRQUNyQixxQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztRQUMvQyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFUCxjQUFTLEdBQUcsdUJBQXVCLENBQUM7UUFDcEMsZUFBVSxHQUFHLDBDQUEwQyxDQUFDO1FBQ3hELGNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbkIsb0JBQWUsR0FBRyxvQkFBb0IsQ0FBQztRQUNoRCxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBRU4sOEJBQXlCLEdBQUcsb0VBQW9FLENBQUM7UUFDMUcsOEJBQXlCLEdBQUcsSUFBSSxlQUFlLENBQVMsRUFBRSxDQUFDLENBQUM7UUFDNUQsMkJBQXNCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRSxDQUFDO0lBT3hELENBQUM7SUFFaEIsV0FBVztRQUNULElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRU8sd0JBQXdCO1FBQzlCLE9BQU8sV0FBVyxJQUFJLENBQUMsU0FBUyxhQUFhLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ2hGLENBQUM7SUFFRCxhQUFhO1FBQ1gsZUFBZTtJQUNqQixDQUFDOzhHQXhDVSxzQkFBc0I7a0dBQXRCLHNCQUFzQiw4R0NkbkMsRUFBQSx5RERTWSxZQUFZLDhCQUFFLGNBQWMsOEJBQUUsYUFBYSw4QkFBRSxlQUFlLDhCQUFFLFdBQVcsOEJBQUUsY0FBYyw4QkFBRSxjQUFjOzsyRkFLeEcsc0JBQXNCO2tCQVJsQyxTQUFTOytCQUNFLG9CQUFvQixjQUNsQixJQUFJLFdBQ1AsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUMsbUJBR25HLHVCQUF1QixDQUFDLE1BQU07MEVBeUJsQyxPQUFPO3NCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDbHJCdXR0b25Nb2R1bGUsIENsckljb25Nb2R1bGUsIENscklucHV0TW9kdWxlLCBDbHJGb3Jtc01vZHVsZSwgQ2xyTW9kYWxNb2R1bGUgfSBmcm9tICdAY2xyL2FuZ3VsYXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGhsLW1hbmFnZXItaW52aXRlJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ2xySW5wdXRNb2R1bGUsIENsckljb25Nb2R1bGUsIENsckJ1dHRvbk1vZHVsZSwgRm9ybXNNb2R1bGUsIENsckZvcm1zTW9kdWxlLCBDbHJNb2RhbE1vZHVsZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9tYW5hZ2VyLWludml0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hbmFnZXItaW52aXRlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNYW5hZ2VySW52aXRlQ29tcG9uZW50IHtcbiAgcmVhZG9ubHkgdGl0bGUgPSAnSW52aXRlIGEgTWFuYWdlcic7XG4gIHJlYWRvbmx5IGNhbmNlbEJ0biA9ICdDYW5jZWwnO1xuICByZWFkb25seSBzdWJtaXRCdG4gPSAnU3VibWl0JztcblxuICByZWFkb25seSByZXF1aXJlZEVtYWlsRXJyb3IgPSAnRW1haWwgaXMgcmVxdWlyZWQnO1xuICByZWFkb25seSBpbnZhbGlkRW1haWxFcnJvciA9ICdFbWFpbCBpcyBpbnZhbGlkJztcbiAgcmVhZG9ubHkgZW1haWxIZWxwZXIgPSAnVGhlIGVtYWlsIG9mIHRoZSBtYW5hZ2VyIHlvdSB3YW50IHRvIGludml0ZSc7XG4gIHJlYWRvbmx5IGVtYWlsTGFiZWwgPSAnRW1haWwnO1xuICByZWFkb25seSBlbWFpbFBsYWNlaG9sZGVyID0gJ0VudGVyIGEgZW1haWwuLi4nO1xuICBlbWFpbElucHV0ID0gJyc7XG4gIGVtYWlsRXJyb3IgPSAnJztcblxuICByZWFkb25seSBuYW1lRXJyb3IgPSAnWW91ciBuYW1lIGlzIHJlcXVpcmVkJztcbiAgcmVhZG9ubHkgbmFtZUhlbHBlciA9ICdZb3VyIG5hbWUgdGhhdCBhcHBlYXJzIG9uIHRoZSBpbnZpdGF0aW9uJztcbiAgcmVhZG9ubHkgbmFtZUxhYmVsID0gJ05hbWUnO1xuICByZWFkb25seSBuYW1lUGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciBuYW1lLi4uJztcbiAgbmFtZUlucHV0ID0gJyc7XG5cbiAgcmVhZG9ubHkgcHJldmlld0ludml0YXRpb25Db25zdGFudCA9ICdpcyBpbnZpdGluZyB5b3UgdG8gcGxheSBpbiB0aGUgTGl0dGxlIEZhbnRhc3kgSG9ja2V5IExlYWd1ZSAoTEhMKS4nO1xuICBwcmV2aWV3SW52aXRhdGlvblN1YmplY3QkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcbiAgcHJldmlld0ludml0YXRpb25UZXh0JCA9IHRoaXMucHJldmlld0ludml0YXRpb25TdWJqZWN0JC5hc09ic2VydmFibGUoKTtcblxuICBASW5wdXQoKSBzZXQgaW52aXRlcihpbnZpdGVyOiBzdHJpbmcpe1xuICAgIHRoaXMubmFtZUlucHV0ID0gaW52aXRlcjtcbiAgICB0aGlzLnByZXZpZXdJbnZpdGF0aW9uU3ViamVjdCQubmV4dCh0aGlzLnNldFByZXZpZXdJbnZpdGF0aW9uVGV4dCgpKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBvbktleVVwTmFtZSgpIHtcbiAgICB0aGlzLnByZXZpZXdJbnZpdGF0aW9uU3ViamVjdCQubmV4dCh0aGlzLnNldFByZXZpZXdJbnZpdGF0aW9uVGV4dCgpKTtcbiAgfVxuICBcbiAgcHJpdmF0ZSBzZXRQcmV2aWV3SW52aXRhdGlvblRleHQoKSB7XG4gICAgcmV0dXJuIGA8c3Ryb25nPiR7dGhpcy5uYW1lSW5wdXR9PC9zdHJvbmc+ICR7dGhpcy5wcmV2aWV3SW52aXRhdGlvbkNvbnN0YW50fWA7XG4gIH1cblxuICBvbkNsaWNrU3VibWl0KCkge1xuICAgIC8vIElmIG5vIEVycm9yc1xuICB9XG59XG4iLCIiXX0=