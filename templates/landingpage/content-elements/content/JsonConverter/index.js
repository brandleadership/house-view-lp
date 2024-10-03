const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("converter-test")
  .withLabel("Converter")
  .withIcon(Icon.SNIPPET)
  .withFile(require("./template.twig"));
