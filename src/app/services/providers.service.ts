import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  urlProviders = 'http://localhost:8082/providers';
  provider: any;

  constructor(private Http: HttpClient) { }

  listProviders() {
    return this.Http.get(this.urlProviders + '/list');
  }

  createProvider(myform:any) {
    this.provider = {
      'name': myform.value.providerName,
      'email': myform.value.providerEmail,
      'address': myform.value.providerAddress
    }
    return this.Http.post(this.urlProviders + '/add', this.provider);
  }

  updateProvider(myObj:any) {
    return this.Http.put(this.urlProviders + '/' + myObj['id'], myObj);
  }

  deleteProvider(myObj:any) {

    return this.Http.delete(this.urlProviders + '/' + myObj['id'], myObj)
  }

  getProvider(id:any) {

    return this.Http.get(this.urlProviders + '/' + id)
  }

}


