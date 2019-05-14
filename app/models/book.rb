class Book < ApplicationRecord
  has_many :shelves
  has_many :users, through: :shelves

  validates :title, presence: true
  validates :author, presence: true
end
