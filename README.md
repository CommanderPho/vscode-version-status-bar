# version-status-bar README

This is the README for your extension "version-status-bar". After writing up a brief description, we recommend including the following sections.

## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: enable/disable this extension
* `myExtension.thing`: set to `blah` to do something

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

-----------------------------------------------------------------------------------------------------------

## Working with Markdown

**Note:** You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+CMD+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux) or `Cmd+Space` (macOS) to see a list of Markdown snippets

### For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**

## Issues:
```
0 verbose cli C:\Users\pho\AppData\Local\fnm_multishells\22844_1740474871546\node.exe C:\Users\pho\AppData\Local\fnm_multishells\22844_1740474871546\node_modules\npm\bin\npm-cli.js
1 info using npm@10.7.0
2 info using node@v20.14.0
3 silly config:load:file:C:\Users\pho\AppData\Roaming\fnm\node-versions\v20.14.0\installation\node_modules\npm\npmrc
4 silly config:load:file:F:\pho\repos\VSCode Extensions\version-status-bar\.npmrc
5 silly config:load:file:C:\Users\pho\.npmrc
6 silly config:load:file:C:\Users\pho\AppData\Local\fnm_multishells\22844_1740474871546\etc\npmrc
7 verbose title npm install
8 verbose argv "install"
9 verbose logfile logs-max:10 dir:C:\Users\pho\AppData\Local\npm-cache\_logs\2025-02-25T09_14_57_322Z-
10 verbose logfile C:\Users\pho\AppData\Local\npm-cache\_logs\2025-02-25T09_14_57_322Z-debug-0.log
11 silly logfile start cleaning logs, removing 1 files
12 silly logfile done cleaning log files
13 silly idealTree buildDeps
14 silly fetch manifest typescript@^2.6.1
15 http fetch GET 200 https://registry.npmjs.org/typescript 27ms (cache hit)
16 silly fetch manifest vscode@^1.1.21
17 http fetch GET 200 https://registry.npmjs.org/vscode 5ms (cache hit)
18 silly fetch manifest @types/node@^8.10.25
19 http fetch GET 200 https://registry.npmjs.org/@types%2fnode 15ms (cache hit)
20 silly fetch manifest @types/mocha@^2.2.42
21 http fetch GET 200 https://registry.npmjs.org/@types%2fmocha 9ms (cache hit)
22 silly placeDep ROOT @types/mocha@2.2.48 OK for: version-status-bar@0.0.1 want: ^2.2.42
23 silly placeDep ROOT @types/node@8.10.66 OK for: version-status-bar@0.0.1 want: ^8.10.25
24 silly placeDep ROOT typescript@2.9.2 OK for: version-status-bar@0.0.1 want: ^2.6.1
25 silly placeDep ROOT vscode@1.1.37 OK for: version-status-bar@0.0.1 want: ^1.1.21
26 silly fetch manifest glob@^7.1.2
27 silly fetch manifest http-proxy-agent@^4.0.1
28 silly fetch manifest https-proxy-agent@^5.0.0
29 silly fetch manifest mocha@^5.2.0
30 silly fetch manifest semver@^5.4.1
31 silly fetch manifest source-map-support@^0.5.0
32 silly fetch manifest vscode-test@^0.4.1
33 http fetch GET 200 https://registry.npmjs.org/glob 8ms (cache hit)
34 http fetch GET 200 https://registry.npmjs.org/mocha 14ms (cache hit)
35 http fetch GET 200 https://registry.npmjs.org/vscode-test 31ms (cache hit)
36 http fetch GET 200 https://registry.npmjs.org/source-map-support 34ms (cache hit)
37 http fetch GET 200 https://registry.npmjs.org/https-proxy-agent 37ms (cache hit)
38 http fetch GET 200 https://registry.npmjs.org/http-proxy-agent 38ms (cache hit)
39 http fetch GET 200 https://registry.npmjs.org/semver 38ms (cache hit)
40 silly placeDep ROOT glob@7.2.3 OK for: vscode@1.1.37 want: ^7.1.2
41 silly placeDep ROOT http-proxy-agent@4.0.1 OK for: vscode@1.1.37 want: ^4.0.1
42 silly placeDep ROOT https-proxy-agent@5.0.1 OK for: vscode@1.1.37 want: ^5.0.0
43 silly placeDep ROOT mocha@5.2.0 OK for: vscode@1.1.37 want: ^5.2.0
44 silly placeDep ROOT semver@5.7.2 OK for: vscode@1.1.37 want: ^5.4.1
45 silly placeDep ROOT source-map-support@0.5.21 OK for: vscode@1.1.37 want: ^0.5.0
46 silly placeDep ROOT vscode-test@0.4.3 OK for: vscode@1.1.37 want: ^0.4.1
47 silly fetch manifest once@^1.3.0
48 silly fetch manifest inflight@^1.0.4
49 silly fetch manifest inherits@2
50 silly fetch manifest minimatch@^3.1.1
51 silly fetch manifest fs.realpath@^1.0.0
52 silly fetch manifest path-is-absolute@^1.0.0
53 silly fetch manifest @tootallnate/once@1
54 silly fetch manifest agent-base@6
55 silly fetch manifest debug@4
56 silly fetch manifest he@1.1.1
57 silly fetch manifest diff@3.5.0
58 silly fetch manifest glob@7.1.2
59 silly fetch manifest debug@3.1.0
60 silly fetch manifest growl@1.10.5
61 silly fetch manifest mkdirp@0.5.1
62 silly fetch manifest commander@2.15.1
63 silly fetch manifest minimatch@3.0.4
64 silly fetch manifest browser-stdout@1.3.1
65 http fetch GET 200 https://registry.npmjs.org/@tootallnate%2fonce 21ms (cache hit)
66 silly fetch manifest supports-color@5.4.0
67 http fetch GET 200 https://registry.npmjs.org/once 23ms (cache hit)
68 silly fetch manifest escape-string-regexp@1.0.5
69 http fetch GET 200 https://registry.npmjs.org/inherits 24ms (cache hit)
70 silly fetch manifest buffer-from@^1.0.0
71 http fetch GET 200 https://registry.npmjs.org/fs.realpath 25ms (cache hit)
72 silly fetch manifest source-map@^0.6.0
73 http fetch GET 200 https://registry.npmjs.org/path-is-absolute 25ms (cache hit)
74 silly fetch manifest http-proxy-agent@^2.1.0
75 silly fetch manifest https-proxy-agent@^2.2.1
76 http fetch GET 200 https://registry.npmjs.org/growl 25ms (cache hit)
77 http fetch GET 200 https://registry.npmjs.org/diff 26ms (cache hit)
78 http fetch GET 200 https://registry.npmjs.org/inflight 28ms (cache hit)
79 http fetch GET 200 https://registry.npmjs.org/minimatch 29ms (cache hit)
80 http fetch GET 200 https://registry.npmjs.org/debug 31ms (cache hit)
81 http fetch GET 200 https://registry.npmjs.org/he 33ms (cache hit)
82 http fetch GET 200 https://registry.npmjs.org/debug 32ms (cache hit)
83 http fetch GET 200 https://registry.npmjs.org/agent-base 36ms (cache hit)
84 http fetch GET 200 https://registry.npmjs.org/commander 35ms (cache hit)
85 http fetch GET 200 https://registry.npmjs.org/browser-stdout 36ms (cache hit)
86 http fetch GET 200 https://registry.npmjs.org/mkdirp 39ms (cache hit)
87 http fetch GET 200 https://registry.npmjs.org/minimatch 41ms (cache hit)
88 http fetch GET 200 https://registry.npmjs.org/buffer-from 25ms (cache hit)
89 http fetch GET 200 https://registry.npmjs.org/escape-string-regexp 26ms (cache hit)
90 http fetch GET 200 https://registry.npmjs.org/supports-color 28ms (cache hit)
91 http fetch GET 200 https://registry.npmjs.org/source-map 26ms (cache hit)
92 silly placeDep ROOT fs.realpath@1.0.0 OK for: glob@7.2.3 want: ^1.0.0
93 silly placeDep ROOT inflight@1.0.6 OK for: glob@7.2.3 want: ^1.0.4
94 silly placeDep ROOT inherits@2.0.4 OK for: glob@7.2.3 want: 2
95 silly placeDep ROOT minimatch@3.1.2 OK for: glob@7.2.3 want: ^3.1.1
96 silly placeDep ROOT once@1.4.0 OK for: glob@7.2.3 want: ^1.3.0
97 silly placeDep ROOT path-is-absolute@1.0.1 OK for: glob@7.2.3 want: ^1.0.0
98 silly fetch manifest wrappy@1
99 silly fetch manifest brace-expansion@^1.1.7
100 http fetch GET 200 https://registry.npmjs.org/wrappy 4ms (cache hit)
101 http fetch GET 200 https://registry.npmjs.org/brace-expansion 4ms (cache hit)
102 silly placeDep ROOT @tootallnate/once@1.1.2 OK for: http-proxy-agent@4.0.1 want: 1
103 silly placeDep ROOT agent-base@6.0.2 OK for: http-proxy-agent@4.0.1 want: 6
104 silly placeDep ROOT debug@4.4.0 OK for: http-proxy-agent@4.0.1 want: 4
105 silly fetch manifest ms@^2.1.3
106 http fetch GET 200 https://registry.npmjs.org/ms 2ms (cache hit)
107 silly placeDep ROOT ms@2.1.3 OK for: debug@4.4.0 want: ^2.1.3
108 silly placeDep ROOT wrappy@1.0.2 OK for: inflight@1.0.6 want: 1
109 silly placeDep ROOT brace-expansion@1.1.11 OK for: minimatch@3.1.2 want: ^1.1.7
110 silly fetch manifest balanced-match@^1.0.0
111 silly fetch manifest concat-map@0.0.1
112 http fetch GET 200 https://registry.npmjs.org/balanced-match 5ms (cache hit)
113 http fetch GET 200 https://registry.npmjs.org/concat-map 6ms (cache hit)
114 silly placeDep ROOT balanced-match@1.0.2 OK for: brace-expansion@1.1.11 want: ^1.0.0
115 silly placeDep ROOT concat-map@0.0.1 OK for: brace-expansion@1.1.11 want: 0.0.1
116 silly placeDep ROOT browser-stdout@1.3.1 OK for: mocha@5.2.0 want: 1.3.1
117 silly placeDep ROOT commander@2.15.1 OK for: mocha@5.2.0 want: 2.15.1
118 silly placeDep node_modules/mocha debug@3.1.0 OK for: mocha@5.2.0 want: 3.1.0
119 silly placeDep ROOT diff@3.5.0 OK for: mocha@5.2.0 want: 3.5.0
120 silly placeDep ROOT escape-string-regexp@1.0.5 OK for: mocha@5.2.0 want: 1.0.5
121 silly placeDep node_modules/mocha glob@7.1.2 OK for: mocha@5.2.0 want: 7.1.2
122 silly placeDep ROOT growl@1.10.5 OK for: mocha@5.2.0 want: 1.10.5
123 silly placeDep ROOT he@1.1.1 OK for: mocha@5.2.0 want: 1.1.1
124 silly placeDep node_modules/mocha minimatch@3.0.4 OK for: mocha@5.2.0 want: 3.0.4
125 silly placeDep ROOT mkdirp@0.5.1 OK for: mocha@5.2.0 want: 0.5.1
126 silly placeDep ROOT supports-color@5.4.0 OK for: mocha@5.2.0 want: 5.4.0
127 silly fetch manifest ms@2.0.0
128 silly fetch manifest minimist@0.0.8
129 silly fetch manifest has-flag@^3.0.0
130 http fetch GET 200 https://registry.npmjs.org/minimist 3ms (cache hit)
131 http fetch GET 200 https://registry.npmjs.org/has-flag 4ms (cache hit)
132 silly placeDep ROOT minimist@0.0.8 OK for: mkdirp@0.5.1 want: 0.0.8
133 silly placeDep ROOT buffer-from@1.1.2 OK for: source-map-support@0.5.21 want: ^1.0.0
134 silly placeDep ROOT source-map@0.6.1 OK for: source-map-support@0.5.21 want: ^0.6.0
135 silly placeDep ROOT has-flag@3.0.0 OK for: supports-color@5.4.0 want: ^3.0.0
136 silly placeDep node_modules/vscode-test http-proxy-agent@2.1.0 OK for: vscode-test@0.4.3 want: ^2.1.0
137 silly placeDep node_modules/vscode-test https-proxy-agent@2.2.4 OK for: vscode-test@0.4.3 want: ^2.2.1
138 silly fetch manifest agent-base@4
139 silly fetch manifest debug@^3.1.0
140 silly fetch manifest agent-base@^4.3.0
141 silly placeDep node_modules/mocha ms@2.0.0 OK for: debug@3.1.0 want: 2.0.0
142 silly placeDep node_modules/vscode-test agent-base@4.3.0 OK for: http-proxy-agent@2.1.0 want: 4
143 silly placeDep node_modules/vscode-test debug@3.1.0 OK for: http-proxy-agent@2.1.0 want: 3.1.0
144 silly fetch manifest es6-promisify@^5.0.0
145 http fetch GET 200 https://registry.npmjs.org/es6-promisify 4ms (cache hit)
146 silly placeDep ROOT es6-promisify@5.0.0 OK for: agent-base@4.3.0 want: ^5.0.0
147 silly fetch manifest es6-promise@^4.0.3
148 http fetch GET 200 https://registry.npmjs.org/es6-promise 2ms (cache hit)
149 silly placeDep ROOT es6-promise@4.2.8 OK for: es6-promisify@5.0.0 want: ^4.0.3
150 silly placeDep node_modules/vscode-test ms@2.0.0 OK for: debug@3.1.0 want: 2.0.0
151 silly reify moves {}
152 silly audit bulk request {
152 silly audit   '@types/mocha': [ '2.2.48' ],
152 silly audit   '@types/node': [ '8.10.66' ],
152 silly audit   typescript: [ '2.9.2' ],
152 silly audit   vscode: [ '1.1.37' ],
152 silly audit   glob: [ '7.2.3', '7.1.2' ],
152 silly audit   'http-proxy-agent': [ '4.0.1', '2.1.0' ],
152 silly audit   'https-proxy-agent': [ '5.0.1', '2.2.4' ],
152 silly audit   mocha: [ '5.2.0' ],
152 silly audit   semver: [ '5.7.2' ],
152 silly audit   'source-map-support': [ '0.5.21' ],
152 silly audit   'vscode-test': [ '0.4.3' ],
152 silly audit   'fs.realpath': [ '1.0.0' ],
152 silly audit   inflight: [ '1.0.6' ],
152 silly audit   inherits: [ '2.0.4' ],
152 silly audit   minimatch: [ '3.1.2', '3.0.4' ],
152 silly audit   once: [ '1.4.0' ],
152 silly audit   'path-is-absolute': [ '1.0.1' ],
152 silly audit   '@tootallnate/once': [ '1.1.2' ],
152 silly audit   'agent-base': [ '6.0.2', '4.3.0' ],
152 silly audit   debug: [ '4.4.0', '3.1.0' ],
152 silly audit   ms: [ '2.1.3', '2.0.0' ],
152 silly audit   wrappy: [ '1.0.2' ],
152 silly audit   'brace-expansion': [ '1.1.11' ],
152 silly audit   'balanced-match': [ '1.0.2' ],
152 silly audit   'concat-map': [ '0.0.1' ],
152 silly audit   'browser-stdout': [ '1.3.1' ],
152 silly audit   commander: [ '2.15.1' ],
152 silly audit   diff: [ '3.5.0' ],
152 silly audit   'escape-string-regexp': [ '1.0.5' ],
152 silly audit   growl: [ '1.10.5' ],
152 silly audit   he: [ '1.1.1' ],
152 silly audit   mkdirp: [ '0.5.1' ],
152 silly audit   'supports-color': [ '5.4.0' ],
152 silly audit   minimist: [ '0.0.8' ],
152 silly audit   'buffer-from': [ '1.1.2' ],
152 silly audit   'source-map': [ '0.6.1' ],
152 silly audit   'has-flag': [ '3.0.0' ],
152 silly audit   'es6-promisify': [ '5.0.0' ],
152 silly audit   'es6-promise': [ '4.2.8' ]
152 silly audit }
153 warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
154 warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
155 warn deprecated glob@7.1.2: Glob versions prior to v9 are no longer supported
156 http fetch POST 200 https://registry.npmjs.org/-/npm/v1/security/advisories/bulk 293ms
157 silly audit report {
157 silly audit report   minimatch: [
157 silly audit report     {
157 silly audit report       id: 1096485,
157 silly audit report       url: 'https://github.com/advisories/GHSA-f8q6-p94x-37v3',
157 silly audit report       title: 'minimatch ReDoS vulnerability',
157 silly audit report       severity: 'high',
157 silly audit report       vulnerable_versions: '<3.0.5',
157 silly audit report       cwe: [Array],
157 silly audit report       cvss: [Object]
157 silly audit report     }
157 silly audit report   ],
157 silly audit report   minimist: [
157 silly audit report     {
157 silly audit report       id: 1097677,
157 silly audit report       url: 'https://github.com/advisories/GHSA-xvch-5gv4-984h',
157 silly audit report       title: 'Prototype Pollution in minimist',
157 silly audit report       severity: 'critical',
157 silly audit report       vulnerable_versions: '<0.2.4',
157 silly audit report       cwe: [Array],
157 silly audit report       cvss: [Object]
157 silly audit report     },
157 silly audit report     {
157 silly audit report       id: 1096466,
157 silly audit report       url: 'https://github.com/advisories/GHSA-vh95-rmgr-6w4m',
157 silly audit report       title: 'Prototype Pollution in minimist',
157 silly audit report       severity: 'moderate',
157 silly audit report       vulnerable_versions: '<0.2.1',
157 silly audit report       cwe: [Array],
157 silly audit report       cvss: [Object]
157 silly audit report     }
157 silly audit report   ]
157 silly audit report }
158 warn deprecated vscode@1.1.37: This package is deprecated in favor of @types/vscode and vscode-test. For more information please read: https://code.visualstudio.com/updates/v1_36#_splitting-vscode-package-into-typesvscode-and-vscodetest
159 warn deprecated vscode-test@0.4.3: This package has been renamed to @vscode/test-electron, please update to the new name
160 warn deprecated mkdirp@0.5.1: Legacy versions of mkdirp are no longer supported. Please update to mkdirp 1.x. (Note that the API surface has changed to use Promises in 1.x.)
161 verbose stack Error: command failed
161 verbose stack     at ChildProcess.<anonymous> (C:\Users\pho\AppData\Roaming\fnm\node-versions\v20.14.0\installation\node_modules\npm\node_modules\@npmcli\promise-spawn\lib\index.js:53:27)
161 verbose stack     at ChildProcess.emit (node:events:519:28)
161 verbose stack     at maybeClose (node:internal/child_process:1105:16)
161 verbose stack     at ChildProcess._handle.onexit (node:internal/child_process:305:5)
162 verbose pkgid version-status-bar@0.0.1
163 verbose cwd F:\pho\repos\VSCode Extensions\version-status-bar
164 verbose Windows_NT 10.0.19045
165 verbose node v20.14.0
166 verbose npm  v10.7.0
167 error code 1
168 error path F:\pho\repos\VSCode Extensions\version-status-bar
169 error command failed
170 error command C:\Windows\system32\cmd.exe /d /s /c node ./node_modules/vscode/bin/install
171 verbose exit 1
172 verbose code 1
173 error A complete log of this run can be found in: C:\Users\pho\AppData\Local\npm-cache\_logs\2025-02-25T09_14_57_322Z-debug-0.log

```