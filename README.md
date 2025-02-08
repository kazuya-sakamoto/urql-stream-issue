# urql-stream-issue

A reproduction repository for a bug when using the stream directive with urql in an Expo/React Native environment.

## Environment

- Expo SDK: 52.0.31
- React Native: 0.76.7
- urql: latest
- @urql/exchange-context: latest

## Setup

```bash
npm install
```

## Running the App

```bash
npm run android
```

## Steps to Reproduce

1. Launch the app
2. Press the "Execute Query" button to run the GraphQL query
3. Verify that the query is re-executed correctly by pressing the button multiple times

## Expected Behavior

- GraphQL query executes successfully and displays results
- Each button press triggers a new request

## Actual Behavior

- Normal queries work as expected
- (Bug will be reproduced after adding stream directive)

## Checking Errors on Android Device

To check errors on a physical Android device, use logcat
This will show all React Native related errors and logs from your device.
