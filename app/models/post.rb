class Post < ApplicationRecord
  validates :title, presence: true

  has_one_attached :photo

  has_many :comments,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Comment

end
