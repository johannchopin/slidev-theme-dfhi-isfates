---
theme: ./
layout: cover
hideInToc: true
course: Outils et méthodes de développement
presenter-name: Nom du présentateur
date: Premier semestre de la Xème années de la licence Informatique et ingénierie du web.
---

# ISFATES DFHI Slidev Theme

A [slidev](https://sli.dev/) theme for the [ISFATES/DFHI](http://www.isfates-dfhi.eu/) school.

---

# Plan
<Hr />

<Plan columns="2" />
---

# What is Slidev?
<Hr />


Slidev is a slide maker and presentation tool designed for developers. It includes the following features:

- 📝 **Text-based** - focus on your content with Markdown, then style it later, focus on your content with Markdown, then style it later
- 🎨 **Themable** - themes can be shared and reused as npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embed Vue components to enhance your expressions, embed Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export to PDF, PPTX, PNGs, or even a hostable SPA
- 🛠 **Hackable** - virtually anything that's possible on a webpage is possible in Slidev

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---

# Display an image
<Hr />


<div class="flex justify-center mt-4">
  <img src="./assets/isfates-picture.jpg" class="w-3/5"/>
</div>

---
layout: image-right
image: https://cover.sli.dev
---

# Code
<Hr />

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
src: ./slides/plan-content.md
---
