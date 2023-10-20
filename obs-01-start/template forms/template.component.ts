


export class {
  subscriptions=['basic', 'advanced', 'pro']
  selectedSubscription='advanced'


@ViewChild('signupFrom') sgnForm:NgForm
  onSubmit()[
   console.log(this.sgnForm.value)
  ]
}
