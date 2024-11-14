# Breadcrumb component usage
<Hr />

Use the `Breadcrumbs` component:

```html
<Breadcrumbs />
```


---

<Breadcrumbs />

## This is title 1.1
<Hr />

---

<Breadcrumbs />

Content in section 1.1

---

<Breadcrumbs />

## This is title 1.2

---

<Breadcrumbs />

### This is title 1.2.1

---

<Breadcrumbs minDepth="2" />

### This is title 1.2.2

You can use the `minDepth` props to hide the start of the breadcrumbs.

Example here:

```vue
<Breadcrumbs minDepth="2" />
```