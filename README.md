[![Build Status](https://travis-ci.org/siwilizhao/siwi-mixin.svg?branch=master)](https://travis-ci.org/siwilizhao/siwi-mixin)

# siwi-mixin
多个对象合成一个新的对象，新对象具有各个组成成员的接口

# install

# use npm

`npm install siwi-mixin`

# use yarn 

`yarn add siwi-mixin`

# Example

```js
const Mixin = require('../index')
class Example {
    constructor() {
        this.init()
    }
    async init () {
        const Source1 = class {
            constructor() {
                this.name = 'Mankong'
                this.age = 24
            }
            async fun1() {
                return 1
            }
        }
        const Source2 = class {
            async fun2() {
                return 2
            }
            async fun3() {
                return 3
            }
        }
        const Source3 = class {
            async fun4() {
                return 4
            }
            async fun5() {
                return 5
            }
        }
        const Target = await Mixin.mix(Source1, Source2, Source3)
        console.log(Reflect.ownKeys(Target.prototype))
        const t = new Target()
        const res = await t.fun3()
        console.log(t.name)
        console.log(res)
    }
}
module.exports = new Example()
```
