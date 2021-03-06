# WBS Markdown Dev Notes

- [on NPM](https://www.npmjs.com/package/wbs-markdown)
- [on Yarn](https://yarnpkg.com/en/package/wbs-markdown)

## Development

Interactive development where it is linked to act like a global registration.

```bash
npm link
npm unlink
```

Working with `asdf`:

- `which wbsm` shows where symlink is shimmed
- if changing the root bin command, may have to `rm` the shim link
- remove the node_modules
- `npm install -g`

## Publishing

Deploying an update

Update `lib/version.js` for the correct next version.

```
npm version patch
npm publish
git push
```

Push the tag for creating a GitHub release (if desired). Used Atom's Git Plus plugin.

```
git push origin v1.1.0
```

## Troublshooting

Must be logged in to `npm` to publish.

```
npm login
Username: <username>
Password: <password>
Email: (this IS public) <email>
```

To allow installing with `yarn`, publish to [yarnpkg.com](https://yarnpkg.com/) as well.

```
yarn login
```

```
yarn publish
```