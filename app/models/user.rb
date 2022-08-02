class User < ApplicationRecord
    has_many :posts
    has_many :topics, through: :posts

    has_secure_password

    
end
