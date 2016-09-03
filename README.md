# optionize

> :sparkles: Optional values for JavaScript

# Why?

Because [null is evil](https://sidburn.github.io/blog/2016/03/20/null-is-evil) for a variety of reasons and other languages, such as Scala,
address this issue through a simple `Option` type, where any boxed value is either `Some` or `None`. [This article](http://danielwestheide.com/blog/2012/12/19/the-neophytes-guide-to-scala-part-5-the-option-type.html) covers the generic behaviors of `Some` and `None` using the Scala API.

`optionize` simulates this behavior in JavaScript with an extremely simple and idiomatic API:

* `get`: returns the value without consideration of `Some`/`None`
* `getOrElse`: returns the value if it is `Some`, otherwise returns the provided fallback
* `map`: maps the provided function against the value if it is `Some`
* `forEach`: applies the provided function to the value if it is `Some`

That's it!

# Example

By declaring values as either `Some` or `None`, you no longer need toconditionally access your data depending on if a value is present or not and can work with a consistent interface:

```js
import { none, some } from 'optionize'

function badFoo (bar) {
  if (bar) {
    return bar.baz
  }

  return bar
}

function goodFoo (bar) {
  return bar.getOrElse({}).baz
}

badFoo({ baz: 'boo' })

goodFoo(some({ baz: 'win'}))
goodFoo(none) // doesn't explode :)
```

# Install

> npm install optionize

# Contributing

If you are interested in contributing, simply open up a well-justified PR or email me at me@madhax.io.

# License

MIT
