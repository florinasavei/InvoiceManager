# Description

Invoice management system that show a list of receivables (invoices/credit notes)

- for development purposes and to avoid CORS the UI gets the data from a static JSON file (`sample-receivables-data.json`)

- Current development time: ~ 3 days

## Technologies

- React 18
- typeScript
- SCSS
- YARN workspaces (for monorepo architecture)
- Jest
- Playwright

### External dependencies

- [Material UI](https://mui.com/material-ui/) (for the data-grid)

## Development setup

- core dependencies: node@20.9.0 yarn@4.0.0

- this project also supports [Volta](https://docs.volta.sh/guide/getting-started)
    - install volta
    - run `volta install node@20.9.0 yarn@4.0.0`
       - when using Volta, it is remanded to run VS Code as admin

## Development instructions

- recommended editor: VS Code

### Working with YARN workspaces:

- adding an external package in a particular workspace(package):
`yarn workspace @invoice-manager/core add react-intl`

The site is deployed via Github actions to two environments:

- [PROD](https://invoice-manager-florin-asavei.netlify.app)

- [QA](https://qa-invoice-manager-florin-asavei.netlify.app)
