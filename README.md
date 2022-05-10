# Leaflet.mouseOverLayer

Leaflet plugin that enables mouseover Tooltips from a UtfGrid layer.

### Usage Example

```js
L.mouseOverLayer(<Object> options);
```

### Options
  
Note: dataUrl, tileUrl and tiptext are **required**.

| Option | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| dataOpts | Object | undefined | L.UtfGrid options for grid data |
| dataUrl | String | undefined | URL to UtfGrid data (requires 'callback={cb}') |
| tileOpts | Object | undefined | L.TileLayer options for image tiles |
| tileUrl | String | undefined | URL to image tiles |
| tiptext | String | undefined | Template used for the Tooltip text |
