# 🧪 Molecular Virology Lab Website

Welcome to the **MJ's Lab** website repository. This project is built using **Astro**, designed to be cinematic, high-contrast, and extremely easy to maintain.

---

## 🛠 Project Structure

For someone with **zero coding knowledge**, the most important folder is `src/content/`. This is where all the "data" (text, members, publications) lives.

```text
src/content/
├── research/      # Research theme cards & details
├── team/          # Team member bios & profile info
├── publications/  # Research papers & links
├── news/          # Lab updates and milestones
└── projects/      # Ongoing projects listed on About page
```

---

## 📝 How to Edit Content

### 1. Adding or Editing a Team Member
Go to `src/content/team/`.
- To **edit** someone, open their `.md` file.
- To **add** someone, create a new file (e.g., `john-doe.md`) and copy this template:

```markdown
---
name: "John Doe"
role: "PhD Researcher"
image: "/images/team/john-doe.jpg"
email: "john@example.com"
linkedin: "https://linkedin.com/in/johndoe"
order: 2  # Lower numbers appear first (PI is usually 0)
isPast: false
---
This is where you write the bio or description for the member.
```

### 2. Adding a Publication
Go to `src/content/publications/`.
Create a new file (e.g., `new-paper.md`) and paste:

```markdown
---
title: "The Title of the Research Paper"
authors: "MJ M, Smith J, et al."
journal: "Nature Communications"
year: 2025
link: "https://doi.org/10.1038/..."
---
```

### 3. Adding Lab News
Go to `src/content/news/`.
Create a new file (e.g., `funding-2026.md`):

```markdown
---
title: "New Research Grant"
date: "MARCH 2026"
isHighlight: true  # If true, it adds a special background glow
order: 1
---
Write the news update here. You can use **bold** or *italics*.
```

### 4. Updating Ongoing Projects
Go to `src/content/projects/`.
These are the simple numbered cards on the About page.
```markdown
---
title: "Description of the research project..."
order: 1
---
```

### 5. Updating Research Themes
Go to `src/content/research/`.
Each file represents a card on the Research page.
- **`title`**: The headline on the card.
- **`description`**: The short summary on the card.
- **`color`**: The accent color (options: `var(--accent-blue)`, `var(--accent-purple)`, `var(--accent-cyan)`, `var(--accent-pink)`).
- **Body Text**: Anything written below the `---` lines will appear in the "Learn More" popup.

---

## 🖼 Image Management

All images should be placed in the `public/images/` folder.
- **Team Photos**: Place in `public/images/team/`.
- **Homepage Carousel**: Place in `public/images/homepage/carousel/`.
- **Tip**: Keep image sizes under 500KB for fast loading.

---

## 🧬 Scientific Visualization

The 3D protein viewer on the homepage uses **NGL.js**.
- **Protein File**: The structure is loaded from `public/illustrations/1gc1.cif`.
- **Highlighting**: Scientifically accurate domains (CD4 Loop, Phe43 Pocket) are highlighted via residue selection in `src/components/ProteinViewer.astro`.

---

## 🎨 Changing Site Details (For Designers)

- **Navigation**: Edit `src/components/Navigation.astro` to change links.
- **Global Styles**: Edit `src/styles/global.css` to change the primary colors or fonts.
- **Header/Footer**: Edit `src/layouts/MainLayout.astro`.

### Installation & Development
If you want to run this locally:
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:4321`

---

*“Where molecules meet meaning.”*
