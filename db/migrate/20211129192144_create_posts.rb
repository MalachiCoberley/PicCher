class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.string :description
      t.string :location
      t.string :date_taken
      t.string :author_id, null: false

      t.timestamps
    end

    add_index :posts, :author_id
  end
end
