
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-badge.Badge",
          "file": "plugins/cordova-plugin-badge/www/badge.js",
          "pluginId": "cordova-plugin-badge",
        "clobbers": [
          "cordova.plugins.notification.badge"
        ]
        },
      {
          "id": "cordova-plugin-local-notification-12.LocalNotification",
          "file": "plugins/cordova-plugin-local-notification-12/www/local-notification.js",
          "pluginId": "cordova-plugin-local-notification-12",
        "clobbers": [
          "cordova.plugins.notification.local"
        ]
        },
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "cordova-sqlite-storage.SQLitePlugin",
          "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
          "pluginId": "cordova-sqlite-storage",
        "clobbers": [
          "SQLitePlugin"
        ]
        },
      {
          "id": "com.telerik.plugins.nativepagetransitions.NativePageTransitions",
          "file": "plugins/com.telerik.plugins.nativepagetransitions/www/NativePageTransitions.js",
          "pluginId": "com.telerik.plugins.nativepagetransitions",
        "clobbers": [
          "window.plugins.nativepagetransitions"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "com.telerik.plugins.nativepagetransitions": "0.7.0",
      "cordova-plugin-badge": "0.8.8",
      "cordova-plugin-device": "2.1.0",
      "cordova-plugin-local-notification-12": "0.1.3",
      "cordova-sqlite-storage": "6.0.0"
    };
    // BOTTOM OF METADATA
    });
    