class CreateAssignments < ActiveRecord::Migration[5.2]
  def change
    create_table :assignments do |t|
      t.belongs_to :shelf, null: false
      t.belongs_to :book, null: false

      t.timestamps null: false
    end
  end
end
