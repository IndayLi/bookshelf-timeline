require 'rails_helper'

DatabaseCleaner.clean_with(:truncation)

RSpec.describe User, type: :model do
  describe "tests User model" do
    user_1 = User.create(first_name: 'first1', email: 'email_1@test.com', password: 'password123',  password_confirmation: 'password123', image_url: 'https://www.nicepng.com/maxp/u2w7r5y3a9q8e6y3/')
    user_2 = User.create(first_name: 'first2', email: 'email_2@test.com', password: 'password123',  password_confirmation: 'password123')
    user_3 = User.create(email: 'email_3@test.com', password: 'password123',  password_confirmation: 'password123', image_url: 'https://www.nicepng.com/maxp/u2w7r5y3a9q8e6y3/')
    user_4 = User.create(first_name: 'first4', email: 'email_2@test.com', password: 'password123',  password_confirmation: 'password123')
    user_5 = User.create(first_name: 'first5', email: 'email_5@test.com', password: 'password',  password_confirmation: 'password')

    it "successfully creates user" do
      expect(user_1.valid?).to eq(true)
      expect(user_2.valid?).to eq(true)
    end

    it "fails to create user" do
      expect(user_3.valid?).to eq(false)
      expect(user_4.valid?).to eq(false)
      expect(user_5.valid?).to eq(false)
    end
  end
end
