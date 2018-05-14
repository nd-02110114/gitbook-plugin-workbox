# Gitbook WorkBox Plugin

This plugin uses WorkBox - a module written by Google - to automatically generate a service worker and 
include it in your gitbook output. 

## Installing

Add this to your gitbook by including it in your book.json file.

```
{
    "plugins": ["workbox"]
}
```

Be sure to run `gitbook install` before building your book, or as part of your automated build process. 

## Usage
Create `workbox-config.js` in the root directory (Maybe there is a package.json in the root directory)

Like the following.

```workbox-config.js
module.exports = {
    cacheId: "hoge",
    globPatterns: [
        "**/*.{html,js,css}"
    ],
    clientsClaim: true,
    runtimeCaching: [
        {
            urlPattern: /\.(jpg|png|svg|gif|woff|ttf|eot)/,
            handler: "cacheFirst",
            options: {
                cacheName: "assets",
                expiration: {
                    maxAgeSeconds: 60 * 60 * 24 * 14
                }
            }
        },
    ],
};

```

### Caution!!
This plugin already set `globDirectory` and `swDest`.  
(Confirm [index.js](https://github.com/nd-02110114/gitbook-plugin-workbox/blob/master/index.js))
```
{
  globDirectory: "_book",
  swDest: "_book/service-worker.js",
}
```
So, if you overwrite this setting, please add your original setting in workbox-config.js

## License
This plugin is released under the MIT License, see LICENSE.