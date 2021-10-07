module Mutations
  class CreateItemMaster < BaseMutation

    graphql_name 'CreateItemMaster'
    field :itemMaster, Types::ItemMasterType, null: true 
    field :result, Boolean, null: true

    argument :name, String, required: false
    argument :required_stock, Integer, required: false
    argument :item_price, Integer, required: false

    def resolve(**args)
      item_master = ItemMaster.create(name: args[:name], required_stock: args[:required_stock], item_price: args[:item_price])
      {
        itemMaster: item_master,
        result: item_master.errors.blank?
      }
    end

  end
end
