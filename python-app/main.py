import calendar

print('Welcome to the calendar app!\n')

year = int(input('Enter the year: '))
month = int(input('Enter the month: '))

print(calendar.month(year, month))
