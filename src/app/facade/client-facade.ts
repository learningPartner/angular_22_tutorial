import { inject, Service } from '@angular/core';
import { Master } from '../services/master';

@Service()
export class ClientFacade {

    masterSrv =  inject(Master);


    loadClients() {
        debugger;
        return this.masterSrv.getClients();
    }

    saveClient(obj:any) {
       return this.masterSrv.saveClient(obj)
    }

    getFormatedCardNo(cardNo: string) {
        return this.masterSrv.getFormatedCardNo(cardNo)
    }

}
