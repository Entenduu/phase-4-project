class TopicSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :post_id
end
