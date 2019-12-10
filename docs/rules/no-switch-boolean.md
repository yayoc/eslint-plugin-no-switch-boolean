# no-switch-boolean

Having just `true` or `false` value in switch expression is meaningless in my unpopular opinion.

## Rule details

The following patterns are considered problems:

```js
switch (true) {
}
```

## When not to use it

If your team does not have a same opinion.
