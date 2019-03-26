# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
amounts = [19000, 19000, 20000, 24000, 40000]
reference = ["ref:00100", "ref:00300", "ref:00200", "ref:00400", "ref:00500"]
operator = ["orange", "telma", "orange", "telma", "airtel"]
adress = ["Andraranina", "Imerina", "Imerina", "Telolahy", "Andraranina"]
drawer = ["Ralita", "Rakoto", "Randria", "Ranomena", "Ranona"]
number = ["032","034","032", "032", "033"]
fees = [300, 500, 500, 700, 1000]
user_mail = ['mail@mail1.note', 'mail@mail2.note', 'mail@mail3.note', 'mail@mail4.note', 'mail@mail5.note']
5.times do |i|
	Amount.create(amount: amounts[i],  fee: fees[i], reference: reference[i], operator: operator[i])
end