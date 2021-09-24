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