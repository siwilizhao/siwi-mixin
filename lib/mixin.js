/**
 * @author [siwi]
 * @email [siwilizhao@siwi.me]
 * @create date 2018-03-28 03:12:55
 * @modify date 2018-03-28 03:12:55
 * @desc [多类生成一个类]
 */

class Mixin {
    constructor() {

    }

    /**
     * Mixin 模式的实现
     * @param {*} target 
     * @param {*} source 
     */
    async _copyProperties(Target, Source) {

        // 拷贝实例属性
        for (const key of Reflect.ownKeys(Source)) {
            if (Reflect.has(Target, key)) {
                continue
            }
            Object.defineProperty(Target, key, Object.getOwnPropertyDescriptor(Source, key))
        }
        // 拷贝原型属性
        for (const key of Reflect.ownKeys(Source.prototype)) {
            if (Reflect.has(Target.prototype, key)) {
                continue
            }
            Object.defineProperty(Target.prototype, key, Object.getOwnPropertyDescriptor(Source.prototype, key))
        }
    }

    /**
     * 合成
     * @param {*} Target 
     * @param {*} Sources 
     */
    async mix(Target, ...Sources) {
        if (!Target) {
            Target = class Target{}
        }
        for (const Source of Sources) {
            await this._copyProperties(Target, Source)
        }
        return Target
    }
}

module.exports = new Mixin()