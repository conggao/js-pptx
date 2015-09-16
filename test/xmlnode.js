var XmlNode = require('../lib/xmlnode')
var assert = require('assert');

describe("XmlNode", function () {
  it('constructs with new', function () {
    var node = new XmlNode();
    node.attr('color', '#39C');
    assert.equal(node.attr('color'), '#39C');
    assert.deepEqual(node.el, { $: { color: "#39C"}})
  });

  it('constructs as function', function () {
    var node = XmlNode().attr('color', '#39C')
    assert.equal(node.attr('color'), '#39C');
    assert.deepEqual(node.el, { $: { color: "#39C"}})
  });

  it('adds a child', function () {
    var node = XmlNode().attr("color", "#39C").addChild("p:sld", XmlNode().attr("color", "#9B6"));
    assert.deepEqual(node.el, { $: { color: "#39C"}, "p:sld": [{ $: { color: "#9B6"}}]})

  });
  it('sets a child', function () {
    var node = XmlNode().attr("color", "#39C").setChild("p:sld", XmlNode().attr("color", "#9B6"));
    assert.deepEqual(node.el, { $: { color: "#39C"}, "p:sld": { $: { color: "#9B6"}}})

  });
  it('takes an element in its constructor', function () {
    var node = XmlNode({ $: { color: "#39C"}, "p:sld": { $: { color: "#9B6"}}});
    assert.deepEqual(node.el, { $: { color: "#39C"}, "p:sld": { $: { color: "#9B6"}}})
  });
  it('exposes toJSON() as a public method', function () {
    var node = XmlNode({ $: { color: "#39C"}, "p:sld": { $: { color: "#9B6"}}});
    assert.deepEqual(node.toJSON(), { $: { color: "#39C"}, "p:sld": { $: { color: "#9B6"}}})
  });
});