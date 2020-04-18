### Week 18 Day 2 Homework

## Blackjack game in Ruby

class Player 
    attr_accessor :hand, :bankroll, :name

    def initialize name, bankroll
        @name = name
        @hand = []
        @bankroll = bankroll
    end
end


class Card

    def initialize value
        @value = value
    end
end



human = Player.new "Tara", 100

p human.name

borgata = Player.new "Borgata Atlantic City", 10000

p borgata.name
