<h1 align="center">Kdan UI</h1>

[![License](https://img.shields.io/npm/l/reactstrap.svg)](https://github.com/kdan-mobile-software-ltd/kdan-ui-revamp/blob/master/LICENSE)

[![NPM Version](https://img.shields.io/npm/v/kdan-ui-revamp.svg?branch=master)](https://www.npmjs.com/package/kdan-ui-revamp) 


## The Setup

- [React v18][react-url]
- [TypeScript][typescript-url]
- StyledComponent for css styling
- UI development with [Storybook][storybook-url]
- Unit test with [Testing-library][testing-library-url]
- Build the library with [Rollup][rollup-url]
- Automated release with [changesets][changesets-url]

## Development

- Build the library:

  ```sh
  yarn build
  ```

- Run storybook:

  ```sh
  yarn storybook
  ```

- Create changeset:

  ```sh
  yarn changeset
  ```

## Release & Publish package

#### Developing and preview on Preparing
1. `yarn build`
2. login to your npm account
3. update the version number in `package.json` (example of the conversion version name is `{previousStableVersion}-beta-{num}` e.g.`1.0.7-beta-1`)
4. `npm publish`

### Release a stable version of package (by pipeline)
follow the pipeline flow which trigger by merging to master brach


[boilertown-url]: https://github.com/boilertown
[react-url]: https://beta.reactjs.org
[typescript-url]: https://www.typescriptlang.org
[storybook-url]: https://storybook.js.org
[eslint-url]: https://eslint.org
[prettier-url]: https://prettier.io
[testing-library-url]: https://testing-library.com
[rollup-url]: https://rollupjs.org
[changesets-url]: https://github.com/changesets/changesets
