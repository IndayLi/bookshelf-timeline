class Timeline < ApplicationRecord
  belongs_to :shelf
  belongs_to :user

  validates :title, presence: true, uniqueness: { scope: :user, message: `You already have create a timeline called ${title}`}
end
