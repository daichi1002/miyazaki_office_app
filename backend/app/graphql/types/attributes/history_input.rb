class Types::Attributes::HistoryInput < Types::BaseInputObject
  argument :user_id, Integer, required: true
  argument :title, String, required: true
  argument :purchase_at, String, required: true
end