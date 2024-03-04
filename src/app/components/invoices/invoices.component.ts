import { Component } from '@angular/core';
import {GridModule} from "@progress/kendo-angular-grid";

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [
    GridModule
  ],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss'
})
export class InvoicesComponent {

}
