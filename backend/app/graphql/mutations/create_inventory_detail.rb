module Mutations
  class CreateInventoryDetail < BaseMutation
    graphql_name 'CreateInventoryDetail'
    
    field :inventoryDetail, Types::InventoryDetailType, null: true
    field :result, Boolean, null: true

    argument :item_master_id, ID, required: false
    argument :stock_quantity, Integer, required: false

    def resolve(**args)
      item_master = ItemMaster.find(args[:item_master_id])
      inventory_detail = item_master.inventory_details.build(stock_quantity: args[:stock_quantity])
      inventory_detail.save
      {
        inventoryDetail: inventory_detail,
        result: item_master.errors.blank?
      }
    end

  end
end
