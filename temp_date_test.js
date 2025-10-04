
// Simulate the old problematic way
const oldDate = new Date('2025-03-02');
console.log('Old way - Date string:', oldDate.toDateString(), '| Day of week:', oldDate.getDay());

// Simulate the new corrected way
const [year, month, day] = '2025-03-02'.split('-').map(Number);
const newDate = new Date(year, month - 1, day);
console.log('New way - Date parts:', newDate.toDateString(), '| Day of week:', newDate.getDay());

// Day 0=Sunday, 1=Monday, etc.
console.log('Expected: Sunday (day 0)');
