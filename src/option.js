export class Option {

  constructor(any) {
    if (new.target === Option) {
      throw new TypeError('Cannot construct instances of Option, must be either Some or None')
    }

    this.any = any
  }

  isSome() {
    return false
  }

  isNone() {
    return false
  }

  get() {
    return this.any
  }

   // TODO:filter()

}


export default Option
