const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('house-view-button-text')
    .withLabel('House View Button Text Result')
    .withDescription('Button for Result Block')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withStyleConfigs(require('../../../../../configs/styles/button-result'))
    .withParts(cx.part.plainText.withLabel('Button Text'));
