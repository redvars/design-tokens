import StyleDictionary from 'style-dictionary';
import { formats, transformGroups } from 'style-dictionary/enums';

//const sd = new StyleDictionary('config.json');
const sd = new StyleDictionary({
    "source": ["src/**/*.json"],
  "platforms": {
    "web": {
      "transformGroup": "css",
        files: [
        {
          destination: 'dist/variables.css', // Destination file for CSS variables
          format: 'css/variables',
        },
        {
          destination: 'dist/colors.scss', // Destination file for Sass colors
          format: 'scss/map-deep',
        },
        {
          "format": "javascript/esm",
          "destination": "dist/colors.js",
          "options": {
            "minify": true
          }
        }
      ],
    }
  }
});

await sd.buildAllPlatforms();