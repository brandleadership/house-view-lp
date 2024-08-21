const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('house-view-result-block')
    .withLabel('House View Result Block')
    .withDescription(' With One dropzone for Text Buttons')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Title')
            .withHtmlEditorConfig(require('../../../../../configs/editor/full'))
    )
    .withDropzones(
        cx.dropzone
            .withDropzone('button-result-dropzone')
            .withAllowedElements(require('../house-view-button-text')),
        cx.dropzone
            .withDropzone('result-dropzone')
            .withAllowedElements(require('../vote-result'))
    );
