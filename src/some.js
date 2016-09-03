import { Option } from './option'

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

export const some = (any) => new Some(any)

