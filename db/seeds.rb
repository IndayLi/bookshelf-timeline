# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require_relative "../spec/support/factory_bot.rb"

if Rails.env.development?

user_one = FactoryBot.create(:user)
user_two = FactoryBot.create(:user)
user_three = FactoryBot.create(:user)

FactoryBot.create(:shelf)
FactoryBot.create(:shelf)
FactoryBot.create(:shelf)
FactoryBot.create(:shelf, user: user_one)
FactoryBot.create(:shelf, user: user_one)
FactoryBot.create(:shelf, user: user_two)
FactoryBot.create(:shelf, user: user_three)

end
