class CreateTopics < ActiveRecord::Migration[7.0]
  def change
    create_table :topics do |t|
      t.string :title
      t.string :genre
      t.integer :post_id

      t.timestamps
    end
  end
end
