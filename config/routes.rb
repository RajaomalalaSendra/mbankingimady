Rails.application.routes.draw do
  devise_for :users
  root to: "home#index"
  get 'home/index'
  namespace :api do 
    namespace :v1 do 
     resources :amounts, only: [:index, :create, :destroy, :update]
    end 
  end
end