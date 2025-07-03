# OFU Mods

Drop your mods here as JS files exporting:

```js
module.exports = {
  name: 'my-mod',
  version: '0.1.0',
  hooks: {
    onMatchStart: engine => { /* ... */ },
    onBoostApply: (boost, player) => { /* ... */ }
  }
};
