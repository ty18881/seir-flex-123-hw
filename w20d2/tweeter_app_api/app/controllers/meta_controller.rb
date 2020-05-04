class MetaController < ApplicationController
    def about
        render(json: "You've hit the meta area")
    end
    
end