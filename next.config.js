const path = require("path");
const withSass = require("@zeit/next-sass");
const withFonts = require("nextjs-fonts");
module.exports = withSass({
  cssModules: true
});
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  }
};

module.exports = withFonts({
  webpack(config, options) {
    return config;
  }
});
