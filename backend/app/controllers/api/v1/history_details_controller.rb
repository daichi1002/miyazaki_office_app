class Api::V1::HistoryDetailsController < ApplicationController
  def create
    history = History.last
    ActiveRecord::Base.transaction do
      history_params.each do |param|
        param["history_id"] = history.id
        history_detail = HistoryDetail.create!(history_id: param[:history_id], content: param[:content], price: param[:price])
        update_inventory(param)
      end
    end
    rescue => e
    render json: history_detail.errors
  end

  def update_inventory(param)
    item_master = ItemMaster.find_by(name: param[:content])
    if item_master.present?
      item_master.inventory.increment(:stock, param[:num].to_i)
      item_master.inventory.save!
      item_master.inventory_details.each do |i|
        i.increment!(:stock_quantity, param[:num].to_i)
        i.save!
      end
    end
  end

  def history_params
    params.require(:history_detail).map do |h|
      h.permit(:history_id, :content, :price, :num)
    end
  end
end
