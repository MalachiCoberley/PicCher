Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resources :user, only: [:update]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [ :index, :create, :show, :destroy, :update]
  end


  root "static_pages#root"
end
