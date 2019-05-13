class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.integer :page_count
      t.text :description
      t.string :location
      t.string :image_url
      t.string :publication_year
      t.boolean :completed_reading, null: false, default: false
      t.boolean :favorite, null: false, default: false

      t.timestamps null: false
    end
  end
end
