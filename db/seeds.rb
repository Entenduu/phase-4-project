require 'faker'

# puts 'deleting old posts and stuff...🗑'
 User.destroy_all
 Topic.destroy_all
Post.destroy_all
Like.destroy_all

# puts 'seeding...'

20.times {
    User.create(username: Faker::Internet.user_name, email: Faker::Internet.email, password_digest: Faker::Internet.password )
    Post.create(topic_id:rand(1..10) , user_id:User.all.sample.id , content:Faker::Quote.famous_last_words)
    Topic.create(title:Faker::Book.title , genre:Faker::Book.genre , post_id:rand(0..20))
    Like.create(post_id:rand(1..10) , user_id:User.all.sample.id , likes:rand(0..100))
}

# 20.times do 
#     Post.create(topic_id:rand(1..10) , user_id:User.all.sample.id , content:Faker::Quote.famous_last_words)
# end

# 20.times do
#     Topic.create(title:Faker::Book.name , genre:Faker::Book.genre , post_id:rand(1..10))
# end

# 20.times do
#     Like.create(post_id:rand(1..10) , user_id:User.all.sample.id , likes:rand(0..20))
# end

puts 'seeding done!🎉'