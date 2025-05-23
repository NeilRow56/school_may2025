// TEMPORARY DATA

export const role = 'admin'

export const teachersData = [
  {
    id: 1,
    teacherId: '1234567890',
    name: 'John Doe',
    email: 'john@doe.com',
    photo:
      'https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '1234567890',
    subjects: ['Math', 'Geometry'],
    classes: ['1B', '2A', '3C'],
    isActive: true,
    address: '123 Main St, Anytown, USA'
  },
  {
    id: 2,
    teacherId: '1234567890',
    name: 'Jane Doe',
    email: 'jane@doe.com',
    photo:
      'https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '1234567890',
    subjects: ['Physics', 'Chemistry'],
    classes: ['5A', '4B', '3C'],
    isActive: true,
    address: '123 Main St, Anytown, USA'
  },
  {
    id: 3,
    teacherId: '1234567890',
    name: 'Mike Geller',
    email: 'mike@geller.com',
    photo:
      'https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '1234567890',
    subjects: ['Biology'],
    classes: ['5A', '4B', '3C'],
    isActive: true,
    address: '123 Main St, Anytown, USA'
  },
  {
    id: 4,
    teacherId: '1234567890',
    name: 'Jay French',
    email: 'jay@gmail.com',
    photo:
      'https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '1234567890',
    subjects: ['History'],
    classes: ['5A', '4B', '3C'],
    isActive: true,
    address: '123 Main St, Anytown, USA'
  },
  {
    id: 5,
    teacherId: '1234567890',
    name: 'Jane Smith',
    email: 'jane@gmail.com',
    photo:
      'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '1234567890',
    subjects: ['Music', 'History'],
    classes: ['5A', '4B', '3C'],
    isActive: true,
    address: '123 Main St, Anytown, USA'
  },
  {
    id: 6,
    teacherId: '1234567890',
    name: 'Anna Santiago',
    email: 'anna@gmail.com',
    photo:
      'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '1234567890',
    subjects: ['Physics'],
    classes: ['5A', '4B', '3C'],
    isActive: false,
    address: '123 Main St, Anytown, USA'
  },
  {
    id: 7,
    teacherId: '1234567890',
    name: 'Allen Black',
    email: 'allen@black.com',
    photo:
      'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '1234567890',
    subjects: ['English', 'Spanish'],
    classes: ['5A', '4B', '3C'],
    isActive: true,
    address: '123 Main St, Anytown, USA'
  },
  {
    id: 8,
    teacherId: '1234567890',
    name: 'Ophelia Castro',
    email: 'ophelia@castro.com',
    photo:
      'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '1234567890',
    subjects: ['Math', 'Geometry'],
    classes: ['5A', '4B', '3C'],
    isActive: false,
    address: '123 Main St, Anytown, USA'
  },
  {
    id: 9,
    teacherId: '1234567890',
    name: 'Derek Briggs',
    email: 'derek@briggs.com',
    photo:
      'https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '1234567890',
    subjects: ['Literature', 'English'],
    classes: ['5A', '4B', '3C'],
    isActive: true,
    address: '123 Main St, Anytown, USA'
  },
  {
    id: 10,
    teacherId: '1234567890',
    name: 'John Glover',
    email: 'john@glover.com',
    photo:
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '1234567890',
    subjects: ['Biology'],
    classes: ['5A', '4B', '3C'],
    isActive: true,
    address: '123 Main St, Anytown, USA'
  }
]

// YOU SHOULD CHANGE THE DATES OF THE EVENTS TO THE CURRENT DATE TO SEE THE EVENTS ON THE CALENDAR
export const calendarEvents = [
  {
    title: 'Math',
    allDay: false,
    start: new Date('2025-05-19T08:30:00.000'),
    end: new Date('2025-05-19T10:30:00.000')
  },
  {
    title: 'English',
    allDay: false,
    start: new Date('2025-05-19T11:00:00.000'),
    end: new Date('2025-05-19T12:30:00.000')
  },
  {
    title: 'My Event',
    allDay: false,
    start: new Date('2025-05-19T14:00:00.000'),
    end: new Date('2025-05-19T15:30:00.000')
  },
  {
    title: 'Biology',
    allDay: false,
    start: new Date('2025-05-20T09:00:00.000'),
    end: new Date('2025-05-20T12:30:00.000')
  },
  {
    title: 'Physics',
    allDay: false,
    start: new Date('2025-05-20T14:00:00.000'),
    end: new Date('2025-05-20T14:30:00.000')
  },
  {
    title: 'Chemistry',
    allDay: false,
    start: new Date('2025-05-20T15:00:00.000'),
    end: new Date('2025-05-20T16:30:00.000')
  },
  {
    title: 'History',
    allDay: false,
    start: new Date('2025-05-21T08:00:00.000'),
    end: new Date('2025-05-21T10:30:00.000')
  },
  {
    title: 'English',
    allDay: false,
    start: new Date('2025-05-21T13:00:00.000'),
    end: new Date('2025-05-21T15:30:00.000')
  },
  {
    title: 'Biology',
    allDay: false,
    start: new Date('2025-05-22T13:00:00.000'),
    end: new Date('2025-05-22T15:30:00.000')
  },
  {
    title: 'History',
    allDay: false,
    start: new Date('2025-05-23T10:00:00.000'),
    end: new Date('2025-05-23T12:30:00.000')
  },
  {
    title: 'French',
    allDay: false,
    start: new Date('2025-05-23T13:00:00.000'),
    end: new Date('2025-05-23T16:30:00.000')
  }
]
