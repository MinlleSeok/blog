---
title: "Spring boot와 React.js의 만남 - 프론트엔드"
date: 2020-01-23T10:28:36+09:00
categories: ["tech"]
---

# Spring boot(백엔드)와 React.js(프론트엔드)의 만남 - 프론트엔드

## 1단계 UI Controller를 만들어봅시다.(Spring MVC Controller)

```java
package com.mjseok.springreact;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    
    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }
}
```

- @Controller : Spring MVC Controller인 class에 마크합니다.
- @RequestMapping : ``index()`` 메소드에 ``/`` route를 도와줍니다.
- ``"index"`` template return => 뷰 리졸버가 ``src/main/resources/templates/index.html`` 를 매핑합니다.

## 2단계 HTML 템플릿 만들기

> src/main/resources/templates/index.html

```html
<!DOCTYPE html>
<html xmlns:th="https://www.thymeleaf.org">
<head lang="en">
    <meta charset="UTF-8"/>
    <title>ReactJS + Spring Data REST</title>
    <link rel="stylesheet" href="/main.css" />
</head>
<body>

    <div id="react"></div>

    <script src="built/bundle.js"></script>

</body>
</html>
```

- css 는 ``src/main/resources/static`` 에 넣으면 됩니다.
- React.js의 public폴더에 있는 index.html과 매우 닮은 형태입니다.
- bundle된 javascript 를 불러와 react id인 div에 표현합니다.

## 3단계 자바스크립트 모듈 불러오기

``pom.xml``을 수정해줍니다.

> pom.xml

```xml
<plugin>
	<groupId>com.github.eirslett</groupId>
	<artifactId>frontend-maven-plugin</artifactId>
	<version>1.6</version>
	<configuration>
		<installDirectory>target</installDirectory>
	</configuration>
	<executions>
		<execution>
			<id>install node and npm</id>
			<goals>
				<goal>install-node-and-npm</goal>
			</goals>
			<configuration>
				<nodeVersion>v10.11.0</nodeVersion>
				<npmVersion>6.4.1</npmVersion>
			</configuration>
		</execution>
		<execution>
			<id>npm install</id>
			<goals>
				<goal>npm</goal>
			</goals>
			<configuration>
				<arguments>install</arguments>
			</configuration>
		</execution>
		<execution>
			<id>webpack build</id>
			<goals>
				<goal>webpack</goal>
			</goals>
		</execution>
	</executions>
</plugin>
```

- frontend-maven-plugin이 사용되었습니다.
- ``install-node-and-npm`` : node.js 와 npm 을 target폴더에 설치합니다.
- ``npm`` : arguments에 정의된 install => npm install 을 실행합니다.
- ``webpack`` : webpack 빌드(javascript compile) 작업을 실행합니다.

npm 설정을 미리 작성합니다.

> package.json

```json
{
    "name": "spring-react",
    "version": "0.1.0",
    "description": "Demo of ReactJS + Spring Data REST",
    "repository": {
        "type": "git",
        "url": "git@github.com:MinlleSeok/spring-react.git"
    },
    "keywords": [
        "rest",
        "hateoas",
        "spring",
        "data",
        "react"
    ],
    "author": "Jose Seok",
    "license": "Apache-2.0",
    "bugs": {
        "url": "https://github.com/MinlleSeok/spring-react/issues"
    },
    "homepage": "https://github.com/MinlleSeok/spring-react",
    "dependencies": {
    },
    "scripts": {
        "watch": "webpack --watch -d"
    },
    "devDependencies": {
    }
}
```

컴퓨터에 전역으로 node.js 와 npm이 설치되어있다면
최신버젼을 아래의 명령어로 설치할 수 있습니다.

```bash
npm i react react-dom rest
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli
```

- react.js : React.js toolkit
- rest.js : REST 호출에 사용되는 CujoJS toolkit
- webpack : 자바스크립트 컴포넌트를 단일 번들로 컴파일하는 toolkit
- babel : ES6을 사용하여 작성한 코드를 ES5로 컴파일해줍니다.(브라우저 호환성)

이제 webpack 설정이 필요합니다.

> webpack.config.js

```js
var path = require('path');

module.exports = {
    entry: './src/main/js/app.js',
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            }
        ]
    }
};
```

- ``entry point`` : 시작점 정의 (app.js == public staic void main())
- sourcemaps를 만들어서 디버깅할 때 사용합니다.
- 모든 컴파일된 내용은 bundle.js에 담겨지게 됩니다. (jar == bundle.js)
- babel 엔진에 연결해서 브라우저 호환성을 맞춥니다.
- ``npm run-script watch`` : webpack을 watch 모드로 실행합니다.

## 4단계 메인 app 작성하기

> src/main/js/app.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
// import client from './client';

```

- React와 ReactDOM은 앱을 빌드하는데 사용되는 Facebook이 제공한 라이브러리입니다.
- client는 rest.js가 HAL, URI 템플릿을 지원하도록 설정하는 코드입니다.

> src/main/js/client.js

```js
'use strict';

const rest = require('rest');
const defaultRequest = require('rest/interceptor/defaultRequest');
const mime = require('rest/interceptor/mime');
const uriTemplateInterceptor = require('./api/uriTemplateInterceptor');
const errorCode = require('rest/interceptor/errorCode');
const baseRegistry = require('rest/mime/registry');

const registry = baseRegistry.child();

registry.register('text/uri-list', require('./api/uriListConverter'));
registry.register('application/hal+json', require('rest/mime/type/application/hal'));

module.exports = rest
                 .wrap(mime, { registry: registry })
                 .wrap(uriTemplateInterceptor)
                 .wrap(errorCode)
                 .wrap(defaultRequest, { headers: { 'Accept': 'application/hal+json' }});
```

> src/main/js/api/uriListConverter.js

```js
define(function() {
    'use strict';

    /* Convert a single or array of resources into "URI1\nURI2\nURI3..." */
    return {
        read: function(str /*, opts */) {
            return str.split('\n');
        },
        write: function(obj /*, opts */) {
            // If this is an Array, extract the self URI and then join using a newline
            if (obj instanceof Array) {
                return obj.map(resource => resource._links.self.href).join('\n');
            } else {    // otherwise, just return the self URI
                return obj._links.self.href;
            }
        }
    };
});
```

> src/main/js/api/uriTemplateInterceptor.js

```js
define(function(require) {
    'use strict';

    const interceptor = require('rest/interceptor');

    return interceptor({
        request: function (request /*, config, meta */) {
            /*
                If the URI is a URI Template per RFC 6570
                (https://tools.ietf.org/html/rfc6570),
                trim out the template part
            */
           if (request.path.indexOf('{') === -1) {
               return request;
           } else {
               request.path = request.path.split('{')[0];
               return request;
           }
        }
    });
});
```

> src/main/js/app.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import client from './client';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { employees: [] };
    }

    componentDidMount() {
        client({ method: 'GET', path: '/api/employees'} )
        .done(response => {
            this.setState({ employees: response.entity._embedded.employees });
        });
    }

    render() {
        return (
            <EmployeeList employees={this.state.employees} />
        )
    }
}
```

- ``class Foo extends React.Component{...}`` : React Component
- ``componentDidMount`` : 리액트 렌더 후에 호출되는 API
- ``render`` : 화면에 컴포넌트를 그리는 API
- React에서 첫글자 대문자로 컴포넌트 이름을 규정합니다.

### State 와 Props(Properties)

- State(상태)는 자체적으로 처리하는 데이터이자 변화 가능합니다.
- Props(속성)은 고정된 값이자 컴포넌트만들 때 지정하는 값입니다.

## 5단계 하위 컴포넌트 만들기

- 상태 업데이트 후 값을 표현할 하위 컴포넌트를 작성합니다.

> src/main/js/app.js

```js
// end::app[]

// tag::employee-list[]
class EmployeeList extends React.Component{
	render() {
		const employees = this.props.employees.map(employee =>
			<Employee key={employee._links.self.href} employee={employee}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Description</th>
					</tr>
					{employees}
				</tbody>
			</table>
		)
	}
}
// end::employee-list[]
```

- ``javascript.map()`` : 컴포넌트 요소 배열로 반환합니다.
- ``<ComponentName prop1={...} prop2={...} />``
- ``map()``안의 값에 ``key={...}``속성은 고유 값이 필요합니다.

> src/main/js/app.js

```js
// tag::employee[]
class Employee extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.employee.firstName}</td>
				<td>{this.props.employee.lastName}</td>
				<td>{this.props.employee.description}</td>
			</tr>
		)
	}
}
// end::employee[]
```

- props로 받은 속성을 출력하는 컴포넌트입니다.
- 컴포넌트를 작게 분리시킬수록 향후 기능적으로 빌드업할 수 있습니다.

> src/main/js/app.js

```js
// tag::render[]
ReactDOM.render(
	<App />,
	document.getElementById('react')
)
// end::render[]
```

- ``render()`` : 리액트 컴포넌트와 컴포넌트를 삽입할 HTML DOM node

```bash
bash mvnw spring-boot:run
```

<http://localhost:8080>

- 이제 기본 백엔드와 프론트엔드를 구성했습니다!
