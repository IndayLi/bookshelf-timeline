require 'rails_helper'

DatabaseCleaner.clean_with(:truncation)

RSpec.describe Shelf, type: :model do
  describe "tests Shelf model" do
    user_1 = FactoryBot.create(:user)
    shelf_1 = Shelf.create(user: user_1, name: "My Bookshelf", description: "These are books I'm reading")
    shelf_2 = Shelf.create(user: user_1, description: "These are books I've completed reading")

    it "successfully creates a bookshelf" do
      expect(shelf_1.valid?).to eq(true)
      expect(shelf_2.valid?).to eq(true)
    end
  end
end
