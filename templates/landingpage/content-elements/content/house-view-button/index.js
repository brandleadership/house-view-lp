const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('house-view-button')
    .withLabel('House View Button Vote')
    .withDescription('Button for Vote Block')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withParts(cx.part.link.withLabel('Button Link'));
