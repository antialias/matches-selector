
var globalObject = require('global-object');
var matches = require('..');
var domify = require('domify');
var assert = require('assert');

if (globalObject.document) {
  describe('matchesSelector(el, selector)', function(){
    var ul;
    var li;
    var em;
    beforeEach(function () {
      ul = domify('<ul><li><em>foo</em></li></ul>');
      li = ul.children[0];
      em = li.children[0];
    })
    it('should work', function(){
      assert(true === matches(em, 'ul li em'));
      assert(true === matches(em, 'ul em'));
      assert(true === matches(em, 'ul > li > em'));
      assert(false === matches(em, 'ul ul em'));

      assert(true === matches(li, 'ul li'));
      assert(true === matches(li, 'ul > li'));
      assert(true === matches(li, 'li'));
      assert(false === matches(li, 'div > li'));

      assert(true == matches(ul, 'ul'));
      assert(false == matches(ul, 'div ul'));
      assert(false == matches(ul, 'body > ul'));
    })
    it('should not throw an Error when given `null`', function(){
      assert(false == matches(null, 'ul'));
    })
    it('should not throw an Error when given a TextNode', function(){
      assert(false == matches(em.firstChild, 'ul'));
    })
  })
}
