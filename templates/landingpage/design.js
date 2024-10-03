require("./styles/styles.scss");

const { cx, Locale } = require("@bsi-cx/design-build");

module.exports = cx.design
  .withTitle("Landingpage Scaffold")
  .withAuthor("BSI Business Systems Integration AG")
  .withDate("20.05.2022")
  .withPreviewImage("static/preview.png")
  .withDefaultLocale(Locale.EN)
  .withLocales(Locale.EN, Locale.DE)
  .withContentElementGroups(
    cx.contentElementGroup.withGroupId("content").withLabel("Content").withContentElements(
      require("./content-elements/content/house-view-button-text"),
      require("./content-elements/content/house-view-result-block"),
      require("./content-elements/content/house-view-vote-block"),
      require("./content-elements/content/house-view-button"),
      require("./content-elements/content/vote-result"),
      //require("./content-elements/content/JsonConverter"),
    ),
  )
  .withDropzones(
    cx.dropzone.withDropzone("content").withAllowedElements(
      require("./content-elements/content/house-view-result-block"),
      require("./content-elements/content/house-view-vote-block"),
      //require("./content-elements/content/JsonConverter"),
    ),
  );
