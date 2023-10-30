# Description

Invoice management system that show a list of receivables (invoices/credit notes)

- for development purposes and to avoid CORS the UI gets the data from a static JSON file (`sample-receivables-data.json`)

- Total time invested in this project: 19 hours

## Technologies

- React 18
- typeScript
- Vite
- SCSS
- YARN workspaces (for monorepo architecture)
- Jest
- Playwright

### External dependencies

- [Material UI](https://mui.com/material-ui/) (for the data-grid)

## Development setup

- core dependencies: `node@20.9.0` `yarn@4.0.0``

- this project also supports [Volta](https://docs.volta.sh/guide/getting-started)
    - install volta
    - run `volta install node@20.9.0 yarn@4.0.0`
       - when using Volta, it is remanded to run VS Code as admin

## Development instructions

- recommended editor: VS Code
  - optional: install suggested workspace extensions

### Configuring the HTTP API Calls:

- Set the API routes from the .env file in `apps/invoiceViewer/.env`

## Styling:

- Change the theme by setting the variables from `apps/invoiceViewer/src/styles/_colors.scss` 
  - browser theme is take into account
    - the user can also change the theme manually from the top-right button

### Working with YARN workspaces:

- adding an external package in a particular workspace(package):
`yarn workspace @invoice-manager/core add react-intl`

### Deployment
The site is deployed via Github actions to two environments: PROD & QA (where the PlayWright tests will run)

- [PROD1 (netlify)](https://invoice-manager-florin-asavei.netlify.app)
- [PROD2 (github pages + custom domain)](https://invoice-manager.stackfull.win)
- [QA (netlify)](https://qa-invoice-manager-florin-asavei.netlify.app)
