class Shelf < ApplicationRecord
  belongs_to :user
  belongs_to :book

  validates :user, presence: true
  validates :book, presence: true, uniqueness: { scope: :user, message: `${user.first_name}, you have already added ${book.title} to your bookshelf.`}
end
