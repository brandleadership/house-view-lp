// const path = require('path');

// const {BuildConfig, ModuleConfig, WebpackConfigBuilder, Version, DesignType} = require('@bsi-cx/design-build');

// module.exports = WebpackConfigBuilder.fromConfigs(
//   new BuildConfig()
//     .withName("landingpage")
//     .withVersion("1.0.0")
//     .withDesignType(DesignType.LANDINGPAGE)
//     .withTargetVersion(Version.CX_22_0)
//     .withRootPath(path.resolve(__dirname, "templates", "landingpage"))
//     .withPropertiesFilePath("properties.js")
//     .withModules(new ModuleConfig().withName("main").withPath("main.js")),
    
//      )

const path = require("path");

const { BuildConfig, ModuleConfig, WebpackConfigBuilder, Version, DesignType } = require("@bsi-cx/design-build");

const landingPageBuildConfig = new BuildConfig()
  .withName("JB-Markets-LP")
  .withVersion("1.0.0")
  .withDesignType(DesignType.LANDINGPAGE)
  .withTargetVersion(Version.CX_22_0)
  .withRootPath(path.resolve(__dirname, "templates", "landingpage"))
  .withPropertiesFilePath(path.resolve("properties.js"))
  .withModules(new ModuleConfig().withName("main").withPath("main.js"))
  .withAdditionalFilesToCopy(
    {
      from: path.resolve(__dirname, "assets", "icons"),
      to: "icons",
    },
    {
      from: path.resolve(__dirname, "templates", "landingpage", "preview.png"),
      to: "static",
    },
  );

module.exports = WebpackConfigBuilder.fromConfigs(
  landingPageBuildConfig
    .clone()
    .withName("house-view-lp-cx-22.0-de")
    .withPropertiesFilePath(path.resolve(__dirname, "lang-de.js")),
  landingPageBuildConfig
    .clone()
    .withName("house-view-lp-cx-22.0-en")
    .withPropertiesFilePath(path.resolve(__dirname, "lang-en.js")),
);
  
