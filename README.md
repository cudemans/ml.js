# ml.js

A small library for machine learning in JavaScript.

Currently a work in progress - logistic regression not tested

# Installation

So far the package can only be installed through npm. unpkg coming soon.

To install:

`npm install @cudemans/ml.js`

# Functionality

Functionality is based on the `sklearn` model, and includes:

### Linear models

1. `LinearRegression`
2. `LogisticRegression`

### Evaluation metrics

1. Accuracy
2. Mean absolute error
3. Mean squared error
4. Root mean squared error
5. R squared

```
const linReg = new LinearRegression()

linReg.fit(xTrain, y_train)

const predictions = linReg.predict(xTest)

const accuracy = linreg.score(yTest, predictions)
```

# Imports

`import { linearRegression } from "@cudemans/ml.js"`
