/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Misc = require('../api/misc/misc.model');
var Product = require('../api/product/product.model')
Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

Misc.find({}).remove(function() {
  Misc.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

Product.find({}).remove(function() {
  Product.create({
    Title: 'Apple iPhone 5S',
    CapacityAndPrice: [{Capacity:'16GB', Price:'99'},
      {Capacity:'32GB', Price:'149'}],
    Features: 'Apple iPhone 5S is a smartphone that runs Apple\'s iOS 7. It has a 4-inch LED-backlit IPS LCD capacitive touchscreen with ~326 PPI density. The iPhone 5S features an 8 MP back camera and a 1.2 MP front camera. The phone is powered with 1.3 GHz dual-core Apple A7 processor',
    Specifications: ['Apple iPhone 5S is a smartphone that runs Apple\'s iOS 7',
      'Apple iPhone 5S',
      'Apple iPhone 5S',
      'Apple iPhone 5S'],
    WeightAndDimensions: ['Apple iPhone 5S',
      'Apple iPhone 5S',
      'Apple iPhone 5S'],
    WeightAndDimensionsImage: 'assets/images/width_descp_img.jpg',
      Rating: 5,
      Review: [{Author: 'John Doe',
      Created: new Date(2015, 2, 28, 0, 0, 0, 0),
      Title: 'I love it!!',
      Comment: 'This is the best phone I have ever bought. I am in love with this product',
      Rating: 4}],
    PublishingImage: 'assets/images/product_details_img.png',
    Thumbnail1: 'assets/images/thumbnail_1.png',
    Thumbnail2: 'assets/images/thumbnail_2.png',
    Thumbnail3: 'assets/images/thumbnail_3.png'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});