# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

## seeding the Tweets database

# Tweet.create({
#     title: "Just found this",
#     content: "the square of the hypotenuse is equal to the sum of the squares of the other two sides",
#     author: "Pythagoras570"
#   })
  
#   Tweet.create({
#     title: "I'm walkin' here",
#     content: "Hey, I'm walkin' here!",
#     author: "Nicky62"
#   })

## seed replies to tweets in the database

Reply.create({
    content: "I like this idea a lot"
})

Reply.create({
    content: "My family agrees!"
})

