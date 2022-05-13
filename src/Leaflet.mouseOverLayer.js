/* global L */

require('leaflet');
require('leaflet.utfgrid');

/**
 * This class extends L.LayerGroup to enable mouseover Tooltips on a TileLayer 
 * using data from a UtfGrid layer.
 */
L.MouseOverLayer = L.LayerGroup.extend({
  initialize: function (options) {
    // Create the data and tile layers
    this._dataLayer = L.utfGrid(options.dataUrl, options.dataOpts);
    this._tileLayer = L.tileLayer(options.tileUrl, options.tileOpts);

    if (typeof options.tiptext === 'string') {
      this._tiptext = options.tiptext;
      this._tooltip = L.tooltip({
        className: 'mouseoverlayer'
      });
    }

    L.LayerGroup.prototype.initialize.call(this);

    this.addLayer(this._tileLayer);
    if (!L.Browser.mobile) {
      this.addLayer(this._dataLayer);
    }
  },

  // --------------------------------------------------
  // Override onAdd, onRemove methods from L.LayerGroup
  // --------------------------------------------------

  onAdd: function (map) {
    L.LayerGroup.prototype.onAdd.call(this, map);

    if (this._tooltip) {
      this._dataLayer.on('mouseover', this._onMouseOver, this);
      this._dataLayer.on('mouseout', this._onMouseOut, this);
    }
  },

  onRemove: function (map) {
    L.LayerGroup.prototype.onRemove.call(this, map);

    if (this._tooltip) {
      this._dataLayer.off('mouseover', this._onMouseOver, this);
      this._dataLayer.off('mouseout', this._onMouseOut, this);
    }
  },

  /**
   * Show the tooltip.
   *
   * @param e {Event}
   */
  _onMouseOver: function (e) {
    this._tooltip.setContent(L.Util.template(this._tiptext, e.data));
    this._tooltip.setLatLng(e.latlng);
    this._tooltip.addTo(this._map);
  },

  /**
   * Hide the tooltip.
   */
  _onMouseOut: function () {
    this._tooltip.remove();
  }
});


L.mouseOverLayer = function (options) {
  return new L.MouseOverLayer(options);
};
