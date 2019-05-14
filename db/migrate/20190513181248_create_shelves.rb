class CreateShelves < ActiveRecord::Migration[5.2]
  def change
    create_table :shelves do |t|
      t.belongs_to :user, null: false
      t.belongs_to :book, null: false

      t.timestamps null: false
    end
  end
end
