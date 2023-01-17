import { Component , Input } from "@angular/core";
import { Passenger } from "src/assets/passengers";

@Component({
    selector: 'passenger-detail',
    templateUrl: 'passenger-detail.component.html',
    styleUrls: ['passenger-detail.component.scss']
})

export class PassengerDetailComponent {
    @Input()
    oneItem: Passenger;

    selectedP : boolean = false;
    editing: boolean = false;

    handleClick(){
        this.selectedP = !this.selectedP;
    }

    getStatusClass({ checkedIn }: { checkedIn: boolean }): { [key: string]: boolean } {
        return { 'checked-in': checkedIn, 'checked-out': !checkedIn }
    }
}