const now = new Date()
const events = [
  {
    id: 1,
    type: 'holiday',
    title: 'سال نو',
    start: new Date(2024, 2, 20),
    end: new Date(2024, 3, 2)
  },
  {
    id: 4,
    title: 'Some Event',
    start: new Date(2024, 3, 9, 0, 0, 0),
    end: new Date(2024, 3, 9, 0, 0, 0),
    allDay: true
  },
  {
    id: 5,
    title: 'Conference',
    start: new Date(2024, 3, 11),
    end: new Date(2024, 3, 13),
    desc: 'Big conference for important people'
  },
  {
    id: 10,
    title: 'Dinner',
    start: new Date(2024, 3, 12, 20, 0, 0, 0),
    end: new Date(2024, 3, 12, 21, 0, 0, 0)
  },
  {
    id: 11,
    title: 'Planning Meeting with Paige',
    start: new Date(2024, 3, 13, 8, 0, 0),
    end: new Date(2024, 3, 13, 10, 30, 0)
  },
  {
    id: 11.1,
    title: 'Inconvenient Conference Call',
    start: new Date(2024, 3, 13, 9, 30, 0),
    end: new Date(2024, 3, 13, 12, 0, 0)
  },
  {
    id: 12,
    title: 'Late Night Event',
    start: new Date(2024, 3, 17, 19, 30, 0),
    end: new Date(2024, 3, 18, 2, 0, 0)
  },
  {
    id: 12.5,
    title: 'Late Same Night Event',
    start: new Date(2024, 3, 17, 19, 30, 0),
    end: new Date(2024, 3, 17, 23, 30, 0)
  },
  {
    id: 13,
    type: 'customize',
    title: 'سفارشی شده',
    start: new Date(2024, 6, 13),
    end: new Date(2024, 6, 13)
  },
  {
    id: 13,
    type: 'holiday',
    title: 'tasoa',
    start: new Date(2024, 6, 15),
    end: new Date(2024, 6, 15)
  },
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()),
    end: new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate())
  }
]

export default events
