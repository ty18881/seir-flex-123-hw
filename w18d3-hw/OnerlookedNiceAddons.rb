# Ruby enumerable diagnostic

# Feel free to work on the problems in any order

words = %w(We the People of the United States, in Order to form a more
perfect Union, establish Justice, insure domestic
Tranquility, provide for the common defence, promote the
general Welfare, and secure the Blessings of Liberty to
ourselves and our Posterity, do ordain and establish this
Constitution for the United States of America.)

even_nums = [0, 2, 4, 6]
odd_nums = [1, 5, 7, 9]
mixed_nums = [0, 2, 4, 7]


  # Question 1
  # Write ruby code to return the longest entry in the list supplied (words)
  # Assume each entry in the list implements a length method that returns
  # a Fixnum.
  def longest(list)
    list.max {|a,b| a.chomp(",").length <=> b.chomp(",").length}
  end

  # longest(["today", "Monday", "Wednesday"])

  p longest(words)

  # Question 2
  # Write ruby code to return the sum 1 to 99 (expect 4950)
  # (i.e. apply the `+` operator).
  # Assume each entry implements a `+` method.
  # def sum(list)
  #   sum = 0
  #   list.each{ |item| sum = sum + item}
  #   return sum
  # end

  # sum(1..3)

  # sum(1..99)

  # Question 3
  # Write ruby code that returns true if some of the entries
  # in a list of numbers are odd (test the three given number arrays)
  # def some_odd(numbers)
  #   numbers.any? { |number| number.odd? }
  # end

  # # some_odd(even_nums)

  # # some_odd(odd_nums)

  # some_odd(mixed_nums)

  # Question 4
  # Write ruby code that returns true if every entry in a
  # list of numbers are even (test the three given number arrays)
  # def every_even(numbers)
  #   is_even = true
  #   numbers.each{|number| is_even = number.even? }
  #   return is_even
  # end

  # every_even(mixed_nums)

  # every_even(even_nums)

  # every_even(odd_nums)


  # Question 5
  # Write ruby code that returns an array with all of the
  # entries from a list of words capitalized (i.e. 'foo' becomes 'Foo').
#   def transform(words)
#     # Your code goes here
#     words.map{|word| word.capitalize()}
#   end

# transform(words)
  # Question 6
  # Return to the previous day's labs and hw and work on any of the hungry for more questions
