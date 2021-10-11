function CanvasLayer(options) {
  this.options = options || {};
  this.paneName = this.options.paneName || 'labelPane';
  this.zIndex = this.options.zIndex || 0;
  this._map = options.map;
  this._lastDrawTime = null;
  this.show();
}

CanvasLayer.prototype = new BMap.Overlay();

CanvasLayer.prototype.initialize = function (map) {
  this._map = map;
  let canvas = this.canvas = document.createElement("canvas");
  let ctx = this.ctx = this.canvas.getContext('2d');
  canvas.style.cssText = "position:absolute;" +
    "left:0;" +
    "top:0;" +
    "z-index:" + this.zIndex + ";";
  this.adjustSize();
  this.adjustRatio(ctx);
  map.getPanes()[this.paneName].appendChild(canvas);
  let that = this;
  map.addEventListener('resize', function () {
    that.adjustSize();
    that.adjustRatio(ctx);
    that._draw();
  });
  return this.canvas;
}

CanvasLayer.prototype.adjustSize = function () {
  let size = this._map.getSize();
  let canvas = this.canvas;
  canvas.width = size.width;
  canvas.height = size.height;
  canvas.style.width = canvas.width + "px";
  canvas.style.height = canvas.height + "px";
}

CanvasLayer.prototype.adjustRatio = function (ctx) {
  let backingStore = ctx.backingStorePixelRatio ||
    ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio || 1;
  let pixelRatio = (window.devicePixelRatio || 1) / backingStore;
  let canvasWidth = ctx.canvas.width;
  let canvasHeight = ctx.canvas.height;
  ctx.canvas.width = canvasWidth * pixelRatio;
  ctx.canvas.height = canvasHeight * pixelRatio;
  ctx.canvas.style.width = canvasWidth + 'px';
  ctx.canvas.style.height = canvasHeight + 'px';
  ctx.scale(pixelRatio, pixelRatio);
};

CanvasLayer.prototype.draw = function () {
  let self = this;
  let args = arguments;

  clearTimeout(self.timeoutID);
  self.timeoutID = setTimeout(function () {
    self._draw.apply(self, args);
  }, 15);
}

CanvasLayer.prototype._draw = function () {
  let map = this._map;
  this.canvas.style.left = -map.offsetX + 'px';
  this.canvas.style.top = -map.offsetY + 'px';
  this.dispatchEvent('draw');
  this.options.update && this.options.update.apply(this, arguments);
}

CanvasLayer.prototype.getContainer = function () {
  return this.canvas;
}

CanvasLayer.prototype.show = function () {
  if (!this.canvas) {
    this._map.addOverlay(this);
  }
  this.canvas.style.display = "block";
}

CanvasLayer.prototype.hide = function () {
  this.canvas.style.display = "none";
  //this._map.removeOverlay(this);
}

CanvasLayer.prototype.setZIndex = function (zIndex) {
  this.canvas.style.zIndex = zIndex;
}

CanvasLayer.prototype.getZIndex = function () {
  return this.zIndex;
}

export { CanvasLayer };