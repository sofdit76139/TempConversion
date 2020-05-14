# Temperature Conversion

Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
```
ftoc(32) // fahrenheit to celsius, should return 0

ctof(0) // celsius to fahrenheit, should return 32
```

Because we are human, we want the result temperature to be rounded to one decimal place.

## Notes/Additions

I changed the initial file and added error handling. Also, the initial exercise did not require an HTML front end, CSS etc. The converter will only accept numbers, and they can be added with decimals. It rounds to the nearest decimal place. When anything other than a number is entered, the user is prompted and the form is reset. Last but not least, the unit to convert from is selected via radio buttons (default is "Celsius").

## Hints
- You can find the relevant formulae on [Wikipedia](https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature).

- Try to find by yourself on the Internet how to round a number to 1 decimal place in JavaScript. If you struggle, have a look [here](https://stackoverflow.com/q/7342957/5433628).
