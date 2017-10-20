Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :channels, only: [:index, :show, :create, :update, :delete]
    resources :messages, only: [:create, :index, :update, :delete]
    resources :users, only: [:create, :update, :delete, :index]
    resources :memberships, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :replies, only: [:create, :destroy]
  end

  root "static_pages#root"
end
