# Knut Valen Web App

Web app for https://knutvalen.dev.

## Getting started

1. Install dependencies:

```shell
npm install
```

2. Start the app:

```shell
npm run dev
```

## CI/CD

Github Actions at [Github](https://github.com/knutvalen/knutvalen-web-app)

## Project management

Kanban board at [Jira](https://knutvalen.atlassian.net/jira)

## Content

To add blog content, follow these steps:

1. Create a directory under `@/content/blog`.
2. Add a React component to the newly created directory.
3. Add a reference to the component in the object `slugs` in the file `@/content/blog/data.ts`.
4. Add metadata for the blog post in the array `metadataForBlogPosts` in the file `@/content/blog/data.ts`.
