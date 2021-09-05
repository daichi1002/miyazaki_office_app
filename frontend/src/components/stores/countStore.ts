  import { observable,computed, action, makeObservable } from 'mobx';

    export class CountStore {
    count = 1

    get getDoubleCount() {
      return this.count * 2;
    }

    setIncrementCount() {
      console.log(this.count++)
    }
    constructor() {
      makeObservable(this,{
      count:  observable,
      getDoubleCount:  computed,
      setIncrementCount:  action,
      })
    }
  }



   
