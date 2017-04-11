cmd-parser.js
==========

A simple utility for managing user issued commands for simple line based message
 protocols like IRC, Discord, etc. The aim of this project is to eleminate all
 the ceremony and boilerplate around command parsing while writing a simple bot.
 You as a bot author should only need to focus on what happens when a user performs
 some sort of interaction.

Note the project name and API have not yet been finalized.


Example Usage
-------------

```javascript
const cmdparser = require("cmd-parser.js")
const Parser = new cmdparser.Parser();

parser.on("echo ([a-zA-Z0-9])", message => {
  console.log(message)
});

```

Download
--------

Install using npm:

```
npm install cmd-parser.js
```

License
-------

    Copyright 2017 Kevin Woodland

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
