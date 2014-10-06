var htmlStrings = [
  '<p class="targetClassName"></p>',                                      // 0
  '<p class="otherClassName targetClassName"></p>',                       // 1
  '<p><p class="targetClassName"></p></p>',                               // 2
  '<p><p class="targetClassName"><p class="targetClassName"></p></p></p>',// 3
  '<p><p></p><p><p class="targetClassName"></p></p></p>',                 // 4
  '<p><p class="targetClassName"></p><p class="targetClassName"></p></p>',// 5
  '<p><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></p>'                      // 6
];

/*  html strings
0
1
2
  p
3
  p
    p
4
  p
  p
    p
5
  p
  p
6
  div
    div
      span 'yay'
 */

describe('getElementsByClassName', function(){

  it('should match the results of calling the built-in function', function(){
    $('body').addClass('targetClassName');
    htmlStrings.forEach(function(htmlString){
      var $rootElement = $(htmlString);
      $('body').append($rootElement);

      var result = getElementsByClassName('targetClassName');
      var expectedNodeList = document.getElementsByClassName('targetClassName');
      var expectedArray = Array.prototype.slice.apply(expectedNodeList);
      var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
      expect(equality).to.equal(true);

      $rootElement.remove();
    });
    $('body').removeClass('targetClassName');
  });

});
