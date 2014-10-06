// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  /*
  createString(s, thing)
    if thing is obj
      var count = 0
      var size = _.size(thing)
      for key in thing
        s += '"' + key '":';
        createString(s, thing[key])
        if count != size - 1  // if this is not the last key in thing
          s += ','
        else
          s += '}'
    else
      s += '"' + thing + '"'
    return s
  */
  /*
  test Obj and stack:
  var o1 = { level1:
            { level2:
              { level3a: 'value3a',
                level3b: 'value3b'
              }
            }
          }
  var o2 = { key1: 'value1' }
  var o3 = { level1:
            { level2 : 'value2' }
           }
  var str1 = "{"level1":{"level2":{"level3a":"value3a","level3b":"value3b"}}}"
  var str2 = "{"key1":"value1"}"
  var str3 = "{"level1":{"level2":"value2"}}"
   */

  // the functions
  /*
  function createString(str, thing2Stringify) {
    // if thing2Stringify is object {
    var count = 0;
    _.each(thing2Stringify, function(value, key) {
      if (Object.prototype.toString.call(value) === '[object Object]') {
        str += '"' + key + '":';
        createString(str, value);
      } else {
        str += '"' + key + '":"' + value.toString() + '"';
        if (!(count === _.size(obj2Stringify) - 1)) {
          count++;
          str += ',';
        } else {
          str += '}';
        }
      }
    });
    return str;
  }
  */

  function createString(s, thing) {
    var type = Object.prototype.toString.call(thing);
    if (type === '[object Object]') {
      var count = 0;
      var size = _.size(thing);
      for (var key in thing) {
        s += '"' + key + '":' + createString(s, thing[key]);
        if (count != size - 1) {  // if this is not the last key in thing
          count++;
          s += ','
        } else {
          s += '}'
        }
      }
    // TODO: A STRINGIFY FOR EACH TYPE
    } else if (type === '[object Number]' ||
      type === '[object String]' ||
      type === '[object Array]') {
      return thing.toString();
    } else {
      return thing;
    }
    return s
  }

  return createString('{', obj);

  /*
  function obj2String(o) {
    var str = '{';
    _.each(o, function(value, key) {
      str += '"' + key '":"'
    })
  }
  */

};
