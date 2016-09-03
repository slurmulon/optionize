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

export class Some extends Option {

  constructor(any) {
    super(any)
  }

  isSome() {
    return true
  }

  getOrElse(fallback) {
    return this.any
  }

  map(fn) {
    return fn(this.any)
  }

  forEach(fn) {
    [this.any].forEach(fn)
  }

}

export class None extends Option {

  constructor() {
    super(null) // TODO: give this more consideration
  }

  isNone() {
    return true
  }

  getOrElse(fallback) {
    return fallback
  }

  map(fn) {
    return this.any
  }

  forEach(fn) {
    return
  }

}

export const none = ((any) => new None(any))()
export const some =  (any) => new Some(any)

