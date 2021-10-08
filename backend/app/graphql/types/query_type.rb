module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :histories, [Types::HistoryType], null: false
    def histories
      History.all
    end

#    field :history_details, [Types::HistoryDetailType], null: false
#    def history_details
#      HistoryDetail.all
#    end

    field :item_masters, [ItemMasterType], null: false
    def item_masters
      ItemMaster.all
    end

    field :select_item_masters, [Types::ItemMasterType], null: false do
      argument :name, String, '検索する商品', required: true
    end

    def select_item_masters(name:)
      if name.present?
        ItemMaster.where(name: name)
      else 
        ItemMaster.all
      end
    end

      field :all_price, Integer, null: false , description: "出金額の合計"
      def all_price
        all_price = 0
        ItemMaster.all.each do |item_master|
          all_price +=  item_master.inventory_details.all.sum(:stock_quantity) * item_master.item_price
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


