## Getting Started

Welcome to the starter repository for Next.js + Sanity.io Projects!

## Why does this exist?

I got annoyed trying to make a base Next.js project play nice from the start with a newly bootstrapped Sanity.io project. See, you can't exactly tell Sanity.io to create a new project within an existing project... (yet).
But now you can, by using this template repository! So, no more:
  * Modifying npm scripts to make Next.js and Sanity.io play nice with each other
  * Struggling with customer folder structures
  * Complicated workflows
  * Just clone down this repository and follow the instructions in this README!

## Configuring your new Sanity.io project

So now you've cloned down this template repository. Now what? Well, let's get into it:
  * If you haven't already, install the Sanity.io command line interface by running `npm install -g @sanity/cli`.
  * Run an `npm install` to install all the necessary dependencies.
  * Once the sanity client successfully installed, and you have all your dependencies, run a `sanity init` within your new template repository.
    * The console will inform you that the current folder contains a configured Sanity studio. Select YES, you want to reconfigure it.
    * Run through the setup instructions to login to your Sanity client and create a new project, choosing default settings along the way.
    * This will update the `sanity.json` file to now point to your newly created Sanity.io studio.
  * Now that you've set up Sanity.io on your new starter project, you're free to modify the schemas to fit your needs and get started with development!

## Getting Started with Next.js

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.