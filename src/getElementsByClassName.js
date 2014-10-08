// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // builds and returns an array of DOM elements that have className
  /*
  we need to do 2 things:
    touch every element recursively (depth-first seems natural)
    if it.contains(className), then arr.push(it)

  naive:
    add every element to a flattened list
    _.each(res, e.contains(className))

  better
    create func that recursively loads direct children nodes and gets each classList
    checks if classList.contains(className) and if so, adds to list

  the recursive function:
    if elem has no children
      push
    else
      for each child
        recurse

   */

  // first attempt:
  /*
  var elementList = [];
  var res = [];

  var root = document.body;

  function addElement(obj) {
    if (obj.childNodes.length === 0 && obj.nodeName !== '#text') {
      console.log('pushing: ' + obj);
      elementList.push(obj)
    } else {
      _.each(obj, function(e, i) {
        addElement(e);
      })
    }
  }

  addElement(root);
  */

  var res = [];

  function recursiveSearch(elem) {
    // checks if elem

    var elemChildren = Array.prototype.slice.call(elem.children);
    hasClass(elem);

    if (elemChildren.length !== 0) {
      _.each(elemChildren, function (child) {
        recursiveSearch(child);
      });
    }
  }

  function hasClass(elem) {
    if (elem.classList && elem.classList.contains(className)) {
      res.push(elem);
    }
  }

  recursiveSearch(document);

  return res;

};
