### Week 18 Day 2 Homework

## Blackjack game in Ruby

$the_deck = []

class Player 
    attr_accessor :hand, :bankroll, :name, :score

    def initialize name, bankroll
        @name = name
        @hand = []
        @bankroll = bankroll
        @score = 0
    end

    def calc_my_score
        ## iterate through your hand and sum up the value of the cards
        @hand.each { |card| @score = @score + card.value }
        return @score
    end
    
    def update_bankroll amount
        @bankroll = @bankroll+= amount
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

# human = Player.new "Tara", 100

# p human.name

borgata = Player.new "Borgata Atlantic City", 10000

# p borgata.name

# deuce = Card.new 2

# p deuce.value

# Load up the deck of cards 4 x 13
#  2 - 10 => face value
# Jack, Queen, King => 10
# Ace => 11

## this isn't the most elegant way to load 52 cards into the deck.

$counter = 0

while $counter < 4

    load_face_cards
    load_number_cards
    $counter+=1
end

p $the_deck.length


### basic game play.

# 1. shuffle the deck in place



# 2. Display game rules and prompt user for a name

# 3.  Shuffle the deck and let user know it's been shuffled.

# 4.  Player cards chosen.  Show on screen

# 5.  House cards chosen.  Show on screen

# 6.  Display winner - show total.

puts "Welcome to Blackjack!"

puts "What's your name?"

username = gets

puts "Hello #{username.chomp}!  Thanks for joining us at #{borgata.name}"

puts "Dealing you in with $100"

humanPlayer = Player.new username.chomp, 100


puts "We're playing with one deck.  No Jokers.  Aces High.  You've got $100.  Shuffling the Cards..."

$the_deck.shuffle!(random: Random.new(45))

# function to pop two cards off the deck and give them to the player.

def select_cards
    player_hand = []
    prng = Random.new
    
    ## prng.rand => generate random index used to select a card.
    ## slice! => remove the card at that index from the 
    card1 = $the_deck.slice!(prng.rand($the_deck.length))
    card2 = $the_deck.slice!(prng.rand($the_deck.length-1))

    ## push both cards into the player's hand
    player_hand << card1
    player_hand << card2
    
    return player_hand

end

humanPlayer.hand = select_cards
# p "Human Player has #{humanPlayer.hand}"

borgata.hand = select_cards

# p humanPlayer.calc_my_score
# p "Human Player has #{humanPlayer.score}"

# p borgata.calc_my_score

# p "House has #{borgata.score}"

p $the_deck.length


## determine the winner of this round.

## sum > 21 => that player automatically loses
## sum == 21 => that player automatically wins
## else which sum is < 21 && higher than the other player's => you win.
## this 
def determine_and_reward_winner house, player
#     ## input are two numbers
#     ## compare the sums.
# score1 = the house
p "inside determine winner and Borgata's score is #{house.score}"
p "inside determine winner and Player's score is #{player.score}"

score1 = house.score
score2 = player.score



    if score1 > 21
        
            puts "House goes bust, Player Wins!"
            player.update_bankroll 10
            house.update_bankroll -10
           
        
    elsif score2 > 21
        
            puts "Player goes bust, House Wins"
            house.update_bankroll 10
            player.update_bankroll -10
         
        
    elsif score1 == score2
            
                puts "Push - No one wins"
                
            
    elsif score1 > score2
        
            puts "House Wins!"
            house.update_bankroll 10
            player.update_bankroll -10
        
    elsif score2 > score1
        
            puts "Player Wins!"
            player.update_bankroll 10
            house.update_bankroll -10
        
        
    end

end

player_score = humanPlayer.calc_my_score
borgata_score = borgata.calc_my_score

determine_and_reward_winner borgata, humanPlayer

p "Current bankrolls:  The House: #{borgata.bankroll}  #{humanPlayer.name}: #{humanPlayer.bankroll}"


    









