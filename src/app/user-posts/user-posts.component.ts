import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UserPostsComponent implements OnInit , OnChanges{
  @Input() posts: { id:number,title: string }[] = [];
  @Input() person: any;
  @Output() postsChanged = new EventEmitter<any>();
  editingIndex: number | null = null;
  editedPosts: { title: string }[] = [];
  originalPost: { title: string } | null = null;
  myValue:string = '';
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['posts']) {
      console.log('changes',changes)
      this.editedPosts = this.posts.map(post => ({ ...post }));
    }
  }
  
  ngOnInit() {
  }

  log(){
    console.log('post')
  }
}
