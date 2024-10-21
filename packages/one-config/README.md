# one-config

모노레포 패키지 테스트

## 설치

```sh
npm config set @ony3000-lab:registry=https://npm.pkg.github.com/
```

```sh
npm install -D @ony3000-lab/one-config
```

## 구성

### ESLint

```javascript
// .eslintrc.js
const baseConfig = require("@ony3000-lab/one-config/dist/eslint-base");

module.exports = {
  ...baseConfig,
};
```

### Prettier

```javascript
// prettier.config.js
const baseConfig = require("@ony3000-lab/one-config/dist/prettier-base");

module.exports = {
  ...baseConfig,
};
```

### tsconfig.json

```json
{
  "extends": "@ony3000-lab/one-config/dist/tsconfig-base.json"
}
```
