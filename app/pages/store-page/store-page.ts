import {Component} from '@angular/core';
import {NavController, Toast} from 'ionic-angular';
import {DetailPage} from '../detail-page/detail-page';
import { Http, Response, Headers } from '@angular/http';

@Component({
  templateUrl: 'build/pages/store-page/store-page.html'
})
export class StorePage {
  private test: string = "https://intphseus.dns-cargo.com//v2/37a677ad-b43c-4c29-bd62-a7a54929ee7d/cw//FeedsIndexWindowsService.svc/ViewFiltered?cluster=fitness&goals=&types=Strength&scenario=workout&market=en-us&count=238&version=PROD1KINT1&isKClient=1&ClientAppVersion=3.0.2.258";
  private testToken: string = "WRAP access_token=\"ODSUserId=978922c5-0370-4e9d-b7a0-460751bd9750&LFSUserId=6c239a4f-2ca6-49a5-8ff2-2985e532990c&PoolEndpoint=https://intphseus.dns-cargo.com/&PodId=int-pod-eus-0x1&ExpiresOn=1466582825&SessionId=988dbf30-4e3d-44b7-9132-b000f95dcf3c&RegisteredUserId=9b8ab23e-b15d-41e7-bc23-67a8d6aba1b8&HMACSHA256=hU0ssspXNwOMTbaiQ+G1EktEHZbX9phssmv+hjDNTHkkFmwbLAgGj3bFrfWG8MRpWiwXbJGkdtYBFhfU831nQ+fhtBclrHO7bAmSBE5k9y4YqpeQLMPSxlNr14vg+hce/SMGwzw5BgcROB403g+QlzCJ14Cjb7nqxXOaRYE/lysqcv24oG4vn2rTsKqhHph7o/SyYl21n0YIU28jSBRdGCSgNfIGq2FMdYszbcKZecC9rrt9MePjyWdaRrj6MtgDEswWlyZORWw9b6e1tV5SHD21w5jxOSLrKf/tZsqE/ugolePnrSYeV6CesgUrnxPadX2Ti4a6ANsL9srZLgNFSw==\""
  private testRegin: string = "US";

  constructor(private navController: NavController, private http: Http) {
    let header = new Headers()
    // TODO: make it seperate service
    header.append("Authorization", this.testToken);
    header.append("Region", this.testRegin);
    //this.http.get(this.test, {headers: header}).map(res => res.json()).subscribe((res) => {});
  }

  goToDetailPage() {
    this.navController.push(DetailPage);
  }

  showToastWithCloseButton() {
    const toast = Toast.create({
      message: 'Demo...',
      showCloseButton: true,
      closeButtonText: 'Ok',
    });

    this.navController.present(toast);
  }
}
