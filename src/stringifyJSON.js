/**
 * Created by sunnyg on 10/6/14.
 */

var stringifyJSON = function(obj) {

  var type = Object.prototype.toString.call(obj);

  if (type === '[object Number]' || type === '[object Boolean]') {
    return obj.toString();
  } else if (type === '[object String]') {
    return '"' + obj + '"';
  } else if (type === '[object Null]') {
    return '' + obj;
  } else {
    //////////////////////////
    // OF TYPE ARRAY OR OBJECT
    var s = '';

    if (type === '[object Object]') {
      s += '{';
      var count = 0;
      _.each(obj, function(value, key) {
        var valueType = Object.prototype.toString.call(value);
        if (valueType !== '[object Function]' && valueType !== '[object Undefined]') {
          s += '"' + key + '":' + stringifyJSON(value);
          if (count < _.size(obj) - 1) {
            count++;
            s += ',';
          }
        }
      });
      s += '}';
      return s;

    } else if (type === '[object Array]') {
      s += '[';
      _.each(obj, function(e, i) {
        s += stringifyJSON(e);
        if (i < obj.length - 1) {
          s += ',';
        }
      });
      s += ']';
      return s;

    }



  }




};