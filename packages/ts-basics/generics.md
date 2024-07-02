# Generics

```ts
function grow<T>(seed: T): T {
  return seed;
}

type TTree = "Tree";
const tree: TTree = "Tree";

type TPlant = "Plant";
const plant: TPlant = "Plant";

grow<TTree>(tree);

grow<TPlant>(plant);
```

Generic with multiple parameters

```ts
const growPlant = <T, U, R>(plant: T, sunshine: U): R = {}

growPlant<Seed, Water, Plant>(...)

growPlant<Seed, UV, Herbarium>(...)
```

## Generic in interface

```ts
interface FlowerPot<T = TPlant> {
  plant: T;
  growPlant: () => T;
}
```

## Generic and union type

```ts
const print<T extends string | number>(id: T) => {
  console.log(id)
}
```
