require 'factory_bot'

FactoryBot.define do
  factory :user do
    first_name { Faker::Name.last_name }
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password1234' }
    password_confirmation { 'password1234' }
    image_url { '' }
    access_token { 'access_token'}
    access_token_secret { 'access_token_secret'}
  end

  factory :shelf do
    user { FactoryBot.create(:user) }
    sequence(:name) {|n| "Bookshelf \##{n}" }
    description { Faker::Hipster.sentence(6, false, 3)}
  end

end
