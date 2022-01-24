Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resources :user, only: [:update, :show]
    resources :user, only: [:show] do
      resources :follows, only: [:index], controller: '/follows'
    end
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :show, :destroy, :update]
    resource :post, only: [:create]
  end

  resources :follows, only: [:create, :destroy]

  root "static_pages#root"
end
