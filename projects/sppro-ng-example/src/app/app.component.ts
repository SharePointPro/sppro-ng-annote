import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sppro-ng-example';

  public imageSrc:string;
  
  ngOnInit(): void {
    setTimeout(() => {
      this.imageSrc = "https://images.pexels.com/photos/6761977/pexels-photo-6761977.jpeg?cs=srgb&dl=pexels-rachel-claire-6761977.jpg&fm=jpg";
    }, 300);
  }
  
}
