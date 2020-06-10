import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { MatDialog } from '@angular/material/dialog';
import { ProfileEditComponent } from '../profile-edit/profile-edit.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mypage-profile',
  templateUrl: './mypage-profile.component.html',
  styleUrls: ['./mypage-profile.component.scss']
})
export class MypageProfileComponent implements OnInit {
  uid: string = this.authService.uid;
  user$: Observable<User> = this.authService.user$;
  bio = this.userService.bio;

  constructor(private authService: AuthService, private userService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ProfileEditComponent, {
      height: '720px',
      width: '640px',
      autoFocus: false,
      restoreFocus: false
    });
  }

}