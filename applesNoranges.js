/* Complete the function countApplesAndOranges, where:

s = Starting point 
t = Ending location

a = Location of the Apple tree 
m = Number of apples that fell from the tree
apples =  Distance at which each apple falls from the tree

b = Location of the Orange tree
n = Number of oranges that fell from the tree 
oranges = Distance at which each orange falls from the tree
 
 input: st = 7, 11
        ab = 5, 15
        mn = 3, 2
        mmm = -2, 2, 1
        nn = 5, -6
 
 output: 1
         1
 
 
The first apple falls at position 5 - 2 = 3. 
Does 3 go into the range of 7 - 11 = no

The second apple falls at position 5 + 2 = 7.
Does 7 go into the range of 7 - 11 = yes

The third apple falls at position 5 + 1 = 6. 
Does 6 go into the range of 7 - 11 = no

The first orange falls at position 15 + 5 = 20.
Does 20 go into the range of 7 - 11 = no

The second orange falls at position 15 - 6 = 9.
Does 9 go into the range of 7 - 11 = yes

Only one fruit (the second apple) falls within the region between 7 and 11, so we print 1 as our first line of output. 
Only the second orange falls within the region between 7 and 11, so we print 1 as our second line of output. 

*/
