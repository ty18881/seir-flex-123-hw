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

p nums.select { |num| num % 5 == 0 && num != 0}