# c-stewart-portfolio

This is my personal portfolio app built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) and [Playwright](https://playwright.dev/) for testing.

## Technologies Used

- Framework: [Next.js](https://nextjs.org/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Deployment: [Heroku](https://www.heroku.com/)
- Testing: [Playwright](https://playwright.dev/)

## Features

- **[MDX](https://mdxjs.com/) Support**: Use Markdown with JSX components for blog posts.
- **Light and Dark Mode Toggle**: Switch between themes for better readability.
- **Dynamic [OG Images](https://vercel.com/docs/functions/og-image-generation)**: Auto-generate Open Graph images for sharing.
- **SEO Optimization**: Enhance search visibility with sitemap, robots.txt, and JSON-LD schema.
- **Dynamic Feed Generation**: Automatic dynamic [RSS](https://c-stewart-portfolio-template.vercel.app/rss.xml), [Atom](https://c-stewart-portfolio-template.vercel.app/atom.xml), and [JSON](https://c-stewart-portfolio-template.vercel.app/feed.json) feeds.
- **[KaTeX](https://katex.org/) Integration**: Render mathematical expressions smoothly.
- **Interactive Embeds**: Easily embed interactive tweets and YouTube videos.
- **Captions**: Add descriptive captions to photos, tweets, and videos.
- **Image Grid**: Easily showcase image galleries or photos.

## Installation

c-stewart-portfolio uses [pnpm](https://pnpm.io/installation) for dependency management, so ensure it is installed on your system.

Clone the repo and then:

```
pnpm install
```

Start the development server:

```
pnpm dev
```

The server will be running at [http://localhost:3000](http://localhost:3000).

## Configuration

1. Update the site metadata and social links in `app/config.ts` to set up SEO, feeds, social links, and Open Graph settings.
2. Update your routes in `app/sitemap.ts` for SEO optimization.
3. Update your blog posts in the `/content` folder.

This project will likely diverge from the original template this was based off of. If you like the template head over to get the original [Nextfolio](https://github.com/1msirius/Nextfolio).

## Contributing

Contributions are welcome! To get involved, just push your code to the repo. Whether you're enhancing existing features or adding new ones, your efforts are greatly appreciated!

## Licence

c-stewart-portfolio is open-source and released under the MIT License.
