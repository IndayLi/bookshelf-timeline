Rails.application.routes.draw do

  root "shelves#index"
  # root "homes#index"
  devise_for :users do
  end

  resources :homes, only: [:index]
  resources :shelves, only: [:index, :show]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
