class HistoriesController < ApplicationController
  def index
    @history = History.all
    render json: @history
  end

  def create
    histroy_params.each do |param|
      param["user_id"] = 1
      history = History.new(param)
      if history.save!
        next
      else
        render json: post.errors
        return
      end
    end
  end

  def histroy_params
    params.require(:history).map do |h|
      h.permit(:title, :purchase_at)
    end
  end
end
