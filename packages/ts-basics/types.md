- [Types](#types)
- [Array](#array)
- [Tuple](#tuple)
- [Any](#any)
- [Unknown](#unknown)
- [Void](#void)
- [Literal types](#literal-types)

## Types

- [boolean](#boolean)
- [number](#number)
- [bigint](#bigint)
- [string](#string)
- [symbol](#symbol)
- [null](#null-and-undefined)
- [undefined](#null-and-undefined)
- [objects](#object)

### Boolean

```ts
let isLoaded: boolean = true;
```

### Number

```ts
let num: number = 10;

let num: number = 10.5;

let num: number = 0b101;
```

### BigInt

In `tsconfig.json` use at least `"target": "es2020"`

```ts
let big: bigint = 100n; // ok

let num: number = 100n; // error
```

### String

```ts
const sentence: string = "string";

const multiline: string = `one string
two ${"string"}`;
```

### Symbol

```ts
const key: symbol = Symbol("key");
```

### Null and undefined

```ts
const undefinedVar: undefined = undefined;

const nullVar: null = null;
```

### object

```ts
const book: { pages: number } = {
  pages: 64,
};
```

## Array

```ts
const arrNum: number[] = [1, 2, 3];

const arrStr: string[] = ["1", "2", "3"];

const matrix: number[][] = [
  [1, 2],
  [3, 4],
];
```

## Tuple

An array of the defined length

```ts
const tuple: [number, number] = [1, 2];

const another: [number, string, boolean] = [1, "peter", true];
```

## Any

Back to the dynamic js type

```ts
let num: any = 12;
num = "string";
num = [];
num = false;
```

## Unknown

A safe alternative to any

```ts
let notSure: unknown = 0;

notSure = "string";

const str: string = notSure; // error unknown is not assignable to string
```

## Void

Is used to show that function doesn't return anything

```ts
const print = (str): void => {
  console.log(str);
};
```

## Literal types

To set a string as type

```ts
let staticPosition: "static" = "static";

staticPosition = "absolute"; // error "absolute" isn't assignable to "static"

let position: "absolute" | "fixed" | "relative" | "static" | "inherit";

let options: 10 | 50 | 100 = 50;
```
