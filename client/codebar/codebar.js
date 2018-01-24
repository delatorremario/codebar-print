Template.codebar.onRendered(function () {
  var code = this.data.code
  $("#bcTarget" + code).barcode(code, "code128");
})
