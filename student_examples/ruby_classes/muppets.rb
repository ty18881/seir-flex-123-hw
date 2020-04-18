### Week 19 Day 1 
### Class and Inheritance Practice


class Muppet
    COLORS = ["red", "yellow", "orange", "purple", "green", "blue"]
    attr_reader :color
    def initialize name
        @name = name
        p "This muppet is called #{name}!"
        @color = COLORS.sample
    end

    def honk
    
        p "#{@name} is making a honking sound!"
    end

    def flail
        p "#{@name} is flailing its arms!"
    end
end

class Bird
    SPECIES = ['Belted Kingfisher', 'Yellow-Billed Cuckoo', 'White-Cheeked Pintail', 'Cinnamon Teal', 'Lesser Scaup', 'Bufflehead', 'Common Goldeneye', 'Fulvous Whistling Duck', 'Hooded Merganser', 'White-Winged Scoter', 'Chimney Swift', 'Rufous Hummingbird', 'Chuck-Wills-Widow', 'Whip-Poor-Will', 'Albatross', 'Ruddy Turnstone', 'Piping Plover', 'Killdeer', 'Laughing Gull', 'Marbled Godwit', 'Least Tern', 'New World Warbler']
    def initialize adjective, name
        @name = name
        @adjective = adjective
        p "#{name} is a(n) #{adjective} bird!"
        @species = SPECIES.sample
    end

    def hungry
        p "#{@name} wants some regurgitated worms!"
    end

    def fly
        p "Flap! #{@name} is taking flight!"
    end
end

# tara = Muppet.new "Tara"

# tara.honk

# tara.flail

# my_pet = Bird.new "red", "Squawk"

# my_pet.hungry

# my_pet.fly

class Dessert 
    def initialize name, sugar_content
        @name = name
        @sugar_content = sugar_content
    end

    def eat
        p "Yum! #{@name} is soooo delicious!"
    end

end

# cake = Dessert.new "Red Velvet", "Astronomical"

# cake.eat

### Inheritance

class Pie < Dessert

end

class DeepFriedDessert < Dessert
    def initialize name, sugar_content
        super
    end
    def eat
        p "Yum! This #{@name} is sooo... ack! Ugh! *heart-attack*"
    end
end

class IceCream < Dessert
    def initialize name, sugar_content
        @toppings = ["oreos", "chocolate chips"]
        super
    end
    
end

# friedTwinkie = DeepFriedDessert.new "Twinkie", "Over the Top"

# friedTwinkie.eat

# mocha_chip = IceCream.new  "Mocha Chip", "Pretty Damn High"

# mocha_chip.eat

### The Universe

## Part One
class Universe
    
    def initialize item1, item2, item3
        @expanding = true
        @conservation = true
        @crunched = false
        @items = []
        @items << item1
        @items << item2
        @items << item3

    end

    def see_all_things
        p @items
    end

    def create new_item
        if (@conservation)
            ## this is not quite right.  Will always remove item in the same position of the array
            @items.pop
            @items << new_item
        end
    end

    def check_density
        if (@items.length > 10)
            @expanding = false
        end
    end

    def energy_conservation
        (if @items.uniq! == nil)
            @conservation = false
        end
    end
end

# MilkyWay = Universe.new "planets", "dust", "stars"

# MilkyWay.see_all_things

# MilkyWay.create "Pluto"

# MilkyWay.see_all_things

## Universe Part Two

##  https://git.generalassemb.ly/ira/SEIR-FLEX-123/blob/master/unit_4/w18d3/student_labs/afternoon.md

# 8 - add mosquitos to our existing universe

# 9 - Create a parallel universe

parallel = Universe.new "Pluto", "Mars", "Saturn"

# 10 - Create check_density method - changes conservation to false if items.length > 10

