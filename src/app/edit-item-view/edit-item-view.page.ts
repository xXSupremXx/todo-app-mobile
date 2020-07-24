import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from "../todo.service";
import { Todo } from '../todo';
import { Plugins, CameraResultType, CameraSource, Camera, Geolocation } from '@capacitor/core';

@Component({
  selector: 'app-edit-item-view',
  templateUrl: './edit-item-view.page.html',
  styleUrls: ['./edit-item-view.page.scss'],
})
export class EditItemViewPage implements OnInit {

  constructor(private location:Location, private route:ActivatedRoute, private todoService:TodoService) { }

  currentItem: Todo;
  imageUrl: string;

  image:any;
  gpsButtonName: string = 'add GPS';

  async getGPS(){
    if(this.gpsButtonName === 'add GPS'){
      const coordinates = await Geolocation.getCurrentPosition();
      this.currentItem.latitude = coordinates.coords.latitude;
      this.currentItem.longitude = coordinates.coords.longitude;
      console.log(this.currentItem.latitude);
      console.log(this.currentItem.longitude);
      this.gpsButtonName = 'cancel';
    }else{
      this.currentItem.longitude = null;
      this.currentItem.latitude = null;
      this.gpsButtonName = 'add GPS';
    }
  }

  getItemId(){
    const id = this.route.snapshot.paramMap.get('id');
    //console.log(id);
    this.todoService.getItem(id).subscribe((item) => {
      this.currentItem = item;
      console.log(this.currentItem.date);
      console.log(this.currentItem);
      /*if(item.image){
        this.imageUrl = 'http://localhost:1337' + item.image.url;
        this.image = item.image;
        console.log(item.image);
        //this.todoService.getImage(item.image.url).subscribe(image => {this.image = image ;console.log(image)});
      }*/
    });
    
    //console.log(this.currentItem);
  }

  delete(){
    this.todoService.deleteItem(this.currentItem).subscribe(() => this.location.back());
    /*this.todoService.deleteImage(this.image.id).subscribe(yes => console.log(yes));
    this.imageUrl = null;*/
    
  }

  save(name:string, description:string, strdate:string):void{
    //console.log(this.currentItem.id);
    const date = new Date(strdate);
    if(name != ''){
      this.currentItem.name = name;
    }
    if(description != ''){
      this.currentItem.description = description;
    }
    if(strdate != ''){
      this.currentItem.date = date.getTime();
    }
    this.todoService.updateItem(this.currentItem).subscribe();
    this.location.back();
  }

  goBack():void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getItemId();
    
  }
}
