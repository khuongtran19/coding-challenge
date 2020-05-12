def reverse(x):
    if x >= 2**31-1 or x <= -2**31:
        return 0
    else:
        if x < 0:
            temp = str(x)[1:]
            temp2 = temp[::-1]
            res = "-" + (temp2)
        else:
            res = str(x)[::-1]
        if int(res) >= 2**31-1 or int(res) <= -2**31:
            return 0
        else:
            return int(res)

def test():
    assert reverse(120) == 21, "Give integer 120 should be 21 after reversed"

if __name__ == "__main__":
    test()
    print("Everything passed")