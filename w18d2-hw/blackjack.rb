### Week 18 Day 2 Homework

## Blackjack game in Ruby

$the_deck = []

class Player 
    attr_accessor :hand, :bankroll, :name

    def initialize name, bankroll
        @name = name
        @hand = []
        @bankroll = bankroll
    end
end


class Card
    attr_reader :value
    def initialize value
        @value = value
    end
end

## load up the number cards
def load_number_cards
    counter = 2
    while counter <= 10
        new_card = Card.new counter
        $the_deck << new_card
        counter+=1
    end
end

## load up the face cards

def load_face_cards
    counter = 0

    ## loop to load J, Q, K
    while counter < 3
        new_card = Card.new 10
        $the_deck << new_card
        counter+=1
    end
    ## load the ace into the deck
    ace_card = Card.new 11
    $the_deck << ace_card
end

human = Player.new "Tara", 100

# p human.name

borgata = Player.new "Borgata Atlantic City", 10000

# p borgata.name

# deuce = Card.new 2

# p deuce.value

# Load up the deck of cards 4 x 13
#  2 - 10 => face value
# Jack, Queen, King => 10
# Ace => 11

load_face_cards
load_number_cards

p $the_deck



