Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resource :post, only: [ :create, :show, :destroy, :update]
    resources :posts, only: [ :index]
  end

  root "static_pages#root"
end
