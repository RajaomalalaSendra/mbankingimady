class CreateAmount < ActiveRecord::Migration[5.2]
  def change
    create_table :amounts do |t|
      t.integer :amount
      t.integer :fee
      t.string :reference
      t.string :operator
      t.string :adress
      t.string :drawer
      t.string :number
      t.belongs_to :user, index: true
      t.timestamps
    end
  end
end