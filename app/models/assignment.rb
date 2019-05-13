class Assignment < ApplicationRecord
  belongs_to :book
  belongs_to :shelf

  has_many :users, through: :shelf 
end
