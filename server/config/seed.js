/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Misc = require('../api/misc/misc.model');
var Product = require('../api/product/product.model')
var Navigation = require('../api/navigation/navigation.model')
var UserProfile = require('../api/userprofile/userprofile.model')
var Service = require('../api/service/service.model')

Service.find({}).remove(function(){
  Service.create({
    _id: '4d7b4341-d512-46fd-b402-67315e6e6fea',
    Name: 'Catalog Item 1',
    Image: 'apple-iphone-6-1.jpeg',
    FormDefault: {
      Name: 'Enter VM Name'
    }
  });
});

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
    "Title": "Apple iPhone 6",
    "Features": "Extremely thin, the iPhone 6 flaunts a seamless design with the smooth blend of anodised aluminium, stainless steel and the curved, polished glass. Incredibly light, the beautifully crafted iPhone 6 feels great in your hands. Thanks to its innovative design, the iPhone 6 provides an intuitive experience and is extremely easy to use. Featuring the thinnest and most advanced Multi-Touch display ever made, the Apple iPhone 6 promises a high-contrast output with incredible colors and brightness on its 4.7 inch Retina HD display. A resolution of 1334x750 pixels, clear wide-angle viewing and an improved polariser - the iPhone 6 truly offers a bigger and better display.",
    "Images": [
      "apple-iphone-6-1.jpeg",
      "apple-iphone-6-2.jpeg",
      "apple-iphone-6-3.jpeg",
      "apple-iphone-6-4.jpeg"
    ],
    "Rating": 5,
    "Reviews": [
      {
        "Author": "Sagar",
        "Created": "6, 2015",
        "Title": "It's simply Awesome Review After 4 months",
        "Rating": 5,
        "Comment": "I am Apple fan, because of it's reliability and software / hardware support. It's been more than 4 months now, I am using this phone. And I have not faced any issue. If you use iphone you will never regret it. It's worth the money you pay. In terms of speed and quality of software, it's way ahead from any other smart phones in Market."
      },
      {
        "Author": "Kumar",
        "Created": "Oct 21 2014",
        "Title": "Amazing Phone- Iphone 6",
        "Rating": 5,
        "Comment": "Phone is Amazing, Super Fast, Light weight, sleek & dashing look."
      },
      {
        "Author": "Bharath",
        "Created": "Feb 5, 2015",
        "Title": "Excellent product !!",
        "Rating": 3,
        "Comment": "As expected iPhone 6 is amazing...its sleek, sexy and superfast....the best thing about ordering from flipkart was that i got my product on 18th October...very next day of the release....it was very nicely packed...."
      }
    ],
    "WeightAndDimension": [
      "129 g",
      "67x138.1x6.9"
    ],
    "Specification": [
      "6.9 mm Thickness",
      "4.7 inch Touchscreen",
      "iOS 8",
      "8 MP Primary Camera",
      "16GB"
    ],
    "Price": 299,
    "FeaturedItem": true,
    "TopProduct": true,
    "ItemCategory": [
      "Mobile",
      "Apple"
    ],
    "DefaultImage": "apple-iphone-6-1.jpeg",
    "Type": "",
    "RelatedId": ""
  },
  {
    "Title": "Lenovo A6000",
    "Features": "Along with excellent multi-tasking, the 2 GB RAM of this Lenovo device ensures that applications and games run lag-free. The 16 GB ROM easily accommodates all your favourite pictures, music, videos and games. The Lenovo A6000 Plus comes with a 12.7 cm (5) HD display for viewing photos, browsing websites or playing games. This smartphone uses an IPS technology to deliver ultra-wide 178 degree viewing angles that are great for watching videos in large groups.",
    "Images": [
      "lenovo-a6000-1.jpeg",
      "lenovo-a6000-2.jpeg",
      "lenovo-a6000-3.jpeg",
      "lenovo-a6000-5.jpeg",
      "lenovo-a6000-6.jpeg",
      "lenovo-a6000-4.jpeg"
    ],
    "Rating": 3,
    "Reviews": [
      {
        "Author": "SAHA",
        "Created": "May 18, 2015",
        "Title": "ATTENTION ALL FUTURE BUYERS!!!!!!!",
        "Rating": 1,
        "Comment": "the pre-installed security app could not be removed and it will charge you for virus definition update..how could lenovo do this thing to there customer.?first we buy from u then again we have to pay for your app which is not good..you are cheating us..and there are good free antivirus in market..why should i pay for your crap..and it can't be uninstalled also..so once you buy a lenovo phone you are in their hand to pay for the anti virus software "
      },
      {
        "Author": "Sethi",
        "Created": "May 5, 2015",
        "Title": "Maxima Battery Life.",
        "Rating": 4,
        "Comment": "I was using Xiomi Redmi 1s and was very happy with it. The only issue I had was that the battery backup was bad for Redmi 1s. I have been using this for 1 week now and would like to tell you guys that Its the best choice I made. The battery backup for this phone is just amazing, not to forget the 2GB RAM makes the phone super fast. You would love it if you like light weight phones. I feel happy when I return home and I dont have to put my phone on charging as it still has juice left. Also it gives you the option to move apps to SD card, so that is great"
      }
    ],
    "WeightAndDimension": [
      "128 g",
      "70x141x8.2 mm"
    ],
    "Specification": [
      "2 GB RAM, 16 GB ROM",
      "Dual SIM, 4G LTE",
      "5 inch HD IPS Display",
      "Twin Dolby Speaker"
    ],
    "Price": 65,
    "FeaturedItem": false,
    "TopProduct": true,
    "ItemCategory": [
      "Mobile",
      "Lenovo"
    ],
    "DefaultImage": "lenovo-a6000-1.jpeg",
    "Type": "",
    "RelatedId": ""
  },
  {
    "Title": "Mi 4i",
    "Features": "The Mi 4i has a 12.7cm (5) Sharp / JDI display which employs a range of colors that use full lamination technology for better contrasts. It also uses a hardware-level technology to improve readability in sunlight. It is also protected by a Corning OGS glass, which makes it resilient against scratches and damage. Powered by a 64-bit, 2nd Gen Qualcomm Snapdragon 615 octa-core processor, the Mi 4i is not only the leader for quality smartphones, but also the benchmark for extreme performance. It has 4 performance cores clocking at 1.7 GHz and 4 power-saving cores at 1.1 GHz to ensure quicker multitasking between applications.",
    "Images": [
      "mi-4i-mzb4343in-1.jpeg",
      "mi-4i-mzb4343in-2.jpeg",
      "mi-4i-mzb4343in-3.jpeg",
      "mi-4i-mzb4343in-4.jpeg"
    ],
    "Rating": 4,
    "Reviews": [],
    "WeightAndDimension": [
      "130 g",
      "69.6x138.1x7.8 mm"
    ],
    "Specification": [
      "Unibody Design, Ultra-compact Frame",
      "2nd-gen Snapdragon 615 Processor, 2GB RAM, 16GB Flash",
      "5 inch Sharp/JDI 1080p Display",
      "All-new Sunlight Display, Corning OGS Glass",
      "13MP Sony /Samsung Camera f/2.0 aperture, Two-tone Flash",
      "5MP Front Camera with Beautify",
      "4.4V 3120 mAh Battery, 4G Dual SIM",
      "MIUI 6 on Android L"
    ],
    "Price": 33,
    "FeaturedItem": true,
    "TopProduct": true,
    "ItemCategory": [
      "Mobile",
      "Xiaomi"
    ],
    "DefaultImage": "mi-4i-mzb4343in-1.jpeg",
    "Type": "",
    "RelatedId": ""
  },
  {
    "Title": "Sony Xperia T2",
    "Features": "Enriched with the Triluminos™ display technology for mobiles, the Xperia T2 Ultra delivers a wide palette of natural and rich colors. Seascapes and landscapes appear more vivid and faces come in natural skin tones. Get ready for a rich and vivid color experience on the Sony Xperia T2 Ultra Dual SIM smartphone",
    "Images": [
      "sony-xperia-z-1.jpeg",
      "sony-xperia-z-2.jpeg",
      "sony-xperia-z-3.jpeg",
      "sony-xperia-z-4.jpeg"
    ],
    "Rating": 3,
    "Reviews": [
      {
        "Author": "Maurya",
        "Created": "Oct 6, 2015",
        "Title": "Dead On Arrival due to crashing gapps",
        "Rating": 2,
        "Comment": "I bought this phone T2 Ultra. from mall store in Ghaziabad as my first ever Sony product. But, it turned out to be a nightmare for me. From day one, gapps started crashing forcing to close all other apps and subsequently"
      }
    ],
    "WeightAndDimension": [
      "171.7 g",
      "83.8x165.2x7.65 mm"
    ],
    "Specification": [
      "13 MP Primary Camera",
      "Full HD Recording",
      "6 inch TFT Capacitive Touchscreen",
      "1.1 MP Secondary Camera",
      "Android v4.3 (Jelly Bean) Upgadable to Android 5.0 OS",
      "1.4 GHz Qualcomm Snapdragon MSM8228 Quad Core Processor",
      "Expandable Storage Capacity of 32 GB",
      "Wi-Fi Enabled"
    ],
    "Price": 42,
    "FeaturedItem": false,
    "TopProduct": false,
    "ItemCategory": [
      "Mobile",
      "Sony"
    ],
    "DefaultImage": "sony-xperia-z-1.jpeg",
    "Type": "",
    "RelatedId": ""
  },
  {
    "Title": "Asus Zenfone 2 ZE551ML",
    "Features": "Beautifully crafted, the Asus Zenfone 2 ZE551ML delivers a truly remarkable performance and gets you through the day without fail. This dual SIM smartphone runs on Android Lollipop and offers up to 16 GB internal storage.Indeed a marvel of design and ergonomics, this Asus smartphone is crafted with ultra-thin edges and flaunts the iconic Asus concentric circle design. The 3.9 mm thin edges make it comfortable to hold this device with one hand.",
    "Images": [
      "asus-1.jpeg",
      "asus-2.jpeg",
      "asus-3.jpeg",
      "asus-4.jpeg"
    ],
    "Rating": 4,
    "Reviews": [
      {
        "Author": "Harish Singh",
        "Created": "May 5, 2015",
        "Title": "Its just not a phone its a beast !!",
        "Rating": 5,
        "Comment": "15000 segment best smartphone ever for camera & battery I would give sensible and honest feedback so here are my early findings - The body of the phone is excellent as it Silver panel gives you a premium kind of look which you can always proudly hold it."
      },
      {
        "Author": "Manish",
        "Created": "April 5, 2015",
        "Title": "Asus 2 a bad experience",
        "Rating": 3,
        "Comment": "Zenfone 2 a flagship Phablet killer from  Asus...... does it really a flagship product from Asus. I had been waiting  form last 4 month when it was not even announced. I was so obsessed... keep  counting days.Finally i received it after a week of launch date. Initially i  was very happy with its performance (Smooth touch,gr8 display with its 403  ppi resolution) but after using it for a week or two i start facing so many  problem. It has so many critical issues which i want to share with everyone."
      },
      {
        "Author": "Supratik Bhattacharya",
        "Created": "Feb 5, 2015",
        "Title": "Call Drop Issue accompanied with Greedy",
        "Rating": 5,
        "Comment": "Don't buy this phone at the moment as it has some serious network bug in this phone. Don't know if it is software or hardware fault. Requested to return and refund, but they are hell bent on NOT doing that. As it is manufacturing defect, I have no option but to return it. is denying it to take it back. "
      }
    ],
    "WeightAndDimension": [
      "170 g",
      "77.2x152.5x10.9 mm"
    ],
    "Specification": [
      "Android v5 (Lollipop) OS",
      "13 MP Primary Camera",
      "5 MP Secondary Camera",
      "Dual Sim (GSM + LTE)",
      "5.5 inch Touchscreen",
      "1.8 GHz Intel Atom Z3560 Quad Core Processor",
      "Expandable Storage Capacity of 64 GB",
      "4G (LTE) - 150 Mbps HSDPA",
      "50 Mbps HSUPA"
    ],
    "Price": 250,
    "FeaturedItem": false,
    "TopProduct": false,
    "ItemCategory": [
      "Mobile",
      "Asus"
    ],
    "DefaultImage": "asus-1.jpeg",
    "Type": "",
    "RelatedId": ""
  },
  {
    "Title": "Moto E (2nd Gen) 3G",
    "Features": "Moto E features a powerful Qualcomm Snapdragon 200 processor with a 1.2GHz quad-core CPU and advanced graphics, which means you can switch back and forth between your favorite apps without slowing down. You can also listen to music and surf the web at the same time - without missing a beat. With a long-lasting 2390 mAh battery, the all-new Moto E is designed to last. Dash to school or work in the morning. Meet up with family or friends. Even head out for the evening, the Moto E has you covered.",
    "Images": [
      "motorola-moto-1.jpeg",
      "motorola-moto-2.jpeg",
      "motorola-moto-3.jpeg",
      "motorola-moto-4.jpeg"
    ],
    "Rating": 3,
    "Reviews": [
      {
        "Author": "Nandy",
        "Created": "Mar 19, 2015",
        "Title": "If I will able to convinced any one to buy this product.I will feel glad.",
        "Rating": 3,
        "Comment": "I was waiting for this phone for 10days before it released. Because we all are aware with the moto e 1st gen. And also with the other models, all the models has their different plus point to each other. Finally I have received my new moto e 2nd gen. As usual Flipkart always rock. Within 2days they delivered the product.\nTruly friend the phone looks awsm. It never looks like low budget phone. It looks like junior nexus. The phone gripe is very good, for the manufacture material. And the side gripe and also for the design of the phone. Very slim and mat finish.\n"
      },
      {
        "Author": "Amit Arora",
        "Created": "Mar 13, 2015",
        "Title": "No one was responding of my Return requested Item...",
        "Rating": 2,
        "Comment": "Moto E 2nd generation mobile is not functioning well"
      },
      {
        "Author": "Banerjee",
        "Created": "Mar 19, 2015",
        "Title": "Best Budget Phone, Again",
        "Rating": 4,
        "Comment": "Bought Moto e in july 2014 which is still working perfectly. This made me a huge fan of Motorola. Bought Moto E 2015 5 days back. So my points will be based on usage of 5 days.\nBuild quality of Motorola phone are superb. You will not get better durability and design than this. Perfect ratio.\nAudio quality,,,, ahhhhh this is the main reason i opted for Moto E again. The call quality is exceptional which is the main feature every smartphone should have. The speaker volume is extremely loud and the front firing speakers\n"
      }
    ],
    "WeightAndDimension": [
      "145 g",
      "66.8x129.9x12.3 mm"
    ],
    "Specification": [
      "5 MP Primary Camera",
      "4.5 inch TFT LCD Touchscreen",
      "VGA Front Facing Camera",
      "1.2 GHz Quad Core Processor",
      "Wi-Fi Enabled",
      "Expandable Storage Capacity of 32 GB",
      "Android v5.0 (Lollipop) OS",
      "Dual Sim (GSM + UMTS)"
    ],
    "Price": 45,
    "FeaturedItem": false,
    "TopProduct": false,
    "ItemCategory": [
      "Mobile",
      "Motorola"
    ],
    "DefaultImage": "motorola-moto-1.jpeg",
    "Type": "",
    "RelatedId": ""
  },
  {  
      "Title":"Virtual Windows Server",
      "Features":"Order a Virtual Server to host self-managed applications within IT data centers, quickly and cost-effectively. The Virtual Server is for EMC internal use only. Access to the Virtual Server from outside of the EMC core network is not available. Standard orders fulfilled in 1 business day. For non-standard orders, a delivery date will be provided within 5 business days.Commitment:Monthly  Estimated Delivery: From 1 Business Day",
      "Rating":4,
      "Price":19,
      "FeaturedItem":true,
      "TopProduct":true,
      "DefaultImage":"VM_Logo.jpeg",
      "ItemCategory":[  
         "Cloud Services",
         "Virtual Server"
      ],
      "Specification":[  
         "Conveniently packaged sizesChoose from small, medium, large or extra large. Each package comes with 100 GB of usable storage. You choose the operating systemChoose between Windows 2008 Enterprise (64-bit) or RedHat Linux 6 (64-bit). Maintained and SupportedOperating System and infrastructure maintenance is managed by EMC IT and includes anti-virus management, host based intrusion scanning & prevention, OS/Security patching and standard VM monitoring. EMC IT supports the Operating System layer of the VM while the Application Administrator is responsible for all application related issues. The Application Administrator can contact the IT Service Desk 24x7 to raise incidents on server issues. Automatic backup and retentionBackups are performed using Avamar and are done on a daily basis, after local business hours in the US, EMEA and APJ respectively. The standard retention period for backups is 90 days.",
         "New Request/Order Fulfillment Standard VM Orders:Once all business approvals are received, order will be delivered by IT within 1 business day. Existing or new Privileged/Unix accounts will be setup to access the newly provisioned infrastructure within the 1 business day SLA. Non-Standard VM Orders:After all business approvals are received, the provisioning team will assess the request and respond with an estimated delivery time within 5 business days. Change RequestsAll change requests for an existing virtual server (such as a change in Memory, CPU, Storage and ownership) will require business approvals and should be submitted through the BTG representative. These requests will be fulfilled in 14 business days; billing changes will be reflected in the following month. BillingThe BU will be billed for the whole month at the agreed rate. There will be no partial month billing based on the date of provisioning, change or cancellation. Any cancellation requests must be submitted before the 15th of a month to avoid carryover month billing. LicensingThe Business is responsible for all software licensing on the application layer including keeping licenses up to date, participating in any Risk audits and others as required by the Global Security Organization (GSO). IT is responsible for all licensing at the operating system layer. QualificationThis service is for business managed applications that do not require disaster recovery capabilities and have neither SOX nor revenue impact. This service is for business managed applications that do not store government-regulated, confidential, restricted information including employee, financial, contractual or other sensitive information such as source code, credit cards, social security numbers, etc. on the Virtual Servers. Additionally, at this time, due to enterprise licensing constraints, you may not deploy Oracle or SQL Server databases on these virtual servers. This service is for business managed applications where a 24-hour outage of the application or subsequent data loss will not: Materially impact business operations, impede or render core or ancillary business processes inoperable, or damage EMC's reputation in the industry or impact total customer experience. MaintenanceRegular maintenance includes Firmware and OS patches that are applied quarterly, with prior notification to Application Administrator, in accordance with IT policies and standards. Regular maintenance also includes anti-virus management and standard VM monitoring. Standard VM monitoring includes Virtual Machine Availability (Up/Down) and Virtual Machine host level monitoring of CPU, Memory, Network and Storage Space which provides IT with troubleshooting guidance for the availability and performance of a VM. A 48 hour notice will be provided for any necessary maintenance outside the regular maintenance schedule. SecurityThis includes host based, intrusion scanning & prevention and security patching. Depending on the vulnerability threat, there might be situations when security patching will occur without prior notification, with the intention to secure EMC assets quickly. Backup and RestoreDaily backups are performed via Avamar after local business hours in the US, EMEA and APJ respectively. Standard retention period is 90 days. Application Administrator has self-restore capability on Windows VMs. For Linux VMs, Application Administrator should contact IT Global Service Desk to initiate a restore request. response to such requests will be within 2 hours. The time to fulfill restore requests is dependent on the amount of data and is typically 48 hours for 1 TB of data. SupportIT supports the Operating System layer of the VM. The Application Administrator is responsible for all application related issues. Business end users should contact the Application Administrator for any application issues. The Application Administrator can coordinate any necessary support for the Operating System layer through the IT Service Desk and the IT Global Command Center. The Application Administrator can contact the IT Service Desk 24x7 to raise incidents on server issues.  Server issue response time through IT is typically 2 business hours. This service does not provide any DR or load balancing capabilities. Response TimesThese are the response objectives in the event of a major failure with the infrastructure. Recovery Point Objective (RPO) – 24 business hoursRecovery Time Objective (RTO) – 40 business hours Major failures could include:-Hardware failures with ESX host/cluster, Storage arrays, Network switches, and other related equipment.-Software failures such as corrupted operating system-Network outages etc. Catastrophic events such as natural disasters and whole data center failures will not be covered under this. The response times for such events will be dependent on the severity of the event and be determined on a case-by-case ",
         "Business managed applicationsApplications that do not require disaster recovery capabilities and do not have SOX or revenue impact. You may not store EMC confidential, government regulated, restricted information including employee, financial, contractual or other sensitive information such as source code, credit cards, social security numbers, etc on the Virtual Servers. You may not deploy Oracle or SQL Server databases on the Virtual Servers. You may not install and operate an Oracle or Microsoft SQL Server database. The Virtual Server is for EMC internal use only. Access to the Virtual Server from outside of the EMC core network is not available. Business operations impactApplications where 24-hour outage or data loss will not materially impact business operations, impede or render core or ancillary business processes inoperable, or damage EMC's reputation in the industry or impact EMC's total customer experience."
      ],
      "WeightAndDimension":[  

      ],
      "Reviews":[  

      ],
      "Images":[  

      ],
      "Type": "Service",
      "RelatedId": "4d7b4341-d512-46fd-b402-67315e6e6fea"
   });
});

Navigation.find({}).remove(function() {
  Navigation.create({
      "Title":"Desktop & Laptop",
      "SubMenu":[
         {
            "Title":"Desktops"
         },
         {
            "Title":"Laptops"
         },
         {
            "Title":"Accessories"
         }
      ]
   },
   {
      "Title":"Mobile",
      "SubMenu":[
         {
            "Title":"Phones"
         },
         {
            "Title":"Accessories"
         },
         {
            "Title":"Mobile Apps"
         },
         {
            "Title":"Tablets"
         }
      ]
   },
   {
      "Title":"Communication & Collaboration",
      "SubMenu":[
         {
            "Title":"Communication"
         },
         {
            "Title":"Conferencing"
         },
         {
            "Title":"Collaboration"
         }
      ]
   },
   {
      "Title":"Cloud Services",
      "SubMenu":[
         {
            "Title":"Cloud Core Lab Infratructure"
         },
         {
            "Title":"Cloud Storage (ViPR)"
         },
         {
            "Title":"ECM as a Service"
         },
         {
            "Title":"Platform as a Service"
         },
         {
            "Title":"Virtual Server"
         },
         {
            "Title":"Xpress DataBase"
         }
      ]
   });
});

UserProfile.find({}).remove(function() {
  UserProfile.create({
      "name" : "Kiran",
      "email" : "Kiran@emc.com",
      "ManagerialApprover1" : "mgr1@emc.com",
      "ManagerialApprover2" : "mgr2@emc.com",
      "FinancialApprover1" : "fna1@emc.com",
      "FinancialApprover2" : "fna2@emc.com",
      "CostCenter" : "1234"
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