# a-random
Get random elements from on array

# Install

```sh
$ npm install --save a-random
```

## Examples

```js
const getRandom = require('a-random');

console.log(getRandom(['a', 'github', 'facebook', 'youtube', 'google', 1], 3));
// => ['a', 'youtube', 1]
```

## Usage

#### `require('a-random')( array, elements )`

**Arguments**:
- `array`: array
- `elements`: No of random elements want to be return
- `elements` Must be smaller or the equal length of array

**Returns**: Returns array of random elements

## License
&copy; 2016 vikram. MIT License