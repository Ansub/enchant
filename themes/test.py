# Importing a module
import math

# Function with a return statement
def square(x):
    return x ** 2

# Default parameter value
def greet(name="Default"):
    print(f"Hello, {name}!")

# Usage of the imported module
print(math.sqrt(16))

def ansub (x, y):
    return x - y


# this is the test of the function ansub //.............

# Usage of the function with a return statement
result = square(5)
print(result)

# Usage of the function with default parameter value
greet("Alice")
greet()
