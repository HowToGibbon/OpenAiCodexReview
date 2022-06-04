/* add buttons for the products */
var products = [
    {
      name: 'Apple',
      price: 1.99
    },
    {
      name: 'Banana',
      price: 0.99
    },
    {
      name: 'Orange',
      price: 2.99
    }
  ];
  var order = {
    items: [],
    total: 0
  };
  var orderMessage = document.createElement('div');
  orderMessage.innerHTML = 'Your order is empty';
  document.body.appendChild(orderMessage);
  var addToOrder = function(product) {
    order.items.push(product);
    order.total += product.price;
    orderMessage.innerHTML = 'Your order is: ' + order.items.map(function(item) {
      return item.name;
    }).join(', ') + ' for a total of ' + order.total;
  };
  /* add a button for clearing the order */
  var clearOrder = document.createElement('button');
  clearOrder.innerHTML = 'Clear Order';
  clearOrder.addEventListener('click', function() {
    order.items = [];
    order.total = 0;
    orderMessage.innerHTML = 'Your order is empty';
  });
  document.body.appendChild(clearOrder);
  /* add a page title and a bootstrap ui for the shop */
  var title = document.createElement('h1');
  title.innerHTML = 'My Shop';
  document.body.appendChild(title);
  var bootstrap = document.createElement('link');
  bootstrap.rel = 'stylesheet';
  bootstrap.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css';
  document.head.appendChild(bootstrap);
  var container = document.createElement('div');
  container.className = 'container';
  document.body.appendChild(container);
  var row = document.createElement('div');
  row.className = 'row';
  container.appendChild(row);
  var col = document.createElement('div');
  col.className = 'col-md-6';
  row.appendChild(col);
  var orderContainer = document.createElement('div');
  orderContainer.className = 'panel panel-default';
  col.appendChild(orderContainer);
  var orderHeader = document.createElement('div');
  orderHeader.className = 'panel-heading';
  orderHeader.innerHTML = 'Order';
  orderContainer.appendChild(orderHeader);
  var orderBody = document.createElement('div');
  orderBody.className = 'panel-body';
  orderBody.appendChild(orderMessage);
  orderContainer.appendChild(orderBody);
  var orderFooter = document.createElement('div');
  orderFooter.className = 'panel-footer';
  orderFooter.appendChild(clearOrder);
  orderContainer.appendChild(orderFooter);
  var productsContainer = document.createElement('div');
  productsContainer.className = 'panel panel-default';
  col.appendChild(productsContainer);
  var productsHeader = document.createElement('div');
  productsHeader.className = 'panel-heading';
  productsHeader.innerHTML = 'Products';
  productsContainer.appendChild(productsHeader);
  var productsBody = document.createElement('div');
  productsBody.className = 'panel-body';
  products.forEach(function(product) {
    var productElement = document.createElement('button');
    productElement.className = 'btn btn-default';
    productElement.innerHTML = product.name + ': ' + product.price;
    productElement.addEventListener('click', function() {
      addToOrder(product);
    });
    productsBody.appendChild(productElement);
  });
  productsContainer.appendChild(productsBody);
  /* add images to the 3 products */
  var images = [
    'http://www.publicdomainpictures.net/pictures/40000/velka/apple-1427686432I6l.jpg',
    'http://www.publicdomainpictures.net/pictures/10000/velka/1-1248161543llOC.jpg',
    'http://www.publicdomainpictures.net/pictures/10000/velka/1-1248158243hym9.jpg'
  ];
  productsBody.childNodes.forEach(function(productElement, index) {
    var image = document.createElement('img');
    image.src = images[index];
    image.style.width = '100px';
    productElement.appendChild(image);
  });
