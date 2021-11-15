module Types
  class MutationType < Types::BaseObject
    #create
    field :create_inventory_detail, mutation: Mutations::CreateInventoryDetail, null: false
    field :create_item_master, mutation: Mutations::CreateItemMaster, null: false
    field :create_history_detail, mutation: Mutations::CreateHistoryDetail
    field :create_history, mutation: Mutations::CreateHistory

    #update
    field :update_inventory, mutation: Mutations::UpdateInventory, null: false
  end
end
