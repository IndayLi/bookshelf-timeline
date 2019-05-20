Rails.application.routes.draw do
  root "books#index"
  devise_for :users, controllers: { registrations: "registrations", sessions: "sessions" }

  namespace :api do
    namespace :v1 do
      resources :books, only: [:index, :show, :create, :update, :destroy]
      resources :timelines, only: [:index, :show, :create, :update, :destroy]
      resources :shelves, only: [:index]
    end
  end

  resources :homes, only: [:index]
  resources :books, only: [:index, :show, :new]
  resources :timelines, only: [:index, :show]


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
