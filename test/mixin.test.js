const Mixin = require('../index')
const expect = require('chai').expect
describe('mixin.js', () => {
    it('mix', async () => {
        let Source1 = class {
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
        const t = new Target()
        const res = await t.fun3()
        expect(res).to.equal(3)
    })
})