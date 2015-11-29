this.ProfileCovers = new FS.Collection("profileCovers", {
  stores: [
    new FS.Store.GridFS("cover-images", {
      transformWrite: function(fileObj, readStream, writeStream) {
        if (gm.isAvailable) {
          return gm(readStream, fileObj.name()).autoOrient().stream().pipe(writeStream);
        } else {
          return readStream.pipe(writeStream);
        }
      }
    }), new FS.Store.GridFS("cover-thumbs", {
      transformWrite: function(fileObj, readStream, writeStream) {
        var size;
        if (gm.isAvailable) {
          size = {
            width: 600,
            height: 200
          };
          return gm(readStream, fileObj.name()).autoOrient().resize(size.width + "^>", size.height + "^>").gravity("Center").extent(size.width, size.height).stream().pipe(writeStream);
        } else {
          return readStream.pipe(writeStream);
        }
      }
    })
  ],
  filter: {
    allow: {
      contentTypes: ['image/*']
    }
  }
});
