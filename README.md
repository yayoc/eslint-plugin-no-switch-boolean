# eslint-plugin-no-switch-boolean

> This rule is my unpopular opinion.

Bad:

```js
switch (true) {
}
```

or

```js
switch (false) {
}
```

## Installation

```sh
npm i -D eslint-plugin-no-switch-boolean
```

## Usage

Add `no-switch-boolean` to your `.eslintrc` configuration.

```json
{
  "plugins": ["no-switch-boolean"]
}
```

```json
{
  "rules": {
    "no-switch-boolean/no-switch-boolean": 2
  }
}
```
