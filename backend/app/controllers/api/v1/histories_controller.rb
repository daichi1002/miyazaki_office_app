class Api::V1::HistoriesController < ApplicationController

  def create
    history = History.new(history_params)
    # history.history_details.build
    if history.save!
      render json: history
    else
      render json: history.errors
    end
  end

  def history_params
    params.require(:history).permit(:title, :purchase_at, :user_id)
  end
end
