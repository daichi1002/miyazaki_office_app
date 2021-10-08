module Types
  class InventoryDetailType < Types::BaseObject
    field :id, ID, null: false
    field :item_master_id, ID, null: false
    field :stock_quantity, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: true
    field :updated_at, String, null: true
  end
end
