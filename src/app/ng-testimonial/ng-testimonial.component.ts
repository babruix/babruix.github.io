import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-testimonial-component',
  templateUrl: 'ng-testimonial.component.html',
  styleUrls: ['ng-testimonial.component.scss']
})
export class NgTestimonialComponent implements OnInit {

  feedbackItems = [
    [{
      'text': 'Great job. Attention to details. Good communication. Superb skill.',
      'imageUrl': '/assets/images/mike_adam.jpg',
      'name': 'Mike Adam'
    },
    {
      'text': 'Successfully accomplished all tasks which was assigned to him under the very strict project schedule. ',
      'imageUrl': '/assets/images/konstantin_marchenko.jpg',
      'name': 'Konstantin Marchenko'
    }],
    [{
      'text': 'I would highly recommend him to others and am eager to work with him in the future.',
      'imageUrl': '/assets/images/eric_miller.jpg',
      'name': 'Eric Miller'
    },
    {
      'text': 'He can work on different tasks involving different web technologies and always reach the goals assigned!',
      'imageUrl': '/assets/images/dmitri_osler.jpg',
      'name': 'Dmitri Osler'
    }]
  ]

  constructor() { }

  ngOnInit() {
  }

}
