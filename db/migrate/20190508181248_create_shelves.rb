class CreateShelves < ActiveRecord::Migration[5.2]
  def change
    create_table :shelves do |t|
      t.belongs_to :user, null: false

      t.string :name, null: false, default: 'Bookshelf #1'
      t.text :description

      t.timestamps null: false
    end
  end
end
