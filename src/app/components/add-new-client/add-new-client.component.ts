import { Component, OnInit } from '@angular/core';
import {Client} from '../../models/client';
import {AddClientService} from '../../service/add-client.service';
import {UploadImageService} from '../../service/upload-image.service';

@Component({
  selector: 'app-add-new-client',
  templateUrl: './add-new-client.component.html',
  styleUrls: ['./add-new-client.component.css']
})
export class AddNewClientComponent implements OnInit {

  private newClient: Client = new Client();
  private clientAddes: boolean;
  constructor(private addClientService: AddClientService, private uploadImageService: UploadImageService) { }

  onSubmit() {
    this.addClientService.sendClient(this.newClient).subscribe(
      res => {
        console.log(res);
        this.uploadImageService.upload(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
        this.newClient = new Client();
        // location.reload();
      },
      error1 => {
        console.log(error1);
      }
    );
  }
  ngOnInit() {
  }

}
