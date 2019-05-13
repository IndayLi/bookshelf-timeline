# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require_relative "../spec/support/factory_bot.rb"

if Rails.env.development?

main_user = User.create(first_name: "main_account", email: "user1@books.com", password: "password123", password_confirmation: "password123", image_url: "https://avatars0.githubusercontent.com/u/18765533?s=460&v=4")

user_one = FactoryBot.create(:user)
user_two = FactoryBot.create(:user)
user_three = FactoryBot.create(:user)
user_four = FactoryBot.create(:user)
user_five = FactoryBot.create(:user)

book_one = FactoryBot.create(:book)
book_two = FactoryBot.create(:book)
book_three = FactoryBot.create(:book)
book_four = FactoryBot.create(:book)
book_five = FactoryBot.create(:book)


Shelf.create(user_id: user_one, book_id: book_one)
Shelf.create(user_id: user_one, book_id: book_three)
Shelf.create(user_id: user_two, book_id: book_four)
Shelf.create(user_id: user_two, book_id: book_four)
Shelf.create(user_id: user_three, book_id: book_three)
Shelf.create(user_id: user_four, book_id: book_two)
Shelf.create(user_id: user_four, book_id: book_four)
Shelf.create(user_id: user_five, book_id: book_one)
Shelf.create(user_id: user_five, book_id: book_three)
Shelf.create(user_id: user_five, book_id: book_five)
Shelf.create(user_id: main_user, book_id: book_one)
Shelf.create(user_id: main_user, book_id: book_two)
Shelf.create(user_id: main_user, book_id: book_three)
Shelf.create(user_id: main_user, book_id: book_four)
Shelf.create(user_id: main_user, book_id: book_five)



end
