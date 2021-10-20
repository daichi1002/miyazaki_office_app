5.times do
  user = User.create!(
    name: Faker::JapaneseMedia::StudioGhibli.unique.character,
    name_kana: "hoge",
    email: Faker::Internet.email,
    password: 'foobar',
  )
  puts "\"#{user.name}\" has created!"

end
User.limit(10).each do |user|
  history = user.histories.create!(
    title: Faker::JapaneseMedia::StudioGhibli.movie,
    purchase_at: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :default),
  )
  puts "\"#{history.title}\" has created!"
end

History.limit(100).each do |history|
  history_detail = history.history_details.create!(
    content: Faker::JapaneseMedia::OnePiece.sea,
    price: rand(100..10000)
  )
  puts "\"#{history_detail.content}\" has created!"

end

3.times do 
  item_masters = ItemMaster.create!(
    name: Faker::JapaneseMedia::OnePiece.akuma_no_mi,
    required_stock: rand(1..100),
    item_price: rand(100..10000)
  )
  puts "\"#{item_masters.name}\" has created!"
end

ItemMaster.limit(100).each do |item_master|
  inventory_detail = item_master.inventory_details.create!(
      stock_quantity: rand(10..100)
    )
  if Inventory.exists?(item_master_id: inventory_detail.item_master_id)
    inventory = Inventory.find_by(item_master_id:inventory_detail.item_master_id)
    inventory.stock += inventory_detail.stock_quantity
    inventory.save!
  else
    Inventory.create!(item_master_id: inventory_detail.item_master_id, stock: inventory_detail.stock_quantity)
  end
  puts "\"#{inventory_detail.stock_quantity}\" has created!"
end