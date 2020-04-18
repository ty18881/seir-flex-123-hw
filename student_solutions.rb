## Week 18, Day 2 Homework
## Ruby Basics

# Hello World

# p "Hello World"

# adjective = "Big Bad"

# p "Hello #{adjective} World"

# hello_world = "Hello World"

# p hello_world.upcase()

## Nums Array and Enumerables

nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]

# 1. Print one of each value in the array
# p nums.uniq

## NUMBER 2
# p nums.push(5)

# p nums.pop()

# p nums.shift()

# p nums.unshift(5)

# p "My array has #{nums.length} elements"

## NUMBER 3
# p nums.include?(8)

## NUMBER 4
# p nums.find_all { |num| num > 10}

## NUMBER 5
# p nums.all? { |num| num > 0}

## NUMBER 6
#  p nums.any? { |num| num%8 == 0 } # - this returns true for some reason....

## NUMBER 7
# p nums.count{ |num| num > 4}

## NUMBER 8
# products = []
# nums.each_with_index { |num, index| 
#     products << num * index 
# }
# p products

## NUMBER 9

# p nums.find { |num| num % 5 == 0 &&  num % 7 == 0 && num > 0} 

## NUMBER 10

# p nums.find_index { |num| num % 5 == 0 &&  num % 7 == 0 && num > 0}

## NUMBER 11

# p nums.first(3)

## NUMBER 12

# p nums.last(5)

## NUMBER 13

# p nums.group_by { |num| num % 3}

## NUMBER 14 - minmax
# p nums.minmax { |a,b| a <=> b}

## NUMBER 15

# p nums.reject { |num|  num % 3 == 0 }

## NUMBER 16

# p nums.select { |num| num % 5 == 0 && num != 0}

### Color Array

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

# print random color from the array
# p colors.sample

# print the array in reverse

#p colors.reverse

# colors.each { |color| p color.upcase}

### Methods

## Find Area
# def find_area height, width
#     height * width
# end

# p find_area 10, 10

# p find_area 10, 20

## Multiple Each By Five
# nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]

# def multiply_each_by_five arr
#     products = []
#     arr.each { |num| 
#         products << num * 5    
#     }
#     products
# end

# p multiply_each_by_five nums

### Methods with Hashes

book = {
  title: 'The Great Gatsby',
  author: 'F Scott Fitzgerald',
  year: 1925,
  price: 10
}

lamp = {
  type: 'reading',
  brand: 'Ikea',
  price: 25
}

table = {
  type: 'bed side',
  brand: 'Crate & Barrel',
  color: 'birch',
  price: 50
}

## Print Price

def print_price input_hash

    input_hash[:price]
end

# p print_price table

# p print_price book

## sum the prices from two hashes

def print_item_sums hash_1, hash_2

    the_sum = 0
    the_sum = hash_1[:price] + hash_2[:price]

end

# p print_item_sums table, book

### Solving Problems with Ruby

## Euler problem 1

def euler_1 max_num
    sum = 0

    counter = 0

    while counter < max_num 
        if ( counter % 3 == 0 || counter % 5 == 0)
            sum = sum + counter
        end
        counter +=1
    end
    sum
end

# p euler_1 10

# p euler_1 100

# p euler_1 1000

### Primes

## Check Prime - Return true if input is prime, return false otherwise

def check_prime? input_num

    result = (2..Math.sqrt(input_num)).none? { |num| (input_num % num).zero?}

end

# p check_prime? 7

# p check_prime? 10

# p check_prime? 17

## Get Primes - print the prime numbers up to the given number

def get_primes input_num
    counter = 1
    primes =[]

    while counter <= input_num
        if (check_prime? counter)
            primes << counter
        end
        counter+=1
    end
    return primes
end

p get_primes 19

p get_primes 20