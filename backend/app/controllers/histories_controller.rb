class HistoriesController < ApplicationController
  def index
    @history = History.all
    render json: @history
  end

  def create
    history_params.each do |param|
      param["user_id"] = 1
      history = History.new(param)
      history.history_details.build
      if history.save!
        next
      else
        render json: history.errors
        return
      end
    end
  end

  def history_params
    params.require(:history).map do |h|
      h.permit(:title, :purchase_at, history_detail: [:price])
    end
  end
end
