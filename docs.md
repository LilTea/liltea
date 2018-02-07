| Liltea     | Bigtea       | Description                                                               |
| ---------- | ------------ | ------------------------------------------------------------------------- |
| `+`        | `plus`       | Pops the top 2 values and pushes their sum                                |
| `-`        | `minus`      | Pops the top 2 values and pushes their difference                         |
| `*`        | `mult`       | Pops the top 2 values and pushes their product                            |
| `/`        | `div`        | Pops the top 2 values and pushes their quotient                           |
| `$`        | `index`      | Pushes the current iteration index                                        |
| `¡` (gen.) | `ascsort`    | Sorts the top array in ascending order                                    |
| `¢` (gen.) | `dscsort`    | Sorts the top array in descending order                                   |
| `£` (gen.) | `square`     | Pops the top value and pushes it's square                                 |
| `¤` (gen.) | `sqrt`       | Pops the top value and pushes it's square                                 |
| `¥` (gen.) | `dup`        | Pushes the top value                                                      |
| `¦` (gen.) | `tan`        | Pops the top value and pushes it's tan                                    |
| `©` (gen.) | `sin`        | Pops the top value and pushes it's sin                                    |
| `¬` (gen.) | `cos`        | Pops the top value and pushes it's cos                                    |
| `®` (gen.) | `empty`      | Pops everything                                                           |
| `µ` (gen.) | `lenght`     | Pushes the length of the stack                                            |
| `e`        | `element`    | Pops the top value and pushes the element of the top array at that index  |
| `E`        | `elementPop` | Pops the top value and the top array and pushes the element at that index |
| `=`        | `compare`    | Pops the top 2 values and pushes their equality                           |
| `p`        | `print`      | Print the top value                                                       |
| `P`        | `printPop`   | Pop the top value and print it                                            |
| `½` (gen.) | `increment`  | Increment the top value with 1                                            |
| `_`        | `decrement`  | Decrement the top value with 1                                            |
| `¿` (gen.) | `setPrevent` | Prevents the next operation from popping                                  |
| `€` (gen.) | `setReverse` | Causes the next operation to see the stack in reverse                     |
| `Æ` (gen.) | `setGreed`   | Causes the next operator to be applied to the entire stack                |
