let $e21862bd2100e355$var$has = Object.prototype.hasOwnProperty;
let $e21862bd2100e355$var$toString = Object.prototype.toString;
function $e21862bd2100e355$var$isEmpty(val) {
    // Null and Undefined...
    if (val == null) return true;
    // Booleans...
    if ('boolean' == typeof val) return false;
    // Numbers...
    if ('number' == typeof val) return val === 0;
    // Strings...
    if ('string' == typeof val) return val.length === 0;
    // Functions...
    if ('function' == typeof val) return val.length === 0;
    // Arrays...
    if (Array.isArray(val)) {
        let object = val instanceof Object;
        if (object) return Object.keys(val).length === 0;
        else return val.length === 0;
    }
    // Errors...
    if (val instanceof Error) return val.message === '';
    // Objects...
    if (val.toString == $e21862bd2100e355$var$toString) switch(val.toString()){
        // Maps, Sets, Files and Errors...
        case '[object File]':
        case '[object Map]':
        case '[object Set]':
            return val.size === 0;
        // Plain objects...
        case '[object Object]':
            for(var key in val){
                if ($e21862bd2100e355$var$has.call(val, key)) return false;
            }
            return true;
    }
    // Anything else...
    return false;
}
var $e21862bd2100e355$export$9099ad97b570f7c = $e21862bd2100e355$var$isEmpty;



function $75b221fe6e45c34b$export$9099ad97b570f7c(pattern, options) {
    var result = {
    };
    options = options || {
    };
    var short = options.short;
    var blockElement = pattern.split('__');
    var blockArray = blockElement[0].split('_');
    result.block = blockArray[0];
    if (blockArray.length > 1) {
        result.mod = blockArray[1];
        if (blockArray[2]) result[short ? 'val' : 'modVal'] = blockArray[2];
    }
    if (blockElement.length > 1) {
        var elementArray = blockElement[1].split('_');
        result.elem = elementArray[0];
        if (elementArray.length > 1) {
            result[short ? 'mod' : 'elemMod'] = elementArray[1];
            if (elementArray[2]) result[short ? 'val' : 'elemModVal'] = elementArray[2];
        }
    }
    return result;
}


function $07d03882b5dcc90b$var$process(obj, parse, elemMod, splitElem, elemModVal, deepElement, element) {
    for(let key in parse)switch(key){
        case 'block':
            break;
        case 'elem':
            switch(deepElement){
                case 0:
                    if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]])) obj[splitElem[0]] = [];
                    if (elemMod) {
                        if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]]['main'])) obj[splitElem[0]]['main'] = [];
                        obj[splitElem[0]]['main'].push(element);
                    }
                    break;
                case 1:
                    if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]])) obj[splitElem[0]] = [];
                    if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]])) obj[splitElem[0]][splitElem[1]] = [];
                    if (elemMod) {
                        if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]]['main'])) obj[splitElem[0]][splitElem[1]]['main'] = [];
                        obj[splitElem[0]][splitElem[1]]['main'].push(element);
                    }
                    break;
                case 2:
                    if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]])) obj[splitElem[0]] = [];
                    if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]])) obj[splitElem[0]][splitElem[1]] = [];
                    if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]][splitElem[2]])) obj[splitElem[0]][splitElem[1]][splitElem[2]] = [];
                    if (elemMod) {
                        if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]][splitElem[2]]['main'])) obj[splitElem[0]][splitElem[1]][splitElem[2]]['main'] = [];
                        obj[splitElem[0]][splitElem[1]][splitElem[2]]['main'].push(element);
                    }
                    break;
                case 3:
                    if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]])) obj[splitElem[0]] = [];
                    if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]])) obj[splitElem[0]][splitElem[1]] = [];
                    if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]][splitElem[2]])) obj[splitElem[0]][splitElem[1]][splitElem[2]] = [];
                    if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]])) obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]] = [];
                    if (elemMod) {
                        if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]]['main'])) obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]]['main'] = [];
                        obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]]['main'].push(element);
                    }
                    break;
                case 4:
                    if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]])) obj[splitElem[0]] = [];
                    if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]])) obj[splitElem[0]][splitElem[1]] = [];
                    if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]][splitElem[2]])) obj[splitElem[0]][splitElem[1]][splitElem[2]] = [];
                    if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]])) obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]] = [];
                    if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][splitElem[4]])) obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][splitElem[4]] = [];
                    if (elemMod) {
                        if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][splitElem[4]]['main'])) obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][splitElem[4]]['main'] = [];
                        obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][splitElem[4]]['main'].push(element);
                    }
                    break;
                default:
                    console.warn('не хватает ячеек');
                    break;
            }
            break;
        case 'elemMod':
            switch(deepElement){
                case 0:
                    if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][`${parse.elemMod}`])) obj[splitElem[0]][`${parse.elemMod}`] = [];
                    if (elemModVal) {
                        if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][`${parse.elemMod}`][`${parse.elemModVal}`])) obj[splitElem[0]][`${parse.elemMod}`][`${parse.elemModVal}`] = [];
                        obj[splitElem[0]][`${parse.elemMod}`][`${parse.elemModVal}`].push(element);
                    } else {
                        if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][`${parse.elemMod}`]['main'])) obj[splitElem[0]][`${parse.elemMod}`]['main'] = [];
                        obj[splitElem[0]][`${parse.elemMod}`]['main'].push(element);
                    }
                    break;
                case 1:
                    if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]][`${parse.elemMod}`])) obj[splitElem[0]][splitElem[1]][`${parse.elemMod}`] = [];
                    if (elemModVal) {
                        if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]][`${parse.elemMod}`][`${parse.elemModVal}`])) obj[splitElem[0]][splitElem[1]][`${parse.elemMod}`][`${parse.elemModVal}`] = [];
                        obj[splitElem[0]][splitElem[1]][`${parse.elemMod}`][`${parse.elemModVal}`].push(element);
                    } else {
                        if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]][`${parse.elemMod}`]['main'])) obj[splitElem[0]][splitElem[1]][`${parse.elemMod}`]['main'] = [];
                        obj[splitElem[0]][splitElem[1]][`${parse.elemMod}`]['main'].push(element);
                    }
                    break;
                case 2:
                    if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]][splitElem[2]][`${parse.elemMod}`])) obj[splitElem[0]][splitElem[1]][splitElem[2]][`${parse.elemMod}`] = [];
                    if (elemModVal) {
                        if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]][splitElem[2]][`${parse.elemMod}`][`${parse.elemModVal}`])) obj[splitElem[0]][splitElem[1]][splitElem[2]][`${parse.elemMod}`][`${parse.elemModVal}`] = [];
                        obj[splitElem[0]][splitElem[1]][splitElem[2]][`${parse.elemMod}`][`${parse.elemModVal}`].push(element);
                    } else {
                        if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]][splitElem[2]][`${parse.elemMod}`]['main'])) obj[splitElem[0]][splitElem[1]][splitElem[2]][`${parse.elemMod}`]['main'] = [];
                        obj[splitElem[0]][splitElem[1]][splitElem[2]][`${parse.elemMod}`]['main'].push(element);
                    }
                    break;
                case 3:
                    if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][`${parse.elemMod}`])) obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][`${parse.elemMod}`] = [];
                    if (elemModVal) {
                        if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][`${parse.elemMod}`][`${parse.elemModVal}`])) obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][`${parse.elemMod}`][`${parse.elemModVal}`] = [];
                        obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][`${parse.elemMod}`][`${parse.elemModVal}`].push(element);
                    } else {
                        if ($e21862bd2100e355$export$9099ad97b570f7c(obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][`${parse.elemMod}`]['main'])) obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][`${parse.elemMod}`]['main'] = [];
                        obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][`${parse.elemMod}`]['main'].push(element);
                    }
                    break;
                default:
                    console.log('недостаточно ячеек для обработки');
                    break;
            }
            break;
        case 'elemModVal':
            break;
        default:
            console.log('неизвестное свойство', key, {
                obj: parse
            });
            break;
    }
}
var $07d03882b5dcc90b$export$9099ad97b570f7c = (API, substrate, property)=>{
    return new Promise(async (resolve, reject)=>{
        let obj = {
        };
        substrate.forEach((element)=>{
            let id = {
            };
            let classList = 1;
            if (property.type === 'id') id = element.id;
            else if (property.type === 'class') element.classList.length === 1 ? id = element.className : id = element.classList;
            else if (property.type === 'slot') id = element.slot;
            else console.warn('неизвестный тип', property);
            let parse = {
            };
            let elemMod = {
            };
            let elemModVal = {
            };
            let deepElement = 0;
            let splitElem = {
            };
            if (typeof id === 'object') for (let itemClass of id){
                parse = $75b221fe6e45c34b$export$9099ad97b570f7c(itemClass);
                elemMod = !('elemMod' in parse);
                elemModVal = 'elemModVal' in parse;
                deepElement = 0;
                splitElem = {
                };
                if ('elem' in parse) {
                    splitElem = parse['elem'].split('-');
                    deepElement = splitElem.length - 1;
                }
                console.log('aaaaaaaaaa', parse);
                $07d03882b5dcc90b$var$process(obj, parse, elemMod, splitElem, elemModVal, deepElement, element);
            }
            else {
                parse = $75b221fe6e45c34b$export$9099ad97b570f7c(id);
                elemMod = !('elemMod' in parse);
                elemModVal = 'elemModVal' in parse;
                deepElement = 0;
                splitElem = {
                };
                if ('elem' in parse) {
                    splitElem = parse['elem'].split('-');
                    deepElement = splitElem.length - 1;
                }
                $07d03882b5dcc90b$var$process(obj, parse, elemMod, splitElem, elemModVal, deepElement, element);
            }
        });
        if (property.type === 'id') API['id'] = obj;
        else if (property.type === 'class') API['class'] = obj;
        else if (property.type === 'slot') API['slot'] = obj;
        else console.warn('неизвестный тип');
        obj = {
        };
        resolve(API);
    });
};


var $a7b700ffa692604c$export$9099ad97b570f7c = (debug = true, doc = document.body)=>{
    return new Promise(async (resolve, reject)=>{
        try {
            let object = {
            };
            object.obj = {
            };
            object.params = {
            };
            object.params.debug = debug;
            let ID = doc.querySelectorAll("[id]");
            let CLASS = doc.querySelectorAll("[class]");
            object.obj = await $07d03882b5dcc90b$export$9099ad97b570f7c(object.obj, ID, {
                type: 'id'
            });
            object.obj = await $07d03882b5dcc90b$export$9099ad97b570f7c(object.obj, CLASS, {
                type: 'class'
            });
            resolve(new Proxy(object.obj, {
                get: (obj, prop)=>{
                    if (object.params.debug) console.log({
                        _: 'proxy get',
                        prop: prop,
                        obj: obj,
                        value: obj[prop]
                    });
                    return obj[prop];
                },
                set: (obj, prop, value)=>{
                    if (object.params.debug) console.log({
                        _: 'proxy set',
                        prop: prop,
                        obj: obj,
                        value: value
                    });
                    if ($e21862bd2100e355$export$9099ad97b570f7c(obj[prop])) obj[prop] = [];
                    obj[prop] = value;
                    return true;
                }
            }));
        } catch (e) {
            resolve({
                message: e.message,
                success: true,
                status: true
            });
        }
    });
};


export {$a7b700ffa692604c$export$9099ad97b570f7c as default};
