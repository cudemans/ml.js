# ml.js

A small library for machine learning in JavaScript.

Currently a work in progress

# Installation

So far the package can only be installed through npm. unpkg coming soon.

To install:

`npm install @cudemans/ml.js`

# Functionality

Functionality is based on the `sklearn` model.

```
const linReg = new LinearRegression()

linReg.fit(xTrain, y_train)

const predictions = linReg.predict(xTest)

const accuracy = linreg.score(yTest, predictions)
```

# Imports

`import { linearRegression } from "@cudemans/ml.js"`
