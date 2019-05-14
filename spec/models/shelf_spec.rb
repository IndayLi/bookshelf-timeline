require 'rails_helper'

DatabaseCleaner.clean_with(:truncation)

RSpec.describe Shelf, type: :model do
  describe "tests Shelf model" do
    user_1 = FactoryBot.create(:user)
    book_1 = FactoryBot.create(:book)
    book_2 = FactoryBot.create(:book)
    shelf_1 = Shelf.create(user: user_1, book: book_1)
    shelf_2 = Shelf.create(user: user_1, book: book_2)

    it "successfully creates a bookshelf" do
      expect(shelf_1.valid?).to eq(true)
      expect(shelf_2.valid?).to eq(true)
    end
  end
end
