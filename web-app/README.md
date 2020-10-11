# Wonderbill trade test

This is my submission. I haven't got everything done, but I've tried to showcase a few different skills. I ported the project to [Gatsby](https://www.gatsbyjs.com/) as it allowed me to rapidly implement the UI using [Material UI](https://material-ui.com/), a design system I am quite familiar with.

I've not spent as much time in the redux area as I'd like, I've added a test around one of the reducer functions.  

I've added tests as an example of testing. I'd aim for about 80+ code coverage on unit tests and functional tests both working against a form of stub apis and test environment in a commercial product.

Hope you like what I've done

**To run the site from the project folder run the following:**
```bash
  cd web-app && yarn && yarn start # build and run the project on http://localhost:8000/
  yarn test # run the tests in the project
```

## Requirements ##

- Built using React ✅
- State management handled by Redux ✅
- Payments are stored in the API ❌(started to run out of time maybe we can have a chat about how I would have approached this.)
- Appearance matches the provided design (as a rough guide) ✅
- Ability to add a regular payment with a name, amount, start date and frequency (weekly, monthly, annually) ✅
- Ability to modify a regular payment (name, amount, start date and frequency) ✅
- Ability to delete a regular payment ✅
- Web app should work on the latest version of Chrome ✅
- Unit test where appropriate ✅❌(added jest setup with enzyme, added an example of basic snapshot test, added function unit test and a slightly more advanced component test.)
