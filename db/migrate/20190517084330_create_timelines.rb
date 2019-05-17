class CreateTimelines < ActiveRecord::Migration[5.2]
  def change
    create_table :timelines do |t|
      t.belongs_to :user
      t.belongs_to :shelf
      t.string :title, null: false
      t.text :description

      t.timestamps null: false
    end
  end
end
