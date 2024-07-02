# interface and type alias

## Interface

### Define interface

```ts
interface IBook {
  readonly author: string;
  readonly title: string;
  read: () => string;
}
```

### Extend interface

```ts
interface IBookWithPages extends IBook {
  pages: number;
}

interface IBookWithAlike extends IBook {
  readonly alike: readonly IBook[];
}
```

### Class implements interface

```ts
class BookWithAlike implements IBookWithAlike {
  readonly alike: readonly IBook[];
  author: string;
  title: string;

  constructor(author: string, title: string) {
    this.alike = [bookOne];
    this.author = author;
    this.title = title;
  }

  read = () => "reading";
}
```

### Interface usage

```ts
const bookOne: IBook = {
  author: "peter",
  title: "samsa",
  read: (): string => "reading",
};

const bookTwo: IBookWithPages = {
  author: "sam",
  title: "parrot",
  read: () => "reading",
  pages: 14,
};
```

## Type alias

```ts
type TBook = {
  readonly author: string;
  readonly title: string;
  read: () => string;
};
```

### Type alias composition

```ts
type TBookWithPages = TBook & {
  pages: number;
};

type TBookWithAlike = IBook & IBookWithAlike;

type TBookWithAlikeKeys = {
  [a in keyof IBookWithAlike]: IBookWithAlike[a];
};
```
