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

4. **Commit changes**.

---

Your starter scaffold is now complete (README.md, project.json, generator files, engine, UI, mod template). Next you can import into Replit or another IDE and run:

```bash
npm install
npm start
