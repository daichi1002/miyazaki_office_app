module Types
  class InventoryType < Types::BaseObject
    field :id, ID, null: false
    field :item_master_id, ID, null: false
    field :stock, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: true
    field :updated_at, String, null: true
  end
end
