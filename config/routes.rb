Rails.application.routes.draw do
  root "books#index"
  devise_for :users, controllers: { registrations: "registrations", sessions: "sessions" }

  namespace :api do
    namespace :v1 do
      resources :books, only: [:index, :show, :new, :create, :update, :destroy]
      resources :timelines, only: [:index, :show, :new, :create, :update, :destroy]
    end
  end

  resources :homes, only: [:index]
  resources :books, only: [:index, :show]
  resources :timelines, only: [:index, :show]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
