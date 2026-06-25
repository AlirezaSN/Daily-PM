# Daily Product Management

Static website for a day-by-day product management course.

## Preview

Run this from the `pm-course` folder:

```sh
python3 -m http.server 5173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:5173/
```

## Add A New Day

1. Create a new Markdown file in `content/days/`, such as `day-4.md`.
2. Add the day to the `course` array at the top of `app.js`.

Example:

```js
{
  day: 4,
  title: "Roadmaps and communication",
  duration: "40 min",
  file: "content/days/day-4.md"
}
```

## Edit About Page

Update `content/about.md`.

## Deploy

This site has no build step and no backend. Upload the whole folder to any static host, such as Netlify, Vercel, GitHub Pages, Cloudflare Pages, or an ordinary web server.

## About Page Profile

- Put your profile photo at `assets/profile.svg`. If that file is missing, the page shows an initials fallback.
- Edit `aboutProfile` near the top of `app.js` to change your title, location, and contact links.
- The long About description still comes from `content/about.md`.
