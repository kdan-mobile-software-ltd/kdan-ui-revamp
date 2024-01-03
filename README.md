<h1 align="center">Kdan UI</h1>

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

- Unit test component with:

  ```sh
  yarn test
  ```

- Create changeset:

  ```sh
  yarn changeset
  ```

## Release & Publish package

This boilerplate uses [changesets][changesets-url] to automatically generate `CHANGELOG`, create releases and publish to NPM registry via GitHub Actions. You can see action details at [release.yml](/.github/workflows//release.yml).

To automating publish your library, follow these steps:

- Create a `NPM_TOKEN`. [See this article for more details](https://docs.npmjs.com/creating-and-viewing-access-tokens). Make sure the type of access token is **Automation**.

- [Follow this instruction](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) to add the created token to your GitHub Actions secrets. Name of the secret is `NPM_TOKEN`.

- Install [changeset bot](https://github.com/apps/changeset-bot).

**P/S**: Remember to check the `Allow GitHub Actions to create and approve pull requests` in your repo Settings > Actions > General & scroll to Workflow permissions.



[boilertown-url]: https://github.com/boilertown
[react-url]: https://beta.reactjs.org
[typescript-url]: https://www.typescriptlang.org
[storybook-url]: https://storybook.js.org
[eslint-url]: https://eslint.org
[prettier-url]: https://prettier.io
[testing-library-url]: https://testing-library.com
[rollup-url]: https://rollupjs.org
[changesets-url]: https://github.com/changesets/changesets
