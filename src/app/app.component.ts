import { Component } from '@angular/core';
import { EditorService } from './editor.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  editorData="";
  htmlContent="";
  title = 'ProgressBar';
  showEditor: boolean;
  editorId: any;
constructor(private editorService:EditorService){}



  ngOnInit(): void {
    this.getAllCharterData()
  }

  getAllCharterData() {
    // add get API
    this.editorService.getEditor().subscribe((res:any) => {
     this.htmlContent = res[0]?.racipeName ? res[0]?.racipeName : "";
    this.editorId = res[0]?.id ?res[0]?.id : null
    });
  }

  submitCharterData(htmlContent) {

   let data={
      id:1,
    racipeName:htmlContent
    }

    // add post API
      this.editorService.postEditor(data).subscribe((res) => {
        this.getAllCharterData();
      });

  }


  updateCharter(event) {
    let data={
      racipeName:event
      }
   // add Update API
      this.editorService.updateEditor(data,this.editorId)
        .subscribe((res: any) => {
          this.getAllCharterData();
        });

  }


  OnDeleteClick() {

  // add delete API
        this.editorService.deleteEditor(this.editorId).subscribe((result) => {
          this.getAllCharterData();
        });
     }

}




