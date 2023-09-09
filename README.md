## Markdown Blog

Minimal Persian MD -> HTML blog using [Next.js](https://nextjs.org/).

- [Reference Video](https://www.youtube.com/watch?v=Hiabp1GY8fA)
- [Deployment Guide](https://medium.com/frontendweb/how-to-deploy-a-nextjs-app-to-github-pages-1de4f6ed762e)

---

### Features

- Seamless and instant Markdown to blog experience.
    - Converts Markdown [[wikilinks]] to HTML hyperlinks.
    - Displays pictures linked with [[wikilinks]] and without.
- Backlink support.
- Automatic build on push.

### Formatting

- Images must be inside /public/ and displayed as ```![](../image.png)``` or ```![[image.png]]``` inside .md files.
- To change the banner post, replace the value for ```BANNERID``` inside ```src/app/page.tsx```
- Post order is determined by the ```order``` field inside each note's frontmatter.

### Todo

- [ ] Differentiating [[wikilinks]] and web links
- [ ] Theme support
- [ ] Custom pages
- [ ] Local graph
- [ ] SEO
- [ ] Seamless Obsidian to blog flow
- [ ] Private and public posts