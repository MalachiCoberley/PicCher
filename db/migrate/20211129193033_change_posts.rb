class ChangePosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :author_id
  end
end
