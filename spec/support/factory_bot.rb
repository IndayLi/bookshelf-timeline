require 'factory_bot'

FactoryBot.define do
  factory :user do
    first_name { Faker::Name.last_name }
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password1234' }
    password_confirmation { 'password1234' }
    image_url { 'https://www.nicepng.com/maxp/u2w7r5y3a9q8e6y3/' }
    access_token { 'access_token'}
    access_token_secret { 'access_token_secret'}
  end
end
