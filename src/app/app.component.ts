import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: MenuItem[];
  data: any;
  constructor() {
    this.data = {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [28, 48, 40, 19, 96, 27, 100]
        }
      ]
    };
  }
  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'fa-file-o',
        items: [{
          label: 'New',
          icon: 'fa-plus',
          items: [
            { label: 'Project' },
            { label: 'Other' },
          ]
        },
        { label: 'Open' },
        { separator: true },
        { label: 'Quit' }
        ]
      },
      {
        label: 'Edit',
        icon: 'fa-edit',
        items: [
          { label: 'Undo', icon: 'fa-mail-forward' },
          { label: 'Redo', icon: 'fa-mail-reply' }
        ]
      },
      {
        label: 'Help',
        icon: 'fa-question',
        items: [
          {
            label: 'Contents'
          },
          {
            label: 'Search',
            icon: 'fa-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'File'
              }
            ]
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'fa-gear',
        items: [
          {
            label: 'Edit',
            icon: 'fa-refresh',
            items: [
              { label: 'Save', icon: 'fa-save' },
              { label: 'Update', icon: 'fa-save' },
            ]
          },
          {
            label: 'Other',
            icon: 'fa-phone',
            items: [
              { label: 'Delete', icon: 'fa-minus' }
            ]
          }
        ]
      },
      {
        label: 'Quit', icon: 'fa-minus'
      }
    ];
  }


}
