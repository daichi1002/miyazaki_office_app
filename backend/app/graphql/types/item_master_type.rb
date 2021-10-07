module Types
  class ItemMasterType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: true
    field :required_stock, Integer, null: true
    field :item_price, Integer, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: true
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: true


    field :inventory_details, [Types::InventoryDetailType], null: false
    field :inventory_detail_object_count, Integer, null: false, description: '在庫の取得'
    field :inventory_detail_last_updated_at, ScalarTypes::DateTime, null: false, description: '最終更新日の取得'

    def inventory_detail_object_count
      object.inventory_details.all.sum(:stock_quantity)
    end

    def inventory_detail_last_updated_at
      a = []
      object.inventory_details.each do |object|
        a << object.coerce_input
      end
      return a

    end

  end
end
