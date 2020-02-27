---
title: "Webpack 개념"
date: 2020-02-14T17:13:46+09:00
categories: ["tech"]
---

[Reference] : <https://webpack.js.org/concepts/>

# Webpack 개념

- 모던 자바스크립트 애플리케이션을 위한 정적 모듈 번들러

## 핵심 개념

- Entry (시작점)
- Output (출력)
- Loaders (로더)
- Plugins (플러그인)
- Mode (모드)
- Browser Compatibility (브라우저 호환성)

## Entry

- entry point : 내부 의존성 그래프가 빌드하기 시작하는 지점을 표기

> webpack.config.js

```js
module.exports = {
    entry: './path/to/my/entry/file.js'
};
```

## Output

- output : 번들된 곳을 방출하는 위치

> webpack.config.js

```js
const path = require('path');

module.exports = {
    entry: './path/to/my/entry/file.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    }
};
```

## Loaders

- 로더 : 웹팩이 Javascript와 JSON파일 외의 타입을 처리할 수 있도록 하는 변환시켜주는 것

```js
const path = require('path');

module.exports = {
    entry: './path/to/my/entry/file.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    }
};
```

- test : 변환될 파일을 식별하는 용도
- use : 변환에 사용될 로더
- require() / import 구문에서 불려지는 파일에 적용됩니다.

## Plugins

- 플러그인은 번들 최적화, 자산 관리, 환경 변수 주입등을 실행합니다.
- require()로 불러서, plugins 배열에 추가합니다.

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');   // install via npm
const webpack = require('webpack'); // to access built-in plugins

module.exports = {
    entry: './path/to/my/entry/file.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
};
```

## Mode

- 모드 : 내장 최적화 기능을 사용할 수 있습니다.
- 옵션 : development, production, none

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');   // install via npm
const webpack = require('webpack'); // to access built-in plugins

module.exports = {
    entry: './path/to/my/entry/file.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    mode: 'production'
};
```

## Browser Compatibility

- 브라우저 호환성 : ES5-compliant (IE8 밑으로는 미지원)

## Environment

- 웹팩은 Node.js 8.x 버전 이상으로 작동됩니다.

1. sql 이해
2. join 개념
3. 기본적인 자료구조
4. primitive type & object type
5. java equals , == 차이
6. ...
