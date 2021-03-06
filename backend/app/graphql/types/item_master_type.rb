module Types
  class ItemMasterType < Types::BaseObject
    require "rails"
    require 'active_support/time'
    require "active_record"
    field :id, ID, null: false
    field :name, String, null: true
    field :required_stock, Integer, null: true
    field :item_price, Integer, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: true
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: true


    field :inventory, Types::InventoryType, null: false
    field :inventory_details, [Types::InventoryDetailType], null: false
    field :inventory_detail_object_count, Integer, null: false, description: '在庫の取得'
    field :item_master_updated_at, String, null: false, description: '最終更新日の取得'
    field :inventory_detail_price, Integer, null: false, description: '金額の取得'
    field :all_price, Integer, null: false, description: '金額の取得'

    def inventory_detail_object_count
      object.inventory_details.all.sum(:stock_quantity)
    end

    def item_master_updated_at
      object.updated_at.strftime("%Y年%m月%d日")
    end

    def inventory_detail_price
      object.inventory_details.all.sum(:stock_quantity) * object.item_price
    end


  end
end
