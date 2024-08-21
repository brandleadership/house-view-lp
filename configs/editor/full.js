const {
    EnterMode,
    Feature,
    Format,
    cx,
    bsiProperty,
} = require('@bsi-cx/design-build');

module.exports = cx.htmlEditorConfig
    .withIdentifier('editor-config-35co7H')
    .withFeatures(
        Feature.BOLD,
        Feature.ITALIC,
        Feature.UNDERLINE,
        Feature.TEXT_COLOR,
        Feature.BACKGROUND_COLOR,
        Feature.FORMAT_OL,
        Feature.FORMAT_UL,
        Feature.OUTDENT,
        Feature.INDENT,
        Feature.PARAGRAPH_FORMAT,
        Feature.QUOTE,
        Feature.SPECIAL_CHARACTERS,
        Feature.INSERT_LINK,
        Feature.CLEAR_FORMATTING,
        Feature.UNDO,
        Feature.REDO,
        Feature.FULLSCREEN,
        Feature.SELECT_ALL,
        Feature.HTML,
        Feature.HELP
    )
    .withTextColors('#141e55', '#001489', '#b0aa7e', '#ffffff', '#000000')
    .withBackgroundColors('#141e55', '#001489', '#b0aa7e', '#ffffff', '#000000')
    .withFormats(
        Format.P,
        Format.H1,
        Format.H2,
        Format.H3,
        Format.H4,
        Format.H5,
        Format.H6,
        Format.PRE
    )
    .withEnterMode(EnterMode.P);
