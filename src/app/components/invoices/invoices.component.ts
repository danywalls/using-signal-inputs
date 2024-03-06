import {Component, input} from '@angular/core';
import {GridModule} from "@progress/kendo-angular-grid";



export type GridConfig = {
  title?: string;
  enablePagination: boolean;
  itemsPerPage: number;
}

const defaultConfig : GridConfig = {
  title: 'Default Config',
  enablePagination: true,
  itemsPerPage: 3
}
@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [
    GridModule
  ],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss'
})
export class InvoicesComponent  {

  kendoConfig =  input(
    defaultConfig,
    {
      alias: 'config',
      transform: (config: GridConfig) =>  {
        config.title = config?.title   || 'Config but without title'
        return config
      }
    });
  data = input.required<Array<unknown>>();

}
