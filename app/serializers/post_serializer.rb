class PostSerializer < ActiveModel::Serializer
  attributes :id, :topic_id, :user_id, :content
end
