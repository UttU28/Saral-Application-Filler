/**
 * Utility functions for text handling
 */

const MONTHS_SHORT = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// Format a value for display inside the button while keeping the raw value
// (e.g. "03/2019" still gets sent to the backend, but we show "Mar 2019").
export const formatButtonText = (value: string): string => {
  if (!value) return '';

  // For password, return asterisks
  if (value.includes('password') || value.includes('Password')) {
    return '*'.repeat(8);
  }

  // Show MM/YYYY as "Mon YYYY" while preserving original value for typing
  const monthYearMatch = value.match(/^(\d{2})\/(\d{4})$/);
  if (monthYearMatch) {
    const monthIndex = parseInt(monthYearMatch[1], 10) - 1;
    const year = monthYearMatch[2];
    if (monthIndex >= 0 && monthIndex < 12) {
      return `${MONTHS_SHORT[monthIndex]} ${year}`;
    }
  }

  // For long text (like descriptions), truncate with ellipsis
  if (value.length > 40) {
    return value.substring(0, 40) + '...';
  }

  return value;
};