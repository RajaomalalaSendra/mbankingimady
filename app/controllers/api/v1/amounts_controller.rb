class Api::V1::AmountsController < ApplicationController
  def index
    render json: Amount.all
  end

  def create
    amount = Amount.create(amount_params)
    render json: amount
  end

  def destroy
    Amount.destroy(params[:id])
  end

  def update
    amount = Amount.find(params[:id])
    amount.update_attributes(amount_params)
    render json: amount
  end

  private

  def amount_params
    params.require(:amount).permit(:id, :amount,  :fee, :reference, :operator, :adress, :drawer, :number, :user_id)
  end
end