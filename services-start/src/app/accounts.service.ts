export class AccountService
{
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  addAccount(name:string, status:string){
    this.accounts.push({name:string, status:string})

  }

  updateStatus(id:number, status:string){
    this.accounts[id], status=status

  }

}
