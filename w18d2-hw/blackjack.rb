### Week 18 Day 2 Homework

## Blackjack game in Ruby

## some global variables
$the_deck = []  # holds the cards we'll be playing with

$num_rounds = 0 # number of rounds / hands dealt

$bet_amount = 10

class Player 
    attr_accessor :hand, :bankroll, :name, :score

    def initialize name, bankroll
        @name = name
        @hand = []
        @bankroll = bankroll
        @score = 0
    end

    def calc_my_score
        ## reset the score to zero since the hands are not cumulative
        @score = 0
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

## this is used to deal each player cards.
def deal_cards
    player_hand = []
    prng = Random.new
    
    ## prng.rand => generate random index used to select a card.
    ## slice! => remove the card at that index from the deck
    ## rand cannot accept zero as an argument.
    ## if we're down to the last two cards, just return them
    
    if $the_deck.length == 2
        card1 = $the_deck.slice!(1)
        card2 = $the_deck.slice!(0)
    else
        card1 = $the_deck.slice!(prng.rand($the_deck.length))
        card2 = $the_deck.slice!(prng.rand($the_deck.length-1))
    end
    ## push both cards into the player's hand
    player_hand << card1
    player_hand << card2
    
    return player_hand

end

## determine the winner of this round.

## sum > 21 => that player automatically loses
## sum == 21 => that player automatically wins
## else which sum is < 21 && higher than the other player's => you win.
## this 
def determine_and_reward_winner house, player
    #     ## input are two numbers
    #     ## compare the sums.
    # score1 = the house
    # p "inside determine winner and Borgata's score is #{house.score}"
    # p "inside determine winner and Player's score is #{player.score}"
    
    score1 = house.score
    score2 = player.score
    
    
    
        if score1 > 21
            
                puts "House goes bust, Player Wins!"
                player.update_bankroll $bet_amount
                house.update_bankroll -$bet_amount
               
            
        elsif score2 > 21
            
                puts "Player goes bust, House Wins"
                house.update_bankroll $bet_amount
                player.update_bankroll -$bet_amount
             
            
        elsif score1 == score2
                
                    puts "Push - No one wins"
                    
                
        elsif score1 > score2
            
                puts "House Wins!"
                house.update_bankroll $bet_amount
                player.update_bankroll -$bet_amount
            
        elsif score2 > score1
            
                puts "Player Wins!"
                player.update_bankroll $bet_amount
                house.update_bankroll -$bet_amount
            
            
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



borgata = Player.new "Borgata Atlantic City", 10000



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


### basic game play.

# 1. shuffle the deck in place



# 2. Display game rules and prompt user for a name

# 3.  Shuffle the deck and let user know it's been shuffled.

# 4.  Player cards chosen.  Show on screen

# 5.  House cards chosen.  Show on screen

# 6.  Display winner - show total.


## Begin the first game.

puts "Welcome to Blackjack!"

puts "What's your name?"

username = gets.chomp

puts "Hello #{username}!  Thanks for joining us at #{borgata.name}!  Should we deal you in (d) or you folding? (q)."

userchoice = gets.chomp

while userchoice == "d" do

    ## if we're not in the first hand, don't reset the player's bankroll

    if ($num_rounds == 0 )
        puts %q{
            We're playing with one deck.  
            No Jokers.  
            Default bet is $10 unless you select another amount
            You'll start off with $100
            Shuffling the Cards...
            Good Luck!
        
        }

        ## only shuffle when the game first begins.
        $the_deck.shuffle!(random: Random.new(45))

        humanPlayer = Player.new username.chomp, 100
        
    end

    if ($the_deck.length == 4)
        p "Dealer change after this hand"
        $last_round = true
    end

    puts "What would you like to bet?  Whole numbers only please."
$bet_amount = gets.chomp.to_i

puts "Betting #{$bet_amount} on this hand."


humanPlayer.hand = deal_cards

p "#{humanPlayer.name} you have #{humanPlayer.hand[0].value} and #{humanPlayer.hand[1].value}"

borgata.hand = deal_cards

p "The House has #{borgata.hand[0].value} and #{borgata.hand[1].value}"



player_score = humanPlayer.calc_my_score
borgata_score = borgata.calc_my_score

determine_and_reward_winner borgata, humanPlayer

p "Current bankrolls:  The House: #{borgata.bankroll}  #{humanPlayer.name}: #{humanPlayer.bankroll}"


    if (!$last_round && humanPlayer.bankroll > 0)

        p "Should we deal you in (d) or you folding? (q). (c) to check your balance."   

        $num_rounds+= 1

        userchoice = gets.chomp
    elsif $last_round
        p "Dealer change please come back soon!"
        userchoice ="q"
    elsif humanPlayer.bankroll <= 0
        p "#{humanPlayer.name}, you've gone bust.  Nearest ATM is next to the restrooms."
        userchoice = "q"
    end
end    

## Possible additions here
# 1.  Show # hands played
# 2.  Show player's final bankroll

p "Thanks for playing!"







