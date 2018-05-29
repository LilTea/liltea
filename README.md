# LilTea

LilTea is a golfing language

## Getting Started

To get started you can use BigTea to write LilTea

### Prerequisites

You only need node.js
And run `npm install` to make sure you have all the dependancies.

### Running

To run liltea:

```
node liltea.js source.lit < input.txt
```

OR

```
node liltea.js source.lit input.txt
```

OR

```
node liltea.js source.lit
```

and just type the input and send EOF to end. (Ctrl+D on linux or Ctrl+Z on windows)

To compress bigtea:

```
compressor.js < source.bit
```

## Documentaion 
### Literals
### Loops
### Conditionals
### IO
### [Atoms](atoms.md)


### Modificators

| lil | big        | Description                                                                                 |
|-----|------------|---------------------------------------------------------------------------------------------|
|     | `setPrevent` | Prevents the next operation from deleting things from the stack                           |
|     | `setReverse` | Causes the next operator to read/pop from the beginning of the stack, rather than the end |
|     | `setGreed`   | Causes the next operator to apply to the entire stack                                     |


## Running the tests
Just run
```
npm test
```
## Deployment
[![CircleCI](https://circleci.com/gh/liltea/liltea.svg?style=svg)](https://circleci.com/gh/liltea/liltea)
## Built With Love
## Contributing
## Versioning 

## Authors

* **Vladi** - *Initial work* - [VGeorgiev1](https://github.com/VGeorgiev1)
* **Marti** - *Initial work* - [mdatsev](https://github.com/mdatsev)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Other golfing languages :)
