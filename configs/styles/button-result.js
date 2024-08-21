const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('b94d299f-f123-438a-9860-fac1892289fd')
    .withLabel('Button Active Styles')
    .withCssClasses(
        cx.cssClass
            .withLabel('Blue Background Active')
            .withCssClass('btn-blue-bcg'),
        cx.cssClass
            .withLabel('White Background Default')
            .withCssClass('btn-white-bcg')
    );
