module Types
  class MutationType < Types::BaseObject

    field :create_inventory_detail, mutation: Mutations::CreateInventoryDetail, null: false
    field :create_item_master, mutation: Mutations::CreateItemMaster, null: false

  end
end
