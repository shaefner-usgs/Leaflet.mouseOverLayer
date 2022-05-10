# Leaflet.mouseOverLayer

Leaflet plugin that enables mouseover Tooltips on a TileLayer using data from a UtfGrid layer.

### Requirements

This plugin requires [Leaflet.utfgrid](https://github.com/danzel/Leaflet.utfgrid).

### Usage Example

```js
var layer = L.mouseOverLayer(<Object> options);
```

### Options
  
Note: dataUrl, tileUrl and tiptext are **required**.

| Option | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| dataOpts | Object | undefined | [L.UtfGrid](https://github.com/danzel/Leaflet.utfgrid) options for grid data |
| dataUrl | String | undefined | URL to UtfGrid data (requires 'callback={cb}') |
| tileOpts | Object | undefined | L.TileLayer options for image tiles |
| tileUrl | String | undefined | URL to image tiles |
| tiptext | String | undefined | Template used for the Tooltip text |
