# Portfolio Site

A barebones Jekyll portfolio site: Home, Projects (filterable gallery), Resume (embedded PDF), Contact (text links + Formspree form). Built from scratch, minima-inspired styling only — no theme gem dependency.

## Running locally

```
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000

## Deploying to GitHub Pages

1. Push this repo to `yourusername.github.io` (for a root site) or any repo name (for a project site).
2. In the repo Settings → Pages, set the source to the `main` branch (root).
3. If using a project-site repo (not `username.github.io`), set `baseurl: "/your-repo-name"` in `_config.yml`.
4. Update `url` and `github_username` / `linkedin_username` / `email` in `_config.yml`.

## Customizing

### Home (`index.md`)
Replace the bio paragraphs and swap `assets/images/headshot.jpg` for your photo. The
featured grid pulls any project with `featured: true` in its front matter (first 3 shown).

### Projects (`_projects/`)
Each project is one markdown file in `_projects/`. Front matter fields:

- `title` — project name
- `category` — `internship`, `education`, or `personal` (must match one of these three)
- `order` — controls sort order in the gallery (lower = first)
- `featured` — `true` to include on the home page grid
- `thumbnail` — path to the gallery thumbnail image
- `tools` — list of tools/skills used, shown on the project page
- `carousel` — `true` to show a photo carousel instead of a single hero image
- `images` — list of image paths, required if `carousel: true`
- `video` — optional embed URL (YouTube/Vimeo) for a video section
- `date` — used for sorting/display

Delete the three example project files once you've added your own, or use them as templates.

### Resume (`resume.md`)
Drop your resume PDF at `assets/pdf/resume.pdf`. Update the `updated` date if you add one
to the page's front matter.

### Contact (`contact.md`)
1. Create a form at https://formspree.io and copy your form endpoint.
2. Paste it into `formspree_endpoint` in `_config.yml`.
3. Update `github_username` and `linkedin_username` in `_config.yml`.

## Assets you still need to add

- `assets/images/headshot.jpg`
- `assets/images/projects/...` — thumbnails and photos referenced by your project files
- `assets/pdf/resume.pdf`
