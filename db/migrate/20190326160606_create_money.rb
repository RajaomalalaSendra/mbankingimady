class CreateMoney < ActiveRecord::Migration[5.2]
  def change
    create_table :money do |t|
      t.integer :amount
      t.string :reference
      t.string :operator
      t.string :adress
      t.string :drawer
      t.string :number

      t.timestamps
    end
  end
end
