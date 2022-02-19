/**
 *
 * @param ele {any}元素
 * @returns {string} 元素类型的字符串
 */
export default function type(ele: any): string {
  const toString = Object.prototype.toString,
    map: any = {
      '[object Boolean]': 'boolean',
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Function]': 'function',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object RegExp]': 'regExp',
      '[object Undefined]': 'undefined',
      '[object Null]': 'null',
      '[object Object]': 'object',
      '[object Map]': 'map',
      '[object Set]': 'set',
      '[object Symbol]': 'symbol',
    }
  return map[toString.call(ele)]
}
