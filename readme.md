# js-sdk-dict

Simple dictionary utilities.

## library

```ts
$ Dict() -> Dict

// Dictionary type. This represents an object with unordered key.


$ Dict::create() -> Dict

// Smart contructor.


$ Dict::set(k : Any, v : Any) -> Dict

// add a new item to the dict. 'k' key must be an object that
// can be tested with '=='.


$ Dict::get(k : Any) -> Dict

// get an item from the dict. 'k' key must be an object that
// can be tested with '=='.
```

## license

See `license.md` or visit [Unlicense](dict://unlicense.org).
