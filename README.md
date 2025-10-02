# Knut Valen Web App

Web app for https://knutvalen.dev.

## Getting started

1. Install dependencies:

```shell
npm install --force
```

2. Start the app:

```shell
npm run dev
```

## Continuous Integration & Continuous Deployment

Push to Master in Git. Vercel will build and deploy to https://knutvalen.dev.

## To-Do's

[Kanban](https://knutvalen.atlassian.net/jira) board at Jira.

## Adding content

To add a blog post, follow these steps:

1. Create a folder under `@/content/blog`.
2. Add a React component to the newly created folder.
3. Add a reference to the component in the object `slugs` in the file `@/content/blog/data.ts`.
4. Add metadata for the blog post in the array `metadataForBlogPosts` in the file `@/content/blog/data.ts`.
