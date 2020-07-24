import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Todo } from "../todo";
import { TodoService } from '../todo.service';
import { Plugins, CameraResultType, CameraSource, Camera, Geolocation } from '@capacitor/core';
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-add-item-view',
  templateUrl: './add-item-view.page.html',
  styleUrls: ['./add-item-view.page.scss'],
})
export class AddItemViewPage implements OnInit {

  constructor(private location:Location, private todoService:TodoService, private domSanitizer:DomSanitizer) { }

  image: SafeResourceUrl;
  file: File;
  newTodo: Todo;
  latitude: number;
  longitude: number;
  gpsButtonName: string = 'add GPS';

  async getGPS(){
    if(this.gpsButtonName === 'add GPS'){
      const coordinates = await Geolocation.getCurrentPosition();
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;
      console.log(this.latitude);
      console.log(this.longitude);
      this.gpsButtonName = 'cancel';
    }else{
      this.longitude = null;
      this.latitude = null;
      this.gpsButtonName = 'add GPS';
    }
  }
  

  async takePhoto(){

    const result = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl
    });
    this.image = result.dataUrl;
    console.log(result.dataUrl);

    /*const { Camera } = Plugins;

    const result = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera 
    });
    console.log(result);
    this.image = result.dataUrl;
    console.log(this.image);*/
  }
//22
  goBack():void{
    this.location.back();
  }

  add(name:string, description:string, dueDate:string){
    const date = new Date(dueDate);
    const currentDate = new Date();
    console.log(+date);
    this.newTodo = {
      name: name,
      date: date.getTime(),
      creation_date: currentDate.getTime(),
      description: description,
      done: false,
      over: false,
      longitude: this.longitude,
      latitude: this.latitude
      //image: this.image,
    };
    console.log(this.newTodo);
    this.todoService.addItem(this.newTodo).subscribe(() => this.goBack());
  }

  ngOnInit() {
  }
}
