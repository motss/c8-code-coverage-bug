# Incorrect code coverage report

For unknown reason, code coverage report generated by `c8` is showing incorrect result despite all branches are covered.

I even tested it with compiled JavaScript files by `swc` and the result remains unchanged when there is no additional code generated found at the said line.

## Actual behavior

![additional line reported](https://user-images.githubusercontent.com/10607759/126899579-749a1051-8a14-43ee-bc97-768c00b131dd.png)

There is 1 additional branch has been reported not being covered.

## Expected beahvior

![all lines are covered](https://user-images.githubusercontent.com/10607759/126899578-3cad23f8-283b-44bc-b38f-64114f3d54ac.png)

All lines are covered and `c8` should be able to pick up the result correctly.

## How to test

1. Run `npm i` to install depedencies
2. Run `npm t` to run test with code coverage collection
