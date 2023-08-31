# @simplyhexagonal/json-expand

![npm](https://img.shields.io/npm/v/@simplyhexagonal/json-expand)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/simplyhexagonal/json-expand/CI)
![License](https://img.shields.io/npm/l/@simplyhexagonal/json-expand)

A TypeScript library for expanding flat JSON objects into nested structures based on dot-notation keys.

## Usage

```typescript
import { extend } from '@simplyhexagonal/json-expand';

const input = JSON.stringify({
  "en.title": "Hello World",
  "en.description": "This is a description"
});

const output = extend(input);
console.log(output);
```

### Output

```json
{
  "en": {
    "title": "Hello World",
    "description": "This is a description"
  }
}
```

## Open Source Notice

This project is open to updates by its users. We ensure that PRs are relevant to the community. In other words, if you find a bug or want a new feature, please help us by becoming one of the contributors ✌️! See the contributing section below.

## Like this module? ❤

Please consider:

- [Buying me a coffee](https://www.buymeacoffee.com/jeanlescure) ☕
- Supporting Simply Hexagonal on [Open Collective](https://opencollective.com/simplyhexagonal) 🏆
- Starring this repo on [Github](https://github.com/simplyhexagonal/exec) 🌟

## Contributing

Yes, thank you! This plugin is community-driven, most of its features are from different authors.
Please update the docs and tests and add your name to the `exec.json` file.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://jeanlescure.cr"><img src="https://avatars2.githubusercontent.com/u/3330339?v=4" width="100px;" alt=""/><br /><sub><b>Jean Lescure</b></sub></a><br /><a href="#maintenance-jeanlescure" title="Maintenance">🚧</a> <a href="https://github.com/simplyhexagonal/exec/commits?author=jeanlescure" title="Code">💻</a> <a href="#userTesting-jeanlescure" title="User Testing">📓</a> <a href="https://github.com/simplyhexagonal/exec/commits?author=jeanlescure" title="Tests">⚠️</a> <a href="#example-jeanlescure" title="Examples">💡</a> <a href="https://github.com/simplyhexagonal/exec/commits?author=jeanlescure" title="Documentation">📖</a></td>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
## License

Copyright (c) 2021-Present [Exec Contributors](https://github.com/simplyhexagonal/exec/#contributors-).<br/>
Licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).