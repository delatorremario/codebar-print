Template.codebars.helpers({
  codebars() {
    var codes = []
    for (i = 467; i <= 868; i++) {
      codes.push(pad(i,4))
    }
    return codes
  }
});

Template.codebars.events({
  'click button'(event, instance) {
    event.preventDefault()
    // increment the counter when button is clicked

    //$("#price").html('$ ' + this.sale_price)
    $("#printable").print();
  },
});

function pad (n, length) {
    var  n = n.toString();
    while(n.length < length)
         n = "0" + n;
    return n;
}