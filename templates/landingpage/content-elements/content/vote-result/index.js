const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('vote-result')
    .withLabel('Vote Text')
    .withIcon(Icon.TEXT)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Text')
            .withHtmlEditorConfig(require('../../../../../configs/editor/full'))
    );
