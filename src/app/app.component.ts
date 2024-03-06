import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridConfig, InvoicesComponent} from "./components/invoices/invoices.component";
import {CREDIT_CARDS} from "./mock/credit-cards";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InvoicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  protected readonly CREDIT_CARDS = CREDIT_CARDS;

  config: GridConfig = {
    title: 'Purchase Invoices',
    itemsPerPage: 7,
    enablePagination: true,
  }

  configWithoutTitle: GridConfig = {
    itemsPerPage: 5,
    enablePagination: true
  }

}
