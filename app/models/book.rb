class Book < ApplicationRecord
  has_many :assignments
  has_many :bookshelves, through: :assignments

  validates :title, presence: true
  validates :author, presence: true
end
