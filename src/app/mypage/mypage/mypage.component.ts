import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { Title, Meta } from '@angular/platform-browser';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss']
})
export class MypageComponent implements OnInit {
  user$: Observable<User>;
  navLinks = [
    {
      path: './',
      label: 'プロフィール',
    },
    {
      path: 'archive',
      label: 'つみあげ記録',
    },
    {
      path: 'settings',
      label: '設定',
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private title: Title,
    private meta: Meta,
  ) {
    this.route.queryParamMap.subscribe(map => {
      const query = map.get('id');
      this.user$ = this.userService.getUser(query).pipe(
        tap(data => {
          this.title.setTitle(`${data.name} | TSUMU`);
          this.meta.addTags([
            { name: 'description', content: 'ユーザーの情報を表示させるマイページ' },
            { property: 'og:type', content: 'article' },
            { property: 'og:title', content: 'TSUMU - ユーザーのマイページ' },
            { property: 'og:description', content: 'ユーザーの情報を表示させるマイページ' },
            { property: 'og:url', content: location.href },
            { property: 'og:image', content: 'https://tsumu-3eb2a.web.app/assets/Tsumu.png' },
            { name: 'twitter:card', content: 'Summary Card' },
          ]);
        })
      );
    });
  }

  ngOnInit(): void {
  }

}
