[TOC]

# Description
Invoice management system

Working with YARN workspaces:

- adding an external package in a particular workspace(package):
`yarn workspace @invoice-manager/core add react-intl`

# Development setup

- dependencies: node@20.9.0 yarn@4.0.0

* this project also supports [Volta](https://docs.volta.sh/guide/getting-started)
    - install volta
    - run `volta install node@20.9.0 yarn@4.0.0``
       - when using Volta, it is remanded to run VS Code as admin

The site is deployed to two environments:

- [PROD](https://invoice-manager-florin-asavei.netlify.app)

- [QA](https://qa-invoice-manager-florin-asavei.netlify.app)
