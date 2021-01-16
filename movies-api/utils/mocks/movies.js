const moviesMock =[
    {"id":"34a5ffcc-3908-440b-a2dd-dcb838e48c6e","title":"Cabin Boy","year":2011,"cover":"http://dummyimage.com/163x194.png/dddddd/000000","description":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.","duration":1947,"contentRating":"PG-13","source":"http://chronoengine.com/massa/id/lobortis/convallis.jsp","tags":["Drama","Action|Children","Animation","Horror|Thriller","Drama|War"]},
    {"id":"d257b993-6a33-4037-a0ae-044803009ba3","title":"Jerusalem","year":2011,"cover":"http://dummyimage.com/150x140.jpg/5fa2dd/ffffff","description":"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.","duration":1924,"contentRating":"R","source":"https://ameblo.jp/nisi/venenatis/tristique/fusce.png","tags":["Comedy"]},
    {"id":"aa1dcee3-173a-4e82-839e-abb6ab21acc9","title":"World of Henry Orient, The","year":2009,"cover":"http://dummyimage.com/136x131.bmp/dddddd/000000","description":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","duration":1937,"contentRating":"PG","source":"http://house.gov/vivamus/in/felis/eu/sapien/cursus.png","tags":["Comedy","Drama","Action|Sci-Fi"]},
    {"id":"7ff796ef-6237-44a4-aab8-6d9d14753956","title":"Perifery (Härmä)","year":2011,"cover":"http://dummyimage.com/246x153.png/5fa2dd/ffffff","description":"Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.","duration":1945,"contentRating":"G","source":"http://nbcnews.com/ut/suscipit/a/feugiat/et.xml","tags":["Action|Drama|War","Action|Comedy|Crime|Thriller","Action|Adventure|Drama","Mystery|Sci-Fi|Thriller"]},
    {"id":"525185fe-d9ae-4e77-927d-e570f2aa39d6","title":"Anything for Her (Pour elle)","year":1990,"cover":"http://dummyimage.com/140x199.png/cc0000/ffffff","description":"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.","duration":1995,"contentRating":"NC-17","source":"https://simplemachines.org/est/phasellus/sit/amet/erat/nulla/tempus.xml","tags":["Comedy|Musical","Drama|Romance","Crime|Drama|Film-Noir|Thriller","Drama"]},
    {"id":"8bacc1a9-f6bf-4631-ab69-729084847d07","title":"Gathering, The","year":1998,"cover":"http://dummyimage.com/218x179.png/5fa2dd/ffffff","description":"Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.","duration":2020,"contentRating":"G","source":"http://yale.edu/scelerisque/quam.js","tags":["Comedy|Fantasy|Horror","Comedy|Drama","Comedy","Comedy|Musical|Romance","Action|Drama"]},
    {"id":"2e20176f-0768-47e4-80b1-5b7908ff9b94","title":"Lucky Ones, The","year":1998,"cover":"http://dummyimage.com/188x123.png/dddddd/000000","description":"Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.","duration":1974,"contentRating":"G","source":"http://wsj.com/faucibus/orci.js","tags":["Animation","Thriller"]},
    {"id":"879bd5c7-35f7-4ea1-b9e8-a9be2a9366fc","title":"The Man from Acapulco","year":2004,"cover":"http://dummyimage.com/234x124.bmp/5fa2dd/ffffff","description":"In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.","duration":1955,"contentRating":"PG","source":"https://nbcnews.com/primis/in/faucibus/orci/luctus/et/ultrices.png","tags":["Comedy|Crime"]},
    {"id":"d5d38eef-d9d4-454d-a2b5-0c198e921d93","title":"Hannah Montana: The Movie","year":1991,"cover":"http://dummyimage.com/136x186.bmp/5fa2dd/ffffff","description":"Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.","duration":2016,"contentRating":"R","source":"https://mail.ru/tellus/nulla/ut/erat/id/mauris/vulputate.jsp","tags":["Comedy|Romance","Comedy|Crime","Drama|War","Drama"]},
    {"id":"ff5bad1c-5e05-4513-95dd-a49d0473c14f","title":"Jason Becker: Not Dead Yet","year":2003,"cover":"http://dummyimage.com/240x190.jpg/5fa2dd/ffffff","description":"Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.","duration":1914,"contentRating":"NC-17","source":"http://dedecms.com/lobortis/est/phasellus.png","tags":["Drama|War"]}
];

module.exports = {
    moviesMock
};