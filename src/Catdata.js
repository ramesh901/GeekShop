const Categories = [
  { "_id" : "Books", "ancestors" : [ "Books" ] },
  { "_id" : "Classics", "parent" : "Classics", "ancestors" : [ "Books", "Fiction", "Classics" ] },
  { "_id" : "Cookbooks", "parent" : "Non-Fiction", "ancestors" : [ "Books", "Non-Fiction", "Cookbooks" ] },
  { "_id" : "Electronics", "ancestors" : [ "Electronics" ] },
  { "_id" : "Fiction", "parent" : "Books", "ancestors" : [ "Books", "Fiction" ] },
  { "_id" : "Laptops", "parent" : "Electronics", "ancestors" : [ "Electronics", "Laptops" ] },
  { "_id" : "Leadership", "parent" : "Non-Fiction", "ancestors" : [ "Books", "Non-Fiction", "Leadership" ] },
  { "_id" : "Non-Fiction", "parent" : "Books", "ancestors" : [ "Books", "Non-Fiction" ] },
  { "_id" : "Phones", "parent" : "Electronics", "ancestors" : [ "Electronics", "Phones" ] },
  { "_id" : "Tablets", "ancestors" : [ "Electronics", "Tablets" ], "parent" : "Electronics" },
  { "_id" : "Web Programming", "parent" : "Non-Fiction", "ancestors" : [ "Books", "Non-Fiction", "Web Programming" ] }
]

module.exports = Categories
