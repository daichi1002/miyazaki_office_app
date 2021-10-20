module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField


    field :histories, [Types::HistoryType], null: false
    def histories
      History.all
    end


    field :item_masters, [ItemMasterType], null: false
    def item_masters
      ItemMaster.all
    end

    field :select_item_masters, [Types::ItemMasterType], null: false do
      argument :name, String, '検索する商品の名前', required: false 
      argument :date, [String], '検索する商品の取得日', required: false 
    end

    def select_item_masters(name: '', date: [])
      if name.present?
        ItemMaster.where(name: name)
      elsif date.present?
        item_masters = []
        ItemMaster.all.each do |item_master|
          if item_master.updated_at.between?(date[0], date[1])
            item_masters << item_master 
          end
        end
        item_masters
      else 
        ItemMaster.all
      end
    end

    field :all_price, Integer, null: false , description: "出金額の合計"  do
      argument :date, [String], '検索する商品の取得日', required: false 
    end

    def all_price(date: [])
      all_price = 0
      if date
        ItemMaster.all.each do |item_master|
            all_price += item_master.inventory_details.where(updated_at: date[0]..date[1]).all.sum(:stock_quantity) * item_master.item_price
        end
      else
        ItemMaster.all.each do |item_master|
          all_price +=  item_master.inventory_details.all.sum(:stock_quantity) * item_master.item_price
        end
      end
      all_price
    end


    field :inventory_details, [Types::InventoryDetailType], null: false
    def inventory_details
      InventoryDetail.all
    end
      
    field :inventory_detail, Types::InventoryDetailType, null: false do
      argument :id, Int, required: false
    end

    def inventory_detail(id:)
      InventoryDetail.find(id)
    end

  end
end


