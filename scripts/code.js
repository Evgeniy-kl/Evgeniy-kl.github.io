function slowScroll (id) {
    var offset = 0;
    $('html, body').animate ({
      scrollTop: $(id).offset ().top - offset
    }, 500);
    return false;
  }

  var xml="<?xml version = '1.0'?>"+
  "<head>sk8-shop</head>"
  parser = new DOMParser();
  xmlDoc = parser.parseFromString(xml, "text/xml");
  var names = xmlDoc.getElementsByTagName("head");
  var title = document.getElementsByTagName("title");
  title[0].innerHTML = names[0].innerHTML;