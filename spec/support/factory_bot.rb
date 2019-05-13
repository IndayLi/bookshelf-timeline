require 'factory_bot'

FactoryBot.define do
  factory :user do
    first_name { Faker::Name.last_name }
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password1234' }
    password_confirmation { 'password1234' }
    image_url { Faker::Placeholdit.image('70x100', 'jpeg', :random, :random, 'Profile Image') }
    access_token { 'access_token'}
    access_token_secret { 'access_token_secret'}
  end

  factory :book do
    title { Faker::Book.title }
    author { Faker::Book.author}
    page_count { Faker::Number.number(3) }
    description { Faker::Hipster.paragraph(2, false, 2) }
    location { Faker::Address.state }
    image_url { Faker::Placeholdit.image('150x150', 'jpeg', :random, :random, 'Book Cover Image') }
    publication_year { Faker::Date.birthday(0, 150) }
    completed_reading { false }
    favorite { false }
  end

  factory :shelf do
    user { FactoryBot.create(:user) }
    book { FactoryBot.create(:book) }
  end

end
