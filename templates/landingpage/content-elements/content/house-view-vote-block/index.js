const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('house-view-vote-block')
    .withLabel('House View Vote Block')
    .withDescription(' With One dropzone for Buttons')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Title')
            .withHtmlEditorConfig(require('../../../../../configs/editor/full'))
    )
    .withDropzones(
        cx.dropzone
            .withDropzone('button-vote-dropzone')
            .withAllowedElements(require('../house-view-button')),
        cx.dropzone
            .withDropzone('vote-result')
            .withAllowedElements(require('../vote-result'))
    );
