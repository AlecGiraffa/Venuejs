countyId table
id 			name
1			south bay area
2			north bay area
3			west bay area
4			east bay area
5			Los Anglese County
6			San Diego County

city table
countyId 		cityId			cityName
1			01			Campbell
1			02			Cupertino
1			03			Milpitas
1			04			Mountain view
1			05			Santa Clara
1			06			San Jose
1			07			Saratoga
1			08			Sunnyvale


itemType table
id 			name
1 			Badminton
2			Basketball
3			Golf
4			Snooker
5			Soccer
6			Squash
7			Tennis



venueList	table

{id: '160310001', vName:'Cupertino Sports Center', itemType: 2, countyId: 1, cityNo: 02, address:' 10300 Torre Avenue, Cupertino, CA 95014', phone:' (408)-777-3200', priceOrigin: 10, priceDisc: 8, reviewNumber: 0, moreService:['Soccer', 'BBQ', 'Dog Park', 'Fitness'], sellService:[''], parking:'free', imgUrl:'160310001.jpg'}

{id: '160310002', vName:'Shoreline Golf Links', itemType: 3, countyId: 1, cityNo: 04, address:'2940 North Shoreline Blvd, Mountain View, CA  94043', phone:'(650)-903-GOLF', priceOrigin: 38, priceDisc: 31, reviewNumber: 0, moreService:['golf cars rental', 'rest rooms'], sellService:['Drinking fountains'], parking:'free', imgUrl:'160310002.jpg'}

{id: '160310003', vName:'The Golf Club at Moffett Field', itemType: 3, countyId: 1, cityNo: 04, address:'934 Macon Road, Moffett Field, CA 94035', phone:'(650)-603-8026 ', priceOrigin: 35, priceDisc: 28, reviewNumber: 0, moreService:['restaurant', ], sellService:['golf clubs', 'putters', 'apparel', 'shoes', 'golf balls', 'accessories'], parking:'free', imgUrl:'160310003.jpg'}

{id: '160310004', vName:'San Jose Municipal Golf Course', itemType: 3, countyId: 1, cityNo: 06, address:' 1560 Oakland Rd, San Jose, CA 95131', phone:'(408) 441-4653', priceOrigin: 38, priceDisc: 24, reviewNumber: 0, moreService:['Power Cart rental', 'Pull Cart rental', 'Rental Sets'], sellService:['Golf Shop 30 Day Low Price Guarantee'], parking:'free', imgUrl:'160310004.jpg'}

{id: '160310005', vName:'Los Altos Golf & Country Club', itemType: 3, countyId: 1, cityNo: 04, address:'1560 Country Club Drive, Los Altos, California 94024', phone:'(650)-947-3100', priceOrigin: 40, priceDisc: 35, reviewNumber: 0, moreService:['Recreation', 'Dining', 'Wedding'], sellService:['Golf Shop'], parking:'free', imgUrl:'160310005.jpg'}

{id: '160310006', vName:'Sharon Heights Golf & Country Club', itemType: 3, countyId: 1, cityNo: 03, address:'2900 Sand Hill Rd Menlo Park, CA 94025', phone:'(650) 854-6422', priceOrigin: 37, priceDisc: 30, reviewNumber: 0, moreService:['Tennis', 'Wedding'], sellService:['Golf Shop'], parking:'free', imgUrl:'160310006.jpg'}