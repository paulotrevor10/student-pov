import { Component,OnInit,ViewChild, ElementRef } from '@angular/core';
import { Students } from '../student';

@Component({
  selector: 'app-student-profile-setting',
  templateUrl: './student-profile-setting.component.html',
  styleUrls: ['./student-profile-setting.component.css']
})
export class StudentProfileSettingComponent implements OnInit {

   //get the values of content editable
   @ViewChild('groupName') groupName!: ElementRef;
   @ViewChild('course') course!: ElementRef;
   @ViewChild('yearSection') yearSection!: ElementRef;
   @ViewChild('specialization') specialization!: ElementRef;
   @ViewChild('email') email!: ElementRef;
   @ViewChild('leader') leader!: ElementRef;
   @ViewChild('adviser') adviser!: ElementRef;
   @ViewChild('panels') panels!: ElementRef;
   @ViewChild('members') members!: ElementRef;
  
  //methods in edit/save button
  isEditable = false;
  buttonText = "Edit";

  // //Variables
  // studentSpecificData: any;
  // studentData = new Students();


  //id of user who log in
  // id: any = 2;


  ngOnInit(): void {
    
  }

  toggleEditable() {
    this.isEditable = !this.isEditable;

    if (this.buttonText === 'Edit') {
      this.buttonText = 'Save';

    } else {
      this.buttonText = 'Edit';

      const editProfile = {
        group_name:  this.groupName.nativeElement.innerText,
        course: this.course.nativeElement.innerText,
        year_section: this.yearSection.nativeElement.innerText,
        specialization: this.specialization.nativeElement.innerText,
        email: this.email.nativeElement.innerText,
        group_leader: this.leader.nativeElement.innerText,
        adviser: this.adviser.nativeElement.innerText,
        panels: this.panels.nativeElement.innerText,
        group_members: this.members.nativeElement.innerText
      }

      console.log(editProfile);
      

      // this.dataService.updateData(this.id, editProfile).subscribe(response =>{
    
      // });
    
    }
  }
}
