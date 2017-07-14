import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(name: string, thumbName: string, age: number, experience: number, specialty: string) {
  var newMember: Member = new Member(name, thumbName, age, experience, specialty);
  this.memberService.addMember(newMember);
}

}
