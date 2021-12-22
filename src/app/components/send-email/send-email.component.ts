import { Component, Input, OnInit } from '@angular/core';
import { Email } from 'src/app/email-interface';
import { Employees } from 'src/app/Employees';
import { SendEmailMessageService } from 'src/app/services/send-email-message.service';


@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {

  @Input() employee!: Employees
email: Email = {
  idn: 0,
  to: '',
  cc: '',
  subject: '',
  message: ''
}

  constructor(private sendServise: SendEmailMessageService) { }

  ngOnInit(): void {
      console.log(this.email.to)
      this.email.idn = this.employee.id
      this.email.to = `${this.employee.firstName} ${this.employee.lastName}`
  }
  sendEmail(){
    // if(this.email.message == '') return
    this.sendServise.saveEmail(this.email).subscribe(() => {console.log('email sent')})
  
  }

}
