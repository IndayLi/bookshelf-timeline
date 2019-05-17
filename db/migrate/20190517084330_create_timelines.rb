class CreateTimelines < ActiveRecord::Migration[5.2]
  def change
    create_table :timelines do |t|
      t.belongs_to :user

      t.timestamps
    end
  end
end
