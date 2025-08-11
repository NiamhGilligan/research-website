# **Personal Research Portfolio**

A modern, responsive portfolio website built with Next.js and React.

![Portfolio Cover](public/images/cover.png)

# **Getting started**

This portfolio was built with [Next.js](https://nextjs.org) and requires Node.js v18.17+.

**1. Clone the repository**

```
git clone <your-repository-url>
```

**2. Install dependencies**

```
npm install
```

**3. Run dev server**

```
npm run dev
```

**4. Edit config**

```
src/app/resources/config
```

**5. Edit content**

```
src/app/resources/content
```

**6. Create blog posts / projects**

```
Add a new .mdx file to src/app/blog/posts or src/app/work/projects
```

# **Features**

## **Design System**

- Custom design tokens and components
- Responsive layout optimized for all screen sizes
- Timeless design without heavy animations and motion
- Endless customization options through CSS custom properties

## **SEO**

- Automatic open-graph and X image generation with next/og
- Automatic schema and metadata generation based on the content file

## **Content**

- Render sections conditionally based on the content file
- Enable or disable pages for blog, work, gallery and about / CV
- Generate and display social links automatically
- Set up password protection for URLs

## **Localization**

- Support for multiple languages with the next-intl library
- To use localization, switch to the 'i18n' branch

# **Deploy with Vercel**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>&project-name=portfolio&repository-name=portfolio)
