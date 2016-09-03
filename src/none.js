import { Option } from './option'

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
