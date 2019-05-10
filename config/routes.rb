Rails.application.routes.draw do

  root "shelves#index"
  # root "homes#index"
  devise_for :users do
  end

  namespace :api do
    namespace :v1 do
      resources :shelves, only: [:index]
    end
  end

  resources :homes, only: [:index]
  resources :shelves, only: [:index, :show]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
