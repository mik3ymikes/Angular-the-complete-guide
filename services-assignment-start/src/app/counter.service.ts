export class CounterService{
  activeToInactiveCounter=0
  inactiveToactiveCounter=0

}


incrementActivetoInactive(){
  this.activeToInactiveCounter++;
  console.log(this.activeToInactiveCounter)
}


incrementInActivetoActive(){
  this.InactiveToactiveCounter++;
  console.log(this.InactiveToactiveCounter)
}
