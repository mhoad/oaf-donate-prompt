# \<oaf-donate-prompt>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i oaf-donate-prompt
```

## Usage
The following example shows how to load the Web Component from a JS module (can be found in the dist folder) and use it to dynamically replace the existing donate form elements once we have confirmed browser support. Note: Older browsers that [don't support ES modules](https://caniuse.com/?search=modules) will simply just skip over the tag without any issues.

```html
<script type="module">
  import 'oaf-donate-prompt/oaf-donate-prompt.js';

  const supportsCustomElements = ('customElements' in window);

  if (supportsCustomElements === true) {
    // Code for replacing the existing form. Feel free to replace with own solution.
    try {
      var formHeading = document.querySelector(".donate-form__item__label ");
    
      document.querySelector(".donate-form__item__container").remove();
      document.querySelector(".donate-form__item--actions").remove();
      
      var newForm = document.createElement("oaf-donate-prompt");
      formHeading.insertAdjacentElement("afterend", newForm);
    } catch (error) {
      console.error("Error loading donation web component");
    }
  }
</script>
```

The element will then be represented in the DOM with the following tag
```html
<oaf-donate-prompt></oaf-donate-prompt>
```

**Note:** You can also find a precompiled version with slightly better browser support in the dist folder as well if you want to just have a sinlge JS file rather than use the ES module approach outlined above. 

## Linting with ESLint, Prettier, and Types
To scan the project for linting errors, run
```bash
npm run lint
```

You can lint with ESLint and Prettier individually as well
```bash
npm run lint:eslint
```
```bash
npm run lint:prettier
```

To automatically fix many linting errors, run
```bash
npm run format
```

You can format using ESLint and Prettier individually as well
```bash
npm run format:eslint
```
```bash
npm run format:prettier
```

## Demoing with Storybook
To run a local instance of Storybook for your component, run
```bash
npm run storybook
```

To build a production version of Storybook, run
```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`
