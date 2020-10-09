```js script
import { html } from '@open-wc/demoing-storybook';
import '../dist/oaf-donate-prompt.js';

export default {
  title: 'OafDonatePrompt',
  component: 'oaf-donate-prompt',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# OafDonatePrompt

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add oaf-donate-prompt
```

```js
import 'oaf-donate-prompt/oaf-donate-prompt.js';
```

```js preview-story
export const Simple = () => html`
  <oaf-donate-prompt></oaf-donate-prompt>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <oaf-donate-prompt title="Hello World"></oaf-donate-prompt>
`;
```
