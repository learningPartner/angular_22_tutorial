import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../services/master';
import { PageHeader } from "../../resuables/page-header/page-header";
import { Card } from "../../resuables/card/card";
import { MyButton } from "../../resuables/my-button/my-button";

@Component({
  selector: 'app-client-crud',
  imports: [FormsModule, PageHeader, Card, MyButton],
  templateUrl: './client-crud.html',
  styleUrl: './client-crud.css',
})
export class ClientCrud {
  http = inject(HttpClient);
  clinetList: WritableSignal<any[]> = signal([]);

  newClientObj: any = {
    clientId: 0,
    clientName: '',
    businessName: '',
    contactPerson: '',
    contactNo: '',
    altContactNo: '',
    email: '',
    createdDate: new Date(),
    logo: 'string',
  };

  formateCardNoi = '';
  constructor(private masterSrv: Master) {
    this.getAllClients();
   
    this.formateCardNoi = this.masterSrv.getFormatedCardNo('1122334466558899');
    const loogedUserName = this.masterSrv.loggedUser;
  }

  // getAllClients() {
  //   this.http.get('https://api.freeprojectapi.com/api/SmartParking/GetAllClients').subscribe({
  //     next: (response: any) => {
  //       this.clinetList.set(response.data);
  //     },
  //   });
  // }

  getAllClients() {
   
    this.masterSrv.getClients().subscribe({
      next: (res: any) => {
       
        this.clinetList.set(res.data);
      },
    });
  }

  // onSaveClient() {
  //  
  //   this.http
  //     .post('https://api.freeprojectapi.com/api/SmartParking/addclient', this.newClientObj)
  //     .subscribe({
  //       next: (res: any) => {
  //        
  //         if (res.result) {
  //           alert('Client Created Success');
  //           this.getAllClients();
  //         } else {
  //           alert(res.meessage);
  //         }
  //       },
  //     });
  // }

  onSaveClient() {
    this.masterSrv.saveClient(this.newClientObj).subscribe({
      next: (res: any) => {
       
        if (res.result) {
          alert('Client Created Success');
          this.getAllClients();
        } else {
          alert(res.meessage);
        }
      },
    });
  }

  onUdateClient() {
    this.http
      .post('https://api.freeprojectapi.com/api/SmartParking/updateclient', this.newClientObj)
      .subscribe({
        next: (res: any) => {
         
          if (res.result) {
            alert('Client Updated Success');
            this.getAllClients();
          } else {
            alert(res.meessage);
          }
        },
      });
  }

  onDelete(id: number) {
    const isConfirm = confirm('Are you sure want to Delet');
    if (isConfirm) {
      this.http
        .post('https://api.freeprojectapi.com/api/SmartParking/DeleteClient?id=' + id, {})
        .subscribe({
          next: (res: any) => {
           
            if (res.result) {
              alert('Client Delet Success');
              this.getAllClients();
            } else {
              alert(res.meessage);
            }
          },
        });
    }
  }

  onEdit(data: any) {
    this.newClientObj = data;
  }
}
