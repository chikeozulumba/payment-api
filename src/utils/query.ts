export const dateToQuery = (range: string, data: any) => {
  switch (range) {
    case 'month':
      return {
        $group: {
          _id: {
            year: { $year: "$updatedAt" },
            month: { $month: "$updatedAt" },
          },
          data,
          count: { $sum: 1 }
        }
      }
    case 'day':
      return {
        $group: {
          _id: {
            year: { $year: "$updatedAt" },
            month: { $month: "$updatedAt" },
            day: { $dayOfMonth: "$updatedAt" },
          },
          data,
          count: { $sum: 1 }
        }
      }
    default:
      return {
        $group: {
          _id: {
            year: { $year: "$updatedAt" },
          },
          data,
          count: { $sum: 1 }
        }
      }
  }
}