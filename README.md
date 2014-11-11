# laravel-meetup

I was asked (a day before the meetup) if I maybe had something to talk about at the meetup.
This is what I ended up putting together (some browserify examples).
Unfortunately, 005-gulp is incomplete because of the time constraint...

## installation

If you want to run the examples yourself, make sure you have `node` and `npm` installed.
`cd` into one of the folders and run `npm install`, after that you can browserify the `main.js` (or `main.jsx` in case of the 004-react example)
and redirect the output of that to `public/bundle.js`.

For example

```sh
cd 001-simple
npm install
browserify main.js > public/main.js
```

