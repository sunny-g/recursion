// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  /*
  if base case
    return base case
  else
    call func

  createString(str, size) {
    var count = 0;
    for each key in obj,
      if value is Object,
        return createString( '"' + key + '":' , _.size(value))
      else
        str += '"' + key + '":"' + value.toString() + '"'
        if !(count === size - 1)
          str += ','
          return
        else
          str += '}'
          return
    return str

  createString('{', _.size(obj))

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
   */

  function createString(str, size) {
    var count = 0;
    _.each(obj, function(value, key) {
      if (typeof value === 'object') {
        str += '"' + key + '":'
        createString(str, _.size(value));
      } else {
        str += '"' + key + '":"' + value.toString() + '"';
        if (!(count === size - 1)) {
          count++;
          str += ',';
        } else {
          str += '}';
        }
      }
    });

    return str;
  }

  return createString('{', _.size(obj))


};
